const calcRating = (rating) => {
  if (Number.isInteger(rating)) {
    return `${rating * 2}0%`;
  }
  return `${(rating * 2) * 10}%`;
};
const adaptToClient = (offer) => {
  const toCamel = (str) => (
    str.replace(/([-_][a-z])/ig, (x) => (
      x.toUpperCase()
        .replace('-', '')
        .replace('_', '')
    ))
  );

  const isArray = (arr) => Array.isArray(arr);

  const isObject = (obj) => obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';

  const keysToCamel = (obj) => {
    if (isObject(obj)) {
      const newObj = {};

      Object.keys(obj).forEach((key) => newObj[toCamel(key)] = keysToCamel(obj[key]));

      return newObj;
    }

    if (isArray(obj)) {
      return obj.map((item) => keysToCamel(item));
    }

    return obj;
  };

  return keysToCamel(offer);
};

export {calcRating, adaptToClient};
