/**
 * Determins if the given string is a valid url. A url is valid if it starts with http:// or https://
 * @param url The string to validate
 * @returns true if the string is a valid url, false otherwise
 */
export const isValidUrl = (url: string): boolean => {
    return url.startsWith('http://') || url.startsWith('https://')
}