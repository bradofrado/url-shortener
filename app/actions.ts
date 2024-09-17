'use server'

import { shortener } from "@/server/instances"

export const generateShortUrl = async (url: string): Promise<string> => {
    const slug = await shortener.generateUniqueSlug(url)

    return `http://localhost:3000/${slug}`
}

export const getUrlFromSlug = async (slug: string): Promise<string | null> => {
    const url = await shortener.getUrlFromSlug(slug)
    return url
}