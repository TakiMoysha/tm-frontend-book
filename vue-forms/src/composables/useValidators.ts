
export default function useValidators() {
  const isEmail = (fieldKey: string, fieldValue: string) => {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return !re.test(fieldValue)
      ? `The ${fieldKey} field must be a valid email address`
      : "";
  };
  const isEmpty = (fieldkey: string, fieldValue: string) => {
    return !fieldValue ? "The " + fieldkey + " field is required" : "";
  };
  const minLength = (fieldKey: string, fieldValue: string, min: number) => {
    return fieldValue.length < min
      ? `The ${fieldKey} field must be atleast ${min} characters long`
      : "";
  };
  return { isEmpty, minLength, isEmail };
}
