/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components

function SupportLinks() {
  return (
    <>
      <ListGroup flush>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Technical Support
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Service Request
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Find a Representative
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Request a Quote
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Downloads
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
         How-To Videos
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
         FAQ’s
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default SupportLinks;
