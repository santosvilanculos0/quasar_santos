export const validateEmail = input => {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    input
  );
};

export const validateStrMin = (input, number) => input.length >= number;
export const validateStrMax = (input, number) => input.length <= number;
