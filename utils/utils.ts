/**
 * Determins if the given string is a valid url. A url is valid if it starts with http:// or https://
 * @param url The string to validate
 * @returns true if the string is a valid url, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
  return url.startsWith('http://') || url.startsWith('https://');
};

/**
 * Filters out undefined values and joins the rest with a space
 * @param classes The list of classes to join
 * @returns The filtered classes joined with a space
 */
export const cn = (...classes: (string | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
