import { useState } from "react";
import { useFetcher } from "react-router-dom";

import { Button, StatusMessageFetcher } from "~/view/components";

export default function TalkToSalesForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",

    businessName: "",
    phone: "",
    jobTitle: "",
    department: "",
  });
  const fetcher = useFetcher();

  async function onClick(e) {
    e.preventDefault();
    window.grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute(
        "6LcC2TEqAAAAAKI2-z_RqDp3bGXuikASgRr-IaDr",
        { action: "LOGIN" }
      );
      console.log(token, "<<< token");

      // Create a FormData object and append the form values and the token
      const formData = new FormData(e.target.form);
      formData.append("g-recaptcha-response", token);

      // Use fetcher.submit to send the form data
      fetcher.submit(formData, { method: "post", action: "/api/contact-us" });
    });
  }

  return (
    <div className="w-[100%]  ">
      <div className="flex w-full flex-col items-center justify-center bg-[#191919] p-[40px]">
        <fetcher.Form
          className="flex min-h-[492px] w-full flex-col"
          action="/api/contact-us"
          method="post"
        >
          <h2 className="mb-[40px] font-sans text-[24px] font-semibold leading-8">
            Request a call from Akila’s sales representative.
          </h2>
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Company"
            name="company"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            className="mb-[24px] w-full bg-[#030912] p-[16px] placeholder:text-[#8B8B8B]"
          />
          <input type="hidden" name="address" value="" />
          <input type="hidden" name="source" value="TalkToSalesForm" />

          <button
            className="mt-[8px] min-h-[60px] w-full bg-red-500 bg-gradient-to-r from-linkText to-turqoise"
            onClick={onClick}
          >
            Submit
          </button>
        </fetcher.Form>
        {fetcher.data && (
          <StatusMessageFetcher
            fetcher={fetcher}
            successMessage="Thank you for the message. A sales representative will reach out shortly."
            errorMessage="There was an unexpected erorr receiving your message. Please try reaching out again."
          />
        )}
      </div>
    </div>
  );
}
