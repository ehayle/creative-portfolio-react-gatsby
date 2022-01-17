import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/Tattoo/TattooSpread-1440x1080.jpg";
import imgS1 from "../../assets/image/projects/Tattoo/Tattoo4Fold-1440x900.jpg";
import imgS3 from "../../assets/image/projects/Tattoo/TattooCover-1080x1080.jpg";
import imgS4 from "../../assets/image/projects/Tattoo/TattooCover-1080x1080.jpg";
import imgS5 from "../../assets/image/projects/Tattoo/TattooSpread-1440x1080.jpg";
import { device } from "../../utils";

const WorkSingle = () => {
  return (
    <>
      <PageWrapper>
        
        <Section className="mt-lg-5">
          <Container>
          <img src={imgWorkCover} alt="" className="img-fluid w-100 mb-lg-5"/>
            <Row>
              <Col lg="8">
                <Text variant="tag">LAYOUT DESIGN, MAGAZINE DESIGN, MARKETING AND DESIGN</Text>
                <Title variant="secSm" className="my-4">
                  Magazine Cover and Center Spread {" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  
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
                  fall 2019
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tools</Text>
                <Title variant="cardBig" className="mt-3">
                  Pen, Illustrator, Photoshop, InDesign, QuarkXPress
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
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS3} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS4} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mt-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
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
                Ink Magazine's fall issue. Model images supplied, design layout for a cover and center spread. 
                Center spread to be either four consecutive pages or an accordion page.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Project Goal
                </Title>
                <Text variant="p">
                Elegance and Culture. The focus of this design was to accentuate the elegancy and cultural impact of this specific tattoo style.
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
              <Link to="/project-pages/topsy-turkey">
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
                  Topsy Turkey - Choice Chicken
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
