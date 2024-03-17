import { PrivateEquityPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default PrivateEquityPage

export const meta: MetaFunction = () => {
  const title = 'Private Equity  | Use Case'
  const description =
    'Discover how Akila Analytics enhances private equity decisions with state-of-the-art data science and analytics capabilities.'
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
