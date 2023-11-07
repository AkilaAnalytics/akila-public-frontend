import { OverviewPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function Overview() {
  return <OverviewPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Overview' },
    {
      property: 'og:title',
      content: 'Overview'
    },
    {
      name: 'description',
      content:
        'Akila Analytics is data science and businesss analytics platform, using generative and predictive AI with broad ecosystem interoperability to ensure the success of your initiatives every step of the way.'
    }
  ]
}
