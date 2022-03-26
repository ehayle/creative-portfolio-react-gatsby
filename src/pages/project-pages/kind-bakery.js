import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/KindBakery/wallPaper.jpg";
import imgS1 from "../../assets/image/projects/KindBakery/menu-wall-1440x900.jpg";
import imgS2 from "../../assets/image/projects/KindBakery/menu-triFold.jpg";
import imgS3 from "../../assets/image/projects/KindBakery/coffee2go.jpg";
import imgS4 from "../../assets/image/projects/KindBakery/coffeeCup-3.jpg";
import imgS5 from "../../assets/image/projects/KindBakery/coffeeCup.jpg";
import imgS6 from "../../assets/image/projects/KindBakery/coffee-cups.jpg";
import imgS7 from "../../assets/image/projects/KindBakery/bag.jpg";
import imgS8 from "../../assets/image/projects/KindBakery/bredBag1.jpg";
import imgS9 from "../../assets/image/projects/KindBakery/bag-sweets.jpg";
import imgS10 from "../../assets/image/projects/KindBakery/businessCards.jpg";

import web4 from "../../assets/image/projects/KindBakery/web4_1440.jpg";
import web2 from "../../assets/image/projects/KindBakery/web2_1440.jpg";
import web3 from "../../assets/image/projects/KindBakery/web3_1440.jpg";
import web1 from "../../assets/image/projects/KindBakery/web1_1440.jpg";

import { device } from "../../utils";

const WorkSingleKindBakery = () => {
  return (
    <>
      <PageWrapper>
  
        <Section className="mt-lg-5">
          <Container>
          <img src={imgWorkCover} alt="" className="img-fluid w-100 mb-lg-5"/>
            <Row>
              <Col lg="8">
                <Text variant="tag">BRAND IDENTITY, LAYOUT DESIGN, LOGO DESIGN. WEB DESIGN, WEB DEVELOPMENT</Text>
                <Title variant="secSm" className="my-4">
                  Kind Bakery{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  "We serve guilt free and allergy friendly treats! 
                  Kind Bakery is about making those delicious delights 
                  we all love accessible to the dietary conscious individual."
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
                  Graphic Designer<br />Web Designer<br />Developer
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
                  Pen, Photoshop, Illustrator, InDesign<br /> HTML, CSS, React.js, Python, Heroku, GitHub
                </Title>
              </Col>
              <Section className="pt-4 pb-0">
                <Container>
                  <Title variant="secSm" className="mb-5 pb-lg-4">
                  
                  </Title>
                  <Row>
                    <Col lg="6" className="mb-5 pr-lg-5">
                      <Title variant="cardBig" className="mb-4">
                        Commission
                      </Title>
                      <Text variant="p">
                      KIND Bakery trusted me to brand their business to have lasting results and above all industry growth. Develop a branding package that speaks loudly and creates a youthful energy. 
                      </Text>
                    </Col>
                    <Col lg="6" className="mb-5 pb-5 pr-lg-5">
                    <Title variant="cardBig" className="mb-4">
                      Deliverables
                      </Title>
                      <Text variant="p">
                      Market research, competitive and comparative analysis, sketches, digital Assets, print assets, UI Design, UI Development, typography, layout design, brochure design, print ready documents.
                      </Text>
                    </Col>
                  </Row>
                </Container>
              </Section>
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
                <img src={web4} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={web2} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={web3} alt="" className="img-fluid w-100" />
              </Col>
              <Col xs="12" className="mb-5">
                <img src={web1} alt="" className="img-fluid w-100" />
              </Col>

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
       
        <Section mt="22%" bg="dark">
          <Container>
            <Row
              css={`
                margin-top: -40%;
              `}
            >
              <Col lg="6" className="mb-5 pb-5 mb-lg-0 pr-lg-4">
                <img src={imgS5} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS6} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 pb-5 mb-lg-0 pr-lg-4">
                <img src={imgS7} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS8} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="mb-5 mb-lg-0 pr-lg-4">
                <img src={imgS9} alt="" className="img-fluid w-100" />
              </Col>
              <Col lg="6" className="pl-lg-4">
                <img src={imgS10} alt="" className="img-fluid w-100" />
              </Col>
            </Row>

            <div className="text-center mt-lg-5">
              <Text variant="tag" className="mb-1" color="lightShade">
                Next Project
              </Text>
              <Link to="/project-pages/soul-freq">
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
                  SoulFreq
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
export default WorkSingleKindBakery;
