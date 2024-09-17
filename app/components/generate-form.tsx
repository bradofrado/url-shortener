'use client'

import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const generateFormSchema = z.object({
    url: z.string().url()
})
type GenerateFormData = z.infer<typeof generateFormSchema>

interface GenerateFormProps {
    generateShortUrl: (url: string) => Promise<string>
}
export const GenerateForm: React.FunctionComponent<GenerateFormProps> = ({generateShortUrl}) => {
    const [shortUrl, setShortUrl] = useState<string | null>(null)

    const form = useForm<GenerateFormData>({
        resolver: zodResolver(generateFormSchema),
        defaultValues: {
            url: ''
        }
    })
    const onSubmit = (data: GenerateFormData) => {
        generateShortUrl(data.url).then(shortUrl => {
            setShortUrl(shortUrl)
        }).catch(err => {
            console.error(err)
        })
    }
    return <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <FormField
        control={form.control}
        name="url"
        render={({field}) => (
            <FormItem>
                <FormLabel>Generate Short Url</FormLabel>
                <FormControl>
                    <Input placeholder="https://google.com" {...field} />
                </FormControl>
                <FormDescription>Enter a URL to generate a short URL</FormDescription>
                <FormMessage/>
            </FormItem>
        )}
      />
      <Button type="submit">Generate</Button>
      {shortUrl ? <p>{shortUrl}</p> : null}
    </form>
  </Form>
}