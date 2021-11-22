/*eslint-disable*/
import React from "react";
import { useMediaQuery } from 'react-responsive';

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
import MobileFooter from "./MobileFooter";

function Footer() {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

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
  if(!isMobile){
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

  if(isMobile){
    return (
      <>
        <MobileFooter />
      </>
    );
  }
}

export default Footer;
