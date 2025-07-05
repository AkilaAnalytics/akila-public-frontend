import {
  CareerPageBg,
  CareersPageAdministration,
  CareersPageClientService,
  CareersPageDevelopment,
  CareersPageInternships,
  CareersPageMarketing,
  CareersPageSales,
  CultureAndEvents,
  EmployeeBenefits,
  WorkHardPlayHarder,
} from "~/view/assets";
import {
  CenterAlignHeadingDescription,
  GettingStartedSection,
} from "~/view/components";

import {
  CareerBanner,
  TeamsAndRolesSection,
  TeamsAndRolesCard,
  LifeAtAkilaSection,
  LifeAtAkilaCard,
} from "./components";

export default function Careers() {
  return (
    <>
      <CareerBanner
        image={CareerPageBg}
        title="See how Akila is pushing boundaries"
      />
      <TeamsAndRolesSection
        heading="Teams and roles"
        description="We're always on the lookout for talented, driven individuals who share our vision and are eager to make a meaningful impact. If you're excited about no-code data science solutions and want to be part of a team that's shaping the future of the industry, we'd love to hear from you."
        cardsDescription="View open positions in the following departments:"
      >
        <div className="flex gap-[30px]">
          <TeamsAndRolesCard cardName="Sales" icon={CareersPageSales} />
          <TeamsAndRolesCard cardName="Marketing" icon={CareersPageMarketing} />
          <TeamsAndRolesCard
            cardName="Development"
            icon={CareersPageDevelopment}
          />
          <TeamsAndRolesCard
            cardName="Client Service"
            icon={CareersPageClientService}
          />
          <TeamsAndRolesCard
            cardName="Administration"
            icon={CareersPageAdministration}
          />
          <TeamsAndRolesCard
            cardName="Internships"
            icon={CareersPageInternships}
          />
        </div>
      </TeamsAndRolesSection>
      <CenterAlignHeadingDescription
        heading="Why Akila"
        description="Do you want to play an essential role in building best-in-class no-code data science solutions that revolutionize the industry?  Help shape the future of data science, empowering businesses to make data-driven decisions and drive growth."
      />
      <LifeAtAkilaSection>
        <div className="flex flex-col items-center gap-[30px] md:flex-row">
          <LifeAtAkilaCard
            heading="Culture and events"
            description="Check out some of our recent events, and see why even our kids are jealous of where we work."
            img={CultureAndEvents}
          />
          <LifeAtAkilaCard
            heading="Employee benefits"
            description="We hire the best. We expect a lot. And we make sure you are fully compensated for your work. We designed our employee benefit program to rival–and exceed–that of global technology organizations."
            img={EmployeeBenefits}
          />
          <LifeAtAkilaCard
            heading="Work hard, play harder"
            description=",Here at Akila, we work hard, but we play even harder. Check out some of our recent events, and see why even our kids are jealous of where we work."
            img={WorkHardPlayHarder}
          />
        </div>
      </LifeAtAkilaSection>
      <GettingStartedSection />
    </>
  );
}
