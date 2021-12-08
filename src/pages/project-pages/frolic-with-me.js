import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/Frolic/FrolicWebBoards-1440x900.jpg";
import imgS1 from "../../assets/image/projects/Frolic/FrolicBook-1400x900.jpg";
import imgS3 from "../../assets/image/projects/Frolic/FrolicMacbook-1080x1080.jpg";
import imgS4 from "../../assets/image/projects/Frolic/Frolicweb-1080x1080.jpg";

import imgS5 from "../../assets/image/projects/Frolic/FrolicMug-1400x1400.jpg";
import imgS6 from "../../assets/image/projects/Frolic/FrolicPillow-1080x1080.jpg";

import imgS7 from "../../assets/image/projects/Frolic/FrolicShirt-1080x1080.jpg";

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
                <Text variant="tag">BRANDING, LOGO, UI DESIGN, DEVELOPMENT, GRAPHIC MARKETING ASSETS, LAYOUT DESIGN</Text>
                <Title variant="secSm" className="my-4">
                  Brand Identity and Web Design for Frolic With Me.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  "Travel itineraries, hiking adventures, outdoor gear, and even some soulful stories of my time spent being a mountain woman."
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
                  Frolic With Me
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Winter 2020
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tools</Text>
                <Title variant="cardBig" className="mt-3">
                  Pen, Photoshop, Illustrator, InDesign, HTML, CSS, PHP, Javascript, WordPress
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
                  Commission
                </Title>
                <Text variant="p">
                Ashley, the author, owner, and operator of Frolic With Me trusted me to actualize her freelance writing business by branding the visual identity and developing the Blog powered by WordPress. Brand identity with WordPress UI design and development.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  Deliverables
                </Title>
                <Text variant="p">
                Produce a visual identity that caters to the bloggers personality, writing style and nature of the content.
                Market research, competitive and comparative analysis, sketches, digital Assets, print assets, typography, layout design, brochure design, print ready documents.
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
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS7} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/project-pages/foxhole-fashion">
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
                  Foxhole Fashion
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
