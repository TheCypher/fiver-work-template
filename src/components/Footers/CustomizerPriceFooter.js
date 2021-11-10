/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";

// core components

function CustomizerPriceFooter(props) {
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let total = numberWithCommas(props.state.total);

  return (
    <>
      <footer className="footer footer-default stickyFooter text-center">
        <Container>
          <Row>
            <Col>
              <strong style={{ "font-size": "35px"}}>${ total }</strong>
            </Col>
            <Col>
              <Button
                  color="white"
                  outline
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Save Quote
                </Button>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default CustomizerPriceFooter;
