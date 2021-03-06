import React, { useState } from "react";

// reactstrap components
import {
  Collapse,
  ListGroup,
  ListGroupItem,
  Col
} from "reactstrap";

import ProductsLinks from "./Mobile/ProductsLinks";
import InformationLinks from "./Mobile/InformationLinks";
import SupportLinks from "./Mobile/SupportLinks";
import CompanyLinks from "./Mobile/CompanyLinks";
import ContactInfo from "./Regular/ContactInfo";

function MobileFooter() {
  // collapse states and functions
  const [collapses, setCollapses] = useState([0]);
  const changeCollapse = collapse => {
    if (collapses.includes(collapse)) {
      setCollapses(collapses.filter(prop => prop !== collapse));
    } else {
      setCollapses([...collapses, collapse]);
    }
  };

  return (
    <>
      <ListGroup flush>
        <ListGroupItem
          className="footerMobileListGroupItem"
          onClick={e => {
            e.preventDefault();
            changeCollapse(1);
          }}
        >
          <span className="footerTitle">Products</span> {" "}
          <i className="now-ui-icons arrows-1_minimal-down footerDropDownLinkIcon"></i>
        </ListGroupItem>
        <Col className="footerMobileListGroupItem">
          <Collapse isOpen={collapses.includes(1)}>
            <ProductsLinks />
          </Collapse>
        </Col>

        <ListGroupItem
          className="footerMobileListGroupItem"
          onClick={e => {
            e.preventDefault();
            changeCollapse(2);
          }}
        >
          <span className="footerTitle">Information & Resources</span>
          <i className="now-ui-icons arrows-1_minimal-down footerDropDownLinkIcon"></i>
        </ListGroupItem>
        <Col className="footerMobileListGroupItem">
          <Collapse isOpen={collapses.includes(2)}>
            <InformationLinks />
          </Collapse>
        </Col>

        <ListGroupItem
          className="footerMobileListGroupItem"
          onClick={e => {
            e.preventDefault();
            changeCollapse(3);
          }}
        >
          <span className="footerTitle">Support</span>
          <i className="now-ui-icons arrows-1_minimal-down footerDropDownLinkIcon"></i>
        </ListGroupItem>
        <Col className="footerMobileListGroupItem">
          <Collapse isOpen={collapses.includes(3)}>
            <SupportLinks />
          </Collapse>
        </Col>

        <ListGroupItem
          className="footerMobileListGroupItem"
          onClick={e => {
            e.preventDefault();
            changeCollapse(4);
          }}
        >
          <span className="footerTitle">Company</span>
          <i className="now-ui-icons arrows-1_minimal-down footerDropDownLinkIcon"></i>
        </ListGroupItem>
        <Col className="footerMobileListGroupItem">
          <Collapse isOpen={collapses.includes(4)}>
            <CompanyLinks />
          </Collapse>
        </Col>

        <ListGroupItem
          className="footerMobileListGroupItem"
          onClick={e => {
            e.preventDefault();
            changeCollapse(5);
          }}
        >
          <span className="footerTitle">Contact Info</span>
          <i className="now-ui-icons arrows-1_minimal-down footerDropDownLinkIcon"></i>
        </ListGroupItem>
        <Col className="footerMobileListGroupItem">
          <Collapse isOpen={collapses.includes(5)} style={{ 'padding-bottom': '70px'}}>
            <ContactInfo />
          </Collapse>
        </Col>
      </ListGroup>
    </>
  );
}

export default MobileFooter;