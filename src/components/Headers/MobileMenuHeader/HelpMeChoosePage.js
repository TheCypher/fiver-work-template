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

// core components
import HelpMeChooseMobile from "../MenuHeaderComponents/HelpMeChoose/HelpMeChooseMobile";

function HelpMeChoosePage() {
  return (
    <>
      <div>
        <UncontrolledCollapse toggler="#linkTogglerHelpMeChoose">
          <Card>
            <CardBody>
              <HelpMeChooseMobile />
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default HelpMeChoosePage;
