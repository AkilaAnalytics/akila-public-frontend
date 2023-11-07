import { PrivateEquityPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Private Equity  | Use Case' },
    { property: 'og:title', content: 'Private Equity Use Case' },
    {
      name: 'description',
      content:
        'Discover how Akila Analytics enhances private equity decisions with state-of-the-art data science and analytics capabilities.'
    }
  ]
}

export default function PrivateEquity() {
  return <PrivateEquityPage />
}
