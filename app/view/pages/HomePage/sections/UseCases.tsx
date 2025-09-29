import { Card, SectionBreak } from "~/view/components";
import {
  customerProfitability,
  marketingAnalytics,
  hospitality,
} from "~/view/assets";

const description =
  "Discover how Akila empowers teams to make faster, smarter, and more confident decisions-from private equity to marketing and beyond.";

export default function UseCases() {
  const cards = [
    {
      title: "Hospitality",
      description:
        "Quickly analyze customer data, identify opportunities, and make data-driven investment decisions.",
      image: hospitality,
    },
    {
      title: "Marketing Analytics",
      description:
        "Analyze trends, identify profitable segments, and develop targeted campaigns for increased ROl.",
      image: marketingAnalytics,
    },
    {
      title: "Customer profitability",
      description:
        "Analyze customer behavior, identify profitable segments, and develop product and service offerings that meet their needs.",
      image: customerProfitability,
    },
  ];
  return (
    <section className="justify-center flex flex-col gap-5" id="use-cases">
      <SectionBreak
        breakText="Case Studies"
        title="Powerful use cases across industries"
        description={description}
      />
      <div className="flex flex-col gap-5 md:flex-row w-full justify-center">
        {cards.map((ele, index) => {
          return (
            <Card
              key={index}
              title={ele.title}
              image={ele.image}
              description={ele.description}
            />
          );
        })}
      </div>
    </section>
  );
}
