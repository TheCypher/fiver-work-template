import React, { useEffect } from "react";
import { useParams } from "react-router";

// core components
import HazCustomizer from "components/Customizer/Views/Haz/HazInline/HazCustomizer";
import HazRCustomizer from "components/Customizer/Views/Haz/HazInline/HazRCustomizer";
import HazFatCustomizer from "components/Customizer/Views/Haz/HazInline/HazFatCustomizer";
import HazFatRCustomizer from "components/Customizer/Views/Haz/HazInline/HazFatRCustomizer";

// product views
import HazProductView from "components/ProductViews/Haz/HazInline/HazProductView";
import HazRProductView from "components/ProductViews/Haz/HazInline/HazRProductView";
import HazFatProductView from "components/ProductViews/Haz/HazInline/HazFatProductView";
import HazFatRProductView from "components/ProductViews/Haz/HazInline/HazFatRProductView";

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
          <HazProductView />
          <HazCustomizer />
        </>
      );
      break;

      case 'haz-r':
        return (
          <>
            <HazRProductView />
            <HazRCustomizer />
          </>
        );
        break;

      case 'haz-fat':
        return (
          <>
            <HazFatProductView />
            <HazFatCustomizer />
          </>
        );
        break;

      case 'haz-fat-r':
        return (
          <>
            <HazFatRProductView />
            <HazFatRCustomizer />
          </>
        );
        break;
  
    default:
      return (
        <>
            <HazProductView />
            <HazCustomizer />
        </>
      );
      break;
  }
}

export default HazInline;
