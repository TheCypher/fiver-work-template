import React, { useState } from "react";
// reactstrap components
import {
  NavItem,
  NavLink,
  Nav,
  Card,
  CardHeader,
  CardBody,
  TabContent,
  TabPane
} from "reactstrap";

// core components
import Haz from "../ByModel/Haz";
import Gen from "../ByModel/Gen";
import Val from "../ByModel/Val";
import Pure from "../ByModel/Pure";
import Xt from "../ByModel/Xt";
import Multigen from "../ByModel/Multigen";
import Switch from "../ByModel/Switch";
import Bigen from "../ByModel/Bigen";
import Axgen from "../ByModel/Axgen";
import Ragen from "../ByModel/Ragen";

function Menu(){
  const [plainTabs, setPlainTabs] = useState("1");

  return (
    <>
      <Card className="card-nav-tabs card-plain">
        <CardHeader className="card-header-danger">
          <div>
            <div>
              <Nav>
                <NavItem>
                  <NavLink
                    className={plainTabs === "1" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("1");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">Hazardous Locations</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "2" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("2");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">General Locations</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "3" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("3");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">High Value</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "4" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("4");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">High Purity</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "5" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("5");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">High Temperature</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "6" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("6");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">High-Sensor</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "7" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("7");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">Flow Switch</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "8" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("8");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">Special Meters</p>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </CardHeader>
        <CardBody>
          <TabContent
            activeTab={"plainTabs" + plainTabs}
          >
            <TabPane tabId="plainTabs1">
              <Haz data={
                {
                  page_title: 'Hazardous Locations Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs2">
              <Gen data={
                {
                  page_title: 'General Locations Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs3">
              <Val data={
                {
                  page_title: 'High Value Low Cost Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs4">
              <Pure data={
                {
                  page_title: 'High Purity Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs5">
              <Xt data={
                {
                  page_title: 'High Temperature Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs6">
              <Multigen data={
                {
                  page_title: 'Multiple Sensor Flow Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs7">
              <Switch data={
                {
                  page_title: 'Flow Switches',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs8">
              <Bigen data={
                {
                  page_title: 'Special Case Meters',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}

export default Menu;