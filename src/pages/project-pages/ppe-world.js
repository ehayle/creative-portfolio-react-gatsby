import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/PPE World/logo_1440.jpg";
import imgS1 from "../../assets/image/projects/PPE World/logo_2_1440.jpg";
import imgS2 from "../../assets/image/projects/PPE World/logo(s)_1440.jpg";
import imgS5 from "../../assets/image/projects/PPE World/businessCards_1440.jpg";
import imgS6 from "../../assets/image/projects/PPE World/stationary_1440.jpg";
import { device } from "../../utils";

const WorkSinglePPE = () => {
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
                <Text variant="tag">BRANDING, LAYOUT DESIGN, LOGO</Text>
                <Title variant="secSm" className="my-4">
                  Personal Protective Equipment World.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                 Dan from Personal Protective Equipment World sought to do an entire corporate identity package. Consisting of the design of a logo, stationary elements, business card, flyer and brochure.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
        <div className="mt-lg-3">
          <Container>
            <Row>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Client</Text>
                <Title variant="cardBig" className="mt-3">
                  PPE World
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  2021
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
              <Col xs="12" className="mb-5">
                <img src={imgS2} alt="" className="img-fluid w-100" />
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
                Commission
                </Title>
                <Text variant="p">
                  Logo and stationary design.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                  Successfully rebrand the comapny with a image that could adapt across many use cases.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  03. Problems
                </Title>
                <Text variant="p">
                  The client did not want to change the gloves holding the world element. 
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  04. Solutions
                </Title>
                <Text variant="p">
                   To give the logo a distinguish corporate appearance, I focused on the typography.
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
              <Col xs="12" className="mb-5">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/project-pages/arches-national-park">
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
                  Arches National Park
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
export default WorkSinglePPE;
