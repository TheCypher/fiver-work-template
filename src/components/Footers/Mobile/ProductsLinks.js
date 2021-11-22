/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components

function ProductsLinks() {
  return (
    <>
      <ListGroup flush>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          All Meters
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Help Me Choose
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          Custom Order
        </ListGroupItem>

        <ListGroupItem
          className="footerMobileListGroupItem"
        >
          <span className="footerTitle"> Meter Models </span>
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - EPI-HAZ
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - EPI-GEN
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - EPI-VAL
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - EPI-PURE
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - EPI-XT
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - Special Meters
        </ListGroupItem>

        <ListGroupItem
          className="footerMobileListGroupItem"
        >
          <span className="footerTitle"> Meters by Application </span>
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - Hazardous Locations
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - General Locations
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - High Value
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - High Purity
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - High Temperature
        </ListGroupItem>
        <ListGroupItem
          className="footerMobileListGroupItem"
          href="#"
          tag="a"
        >
          - Special Cases
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default ProductsLinks;
