import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/GreenFarms/GreenFarms-1440x900.jpg";
import imgS3 from "../../assets/image/projects/GreenFarms/greenFarmsButton-1080x1080.jpg";
import imgS4 from "../../assets/image/projects/GreenFarms/GFCards-1080x1080.jpg";
import imgS5 from "../../assets/image/projects/GreenFarms/GreenFarmsRollup-1080x1080.jpg";
import imgS6 from "../../assets/image/projects/GreenFarms/paperBag-1080x1080.jpg";
import imgS7 from "../../assets/image/projects/GreenFarms/stationary-1400x900.jpg";
import { device } from "../../utils";

const WorkSingleGreenFarms = () => {
  return (
    <>
      <PageWrapper>
       
        <Section className="mt-lg-5">
          <Container>
          <img src={imgWorkCover} alt="" className="img-fluid w-100 mb-lg-5"/>
            <Row>
              <Col lg="8">
                <Text variant="tag">BRAND IDENTITY, LAYOUT DESIGN, LOGO DESIGN</Text>
                <Title variant="secSm" className="my-4">
                  Brand Identity for GreenFarms{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  "Eat clean and green. We're outfitting the urban neighborhood with the freshest and most green farm-to-table marketplace."
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
                  Graphic Designer
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
                  Pen<br /> Photoshop<br /> Illustrator<br /> InDesign
                </Title>
              </Col>
            {/*
              <Col lg="4">
                <Button arrowRight>Live work</Button>
              </Col>
             */} 
            </Row>
            <Section className="pt-4 pb-0">
          <Container>
            <Title variant="secSm" className="mb-5 pb-lg-4">
              
            </Title>
            <Row>
            <Col lg="6" className="mb-5 pb-5 pr-lg-5">
              <Title variant="cardBig" className="mb-4">
              Synopsis 
                </Title>
                <Text variant="p">
                GreenFarms is an inner-city farmer's market startup that aims to give locals vendor space to sell their fresh goods. I was commissioned to ideate and build the initial brand identity.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pr-lg-5">
              <Title variant="cardBig" className="mb-4">
              Deliverables 
                </Title>
                <Text variant="p">
                Market research, competitive and comparative analysis, design ideation, sketches, logo design, branding assets, custom illustrations, package design, label design, and  Print Ready Documents.
                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
          </Container>
        </div>
        <Section className="mt-lg-5">
          <Container>
            <Row>
            <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
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
            <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mt-5">
                <img src={imgS7} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/project-pages/berzzerk">
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
                  BERZZERK
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
export default WorkSingleGreenFarms;
