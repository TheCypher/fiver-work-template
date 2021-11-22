/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components

function InformationLinks() {
  return (
    <>
      <ListGroup flush>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Technical Information
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          White Papers
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Gases We Flow
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Become a Distributor / Representative
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Media Kit
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Blog
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default InformationLinks;
