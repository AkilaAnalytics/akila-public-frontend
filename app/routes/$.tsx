export { MissingPage as default } from "~/view/pages";

export const meta = () => {
  return [
    { title: "Uh Oh | Missing Page" },
    {
      property: "og:title",
      content: "Uh Oh | Missing Page",
    },
    {
      name: "description",
      content: "We're not sure how you got here but this page is missing",
    },
  ];
};
