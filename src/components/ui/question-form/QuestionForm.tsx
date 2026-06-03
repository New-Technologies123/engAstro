import React, { useEffect, useState, useRef } from 'react';
import InputMask from 'react-input-mask';
import Styles from './question-form.module.scss';

interface QuestionFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
  };
  agreementError: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit?: (e: React.FormEvent) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  formData,
  agreementError,
  onChange,
  onSubmit,
}) => {
  const [mask] = useState('+7 (999) 999-9999');
  
  const [validationErrors, setValidationErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });
  
  const [globalErrorMessage, setGlobalErrorMessage] = useState('');
  const [localAgreementError, setLocalAgreementError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const validateForm = () => {
    const errors = {
      name: !formData.name || !formData.name.trim(),
      email: !formData.email || !formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email),
      phone: !formData.phone || !formData.phone.trim() || formData.phone.replace(/\D/g, '').length < 11,
      message: !formData.message || !formData.message.trim(),
    };
    
    setValidationErrors(errors);
    
    // Формируем список полей, которые нужно заполнить
    const emptyFields = [];
    if (errors.name) emptyFields.push('Name');
    if (errors.email) emptyFields.push('mail');
    if (errors.phone) emptyFields.push('phone');
    if (errors.message) emptyFields.push('message');
    
    const isAgreementChecked = formData.agreement === true;
    
    let hasErrors = false;
    
    // Собираем все сообщения об ошибках
    const errorMessages = [];
    
    // Проверяем пустые поля
    if (emptyFields.length > 0) {
      errorMessages.push(`Fill in: ${emptyFields.join(', ')}`);
      hasErrors = true;
    }
    
    // Проверяем чекбокс
    if (!isAgreementChecked) {
      errorMessages.push('Please confirm your consent to the processing of personal data');
      hasErrors = true;
      setLocalAgreementError(true);
    } else {
      setLocalAgreementError(false);
    }
    
    // Показываем все ошибки сразу
    if (hasErrors) {
      setGlobalErrorMessage(errorMessages.join(' • '));
      
      // Таймер для глобального сообщения - 5 секунд
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        // Убираем только глобальное сообщение, но НЕ трогаем ошибку чекбокса
        setGlobalErrorMessage('');
        timerRef.current = null;
      }, 5000);
      
      return false;
    }
    
    // Все поля заполнены и чекбокс отмечен
    setGlobalErrorMessage('');
    setLocalAgreementError(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    return true;
  };

  // Функция для отправки данных на почту
  const sendEmail = async () => {
    setIsSubmitting(true);
    
    try {
      // Отправляем данные на PHP обработчик
      const response = await fetch('/send-question.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          agreement: formData.agreement,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        // Успешная отправка
        setGlobalErrorMessage('✅ Your message has been sent successfully!');
        
        // Таймер для глобального сообщения - 5 секунд
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setGlobalErrorMessage('');
          timerRef.current = null;
        }, 5000);
        
        // Очищаем форму после успешной отправки
        setTimeout(() => {
          onChange('name', '');
          onChange('email', '');
          onChange('phone', '');
          onChange('message', '');
          onChange('agreement', false);
          
          setValidationErrors({
            name: false,
            email: false,
            phone: false,
            message: false,
          });
          setLocalAgreementError(false);
        }, 1000);
        
        // Вызываем внешний onSubmit если он передан
        if (onSubmit) {
          onSubmit(new Event('submit') as any);
        }
      } else {
        // Ошибка отправки
        setGlobalErrorMessage(`❌ Error: ${result.error || 'Failed to send message'}`);
        
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setGlobalErrorMessage('');
          timerRef.current = null;
        }, 5000);
      }
    } catch (error) {
      console.error('Send error:', error);
      setGlobalErrorMessage('❌ Connection error. Please try again later.');
      
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => {
        setGlobalErrorMessage('');
        timerRef.current = null;
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const isValid = validateForm();
    
    if (isValid) {
      await sendEmail();
    }
  };

  const handleFieldChange = (field: string, value: string | boolean) => {
    onChange(field, value);
    
    // Очищаем ошибку для конкретного поля при вводе
    if (validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors(prev => ({ ...prev, [field]: false }));
    }
    
    // Если пользователь меняет чекбокс
    if (field === 'agreement') {
      const isChecked = value as boolean;
      
      // Если пользователь СНЯЛ галочку - показываем ошибку чекбокса (не исчезает)
      if (!isChecked) {
        setLocalAgreementError(true);
        // Показываем глобальное сообщение с таймером 5 секунд
        setGlobalErrorMessage('Please confirm your consent to the processing of personal data');
        
        // Очищаем старый таймер и устанавливаем новый для глобального сообщения
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setGlobalErrorMessage('');
          timerRef.current = null;
        }, 5000);
      } 
      // Если пользователь ПОСТАВИЛ галочку - скрываем ошибку чекбокса
      else {
        setLocalAgreementError(false);
        
        // Проверяем, есть ли другие ошибки полей
        const hasOtherErrors = validationErrors.name || validationErrors.email || 
                               validationErrors.phone || validationErrors.message;
        
        if (!hasOtherErrors) {
          // Очищаем глобальное сообщение, если нет других ошибок
          setGlobalErrorMessage('');
          if (timerRef.current) {
            clearTimeout(timerRef.current);
            timerRef.current = null;
          }
        } else {
          // Если есть другие ошибки, обновляем глобальное сообщение (убираем ошибку чекбокса)
          const errorMessages = [];
          if (validationErrors.name) errorMessages.push('Fill in: Name');
          if (validationErrors.email) errorMessages.push('mail');
          if (validationErrors.phone) errorMessages.push('phone');
          if (validationErrors.message) errorMessages.push('message');
          
          if (errorMessages.length > 0) {
            setGlobalErrorMessage(errorMessages.join(' • '));
            
            // Перезапускаем таймер для нового сообщения
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }
            timerRef.current = setTimeout(() => {
              setGlobalErrorMessage('');
              timerRef.current = null;
            }, 5000);
          } else {
            setGlobalErrorMessage('');
          }
        }
      }
    }
    
    // Очищаем ошибки полей, если пользователь начал исправлять
    if (field !== 'agreement') {
      // Проверяем, все ли поля теперь заполнены
      const allFieldsFilled = 
        (field === 'name' ? value && value.toString().trim() : formData.name?.trim()) &&
        (field === 'email' ? value && value.toString().trim() : formData.email?.trim()) &&
        (field === 'phone' ? value && value.toString().trim() : formData.phone?.trim()) &&
        (field === 'message' ? value && value.toString().trim() : formData.message?.trim());
      
      const currentAgreement = formData.agreement;
      
      // Если все поля заполнены И чекбокс отмечен - убираем все ошибки
      if (allFieldsFilled && currentAgreement === true) {
        setGlobalErrorMessage('');
        setLocalAgreementError(false);
        setValidationErrors({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
        if (timerRef.current) {
          clearTimeout(timerRef.current);
          timerRef.current = null;
        }
      }
      // Если все поля заполнены, но чекбокс не отмечен - показываем только ошибку чекбокса
      else if (allFieldsFilled && currentAgreement !== true) {
        setValidationErrors({
          name: false,
          email: false,
          phone: false,
          message: false,
        });
        setGlobalErrorMessage('Please confirm your consent to the processing of personal data');
        setLocalAgreementError(true);
        
        // Таймер для глобального сообщения
        if (timerRef.current) {
          clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
          setGlobalErrorMessage('');
          timerRef.current = null;
        }, 5000);
      }
    }
  };

  // Очищаем таймер при размонтировании
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const shouldShowAgreementError = agreementError || localAgreementError;

  return (
    <form className={Styles.questionForm} onSubmit={handleSubmit} noValidate>
      {/* Глобальное сообщение об ошибке/успехе - исчезает через 5 секунд */}
      {globalErrorMessage && (
        <div className={`${Styles.globalError} ${globalErrorMessage.includes('successfully') ? Styles.success : ''}`}>
          <span className={Styles.globalErrorIcon}>
            {globalErrorMessage.includes('successfully') ? '✅' : '⚠️'}
          </span>
          <span className={Styles.globalErrorText}>{globalErrorMessage}</span>
        </div>
      )}

      <input
        type="text"
        placeholder="Name"
        value={formData.name || ''}
        onChange={e => handleFieldChange('name', e.target.value)}
        className={validationErrors.name ? Styles.errorInput : ''}
        disabled={isSubmitting}
      />

      <input
        type="email"
        placeholder="Email"
        value={formData.email || ''}
        onChange={e => handleFieldChange('email', e.target.value)}
        className={validationErrors.email ? Styles.errorInput : ''}
        disabled={isSubmitting}
      />

      <InputMask
        mask={mask}
        value={formData.phone || ''}
        onChange={e => handleFieldChange('phone', e.target.value)}
        disabled={isSubmitting}
      >
        {(inputProps: any) => (
          <input 
            {...inputProps} 
            type="tel" 
            placeholder="Phone"
            className={validationErrors.phone ? Styles.errorInput : ''}
          />
        )}
      </InputMask>

      <textarea
        placeholder="Message"
        value={formData.message || ''}
        onChange={e => handleFieldChange('message', e.target.value)}
        rows={4}
        className={validationErrors.message ? Styles.errorInput : ''}
        disabled={isSubmitting}
      />

      <label
        className={`${Styles.checkbox} ${
          shouldShowAgreementError ? Styles.error : ''
        }`}
      >
        <input
          type="checkbox"
          checked={formData.agreement || false}
          onChange={e => handleFieldChange('agreement', e.target.checked)}
          disabled={isSubmitting}
        />

        <span className={Styles.customCheckbox}></span>

        <span className={Styles.checkboxText}>
          I consent to the processing of my personal data for the purpose of reviewing me request. I have read and understood the
          <a href="/privacy" target="_blank">Privacy Policy</a>.
        </span>
      </label>

      {/* Сообщение об ошибке для чекбокса - НЕ ИСЧЕЗАЕТ, пока пользователь не отметит */}
      {shouldShowAgreementError && (
        <div className={Styles.errorText}>
          ⚠️ Please confirm your consent to the processing of personal data
        </div>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Submit inquiry'}
      </button>
    </form>
  );
};