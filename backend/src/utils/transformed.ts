export function getObjectByLanguage<T>(data: T, lang: string) {
  const collectedData = Object.entries(data).reduce((acc, [key, value]) => {
    if (Array.isArray(value)) {
      const isStringArray = value.every((item) => typeof item === 'string');

      if (isStringArray) {
        return [...acc, [key, value]];
      }

      return [...acc, [key, [...getArrayByLanguage(value, lang)]]];
    }

    if (!key.includes('_')) {
      return [...acc, [key, value]];
    }

    if (key.endsWith(`_${lang}`)) {
      return [...acc, [key.split('_')[0], value]];
    }

    return [...acc];
  }, []);

  return Object.fromEntries(collectedData);
}

export function getArrayByLanguage<T>(data: T[], lang: string) {
  const transformedArray = data?.map((item) => {
    return getObjectByLanguage(item, lang);
  }, []);

  return transformedArray;
}
