import { RegisterOptions } from 'react-hook-form';

export const validationStandard: RegisterOptions = {
  required: { value: true, message: 'Required' },
};

export const validationEmail: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: 'Invalid email address',
  },
};

export const validationPhone: RegisterOptions = {
  required: { value: true, message: 'Required' },
  pattern: {
    value: /^[0-9]+$/,
    message: 'Must be 10 digit numbers',
  },
  minLength: { value: 10, message: 'Must be 10 digits' },
  maxLength: { value: 10, message: 'Must be 10 digits' },
};

const dateAdjuster = (num_days: number) => {
  const today = new Date();
  const maxDate = new Date().setDate(today.getDate() + num_days);
  return new Date(maxDate).toLocaleDateString();
};

export const validationDate: RegisterOptions = {
  required: { value: true, message: 'Required' },
  min: { value: dateAdjuster(-1), message: 'Must be a future date' },
  max: { value: dateAdjuster(21), message: 'Cannot be past 21 days in the future.' },
};

/**
 * Brief description of the function here.
 * @summary formats phone number to (###) ###-####
 * @param {String} phoneNumber - 10 digit phone number string
 * @return {String} returns formatted phone number (###) ###-####
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const areaCode = phoneNumber.slice(0, 3);
  const prefix = phoneNumber.slice(3, 6);
  const lineNumber = phoneNumber.slice(6, 10);
  return `(${areaCode}) ${prefix}-${lineNumber}`;
};
