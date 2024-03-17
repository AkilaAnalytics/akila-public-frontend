import { RecurringJobsPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default RecurringJobsPage

export const meta: MetaFunction = () => {
  const title = 'Recurring Jobs'
  const description =
    'Schedule and manage recurring jobs efficiently with Akila Analytics. Ensure your data workflows run smoothly and consistently.'
  return [
    { title: title },
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
