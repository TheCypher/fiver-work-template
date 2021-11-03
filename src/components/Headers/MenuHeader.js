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
  CardText
} from "reactstrap";

// core components
import Menu from "./MenuHeaderComponents/ByModel/Menu";
import MenuByApplication from "./MenuHeaderComponents/ByApplication/Menu";
import MenuHeaderFooter from "components/Footers/MenuHeaderFooter";
import CustomOrder from "./MenuHeaderComponents/CustomOrder/CustomOrder";
import HelpMeChoose from "./MenuHeaderComponents/HelpMeChoose/HelpMeChoose";

function MenuHeader() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div className="page-header page-header-small">
        <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
          <Card>
            <Container>
            <CardBody>
              <Row>
                <Col md="2" style={{ 'margin-top': '40px', 'border-right': '1px dashed #333', 'margin-bottom': '30px'}}>
                  <Nav className="flex-column">
                    <NavItem className={pills === "1" ? "active" : ""}>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("1");
                        }}
                      >
                        <p className="nav-product-menu-outside">BY MODEL</p>
                      </NavLink>
                    </NavItem>

                    <NavItem className={pills === "2" ? "active" : ""}>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("2");
                        }}
                      >
                        <p className="nav-product-menu-outside">By APPLICATION</p>
                      </NavLink>
                    </NavItem>

                    <NavItem className={pills === "3" ? "active" : ""}>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("3");
                        }}
                      >
                        <p className="nav-product-menu-outside">HELP ME CHOOSE</p>
                      </NavLink>
                    </NavItem>

                    <NavItem className={pills === "4" ? "active" : ""}>
                      <NavLink
                        href="#pablo"
                        onClick={(e) => {
                          e.preventDefault();
                          setPills("4");
                        }}
                      >
                        <p className="nav-product-menu-outside">CUSTOM ORDER</p>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Col>

                <Col md="10" style={{ 'margin-top': '40px'}}>
                  <TabContent className="gallery" activeTab={"pills" + pills}>
                    <TabPane tabId="pills1">
                      <Menu />
                    </TabPane>
                    <TabPane tabId="pills2">
                      <MenuByApplication />
                    </TabPane>
                    <TabPane tabId="pills3">
                      <HelpMeChoose />
                    </TabPane>
                    <TabPane tabId="pills4">
                      <CustomOrder />
                    </TabPane>
                  </TabContent>
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

export default MenuHeader;
