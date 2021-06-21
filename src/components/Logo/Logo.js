import React from "react";
import { Link } from "gatsby";
import { Title } from "../Core";

import gthDrip from "../../assets/image/png/graphic.png";

const Logo = ({ color = "front", height, className = "", ...rest }) => {
  return (
    <Link to="/" className={`${className}`} {...rest}>
      <Title color={color} variant="cardLg" className="mb-0">
      <img width="40px" height="auto" className="mr-3" src={gthDrip}  />
        GoToHayle
      </Title>
    </Link>
  );
};

export default Logo;
