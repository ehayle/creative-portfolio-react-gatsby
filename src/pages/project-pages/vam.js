import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/VAM/vamCover-1440x900.jpg";
import imgS1 from "../../assets/image/projects/VAM/vam-1.jpg";
import imgS2 from "../../assets/image/projects/VAM/vam-2.jpg";
import imgS3 from "../../assets/image/projects/VAM/vam-3sq.jpg";
import imgS4 from "../../assets/image/projects/VAM/vam-4sq.jpg";
import imgS5 from "../../assets/image/projects/VAM/vam-5.jpg";
import { device } from "../../utils";

const WorkSingleVam = () => {
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
                  Vitality Asset Management{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  "You can count on Vitality Asset Management to be vigilant with to your financial goals."
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
                  Vitality Asset Management
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Winter 2021
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tools</Text>
                <Title variant="cardBig" className="mt-3">
                  Pen, Photoshop, Illustrator, InDesign
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
                Deliverables
                </Title>
                <Text variant="p">
                Market research, competitive and comparative analysis, design conception, sketches, logo design, graphical branding asset design, package design, label design, and  Print Ready Documents.
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
              <Link to="/project-pages/green-farms">
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
                  Green Farms Natural Grocer
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
export default WorkSingleVam;
