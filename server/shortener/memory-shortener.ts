import randomstring from 'randomstring';
import { Shortener } from './types';
import { isValidUrl } from '../../utils/utils';

/**
 * A shortener that stores the urls in memory
 */
export class MemoryShortener implements Shortener {
  private urls: { [shortUrl: string]: string } = {};

  /**
   * Generates a unique short url and stores the mapping in memory
   * @param url The url to shorten
   * @returns The generated short url
   */
  public async generateUniqueSlug(url: string): Promise<string> {
    if (!isValidUrl(url)) {
      throw new Error('Invalid url ' + url);
    }

    const shortUrl = randomstring.generate(6);

    //If the generated url is not unique, try it again
    if (shortUrl in this.urls) {
      return this.generateUniqueSlug(url);
    }

    this.urls[shortUrl] = url;

    return shortUrl;
  }

  public async getUrlFromSlug(shortUrl: string): Promise<string | null> {
    return this.urls[shortUrl] || null;
  }
}
