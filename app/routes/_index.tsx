import HomePage from '~/view/pages/home'
import { MetaFunction } from '@remix-run/node'

export default function Home() {
  return <HomePage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Home - Akila Analytics' },
    { property: 'og:title', content: 'Home - Akila Analytics' },
    {
      name: 'description',
      content: 'Akila Analytics - Your No Code Data Science Platform.'
    }
  ]
}
