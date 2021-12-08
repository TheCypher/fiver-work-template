import React, { useEffect } from "react";
import { useParams } from "react-router";

// core components
import HazCustomizer from "components/Customizer/HazCustomizer";
import HazRCustomizer from "components/Customizer/HazRCustomizer";
import HazFatCustomizer from "components/Customizer/HazFatCustomizer";
import HazFatRCustomizer from "components/Customizer/HazFatRCustomizer";

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
          <HazCustomizer />
        </>
      );
      break;

      case 'haz-r':
        return (
          <>
            <HazRInlineProductView />
            <HazRCustomizer />
          </>
        );
        break;

      case 'haz-fat':
        return (
          <>
            <HazFatInlineProductView />
            <HazFatCustomizer />
          </>
        );
        break;

      case 'haz-fat-r':
        return (
          <>
            <HazFatRInlineProductView />
            <HazFatRCustomizer />
          </>
        );
        break;
  
    default:
      return (
        <>
            <HazInlineProductView />
            <HazCustomizer />
        </>
      );
      break;
  }
}

export default HazInline;
