import Card from './components/Card'

interface ICardData {
  title: string
  price: string
  description: string
  keyPoints: string[]
  buttonTex: string
  link: string
}

export default function PricingPage() {
  return (
    <div>
      <div>
        <div className="space-y-16 p-16 sm:px-32">
          <h1 className="text-2xl font-semibold text-white sm:text-3xl md:text-5xl md:font-medium">
            Platform and Plans
          </h1>

          <div className="mx-auto flex flex-col justify-center gap-10 md:flex-row">
            {priceData?.map((data: ICardData) => (
              <Card
                key={data.title}
                title={data.title}
                price={data.price}
                description={data.description}
                buttonText={data.buttonTex}
                keyPoints={data.keyPoints}
                path={data.link}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// create a tyepscript interface for priceData

const priceData = [
  {
    title: 'Free',
    price: '0',
    description:
      'Get started with Akila Analytics for free. Upload data, run jobs, and get insights from our no-code platform.',
    keyPoints: [
      'Upload data',
      'Run data processing jobs',
      'Run machine learning jobs',
      'Schedule recurring jobs',
      'Access advanced analytics tools'
    ],
    buttonTex: 'Try for free',
    link: 'https://app.akilaanalytics.com/auth/login'
  },
  {
    title: 'Professional',
    price: 'Contact Us',
    description:
      'Great for start-ups and small businesses that do not already have mature cloud-based solutions.',
    keyPoints: [
      'Start processing data today',
      'Easy configuration',
      'Zero maintenance',
      'Unlimited Processing'
    ],
    buttonTex: 'Contact Us',
    link: '/contact-us'
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    description:
      'Take your data analysis to the next level with the full suite of Akila Analytics features, plus expert support and enhanced security.',
    keyPoints: ['Everything in the Professional package'],
    buttonTex: 'Contact Us',
    link: '/contact-us'
  }
]
