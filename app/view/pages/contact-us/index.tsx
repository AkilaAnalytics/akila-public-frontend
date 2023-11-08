import { ContactUsBg } from '~/view/assets'
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
      <BannerImage image={ContactUsBg} title="Contact Us" />
      <div className="flex gap-5 p-10">
        <div className="flex-1">
          <Form />
        </div>
        <div className="flex-1 rounded-md border-[1px] border-gray-600 p-10">
          <h2>Learn how Akila Analytics can help your business.</h2>
          One of our product experts will provide a platform demonstration
          tailored to your needs.
          <br />
          <br />
          <ul>
            {bulletPoints.map((point, index) => (
              <div>
                <div key={index} className="mt-5 flex list-none items-center">
                  {/* Here's your SVG check icon */}
                  <svg
                    className="mr-1 mt-2 -rotate-90 fill-current text-periwinkle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    width="20"
                    height="20">
                    <path d="M0 0h20v20H0V0z" fill="none" />
                    <path d="M7 10l5 5 5-5h-3V5H10v5H7z" />
                  </svg>
                  <span className="font-bold">{point.title}</span>
                </div>
                {/* Left align the description with the title. 28 pixels because that's the margin plus width of the svg icon */}
                <p className="ml-[28px]">{point.description}</p>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
