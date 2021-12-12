import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/Topsy/TopsyStationaryOne-1400x900.jpg";
import imgS1 from "../../assets/image/projects/Topsy/TopsyCards-1400x900.jpg";
import imgS3 from "../../assets/image/projects/Topsy/TopsyCardOne-1080x1080.jpg";
import imgS4 from "../../assets/image/projects/Topsy/TopsyCardTwo-1080x1080.jpg";
import imgS5 from "../../assets/image/projects/Topsy/TopsyMoc1-1080x1080.jpg";
import { device } from "../../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        <Container
          fluid
          className="px-sm-5"
          css={`
            margin-top: 92px;
          `}
        >
          <img src={imgWorkCover} alt="" className="img-fluid w-100" />
        </Container>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col lg="8">
                <Text variant="tag">BRAND IDENTITY, LOGO DESIGN, MARKETING AND ADVERTISING, WEB DESIGN, WEB DEVELOPMENT </Text>
                <Title variant="secSm" className="my-4">
                  Topsy Turkey | Choice Chicken{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                "We're Flippin' the Bird vs. the Traditional Way of Cooking Whole Turkeys and Chicken!"
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
            <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Role</Text>
                <Title variant="cardBig" className="mt-3">
                  Graphic Designer<br /> Web Designe<br /> Developer
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                   2019
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tools</Text>
                <Title variant="cardBig" className="mt-3">
                  Pen, Illustrator, Photoshop, InDesign, QuarkXPress<br /> HTML, CSS, Javascript, GitHub
                </Title>
              </Col>
              {/*
              <Col lg="4">
                <Button arrowRight>Live work</Button>
              </Col>
             */} 
            </Row>
          </Container>
        </div>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
            </Row>
          </Container>
        </Section>
        <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              Key Findings
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Commission
                </Title>
                <Text variant="p">
                Brand identity design consisting of a logo, stationary elements, business cards, flyer, brochure, package label, web design and website development.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                A design that does not diverge from the cookware industry style, but also offers a fresh and progressive appearance. 
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Problems
                </Title>
                <Text variant="p">
                  Name change from "Topsy Turkey" to "Topsy Turkey Choice Chicken" after branding was completed.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Solutions
                </Title>
                <Text variant="p">
                  Client decliened rebranding. Instead "Choice Chicken" text was added to the current branding.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <Section mt="22%" bg="dark">
          <Container>
            <Row
              css={`
                margin-top: -40%;
              `}
            >
              <Col xs="12" className="mb-5">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/project-pages/paintball-spread">
                <Button
                  arrowRight
                  className="border-0 bg-transparent shadow-none text-capitalize py-3"
                  css={`
                    font-weight: 700
                    font-size: 1.5rem;
                    letter-spacing: -1.2px;
                    line-height: 1.375;
                    @media ${device.md} {
                      font-size: 2rem;
                    }
                `}
                >
                  Paintball Magazine Spread
                </Button>
              </Link>
            </div>
          </Container>
        </Section>
        <Box py={4}>
          <Contact />
        </Box>
      </PageWrapper>
    </>
  );
};
export default WorkSingle;
