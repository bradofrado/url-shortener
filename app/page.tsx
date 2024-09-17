import { generateShortUrl } from './actions';
import { GenerateForm } from './components/generate-form';

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className="mx-auto w-full max-w-xl space-y-6">
          <h1 className="text-4xl font-bold text-center">URL Shortener</h1>
          <GenerateForm generateShortUrl={generateShortUrl} />
        </div>
      </div>
    </div>
  );
}
