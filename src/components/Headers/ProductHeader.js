import React from "react";
import { useMediaQuery } from 'react-responsive';

// core components
import MenuHeader from "./MenuHeader";
import MobileMenuHeader from "./MobileMenuHeader";

function ProductHeader({ productImage }) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
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
  
  return (
    <>
      <div className="page-header page-header-small">
        <div
          className="page-header-image"
          style={{
            backgroundImage:
              "url(" + productImage + ")",
          }}
          ref={pageHeader}
        ></div>
        { isMobile? (<MobileMenuHeader />) : (<MenuHeader />)}
      </div>
    </>
  );
}

export default ProductHeader;
