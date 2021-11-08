import React from "react";
import { useMediaQuery } from 'react-responsive';


// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { UncontrolledCollapse, CardBody, Card } from "reactstrap";

// core components
import MenuHeader from "./MenuHeader";
import MobileMenuHeader from "./MobileMenuHeader";

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  console.log('Show me screen size change =>', isMobile)

  const ShowMenus = () => {
    if (isMobile) {
      return <MobileMenuHeader />
    } else {
      return <MenuHeader />
    }
  }
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/epi-bg.png").default + ")",
          }}
          ref={pageHeader}
        ></div>

        <ShowMenus />
      </div>
    </>
  );
}

export default LandingPageHeader;
