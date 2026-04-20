export const toCapitalized = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};

export const toCamelCase = (id: string): string => {
  return id
    .replace(/^@/, '') // Remove the leading @
    .split('-') // Split into ['global', 'primary', 'background']
    .filter(Boolean) // Remove empty strings if there are double dashes
    .map((word, index) => {
      // Keep the first word lowercase, capitalize the rest
      if (index === 0) return word.toLowerCase();
      return toCapitalized(word);
    })
    .join('');
};
