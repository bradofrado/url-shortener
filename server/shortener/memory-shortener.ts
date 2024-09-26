import randomstring from 'randomstring';
import { Shortener } from './types';
import { isValidUrl } from '../../utils/utils';

/**
 * A shortener that stores the urls in memory
 */
export class MemoryShortener implements Shortener {
  private urls: { [shortUrl: string]: string } = {};

  private generateRandomSlug(): string {
    const slug = randomstring.generate(6);
    //If the generated url is not unique, try it again
    if (slug in this.urls) {
      return this.generateRandomSlug();
    }

    return slug;
  }

  /**
   * Generates a unique short url and stores the mapping in memory
   * @param url The url to shorten
   * @returns The generated short url
   */
  public async generateUniqueSlug({
    url,
    slug,
  }: {
    url: string;
    slug?: string;
  }): Promise<string> {
    if (!isValidUrl(url)) {
      throw new Error('Invalid url ' + url);
    }

    const shortUrl = slug ?? this.generateRandomSlug();

    if (!shortUrl) {
      throw new Error('Must specify a slug');
    }

    if (shortUrl in this.urls) {
      throw new Error(`Slug ${shortUrl} already exists`);
    }

    this.urls[shortUrl] = url;

    return shortUrl;
  }

  public async getUrlFromSlug(shortUrl: string): Promise<string | null> {
    return this.urls[shortUrl] || null;
  }
}
