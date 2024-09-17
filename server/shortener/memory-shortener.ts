import randomstring from 'randomstring'
import { Shortener } from './types'

/**
 * A shortener that stores the urls in memory
 */
export class MemoryShortener implements Shortener {
    private urls: { [shortUrl: string]: string } = {}

    /**
     * Generates a unique short url and stores the mapping in memory
     * @param url The url to shorten
     * @returns The generated short url
     */
    public async generateUniqueShortUrl(url: string): Promise<string> {
        const shortUrl = randomstring.generate(6)

        //If the generated url is not unique, try it again
        if (shortUrl in this.urls) {
            return this.generateUniqueShortUrl(url)
        }

        this.urls[shortUrl] = url

        return shortUrl
    }
}