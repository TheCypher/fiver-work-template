/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function MenuHeaderFooter() {
  return (
    <>
      <footer className="footer footer-header-menu" style={{ 'padding': '14px'}}>
        <Container>
          <div className="text-center">
            <a href="#pablo" style={{ 'color': 'white'}}>
              <strong>View All Products</strong>
            </a>
            .
          </div>
        </Container>
      </footer>
    </>
  );
}

export default MenuHeaderFooter;
