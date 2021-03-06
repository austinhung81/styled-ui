export const ensureArray = (...args) => {
  if (args.length === 0) { // no args, return []
    return [];
  }
  if (args.length === 1) { // single argument
    if (args[0] === undefined || args[0] === null) { // undefined or null, return []
      return [];
    }
    return [].concat(args[0]);
  }
  // return array with copy of all arguments
  return [].concat(args);
};

export const ensureBoolean = (value, defaultValue = false) => {
  if (value === undefined || value === null) {
    return Boolean(defaultValue);
  }

  return (typeof value === 'boolean') ? value : Boolean(value);
};

export const ensureString = (value, defaultValue = '') => {
  if (value === undefined || value === null) {
    return String(defaultValue);
  }

  return (typeof value === 'string') ? value : String(value);
};

export const ensureNumber = (value, defaultValue = 0) => {
  if (value === undefined || value === null) {
    return Number(defaultValue);
  }

  return (typeof value === 'number') ? value : Number(value);
};

export const ensureFiniteNumber = (value, defaultValue = 0) => {
  value = ensureNumber(value);

  return Number.isFinite(value) ? value : defaultValue;
};

export const ensurePositiveNumber = (value, minimumValue = 0) => {
  // In comparison to the global isFinite() function, the Number.isFinite() method doesn't forcibly convert the parameter to a number.
  if (!Number.isFinite(minimumValue) || (minimumValue < 0)) {
    minimumValue = 0;
  }
  return Math.max(Number(value) || 0, minimumValue);
};
