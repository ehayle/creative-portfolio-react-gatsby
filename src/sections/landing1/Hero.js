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
      <Section hero className="position-relative" >
        <Container>
          <Row className="align-items-center">
            <Col lg="12">
              <Box>
                <Text
                  variant="tag"
                  mb={4}
                  className="text-uppercase"
                  color="heading"
                  mt="0"
                >
                  GRAPHIC DESIGNER, WEB DESIGNER, VISUAL DESIGNER, BRAND DESIGNER, LOGO DESIGNER, WEB DEVELOPER,
                  PRINT, DIGITAL, MARKETING, ADVERTISING, <br /><br />   Remote<br /> Denver, Colorado
                </Text>
                <Title variant="hero">
                  
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
       {/*      
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
       */} 
          
  
           
          </Row>
        </Container>
      </Section>
      
    </>
  );
};

export default Hero;