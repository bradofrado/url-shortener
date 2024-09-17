'use server'

import { shortener } from "@/server/instances"

export const generateShortUrl = async (url: string): Promise<string> => {
    const slug = await shortener.generateUniqueShortUrl(url)

    return `http://localhost:3000/${slug}`
}