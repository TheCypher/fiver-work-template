import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NewNavbar from "components/Navbars/NewNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import ProductView from "components/Customizer/ProductView";
import DefaultFooter from "components/Footers/DefaultFooter.js";
import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";

function CustomerizerPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);

  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <NewNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <ProductView />
        <DefaultFooter />
      </div>
    </>
  );
}

export default CustomerizerPage;
