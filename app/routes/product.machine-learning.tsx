import { MachineLearningPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function MachineLearning() {
  return <MachineLearningPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Machine Learning' },
    { property: 'og:title', content: 'Machine Learning' },
    {
      name: 'description',
      content:
        'Build and deploy machine learning models with Akila Analytics. No coding required, yet powerful and flexible.'
    }
  ]
}
