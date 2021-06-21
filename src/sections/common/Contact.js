import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import Availability from "../../components/Availability";

import { Title, Section, Box, LinkContact, ButtonIcon } from "../../components/Core";
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

const Contact = ({ pattern = true }) => {
  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled
        className={`position-relative ${pattern ? "pattern" : ""}`}
      >
        <Container>
          <Row className="justify-content-center align-items-center">
            <Col lg="11" xl="10" className="text-center">
              <Box>
                <Availability />
                <div className="text-center my-5">
                  <Title>Do you have project? Let's talk.</Title>
                </div>

                <Box
                  className="text-center d-flex justify-content-center"
                  mt={["3rem", null, "4rem"]}
                >
                  <div className="d-flex flex-column flex-lg-row justify-content-center">


             


                    <LinkContact
                      href="mailto:contact@folio.design"
                      target="_blank"
                      className="mb-2 mb-lg-0"
                    >
                      <ButtonIcon>Email</ButtonIcon>
                    </LinkContact>
                    <span className="divider mx-2 mx-lg-4 d-none d-lg-block">
                      |
                    </span>
                    <LinkContact
                      href="https://www.linkedin.com/in/eric-hayle-8515b7205/"
                      target="_blank"
                    >
                      <ButtonIcon>linkedin</ButtonIcon>
                     
                    </LinkContact>
                  </div>
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Contact;
