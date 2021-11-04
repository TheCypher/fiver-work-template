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


function ByApplication() {
  const [pills, setPills] = useState("1");
  return (
    <>
      <div>
        <UncontrolledCollapse toggler="#linkTogglerByApplication">
          <Card>
            <CardBody>
              <ListGroup flush>
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerHaz">
                  <p className="nav-product-menu-outside">Hazardous Locations</p>
                </ListGroupItem>
                <Haz />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerGen">
                  <p className="nav-product-menu-outside">General Locations</p>
                </ListGroupItem>
                <Gen />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerVal">
                  <p className="nav-product-menu-outside">High Value</p>
                </ListGroupItem>
                <Val />
                <ListGroupItem tag="a" href="#collapseExample" id="linkTogglerPure">
                  <p className="nav-product-menu-outside">High Purity</p>
                </ListGroupItem>
                <Pure />
                <ListGroupItem tag="a" href="#" id="linkTogglerXt">
                  <p className="nav-product-menu-outside">High Temperature</p>
                </ListGroupItem>
                <Xt />
                <ListGroupItem tag="a" href="#" id="linkTogglerMultigen">
                  <p className="nav-product-menu-outside">Multi-Sensor</p>
                </ListGroupItem>
                <Multigen />
                <ListGroupItem tag="a" href="#" id="linkTogglerSwitch">
                  <p className="nav-product-menu-outside">Flow Switch</p>
                </ListGroupItem>
                <Switch />
                <ListGroupItem tag="a" href="#" id="linkTogglerBigen">
                  <p className="nav-product-menu-outside">Special Meters</p>
                </ListGroupItem>
                <Bigen />
              </ListGroup>
            </CardBody>
          </Card>
        </UncontrolledCollapse>
      </div>
    </>
  );
}

export default ByApplication;
