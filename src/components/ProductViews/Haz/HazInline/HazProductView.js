import React, { useState } from "react";

// core components
import ProductHeader from "components/Headers/ProductHeader";
import ProductViewNavbar from "components/Navbars/ProductViewNavbar";
import ProductView from "components/ProductViews/Components/ProductView";
import ProductDescription from "components/ProductViews/Components/ProductDescription";

function HazProductView(){
  const [pills, setPills] = useState("1");
  const productImage = require('assets/img/epi-bg.png').default;

  const navbarData = {
    product_title: '8700 MPHAZ',
    product_type: 'INLINE FLOW METER'
  }
  
  const productViewData = {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.    ',
    meter_type: 'Inline',
    enclosure: 'Integrated Electronics',
    warranty: '5',
    certifications: 'CE, CSA/CUS, IECEx, KOSHA, ATEX'
  }

  return (
    <>
      <ProductHeader
        productImage={productImage}
      />
      <div className="section section-about-us" style={{ 'background': 'whitesmoke', 'padding-bottom': '50px', 'border-bottom': 'whitesmoke'}}>
        <ProductViewNavbar
          navbarData={navbarData}
          pills={pills}
          setPills={setPills}
        />
        <ProductView
          productViewData={productViewData}
          pills={pills}
        />
      </div>
      <ProductDescription />
    </>
  );
}

export default HazProductView;