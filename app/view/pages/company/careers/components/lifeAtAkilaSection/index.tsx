import { CenterAlignHeadingDescription } from '~/view/components'

export default function LifeAtAkilaSection({ children }) {
  return (
    <div className="container_class">
      <div className="mb-[50px] mt-[100px]">
        <CenterAlignHeadingDescription
          heading="Life at Akila"
          description="We’re not shy about working hard. If you want to make a difference and push boundaries then reach out. The formalities you’re accustomed to aren’t necessary.  We’re looking for smart people that can make a difference, not a well formatted resume with buzzwords and structured sentences that are designed to get through HR’s software.  If you’re interested, send us an email at careers@AkilaAnalytics.com. 

        Really, please don’t attach a resume - we dislike reading them as much as you dislike writing them.  We also understand you’re probably applying to a lot of places.  Simply write a few sentences about why you’re interested and why you’d be a good fit at Akila.  "
        />
        {children}
      </div>
    </div>
  )
}
