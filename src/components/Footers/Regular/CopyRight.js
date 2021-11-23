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
import white_logo from  'assets/img/logo_white.svg';


function CopyRight() {
  return (
    <>
      <footer className="footer footer-default footerBlack">
        <Container>
          <span className="footerBlackText">© 1988-2021 Eldridge Products, Inc. All Rights Reserved.  465 Reservation Rd., Marina, CA 93933</span><br />
          <nav>
            <ul>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  href="#"
                  target="_blank"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </nav>
          <div className="copyright" id="copyright">
            <span className="footerBlackCopyright">Proudly Designed & Manufactured in the USA</span>
            <img
              style={{ 'height': '19.51px', 'margin-left': '5px'}}
              alt="..."
              className="img-raised footerContactInfoSocialImgs"
              src={ white_logo }
            ></img>
            <br />
          </div>
        </Container>
      </footer>
    </>
  );
}

export default CopyRight;
