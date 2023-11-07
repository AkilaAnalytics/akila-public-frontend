import { TalkToSalesPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function TalkToSales() {
  return <TalkToSalesPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Talk to Sales' },
    { property: 'og:title', content: 'Talk to Sales' },
    {
      name: 'description',
      content:
        'Interested in Akila Analytics? Talk to our sales team to learn how we can transform your business analytics journey.'
    }
  ]
}
