/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

// core components
import Subscribe from "./Regular/Subscribe";
import Links from "./Regular/Links";
import Logos from "./Regular/Logos";
import ContactInfo from "./Regular/ContactInfo";
import CopyRight from "./Regular/CopyRight";

function DefaultFooter() {

  {
    /**
      Infomation I need for the site.

      # Pipe Infomation
        -#Pipe
            SCHEDULE
            INNER DIAMETER (ID)
        -#Duct
            PROBE DIRECTION

      # Mounting Requirement
        -#Flange type
        -#Flange size

      # ENHANCEMENT
        -#CALIBRATION ENHANCEMENTS
          As Left Validation Curve [+$X]
     */
  }
  return (
    <>
      <Subscribe />
      <Links />
      <Logos />
      <ContactInfo />
      <CopyRight />
    </>
  );
}

export default DefaultFooter;
