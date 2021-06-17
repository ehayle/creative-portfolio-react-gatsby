import React from "react";
import { Link } from "gatsby";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Button, Title, Text, Box } from "../../components/Core";
import PageWrapper from "../../components/PageWrapper";
import Contact from "../../sections/common/Contact";
import imgWorkCover from "../../assets/image/projects/Arches/Arches_lettering-1440.jpg";
import imgS1 from "../../assets/image/projects/Arches/arches_shirt-2.jpg";
import imgS2 from "../../assets/image/projects/Arches/arches_shirt-3.jpg";
import imgS3 from "../../assets/image/projects/Arches/arches_shirt-1.jpg";
import imgS4 from "../../assets/image/projects/Arches/Arches_poster-1-1440.jpg";
import imgS5 from "../../assets/image/projects/Arches/Arches_poster_2-1440.jpg";
import { device } from "../../utils";

const WorkSingleArches = () => {
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
                <Text variant="tag">Merch Design</Text>
                <Title variant="secSm" className="my-4">
                  Arches National Park Merch.{" "}
                </Title>
                <Text
                  variant="p"
                  css={`
                    max-width: 750px;
                  `}
                >
                  I spent a good portion of summer 2020 dirtbag camping in Moab. The time I spent there was so profound I decided to make some merch to sell.
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
                  Myself
                </Title>
              </Col>
              <Col lg="4" className="mb-4 mb-lg-0">
                <Text variant="tag">Time</Text>
                <Title variant="cardBig" className="mt-3">
                  Summer 2020
                </Title>
              </Col>
              <Col lg="4">
                <Button arrowRight>Live work</Button>
              </Col>
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
            Synopsis
            </Title>
            <Row>
              <Col lg="6" className="mb-5 pr-lg-5">
                <Title variant="cardBig" className="mb-4">
                  01. Basics
                </Title>
                <Text variant="p">
                  Landscape photography that I turned into a minimal retro design.
                </Text>
              </Col>
              <Col lg="6" className="mb-5 pl-lg-5">
                <Title variant="cardBig" className="mb-4">
                  02. Goals
                </Title>
                <Text variant="p">
                  Find inspiration in through nature.
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
              <Link to="/project-pages/go-to-hayle">
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
                  GoToHayle
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
export default WorkSingleArches;
