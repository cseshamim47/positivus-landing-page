import React from "react";
import SearchEngine from "./Services/SearchEngine";
import Advertising from "./Services/Advertising";
import SocialMarketing from "./Services/SocialMarketing";
import EmailMarketing from "./Services/EmailMarketing";
import ContentCreation from "./Services/ContentCreation";
import Analytics from "./Services/Analytics";
import ServiceFooter from "./Services/ServiceFooter";
import Heading from "./dynamic/Heading";




const Services = () => {
  return (
    <div className="space-y-8">
      <Heading title="Services" description="At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:" />

      <div className="grid sm:grid-cols-2 gap-6">
        <SearchEngine />
        <Advertising />
        <SocialMarketing />
        <EmailMarketing />
        <ContentCreation />
        <Analytics />
      </div>
      <ServiceFooter />
    </div>
  );
};

export default Services;
