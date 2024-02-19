import { ContactUsBg, doubleChevronRight } from '~/view/assets'
import { BannerImage } from '~/view/components'
import { Form } from './components'
import type { LinksFunction } from '@remix-run/node' // or cloudflare/deno

export default function ContactUsPage() {
  const bulletPoints = [
    {
      title: 'Automate Your Existing Workflows',
      description:
        'Streamline complex data processes with our intuitive automation tools. Reduce manual effort and minimize errors to enhance efficiency and productivity in your data analysis.'
    },
    {
      title: 'Grow Your Business by Leveraging Cutting-Edge Analytics',
      description:
        "Utilize advanced analytics to uncover hidden insights and drive strategic decision-making. Our platform's predictive capabilities can help you stay ahead of market trends and capitalize on growth opportunities."
    },
    {
      title: 'Get Maximum Value From Existing Investments',
      description:
        'Maximize the ROI from your current assets with our smart analytics. Our app integrates seamlessly with your existing systems to enhance their performance without additional investments.'
    },
    {
      title: 'Simplify Data Science for Better Decision Making',
      description:
        'Our no-code solution demystifies data science, making it accessible to everyone in your organization. Empower your team to make informed decisions quickly, with easy-to-understand analytics and visualizations.'
    }
  ]

  return (
    <div>
      {/*<BannerImage image={ContactUsBg} title="Contact Us" /> */}
      <div className="contact-us-gradient gap-5 p-10">
        <div className="flex-1">
          <Form />
        </div>
        <div className="flex-1 rounded-md p-10">
          <h1>Learn how Akila Analytics can help your business.</h1>
          One of our product experts will provide a platform demonstration
          tailored to your needs.
          <br />
          <br />
          <div className="flex flex-col flex-wrap md:flex-row">
            {' '}
            {/* This container will wrap its children. */}
            {bulletPoints.map((point, index) => (
              <div key={index} className="min-w-[50%] flex-1">
                {/* Each bullet point takes up at least half the width of its container. */}
                <div className="mt-5 flex items-center">
                  <img
                    src={doubleChevronRight}
                    alt="double chevron pointing right"
                    height="50"
                    width="50"
                  />
                  <span className="button-gradient rounded-full p-2 font-bold">
                    {point.title}
                  </span>
                </div>
                <p className="ml-[58px]">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
