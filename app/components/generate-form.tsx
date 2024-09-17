'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/form';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/input';
import { Button } from '@/components/button';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { urlSchema } from '@/utils/utils';

const generateFormSchema = z.object({
  url: urlSchema,
});
type GenerateFormData = z.infer<typeof generateFormSchema>;

interface GenerateFormProps {
  generateShortUrl: (url: string) => Promise<string>;
}
export const GenerateForm: React.FunctionComponent<GenerateFormProps> = ({
  generateShortUrl,
}) => {
  const [shortUrl, setShortUrl] = useState<string | null>(null);

  const form = useForm<GenerateFormData>({
    resolver: zodResolver(generateFormSchema),
    defaultValues: {
      url: '',
    },
  });
  const onSubmit = (data: GenerateFormData) => {
    generateShortUrl(data.url)
      .then((shortUrl) => {
        setShortUrl(shortUrl);
      })
      .catch((err) => {
        form.setError('url', {message: err.message})
      });
  };
  return (
    <Form {...form}>
      <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name='url'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Generate Short Url</FormLabel>
              <FormControl>
                <Input placeholder='https://google.com' {...field} />
              </FormControl>
              <FormDescription>
                Enter a URL and get a shortened version of it.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='space-y-3'>
          <Button type='submit' disabled={!form.formState.isValid} loading={form.formState.isLoading}>Generate</Button>
          {shortUrl ? <p>Generated URL: <a className="text-sm" href={shortUrl} target="_blank">{shortUrl}</a></p> : null}
        </div>
      </form>
    </Form>
  );
};
