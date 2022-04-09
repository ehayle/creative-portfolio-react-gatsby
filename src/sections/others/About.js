import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import face from "../../assets/image/png/face.png";

import Contact from "../landing1/Contact";

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const SkillsTitle = styled.p`
  color: ${({ theme }) => theme.colors.light} !important;
  font-size: 13px;
  letter-spacing: 1.63px;
  padding: 0;
  margin: 0;
`;

const SkillsContainer = styled.div`
  width: 100%; /* Full width */
  height: 5px;
  border-radius: 25px;
  overflow: hidden;
  background-color: #ddd; /* Grey background */
  margin-bottom: 10px;
`;

const SkillsCSS = styled.div`
text-align: right; /* Right-align text */
color: white; /* White text color */
`;


const HTMLCSS = styled.div`
  width: 100%; 
  background-color: #04AA6D;
`;

const CSSCSS = styled.div`
  width: 99%; 
  background-color: #04AA6D;
`;

const ReactCSS = styled.div`
  width: 70%; 
  background-color: #04AA6D;
`;

const DjangoCSS = styled.div`
  width: 70%; 
  background-color: #04AA6D;
`;

const PythonCSS = styled.div`
  width: 50%; 
  background-color: #04AA6D;
`;

const JqueryCSS = styled.div`
  width: 90%; 
  background-color: #04AA6D;
`;

const BootstrapCSS = styled.div`
  width: 99%; 
  background-color: #04AA6D;
`;

const JavascriptCSS = styled.div`
  width: 60%; 
  background-color: #04AA6D;
`;

const PhotoshopCSS = styled.div`
  width: 98%; 
  background-color: #04AA6D;
`;

const IllustratorCSS = styled.div`
  width: 98%; 
  background-color: #04AA6D;
`;

const IndesignCSS = styled.div`
  width: 90%; 
  background-color: #04AA6D;
`;

const LightroomCSS = styled.div`
  width: 90%; 
  background-color: #04AA6D;
`;

const AftereffectsCSS = styled.div`
  width: 70%; 
  background-color: #04AA6D;
`;



const About = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">

            <Col lg="6">
              <div className="pl-lg-4 pt-5 pt-lg-0">
                <Title color="light" variant="secSm">
                HELLO EVERYONE
                </Title>
                <Text
                  color="light"
                  className="mt-3 mt-lg-5"
                  css={`
                    line-height: 1.5;
                  `}
                >
                  My name is Eric. I am an multidisciplinary designer with over eight years of experience in print and digital media, web design, front-end web development, and craft CMS solutions. 
                </Text>
                <Text color="light" className="mt-4">
                I help organizations design, shape, and amplify their brand, product, and service. Whether you intend to create or change your brand image, I am here to serve and distinguish your brand. 
                </Text>
                <Text color="light" className="mt-4">

                </Text>
                <div className="mt-4">
                  <Text color="light">Email me at</Text>

                  <Text variant="p">
                    <a
                      href="mailto:gotohayle@gmail.com"
                      className="font-weight-bold"
                    >
                      <Span color="light">gotohayle@gmail.com</Span>
                    </a>
                  </Text>
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Eric Hayle
                </Text>
                <Text color="light" variant="small">
                  Owner Operator of GoToHayle
                </Text>
                <div className="mt-5 d-flex">
                    <LinkSocial
                      href="https://github.com/ehayle"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mr-3"
                    >
                      GitHub
                    </LinkSocial>
                    <LinkSocial
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" mr-3"
                    >
                      Instagram
                    </LinkSocial>
                    <LinkSocial
                    
                    >
                      <a href="https://www.linkedin.com/in/eric-hayle-8515b7205/" target="_blank"
                      rel="noopener noreferrer"
                      className=" mr-3">LinkedIn</a>
                      
                    </LinkSocial>

                  </div>
              </div>
            </Col>
            <Col lg="6">
              <div>
                <img src={face} alt="folio" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>

        <Container className="mt-5 pt-5 mb-5">
          
            <Title>
              Hard Skills
            </Title>
          
        </Container>

        <Container className="pr-5">
          <Row className="align-items-center">
            <Col lg="6" className="mb-5 pr-lg-5">
              <Title variant="cardBig" className="mb-4">
                Design Software
              </Title>

              <SkillsTitle>Photoshop</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <PhotoshopCSS>&nbsp;</PhotoshopCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Illistrator</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <IllustratorCSS>&nbsp;</IllustratorCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>InDesign</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <IndesignCSS>&nbsp;</IndesignCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Lightroom</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <LightroomCSS>&nbsp;</LightroomCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>After Effects</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <AftereffectsCSS>&nbsp;</AftereffectsCSS>
                </SkillsCSS>
              </SkillsContainer>

            </Col>


            <Col lg="6" className="mb-5 pr-lg-5">
              <Title variant="cardBig" className="mb-4">
              Programming Languages
              </Title>

              <SkillsTitle>HTML</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <HTMLCSS>&nbsp;</HTMLCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>CSS</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <CSSCSS>&nbsp;</CSSCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Bootstrap</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <BootstrapCSS>&nbsp;</BootstrapCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>jQuery</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <JqueryCSS>&nbsp;</JqueryCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>React</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <ReactCSS>&nbsp;</ReactCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Django</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <DjangoCSS>&nbsp;</DjangoCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Javascript</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <JavascriptCSS>&nbsp;</JavascriptCSS>
                </SkillsCSS>
              </SkillsContainer>

              <SkillsTitle>Python</SkillsTitle>
              <SkillsContainer>
                <SkillsCSS>
                  <PythonCSS>&nbsp;</PythonCSS>
                </SkillsCSS>
              </SkillsContainer>
              
            </Col>
          </Row>
        </Container>
          
        <Contact />

      </Section>
    </>
  );
};

export default About;
