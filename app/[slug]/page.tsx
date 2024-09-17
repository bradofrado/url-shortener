import { redirect } from "next/navigation"
import { getUrlFromSlug } from "../actions"

async function SlugPage({params: {slug}}: {params: {slug: string}}) {
    const url = await getUrlFromSlug(slug)
    if (url) {
        redirect(url)
    }
    
    return <div>
        Cannot redirect to the url
    </div>
}

export default SlugPage