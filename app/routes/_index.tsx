export { default } from '~/view/pages/home'

import { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Home - Akila Analytics' },
    { property: 'og:title', content: 'Home - Akila Analytics' },
    {
      name: 'description',
      content:
        'Akila Analytics powers exceptional business outcomes with a no-code data science platform, streamlining the path to advanced analytics and data-driven insights.'
    }
  ]
}
