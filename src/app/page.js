import AmazingFeatures from "@/components/AmazingFeatures";
import Banner from "@/components/Banner";
import ContactSection from "@/components/ContactSection";
import ProcessFlow from "@/components/ProcessFlow";
import ServiceCards from "@/components/ServiceCards";

import React from "react";

const homepage = () => {
  return (
    <div>
      <Banner />
      <ProcessFlow />
      <AmazingFeatures />
      <ServiceCards />
      <ContactSection />
    </div>
  );
};

export default homepage;
