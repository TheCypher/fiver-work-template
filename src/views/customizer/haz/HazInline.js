import React, { useEffect } from "react";
import { useParams } from "react-router";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
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
          <HazInlineProductView />
          <Customizer />
        </>
      );
      break;

      case 'haz-r':
        return (
          <>
            <HazRInlineProductView />
            <Customizer />
          </>
        );
        break;

      case 'haz-fat':
        return (
          <>
            <HazFatInlineProductView />
            <Customizer />
          </>
        );
        break;

      case 'haz-fat-r':
        return (
          <>
            <HazFatRInlineProductView />
            <Customizer />
          </>
        );
        break;
  
    default:
      return (
        <>
            <HazInlineProductView />
            <Customizer />
        </>
      );
      break;
  }
}

export default HazInline;
