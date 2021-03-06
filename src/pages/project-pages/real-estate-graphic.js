import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/Palm Springs/wide_1-1440.jpg";
import imgS1 from "../../assets/image/projects/Palm Springs/wide_2-1440.jpg";
import imgS5 from "../../assets/image/projects/Palm Springs/wide_3-1440.jpg";
import imgS6 from "../../assets/image/projects/Palm Springs/wide_4-1440.jpg";
import { device } from "../../utils";

const WorkSingleRealEstate = () => {
  return (
    <>
      <PageWrapper>
        
        <Section className="mt-lg-5">
          <Container>
          <img src={imgWorkCover} alt="" className="img-fluid w-100 mb-lg-5" />
            <Row>
              <Col lg="8">
                <Text variant="tag">MARKETING AND ADVERTISING, REAL ESTATE GRAPHIC, LAYOUT DESIGN, BROCHURE DESIGN, UI DESIGN, DEVELOPMENT</Text>
                <Title variant="secSm" className="my-4">
                  Palm Springs California Reality Brochure.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  Palm Springs, California, home listing. Landing page and listing brochure.
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
                  Graphic Designer<br />
                  UI designer<br />
                  Developer
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  2021
                </Title>
              </Col>

              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Tools</Text>
                <Title variant="cardBig" className="mt-3">
                  Pen<br /> Photoshop<br /> Illustrator<br /> InDesign<br /> HTML, CSS<br /> React.js<br /> Python<br /> Heroku
                </Title>
              </Col>
              <Col lg="4">
                <Button arrowRight>Live work</Button>
              </Col>
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
                A private realty brokerage firm commissioned me for ongoing permalancer projects. The scope of work includes developing landing pages for high-end homes for sale and designing print marketing assets including residential brochures and flyers.                </Text>
              </Col>
              <Col lg="6" className="mb-5 pb-5 pr-lg-5">
              <Title variant="cardBig" className="mb-4">
                  Deliverables
                </Title>
                <Text variant="p">
                Market research, competitive and comparative analysis, landing page design and development, sketches, digital assets, print assets, typography, layout design, brochure, flyers, print-ready documents.                </Text>
              </Col>
            </Row>
          </Container>
        </Section>
          </Container>
        </div>
        <Section className="mt-lg-5">
          <Container>
            <Row>
              <Col xs="12" className="mb-5">
                <img src={imgS1} alt="" className="img-fluid w-100" />
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
              <Link to="/project-pages/fernweh">
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
                  Fernweh Hat Co.
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
export default WorkSingleRealEstate;
