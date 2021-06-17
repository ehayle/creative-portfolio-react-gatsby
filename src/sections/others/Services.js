import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { Section, Title, Text, Span } from "../../components/Core";
import gotohayle from "../../assets/image/png/gotohayle.png";

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

const Services = ({ hero = true, bg = "dark", ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <Col lg="6">
              <div>
                <img src={gotohayle} alt="folio" className="img-fluid" />
              </div>
            </Col>
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
                  I am so pleased that you have stumble across my page. My name is by Eric Hayle. I am a multidisciplinary graphic designer with over five years of freelance experience.

                </Text>
                <Text color="light" className="mt-4">
                  I help organizations design, shape and amplify their brand, product and service. Whether you're looking to create or change your image or communication strategy, I am  here to serve and distinguish your brand.

                </Text>
                <Text color="light" className="mt-4">
                  I firmly believe that the best ideas come from direct communication with clients.

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
                <div className="mt-5">
                  <img src={gotohayle} alt="sign" className="img-fluid" />
                </div>
                <Text color="light" className="mt-3 font-weight-bold">
                  Eric Hayle
                </Text>
                <Text color="light" variant="small">
                  Owner Operator of GoToHayle
                </Text>
                <div className="mt-5 d-flex">
                  <LinkSocial
                    href="https://www.dribbble.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Dribble
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" mr-3"
                  >
                    Twitter
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-3"
                  >
                    Facebook
                  </LinkSocial>
                  <LinkSocial
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-weight-bold"
                  >
                    Instagram
                  </LinkSocial>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default Services;
