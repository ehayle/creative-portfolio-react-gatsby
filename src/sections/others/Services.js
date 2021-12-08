import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Section, Title, Text } from "../../components/Core";

import Contact from "../landing1/Contact";



const Services = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Services
            </Title>
            <Row>
            <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Branding
                </Title>
                <Text variant="p">
                  <i><b>"Strong branding empowers your business and impacts critical areas such as trust, credibility, and customer loyalty. “</b></i>
                <br />
                <br />
                I design unique and identifiable visuals that will serve as Branding and Visual Identity assets. My goal with each brand is to deliver work that meets beyond expectations, is impactful, and is lasting. To achieve this goal our conversations are significant in order to better understand your needs and expectations.
                <br />
                <br />
                

                Whether you are launching a new business, rebranding, or growing an existing brand, I offer you the ability to enhance your impact.
                <br />
                <br />
                <b>#BrandResearch #CompetitiveAnalysis #ComparativeAnalysis #Branding #LogoDesign #Typography #ColorPallet #Stationary</b>
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Web Design
                </Title>
                <Text variant="p">
                Each day there is an increase in online users surfing the interwebs looking for products and services. Your website is the backbone for your business and could be the first touchpoint for a potential new customer or client.Everyday there is an increase in online users surfing the internet looking for products and services. Your website is the backbone for your business and could be the first touchpoint for a potential new customer or client.
                <br />
                <br />
                Having a custom-designed website means enhanced user interaction through optimized performance and tailored design that caters to your brand's visual identity.
                <br />
                <br />
                <b>#CustomWebsiteTemplate #ResponsiveDesign #MobileFriendly #CapturesYourAudience</b>
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Marketing
                </Title>
                <Text variant="p">
                There has been an explosion of digital media over the recent decade. People are now discovering brands and formulating opinions across multiple media platforms. With such a variety of broadcasting sources available, I create platform-specific marketing material and consider every touchpoint for your targeted audience.
                <br />
                <br />
                <b>#PrintCampaign #DigitalCampaign #Brochures #eBrochures #Flyer #Poster #Magazine #SocialMedia </b>
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Web Development
                </Title>
                <Text variant="p">
                  Why is it important to choose a trusted developer?
                <br />
                <br />
                  <i><b>“A great website can be an engine of business growth. A poor site can inflict damage on your brand.”</b></i>
                <br />
                <br />
                <b>#Consulting #TechnicalDirection #UIDesign #WebDevelopment #Craft-CMS-Solutions</b>
                </Text>
              </Col>
          </Row>
        </Container>

        <Contact />
      </Section>
    </>
  );
};

export default Services;
