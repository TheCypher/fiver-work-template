import React, { useState } from "react";

import { Button } from "reactstrap";

function CustomOrder() {

  return (
    <>
      <p className="nav-product-main-title">Custom Order a Meter</p>
      <p className="nav-product-main-description">We offer many diffrent configurations, and can meet most application requirements.</p>

      <div className="text-center" style={{ 'margin-bottom': '100px' }}>
        <p className="nav-product-main-title">Request a custom meter configuration below.</p>
        <Button color="info" style={{ 'font-size': '16px' }}>Get a Quote</Button>
      </div>
    </>
  )
}

export default CustomOrder;