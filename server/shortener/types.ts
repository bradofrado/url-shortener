/**
 * Interface for the shortener service
 */
export interface Shortener {
    /**
     * Generates a short, unique url for the given url
     * @param url The url to shorten
     * @returns The generated short url
     */
    generateUniqueShortUrl(url: string): Promise<string>
}