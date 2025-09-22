import {
  Hero,
  UseCases,
  HowItWorks,
  Solutions,
  GettingStarted,
} from "./sections";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="px-5">
        <UseCases />
        <HowItWorks />
        <Solutions />
        <GettingStarted />
      </div>
    </div>
  );
}
