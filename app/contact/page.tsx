import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Get in Touch with KK Trading Company",
  description: "Get in Touch, Where Every Connection Begins with a Spark: Your Message, Our Symphony! 🔥",
};



const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact US"
        description="Get in Touch, Where Every Connection Begins with a Spark: Your Message, Our Symphony! 🔥"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
