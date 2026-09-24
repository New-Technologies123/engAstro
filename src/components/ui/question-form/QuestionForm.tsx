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

  onChange: (
    field: string,
    value: string | boolean
  ) => void;

  onSubmit: (
    e: React.FormEvent
  ) => void;
}

export const QuestionForm: React.FC<QuestionFormProps> = ({
  formData,
  agreementError,
  onChange,
  onSubmit,
}) => {
  const mask = '+7 (999) 999-9999';

  const [errors, setErrors] = React.useState({
    agreement: false,
    privacyAgreement: false,
  });

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const newErrors = {
      agreement: !formData.agreement,
      privacyAgreement: !formData.privacyAgreement,
    };

    setErrors(newErrors);

    if (
      newErrors.agreement ||
      newErrors.privacyAgreement
    ) {
      return;
    }

    onSubmit(e);
  };

  const handleCheckboxChange = (
    field:
      | 'agreement'
      | 'privacyAgreement',
    checked: boolean
  ) => {
    onChange(field, checked);

    if (checked) {
      setErrors(prev => ({
        ...prev,
        [field]: false,
      }));
    }
  };

  return (
    <form
      className={Styles.questionForm}
      onSubmit={handleSubmit}
    >

      {/* NAME */}

      <div className={Styles.fieldGroup}>
        <label
          htmlFor="question-name"
          className={Styles.fieldLabel}
        >
          Your name
        </label>

        <input
          id="question-name"
          type="text"
          placeholder="Enter your name"
          value={formData.name}
          onChange={e =>
            onChange(
              'name',
              e.target.value
            )
          }
          required
        />
      </div>


      {/* EMAIL + PHONE */}

      <div className={Styles.contactRow}>

        <div className={Styles.fieldGroup}>
          <label
            htmlFor="question-email"
            className={Styles.fieldLabel}
          >
            Email
          </label>

          <input
            id="question-email"
            type="email"
            placeholder="name@email.com"
            value={formData.email}
            onChange={e =>
              onChange(
                'email',
                e.target.value
              )
            }
            required
            className={Styles.contactInput}
          />
        </div>


        <div className={Styles.fieldGroup}>
          <label
            htmlFor="question-phone"
            className={Styles.fieldLabel}
          >
            Phone
          </label>

          <InputMask
            mask={mask}
            value={formData.phone}
            onChange={e =>
              onChange(
                'phone',
                e.target.value
              )
            }
          >
            {(inputProps: any) => (
              <input
                {...inputProps}
                id="question-phone"
                type="tel"
                placeholder="+7 (___) ___-____"
                required
                className={
                  Styles.contactInput
                }
              />
            )}
          </InputMask>
        </div>

      </div>


      {/* QUESTION */}

      <div className={Styles.fieldGroup}>

        <label
          htmlFor="question-message"
          className={Styles.fieldLabel}
        >
          Your question
        </label>

        <textarea
          id="question-message"
          placeholder="Briefly describe your question or request..."
          value={formData.message}
          onChange={e =>
            onChange(
              'message',
              e.target.value
            )
          }
          rows={4}
          required
        />

      </div>


      {/* CONSENTS */}

      <div className={Styles.agreements}>

        {/* CONSENT 1 */}

        <div className={Styles.checkboxWrapper}>

          <label
            className={`${Styles.checkbox} ${errors.agreement
                ? Styles.error
                : ''
              }`}
          >

            <input
              type="checkbox"
              checked={formData.agreement}
              onChange={e =>
                handleCheckboxChange(
                  'agreement',
                  e.target.checked
                )
              }
            />

            <span
              className={
                Styles.customCheckbox
              }
            />

            <span
              className={
                Styles.checkboxText
              }
            >
              I consent to the{' '}

              <a
                href="/file/personal_data_v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                processing of my personal data
              </a>{' '}

              for the purpose of reviewing my request.
            </span>

          </label>

          {errors.agreement && (
            <div
              className={
                Styles.errorText
              }
            >
              Consent to the processing
              of personal data is required.
            </div>
          )}

        </div>


        {/* CONSENT 2 */}

        <div className={Styles.checkboxWrapper}>

          <label
            className={`${Styles.checkbox} ${errors.privacyAgreement
                ? Styles.error
                : ''
              }`}
          >

            <input
              type="checkbox"
              checked={
                formData.privacyAgreement
              }
              onChange={e =>
                handleCheckboxChange(
                  'privacyAgreement',
                  e.target.checked
                )
              }
            />

            <span
              className={
                Styles.customCheckbox
              }
            />

            <span
              className={
                Styles.checkboxText
              }
            >
              I have read and agree to the{' '}

              <a
                href="/file/privacy_v1.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </span>

          </label>

          {errors.privacyAgreement && (
            <div
              className={
                Styles.errorText
              }
            >
              Please confirm that you have
              read the Privacy Policy.
            </div>
          )}

        </div>

      </div>


      {/* GENERAL ERROR */}

      {agreementError &&
        (errors.agreement ||
          errors.privacyAgreement) && (
          <div
            className={
              Styles.errorTextGeneral
            }
          >
            Please check all required
            consent boxes.
          </div>
        )}


      {/* SUBMIT */}

      <button
        type="submit"
        className={Styles.submitButton}
      >
        <span>Send your question</span>

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M5 12h13M13 6l6 6-6 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

    </form>
  );
};