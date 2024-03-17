import { ProductManagerPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default ProductManagerPage

export const meta: MetaFunction = () => {
  const title = 'Product Manager Position'
  const description =
    'Learn how product managers are leveraging Akila to drive new insights'
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
