import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";

import { Title, Button, Section, Box, Text } from "../../components/Core";

//import { device } from "../../utils";
// import gthDrip from "../../assets/image/png/Ggraphic.png";
import Video from "./Videos";
import Videoes from "./Videoes";








const Hero = ({ pattern = true }) => {
  return (
    <>
      <Section hero className="position-relative">
        <Container>
          <Row className="align-items-center">
            <Col lg="12" className="mb-5 mb-lg-0">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                  mb="40px"
                >
                  GRAPHIC DESIGNER, WEB DESIGNER, WEB DEVELOPER, ILLUSTRATOR, UI DESIGNER, VISUAL DESIGNER, MOTION GRAPHICS, FRONT END DEVELOPER, LOGO DESIGNER,
                  BRAND DESIGNER, PRINT AND DIGITAL MARKETING AND ADVERTISING  
                </Text>
                <Title variant="hero">
                  Studio of E.Hayle
                </Title>

                <Box mt="52px">
                  <Link
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={1000}
                  >
                    <Button arrowRight>WORKS</Button>
                  </Link>
                </Box>
              </Box>
            </Col>
            
            <Col lg="12" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <Video />
                </div>
              </div>
            </Col>
            <Col lg="12" md="8" sm="9">
              <div className="text-center text-lg-right position-relative">
                <div className="img-main">
                  <Videoes />
                </div>
              </div>
            </Col>
     
           
  
           
          </Row>
        </Container>
      </Section>
      
    </>
  );
};

export default Hero;