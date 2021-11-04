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
import MenuByApplication from "./MenuHeaderComponents/ByApplication/Menu";
import MenuHeaderFooter from "components/Footers/MenuHeaderFooter";
import CustomOrder from "./MenuHeaderComponents/CustomOrder/CustomOrder";
import HelpMeChoose from "./MenuHeaderComponents/HelpMeChoose/HelpMeChoose";

function Menu() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div className="page-header page-header-small">
        <ListGroup flush>
          <ListGroupItem tag="a" href="#collapseExample" id="linkToggler">
            <p className="nav-product-menu-outside">BY MODEL</p>
          </ListGroupItem>
          <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
            <Card>
              <CardBody>
                <ListGroup flush>
                  <ListGroupItem tag="a" href="#collapseExample" id="linkToggler2">
                    <p className="nav-product-menu-outside">EPI-HAZ</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-GEN</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-VAL</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-PURE</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#collapseExample" id="linkToggler2">
                    <p className="nav-product-menu-outside">EPI-XT</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-MULTIGEN</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-SWITCH</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-BIGEN</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#collapseExample" id="linkToggler2">
                    <p className="nav-product-menu-outside">EPI-AXGEN</p>
                  </ListGroupItem>
                  <ListGroupItem tag="a" href="#">
                    <p className="nav-product-menu-outside">EPI-RAGEN</p>
                  </ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
          </UncontrolledCollapse>
          <ListGroupItem tag="a" href="#">
            <p className="nav-product-menu-outside">BY APPLICATION</p>
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            <p className="nav-product-menu-outside">HELP ME CHOOSE</p>
          </ListGroupItem>
          <ListGroupItem tag="a" href="#">
            <p className="nav-product-menu-outside">CUSTOM ORDER</p>
          </ListGroupItem>
        </ListGroup>
      </div>
    </>
  );
}

export default Menu;
