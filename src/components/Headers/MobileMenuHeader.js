import React, { useState } from "react";

// reactstrap components
import {
  UncontrolledCollapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";

import{
  Card,
  CardImg,
  CardBody,
  CardText,
  ListGroupItem,
  ListGroup
} from "reactstrap";

// core components
import Menu from "./MenuHeaderComponents/ByModel/Menu";
import MenuByApplication from "./MenuHeaderComponents/ByApplication/Menu";
import MenuHeaderFooter from "components/Footers/MenuHeaderFooter";
import CustomOrder from "./MenuHeaderComponents/CustomOrder/CustomOrder";
import HelpMeChoose from "./MenuHeaderComponents/HelpMeChoose/HelpMeChoose";

function MobileMenuHeader() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div className="page-header page-header-small">
        <UncontrolledCollapse toggler="#linkTogglerMobile,#buttonToggler">
          <Card style={{ 'position': 'fixed', 'height': '100%'}}>
            <Container>
            <CardBody>
              <Row>
                <Col style={{ 'margin-top': '40px'}}>
                  <ListGroup flush>
                    <ListGroupItem
                      href="#"
                      tag="a"
                    >
                      <p className="nav-product-menu-outside">BY MODEL</p>
                    </ListGroupItem>
                    <ListGroupItem
                      href="#"
                      tag="a"
                    >
                      <p className="nav-product-menu-outside">By APPLICATION</p>
                    </ListGroupItem>
                    <ListGroupItem
                      href="#"
                      tag="a"
                    >
                      <p className="nav-product-menu-outside">HELP ME CHOOSE</p>
                    </ListGroupItem>
                    <ListGroupItem
                      href="#"
                      tag="a"
                    >
                      <p className="nav-product-menu-outside">CUSTOM ORDER</p>
                    </ListGroupItem>
                  </ListGroup>
                </Col>
              </Row>
            </CardBody>
            </Container>
            <MenuHeaderFooter />
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default MobileMenuHeader;
