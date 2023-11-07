import { RecurringJobsPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function RecurringJobs() {
  return <RecurringJobsPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Recurring Jobs' },
    { property: 'og:title', content: 'Recurring Jobs' },
    {
      name: 'description',
      content:
        'Schedule and manage recurring jobs efficiently with Akila Analytics. Ensure your data workflows run smoothly and consistently.'
    }
  ]
}
