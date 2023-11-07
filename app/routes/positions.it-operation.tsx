import { ItOperationPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function DevOps() {
  return <ItOperationPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'IT Operation Position' },
    { property: 'og:title', content: 'IT Operation Position' },
    {
      name: 'description',
      content:
        'Join Akila Analytics as part of our IT operations team to help maintain and optimize our no-code data science platform.'
    }
  ]
}
