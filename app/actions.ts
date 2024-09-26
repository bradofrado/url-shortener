'use server';

import { shortener } from '@/server/instances';
import { Shortener } from '@/server/shortener/types';

export type GenerateShortUrlFunction = Shortener['generateUniqueSlug'];

export const generateShortUrl: GenerateShortUrlFunction = async (
  props
): Promise<string> => {
  const slug = await shortener.generateUniqueSlug(props);

  return `http://localhost:3000/${slug}`;
};

export const getUrlFromSlug = async (slug: string): Promise<string | null> => {
  const url = await shortener.getUrlFromSlug(slug);
  return url;
};
