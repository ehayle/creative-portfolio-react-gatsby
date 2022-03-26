import React, { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import { Link } from "gatsby";

import GlobalContext from "../../context/GlobalContext";
import { Section, Title, ButtonIcon } from "../../components/Core";
import Availability from "../../components/Availability";
import bgFooter from "../../assets/image/png/background.png";

const SectionStyled = styled(Section)`
  &.pattern::before {
    position: absolute;
    content: "";
    bottom: -250px;
    margin: auto;
    width: 100%;
    height: 100%;
    background: url(${bgFooter}) bottom center no-repeat;
    background-size: cover;
    z-index: -1000;
  }
`;




const Hero = ({ pattern = true }) => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      <SectionStyled className={`position-relative ${pattern ? "pattern" : ""}`}>
        <Container>
          <Row className="text-center justify-content-center">
            <Col lg="10" xl="7">
              <Availability />
              <div className="text-center my-5">
                <Title>Do you have project? Let's talk.</Title>
              </div>
              <div className="text-center">
                <ButtonIcon
                  onClick={(e) => {
                    e.preventDefault();
                    gContext.toggleContact();
                  }}
                >
                  Let's Talk Now
                </ButtonIcon>
                <ButtonIcon  
                    ml="10px"
                >
                  <Link to="https://www.linkedin.com/in/eric-hayle-8515b7205/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                      LinkedIn
                  </Link>
                  
                </ButtonIcon>
              </div>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
