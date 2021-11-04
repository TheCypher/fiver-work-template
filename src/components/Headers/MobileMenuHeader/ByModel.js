import React, { useState } from "react";

// reactstrap components
import{
  Card,
  CardBody,
  ListGroup,
  ListGroupItem,
  UncontrolledCollapse
} from "reactstrap";

// core components
import MenuHeaderFooter from "components/Footers/MenuHeaderFooter";
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


function ByModel() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div>
        <UncontrolledCollapse toggler="#linkToggler,#buttonToggler">
          <Card>
            <CardBody>
              <ListGroup flush>
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerHaz">
                  <p className="nav-product-menu-outside">EPI-HAZ</p>
                </ListGroupItem>
                <Haz />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerGen">
                  <p className="nav-product-menu-outside">EPI-GEN</p>
                </ListGroupItem>
                <Gen />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerVal">
                  <p className="nav-product-menu-outside">EPI-VAL</p>
                </ListGroupItem>
                <Val />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerPure">
                  <p className="nav-product-menu-outside">EPI-PURE</p>
                </ListGroupItem>
                <Pure />
                <ListGroupItem tag="a" href="#" id="linkTogglerXt">
                  <p className="nav-product-menu-outside">EPI-XT</p>
                </ListGroupItem>
                <Xt />
                <ListGroupItem tag="a" href="#" id="linkTogglerMultigen">
                  <p className="nav-product-menu-outside">EPI-MULTIGEN</p>
                </ListGroupItem>
                <Multigen />
                <ListGroupItem tag="a" href="#" id="linkTogglerSwitch">
                  <p className="nav-product-menu-outside">EPI-SWITCH</p>
                </ListGroupItem>
                <Switch />
                <ListGroupItem tag="a" href="#" id="linkTogglerBigen">
                  <p className="nav-product-menu-outside">EPI-BIGEN</p>
                </ListGroupItem>
                <Bigen />
                <ListGroupItem tag="a" href="#" id="linkTogglerAxgen">
                  <p className="nav-product-menu-outside">EPI-AXGEN</p>
                </ListGroupItem>
                <Axgen />
                <ListGroupItem tag="a" href="#" id="linkTogglerRagen">
                  <p className="nav-product-menu-outside">EPI-RAGEN</p>
                </ListGroupItem>
                <Ragen />
              </ListGroup>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default ByModel;
