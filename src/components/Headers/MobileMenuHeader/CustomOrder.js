import React, { useState } from "react";

// reactstrap components
import{
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse,
  Button
} from "reactstrap";


function CustomOrder() {
  return (
    <>
      <div>
        <UncontrolledCollapse toggler="#linkTogglerCustomOrder">
          <Card>
            <CardBody className="text-center">
              <p className="nav-product-main-title">Custom Order a Meter</p>
              <p className="nav-product-main-description">We offer many diffrent configurations, and can meet most application requirements.</p>

              <div style={{ 'margin-bottom': '100px' }}>
                <p className="nav-product-main-title">Request a custom meter configuration below.</p>
                <Button color="info" style={{ 'font-size': '16px' }}>Get a Quote</Button>
              </div>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default CustomOrder;
