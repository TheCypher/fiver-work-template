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
import Haz from "./Haz";
import Gen from "./Gen";
import Val from "./Val";
import Pure from "./Pure";
import Xt from "./Xt";
import Multigen from "./Multigen";
import Switch from "./Switch";
import Bigen from "./Bigen";
import Axgen from "./Axgen";
import Ragen from "./Ragen";

function Menu(props){
  let page_data = props.data
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
                    <p className="nav-product-menu-inside">EPI-HAZ</p>
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
                    <p className="nav-product-menu-inside">EPI-GEN</p>
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
                    <p className="nav-product-menu-inside">EPI-VAL</p>
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
                    <p className="nav-product-menu-inside">EPI-PURE</p>
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
                    <p className="nav-product-menu-inside">EPI-XT</p>
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
                    <p className="nav-product-menu-inside">EPI-MULTIGEN</p>
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
                    <p className="nav-product-menu-inside">EPI-SWITCH</p>
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
                    <p className="nav-product-menu-inside">EPI-BIGEN</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "9" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("9");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">EPI-AXGEN</p>
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink
                    className={plainTabs === "10" ? "active" : ""}
                    href="#pablo"
                    onClick={e => {
                      e.preventDefault();
                      setPlainTabs("10");
                    }}
                    style={{ 'padding': '0.4rem' }}
                  >
                    <p className="nav-product-menu-inside">EPI-RAGEN</p>
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
                  page_title: 'EPI-HAZ',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs2">
              <Gen data={
                {
                  page_title: 'EPI-GEN',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              }/>
            </TabPane>
            <TabPane tabId="plainTabs3">
              <Val data={
                {
                  page_title: 'EPI-VAL',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs4">
              <Pure data={
                {
                  page_title: 'EPI-PURE',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs5">
              <Xt data={
                {
                  page_title: 'EPI-XT',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs6">
              <Multigen data={
                {
                  page_title: 'EPI-MULTIGEN',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs7">
              <Switch data={
                {
                  page_title: 'EPI-SWITCH',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs8">
              <Bigen data={
                {
                  page_title: 'EPI-BIGEN',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              } />
            </TabPane>
            <TabPane tabId="plainTabs9">
              <Axgen data={
                {
                  page_title: 'EPI-AXGEN',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              }/>
            </TabPane>
            <TabPane tabId="plainTabs10">
              <Ragen data={
                {
                  page_title: 'EPI-RAGEN',
                  page_description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                }
              }/>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    </>
  );
}

export default Menu;