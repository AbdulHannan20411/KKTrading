import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionThree from "@/components/About/AboutSectionThree";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Get in Touch with KK Trading Company",
    description: "Get in Touch, Where Every Connection Begins with a Spark: Your Message, Our Symphony! 🔥",
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Courses with Brief Intro"
        description="Unveiling Our Story: Crafting Moments, Inspiring Journeys, and Building Bridges – Welcome to Our World."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree/>
    </>
  );
};

export default AboutPage;
