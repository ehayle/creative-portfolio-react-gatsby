import React from "react";
import { Element } from "react-scroll";

import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing1/Hero";
import Video from "../sections/landing1/Video";
import Works from "../sections/landing1/Works";
import Contact from "../sections/landing1/Contact";



 
const IndexPage = () => {

  return (
    <>
    
      <PageWrapper>
        <Video />
        <Hero />
        
        <Element name="works">
          <Works />
        </Element>

        

        <Contact />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
