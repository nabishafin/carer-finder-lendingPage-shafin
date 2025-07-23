import AmazingFeatures from "@/components/AmazingFeatures";
import Banner from "@/components/Banner";
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
    </div>
  );
};

export default homepage;
