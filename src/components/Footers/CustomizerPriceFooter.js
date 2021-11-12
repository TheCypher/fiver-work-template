/*eslint-disable*/
import React, { useEffect, useState } from "react";

// reactstrap components
import { Container, Button, Row, Col } from "reactstrap";

// core components

function CustomizerPriceFooter(props) {
  const [showNav, setShowNav] = useState(1);

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 2000 ||
        document.body.scrollTop > 2000
      ) {
        setShowNav(1);
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setShowNav(0);
      }
    };
    
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let total = numberWithCommas(props.state.value.total);

  if(showNav > 0){
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
  } else {
    return(<> </>);
  }
}

export default CustomizerPriceFooter;
