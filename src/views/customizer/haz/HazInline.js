import React, { useEffect } from "react";
import { useParams } from "react-router";

// core components
import MainNavbar from "components/Navbars/MainNavbar";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import Footer from "components/Footers/Footer.js";
import Customizer from "components/Customizer/Customizer";

// product views
import HazInlineProductView from "components/ProductViews/haz/HazInlineProductView";
import HazRInlineProductView from "components/ProductViews/haz/HazRInlineProductView";
import HazFatInlineProductView from "components/ProductViews/haz/HazFatInlineProductView";
import HazFatRInlineProductView from "components/ProductViews/haz/HazFatRInlineProductView";

function HazInline() {
  useEffect(() => {
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

  var { product } = useParams();

  switch (product) {
    case 'haz':
      return (
        <>
          <MainNavbar />
          <div className="wrapper">
            <LandingPageHeader />
            <HazInlineProductView />
            <Customizer />
            <Footer />
          </div>
        </>
      );
      break;

      case 'haz-r':
        return (
          <>
            <MainNavbar />
            <div className="wrapper">
              <LandingPageHeader />
              <HazRInlineProductView />
              <Customizer />
              <Footer />
            </div>
          </>
        );
        break;

      case 'haz-fat':
        return (
          <>
            <MainNavbar />
            <div className="wrapper">
              <LandingPageHeader />
              <HazFatInlineProductView />
              <Customizer />
              <Footer />
            </div>
          </>
        );
        break;

      case 'haz-fat-r':
        return (
          <>
            <MainNavbar />
            <div className="wrapper">
              <LandingPageHeader />
              <HazFatRInlineProductView />
              <Customizer />
              <Footer />
            </div>
          </>
        );
        break;
  
    default:
      return (
        <>
          <MainNavbar />
          <div className="wrapper">
            <LandingPageHeader />
            <HazInlineProductView />
            <Customizer />
            <Footer />
          </div>
        </>
      );
      break;
  }
}

export default HazInline;
