/*eslint-disable*/
import React from "react";

// reactstrap components
import { 
  Container,
  Row,
  Col,
  Button,
  Input,
  InputGroup,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";

// core components

function Subscribe() {
  return (
    <>
      <footer className="footer footer-default" style={{ 'background-color': '#012E82', 'height': '302px', 'color': 'white'}}>
        <Row>
          <Col></Col>
          <Col className="text-center my-auto col-6">
            <span style={{ 'color': 'white', 'font-size': '28px'}}>Stay Up to Date</span><br />
            <span>Get the latest news and product updates from the EPI team periodically. Don’t worry,</span><br />
            <span>we hate spam too!</span>
            <InputGroup>
              <Input
                style={{
                  'background-color': 'white',
                  'height': '48px',
                  'width': '200px',
                  'border': '1px solid #E3E3E3',
                  'border-radius': '6px',
                  'border-top-right-radius': '0px',
                  'border-bottom-right-radius': '0px',
                  'border-right': '0px',
                  'margin-right': '0px',
                }}
              />
              <Button
              className="my-auto primary"
              color="info"
              size="lg"
              style={{
                'border-radius': '6px',
                'border-top-left-radius': '0px',
                'border-bottom-left-radius': '0px',
                'border-left': '0px',
                'margin-left': '0px',
              }}
              >
                Subscribe
              </Button>
            </InputGroup>
          </Col>
          <Col></Col>
        </Row>
      </footer>
    </>
  );
}

export default Subscribe;
