import { reactive } from "vue";
import useValidators from "./useValidators";
const { isEmpty, minLength, isEmail } = useValidators();

const errors = reactive({});

export default function useSignupForm() {
  const emailValidators = [
    isEmpty,
    isEmail,
    (fieldKey: string, fieldValue: string) =>
      minLength(fieldKey, fieldValue, 4),
  ];

  const validateEmailField = (fieldKey: string, fieldValue: string) => {
    for (let validator of emailValidators) {
      const err = validator(fieldKey, fieldValue);

      if (err) {
        errors[fieldKey] = err;
        return;
      }
    }
    errors[fieldKey] = "";
  };

  const validateNameField = (fieldKey: string, fieldValue: string) => {
    errors[fieldKey] = !fieldValue
      ? isEmpty(fieldKey, fieldValue)
      : minLength(fieldKey, fieldValue, 4);
  };

  return {
    errors,
    validateNameField,
    validateEmailField,
  };
}
