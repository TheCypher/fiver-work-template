import React from "react";

// reactstrap components
import {
  TabContent,
  TabPane,
  Row,
  Col,
  Button,
} from "reactstrap";

import ImageViewer from "components/Customizer/ImageViewer";

function ProductView({productViewData, pills}){
  return(
    <>
      <TabContent className="gallery" activeTab={"pills" + pills}>
        <TabPane tabId="pills1">
          <Col className="ml-auto mr-auto" md="10">
            <Row className="collections">
              <Col md="6" style={{'margin-bottom': '20px'}}>
                <h3><strong>{ productViewData.title }</strong></h3>
                <p>{ productViewData.description }</p>
                <Row style={{ 'margin-top': '40px', 'margin-bottom': '10px'}}>
                  <Col className="col-1" style={{'font-size': '2.3em'}}>
                    <i className="now-ui-icons objects_globe"></i>
                  </Col>
                  <Col className="col-4">
                    METER TYPE <br />
                    <strong>{ productViewData.meter_type }</strong>
                  </Col>

                  <Col className="col-1" style={{'font-size': '2.3em'}}>
                    <i className="now-ui-icons objects_globe"></i>
                  </Col>
                  <Col className="col-4">
                    ENCLOSURE <br /> 
                    <strong>{ productViewData.enclosure }</strong>
                  </Col>
                </Row>

                <Row>
                  <Col className="col-1" style={{'font-size': '2.3em'}}>
                    <i className="now-ui-icons objects_globe"></i>
                  </Col>
                  <Col className="col-4">
                    WARRANTY <br /> 
                    <strong>{ productViewData.warranty } Years</strong>
                  </Col>

                  <Col className="col-1" style={{'font-size': '2.3em'}}>
                    <i className="now-ui-icons objects_globe"></i>
                  </Col>
                  <Col className="col-6">
                    CERTIFICATIONS <br /> 
                    <strong>{ productViewData.certifications }</strong>
                  </Col>
                </Row>

                <Row style={{ 'margin-top': '10px', 'margin-bottom': '10px'}}>
                  <Col className="col-5"><Button color="info">Customize Your Meter</Button></Col>
                  <Col className="col-6 my-auto"><a href="#pablo">Find a Representative Near You</a></Col>
                </Row>

                <Row>
                  <Col className="col-6">Not sure which meter is right for you?</Col>
                  <Col className="col-3"><a href="#pablo">Help me choose.</a></Col>
                </Row>
              </Col>
              <Col md="6">
                <ImageViewer />
              </Col>
            </Row>
          </Col>
        </TabPane>
      </TabContent>
    </>
  );
}

export default ProductView;