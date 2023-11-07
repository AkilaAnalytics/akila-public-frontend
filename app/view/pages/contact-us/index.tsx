import { ContactUsBg } from '~/view/assets'
import { BannerImage } from '~/view/components'
import { Form } from './components'
import type { LinksFunction } from '@remix-run/node' // or cloudflare/deno

export default function ContactUsPage() {
  return (
    <div>
      <BannerImage image={ContactUsBg} title="Contact Us" />
      <Form />
    </div>
  )
}
