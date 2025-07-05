import { Children } from 'react'
import { CenterAlignHeadingDescription } from '~/view/components'

export default function ExperiencePerksSection({
  heading,
  description,
  children
}) {
  return (
    <div className="container_class">
      <div className="my-[50px]">
        <CenterAlignHeadingDescription
          heading={heading}
          description={description}
        />
        {children}
      </div>
    </div>
  )
}
