import { generateShortUrl } from "./actions";
import { GenerateForm } from "./generate-form";


export default function Home() {
  return (
    <div>
      <GenerateForm generateShortUrl={generateShortUrl} />
    </div>
  );
}
