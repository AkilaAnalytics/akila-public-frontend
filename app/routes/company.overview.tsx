import { OverviewPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Overview() {
  return <OverviewPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Overview: No-Code Data Science' },
    {
      property: 'og:title',
      content: 'Overview: No-Code Data Science'
    },
    {
      name: 'description',
      content:
        'Akila Analytics is data science and businesss analytics platform, using generative and predictive AI with broad ecosystem interoperability to ensure the success of your initiatives every step of the way.'
    }
  ]
}
