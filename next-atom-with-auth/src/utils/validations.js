export const required = value => (value ? undefined : "The field is required");

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
  value && value.length < min
    ? `Must be at least ${min} characters`
    : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const maxValue = max => value =>
  value && value > min ? `Must be at ${min} or less` : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;

export const phone = value =>
  value && !/^(0|62|\+62)[0-9]{9,}$/.test(value)
    ? "Invalid phone number"
    : undefined;
