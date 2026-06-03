<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit();
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Получаем данные из тела запроса
    $json = file_get_contents("php://input");
    $data = json_decode($json, true);
    
    if (!$data) {
        echo json_encode([
            "success" => false,
            "error" => "Invalid data format"
        ]);
        exit();
    }
    
    // Санитизация данных
    $name = htmlspecialchars(trim($data['name'] ?? ''), ENT_QUOTES, 'UTF-8');
    $email = htmlspecialchars(trim($data['email'] ?? ''), ENT_QUOTES, 'UTF-8');
    $phone = htmlspecialchars(trim($data['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
    $messageText = htmlspecialchars(trim($data['message'] ?? ''), ENT_QUOTES, 'UTF-8');
    
    // Проверка обязательных полей
    if (empty($name) || empty($email) || empty($phone) || empty($messageText)) {
        echo json_encode([
            "success" => false,
            "error" => "Please fill in all required fields"
        ]);
        exit();
    }
    
    // Проверка email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "success" => false,
            "error" => "Invalid email format"
        ]);
        exit();
    }
    
    // Проверка согласия
    $agreement = !empty($data['agreement']) && $data['agreement'] === true ? 'YES' : 'NO';
    
    if ($agreement !== 'YES') {
        echo json_encode([
            "success" => false,
            "error" => "Please confirm your consent to the processing of personal data"
        ]);
        exit();
    }
    
    // Метаданные
    $date = gmdate("c");
    $policyVersion = 'v1.0 (from 01.04.2024)';
    $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
    $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? 'unknown';
    
    // Формирование письма
    $message = "New inquiry received:\n\n";
    $message .= "Name: $name\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Message: $messageText\n\n";
    $message .= "---\n";
    $message .= "Consent confirmation: $agreement\n";
    $message .= "Date and time: $date\n";
    $message .= "Privacy policy version: $policyVersion\n";
    $message .= "User IP: $ip\n";
    $message .= "User-Agent: $userAgent\n";
    
    // Настройки отправки
    $to = "nt@tech-new.ru";
    $subject = "=?UTF-8?B?" . base64_encode("New inquiry from website") . "?=";
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";
    $headers .= "From: no-reply@tech-new.ru\r\n";
    $headers .= "Reply-To: $email\r\n";
    
    // Отправка письма
    if (mail($to, $subject, $message, $headers)) {
        echo json_encode([
            "success" => true,
            "message" => "Message sent successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "error" => "Failed to send message. Please try again later."
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        "success" => false,
        "error" => "Invalid request method. Use POST."
    ]);
}
?>