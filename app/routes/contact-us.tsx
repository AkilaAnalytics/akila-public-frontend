import ContactUsPage from '~/view/pages/contact-us'
import { MetaFunction } from '@remix-run/node'

export const loader = () => {
  return {
    PHONE_NUMBER: process.env.PHONE_NUMBER,
    SUPPORT_EMAIL: process.env.SUPPORT_EMAIL
  }
}

export default ContactUsPage

export const contact: MetaFunction = () => {
  const title = 'Contact Us'
  const description =
    'Reach out to Akila Analytics. We’re here to answer any questions you might have as you expand your data analytics capabilities.'
  return [
    { title: 'Contact Us' },
    { property: 'og:title', content: title },
    {
      name: 'description',
      content: description
    },
    {
      name: 'og:description',
      content: description
    }
  ]
}
