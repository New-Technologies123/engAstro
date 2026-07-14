import React from 'react';
import InputMask from 'react-input-mask';
import Styles from './question-form.module.scss';

interface QuestionFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    agreement: boolean;
    privacyAgreement: boolean;
  };
  agreementError: boolean;
  onChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  formData,
  agreementError,
  onChange,
  onSubmit,
}) => {
  const [mask] = React.useState('+7 (999) 999-9999');
  const [errors, setErrors] = React.useState({
    agreement: false,
    privacyAgreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      agreement: !formData.agreement,
      privacyAgreement: !formData.privacyAgreement
    };
    
    setErrors(newErrors);
    
    if (newErrors.agreement || newErrors.privacyAgreement) {
      return;
    }
    
    onSubmit(e);
  };

  const handleCheckboxChange = (field: string, checked: boolean) => {
    onChange(field, checked);
    if (checked) {
      setErrors(prev => ({ ...prev, [field]: false }));
    }
  };

  return (
    <form className={Styles.questionForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={formData.name}
        onChange={e => onChange('name', e.target.value)}
        required
      />

      {/* Container for email and phone in one row */}
      <div className={Styles.contactRow}>
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={e => onChange('email', e.target.value)}
          required
          className={Styles.contactInput}
        />

        <InputMask
          mask={mask}
          value={formData.phone}
          onChange={e => onChange('phone', e.target.value)}
        >
          {(inputProps: any) => (
            <input 
              {...inputProps} 
              type="tel" 
              placeholder="Phone" 
              required 
              className={Styles.contactInput}
            />
          )}
        </InputMask>
      </div>

      <textarea
        placeholder="Your question"
        value={formData.message}
        onChange={e => onChange('message', e.target.value)}
        rows={4}
        required
      />
      
      <div>
        {/* First checkbox - consent to data processing */}
        <div className={Styles.checkboxWrapper}>
          <label className={`${Styles.checkbox} ${errors.agreement ? Styles.error : ''}`}>
            <input
              type="checkbox"
              checked={formData.agreement}
              onChange={e => handleCheckboxChange('agreement', e.target.checked)}
            />
            <span className={Styles.customCheckbox}></span>
            <span className={Styles.checkboxText}>
              I consent to the processing of my 
              <a href="/file/personal_data.pdf" target="_blank">
                personal data
              </a> 
              for the purpose of reviewing my inquiry.
            </span>
          </label>
          {errors.agreement && (
            <div className={Styles.errorText}>
              ⚠️ You must give consent to the processing of personal data
            </div>
          )}
        </div>

        {/* Second checkbox - consent to privacy policy */}
        <div className={Styles.checkboxWrapper}>
          <label className={`${Styles.checkbox} ${errors.privacyAgreement ? Styles.error : ''}`}>
            <input
              type="checkbox"
              checked={formData.privacyAgreement}
              onChange={e => handleCheckboxChange('privacyAgreement', e.target.checked)}
            />
            <span className={Styles.customCheckbox}></span>
            <span className={Styles.checkboxText}>
              I have read the <a href="/file/privacy_policy.pdf" target="_blank">privacy policy</a>.
            </span>
          </label>
          {errors.privacyAgreement && (
            <div className={Styles.errorText}>
              ⚠️ You must confirm that you have read the privacy policy
            </div>
          )}
        </div>
      </div>

      {agreementError && (errors.agreement || errors.privacyAgreement) && (
        <div className={Styles.errorTextGeneral}>
          Please check all required consents
        </div>
      )}

      <button type="submit">Send question</button>
    </form>
  );
};