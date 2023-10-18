import { ContactUsBg } from '~/view/assets'
import { BannerImage } from '~/view/components'
import { Form } from './components'

export default function ContactUsPage() {
  return (
    <div>
      <BannerImage image={ContactUsBg} title="Contact Us" />
      <Form />
    </div>
  )
}
