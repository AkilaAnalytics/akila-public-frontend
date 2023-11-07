import { EndToEndSolutionsPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function EndToEndSolutions() {
  return <EndToEndSolutionsPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'End-to-End Solutions - Akila Analytics Platform' },
    {
      property: 'og:title',
      content: 'End-to-End Solutions - Akila Analytics Platform'
    },
    {
      name: 'description',
      content:
        'Discover our comprehensive solutions that cover your data needs from start to finish.'
    }
  ]
}
