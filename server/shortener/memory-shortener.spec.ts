import {beforeEach, describe, expect, it} from 'vitest'
import { MemoryShortener } from './memory-shortener'

let shortener = new MemoryShortener()

describe('MemoryShortener', () => {
    beforeEach(() => {
        //Reset the shortener before each test
        shortener = new MemoryShortener()
    })

    it('should generate a url with 6 characters', async () => {
        const url = 'https://google.com'
        const shortUrl = await shortener.generateUniqueShortUrl(url)
        expect(shortUrl.length).toBe(6)
    })

    it('should generate a unique url', async () => {
        const url = 'https://google.com'
        const numUrlsToTest = 1000
        for (let i = 0; i < numUrlsToTest; i++) {
            await shortener.generateUniqueShortUrl(url)
        }

        expect(Object.keys(shortener['urls']).length).toBe(numUrlsToTest)
    })

    it('should throw error when generating an invalid url', async () => {
        const url = 'http:invalid-url'
        await expect(shortener.generateUniqueShortUrl(url)).rejects.toThrow()
    })
})