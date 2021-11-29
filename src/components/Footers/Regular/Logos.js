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

function Logos() {
  return (
    <>
      <footer className="footer footer-default">
        <Container>
          <Row className="footerLogosContainer">
          <Nav>
            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_3.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_4.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_5.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_9.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_6.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_7.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_8.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap_2.png").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/footer_assets/certificates/Bitmap.png").default}
                ></img>
              </NavLink>
            </NavItem>
          </Nav>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Logos;
