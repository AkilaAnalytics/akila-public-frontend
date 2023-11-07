import { ProductManagerPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function DevOps() {
  return <ProductManagerPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Product Manager Position' },
    { property: 'og:title', content: 'Product Manager Position' },
    {
      name: 'description',
      content:
        'Akila Analytics is on the lookout for innovative product managers to drive our product to new heights.'
    }
  ]
}
