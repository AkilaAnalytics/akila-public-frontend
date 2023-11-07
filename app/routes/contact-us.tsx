import ContactUsPage from '~/view/pages/contact-us'
import { MetaFunction } from '@remix-run/node'

export const loader = () => {
  return {
    PHONE_NUMBER: process.env.PHONE_NUMBER
  }
}

export default function ContactUs() {
  return <ContactUsPage />
}

export const contact: MetaFunction = () => {
  return [
    { title: 'Contact Us' },
    { property: 'og:title', content: 'Contact Us' },
    {
      name: 'description',
      content:
        'Reach out to Akila Analytics. We’re here to help and answer any questions you might have about our no-code data science platform.'
    }
  ]
}
