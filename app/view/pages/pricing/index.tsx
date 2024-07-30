import Card from './components/Card'

interface ICardData {
  title: string
  price: string
  description: string
  keyPoints: string[]
  buttonText: string
  link: string
}

export default function PricingPage() {
  return (
    <div>
      <div>
        <div className="space-y-16 px-2 md:p-16">
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
                buttonText={data.buttonText}
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
    title: 'Starter',
    price: '500',
    description:
      'Perfect for teams with lower data volumes. We recommend most small companies start with this package.',
    keyPoints: [
      'Upload data',
      'Run data processing jobs',
      'Run machine learning jobs',
      'Schedule recurring jobs',
      'Access advanced analytics tools'
    ],
    buttonText: 'Contact Us',
    link: '/contact-us'
  },
  {
    title: 'Professional',
    price: '2,000 / month',
    description:
      'Great for start-ups and small businesses that do not already have mature cloud-based solutions.',
    keyPoints: [
      'Everything in the Free package',
      'Easy configuration',
      'Zero maintenance',
      'Unlimited Processing'
    ],
    buttonText: 'Contact Us',
    link: '/contact-us'
  },
  {
    title: 'Enterprise',
    price: 'Contact Us',
    description:
      'Take your data analysis to the next level with the full suite of Akila Analytics features, plus expert support and enhanced security.',
    keyPoints: [
      'Everything in the Professional package',
      'Configure Akila in your own cloud environment'
    ],
    buttonText: 'Contact Us',
    link: '/contact-us'
  }
]
