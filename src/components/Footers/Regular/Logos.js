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
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
                ></img>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                <img
                  alt="..."
                  className="img-raised footerImgLogos"
                  src={require("assets/img/bg7.jpg").default}
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
