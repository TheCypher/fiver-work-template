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
  ListGroup,
  ListGroupItem
} from "reactstrap";

// core components
import MenuHeaderFooter from "components/Footers/MenuHeaderFooter";
import ByModel from "./ByModel";
import ByApplication from "./ByApplication";
import CustomOrder from "./CustomOrder";
import HelpMeChoosePage from "./HelpMeChoosePage";

function MobileMenu() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div className="page-header page-header-small" className="anyClass">
        <UncontrolledCollapse toggler="#linkTogglerMobile,#buttonToggler">
          <Card>
            <Container>
            <CardBody>
              <Row>
                <Col style={{ 'margin-top': '40px', 'margin-bottom': '30px'}}>
                  <ListGroup flush>
                    <ListGroupItem tag="a" href="#collapseExample" id="linkToggler">
                      <p className="nav-product-menu-outside">BY MODEL</p>
                    </ListGroupItem>
                    <ByModel />
                    <ListGroupItem tag="a" href="#" id="linkTogglerByApplication">
                      <p className="nav-product-menu-outside">BY APPLICATION</p>
                    </ListGroupItem>
                    <ByApplication />
                    <ListGroupItem tag="a" href="#" id="linkTogglerHelpMeChoose">
                      <p className="nav-product-menu-outside">HELP ME CHOOSE</p>
                    </ListGroupItem>
                    <HelpMeChoosePage />
                    <ListGroupItem tag="a" href="#" id="linkTogglerCustomOrder">
                      <p className="nav-product-menu-outside">CUSTOM ORDER</p>
                    </ListGroupItem>
                    <CustomOrder />
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

export default MobileMenu;
