/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components

function CompanyLink() {
  return (
    <>
      <ListGroup flush>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Home
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          About
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Contact Us
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Career Opportunities
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Company Leadership
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Certifications
        </ListGroupItem>

        <ListGroupItem
          className="footerMobileListGroupItem"
        >
          <span className="footerTitle"> Customer Portal </span>
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Account
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Log In
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Sign Up
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default CompanyLink;
