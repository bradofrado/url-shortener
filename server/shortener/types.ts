/**
 * Interface for the shortener service
 */
export interface Shortener {
    /**
     * Generates a short, unique slug for the given url
     * @param url The url to shorten
     * @returns The generated short slug
     */
    generateUniqueSlug(url: string): Promise<string>

    /**
     * Returns the slug for the given url if it was already generated, or null otherwise
     * @param slug The slug associated with this url or null if it was not found
     */
    getUrlFromSlug(slug: string): Promise<string | null>
}