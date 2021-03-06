import React, { useState } from "react";

// core components
import ProductHeader from "components/Headers/ProductHeader";
import ProductView from "components/ProductViews/Components/ProductView";
import ProductDescription from "components/ProductViews/Components/ProductDescription";

function ExamplePage(){
  const [pills, setPills] = useState("1");
  const productImage = require('assets/img/epi-bg.png').default;
  
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
      <div className="section section-about-us grayBody">
        <ProductView
          productViewData={productViewData}
          pills={pills}
        />
      </div>
      <ProductDescription />
    </>
  );
}

export default ExamplePage;