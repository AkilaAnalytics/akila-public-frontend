import { UseCasesPage } from '~/view/pages/enterprise'
import { MetaFunction } from '@remix-run/node'

export default function Security() {
  return <UseCasesPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Platform Security' },
    { property: 'og:title', content: 'Platform Security' },
    {
      name: 'description',
      content:
        'Understand the security measures Akila Analytics implements to keep your data safe and secure.'
    }
  ]
}
