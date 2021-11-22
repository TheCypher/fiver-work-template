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
function ContactInfo() {
  return (
    <>
      <footer className="footer footer-default footerContactInfo">
        <Container>
          <Row>
            <Col>
              <span className="footerContactInfoTitle">Call Us</span><br />
              <span className="footerContactInfoText">1-800-321-FLOW</span>
              <br />
              <br />

              <span className="footerContactInfoTitle">Email Us</span><br />
              <span className="footerContactInfoText">info@epiflow.com</span><br />
              <span className="footerContactInfoText">sales@epiflow.com</span>
            </Col>

            <Col>
              <span className="footerContactInfoTitle">Business Hours</span><br /><br />
              <Row>
                <Col><span className="footerContactInfoTextGray">Monday - Friday</span></Col>
                <Col><span className="footerContactInfoTextGray">7:30am-5pm PST</span></Col>
              </Row>

              <Row>
                <Col><span className="footerContactInfoTextGray">Saturday & Sunday</span></Col>
                <Col><span className="footerContactInfoTextGray">Closed</span></Col>
              </Row>

              <br />
              <span className="footerContactInfoTextGray">Need to contact us after hours?</span><br />
              <Button
                color="info"
                style={{ 'color': 'white' }}
                size="lg"
                outline
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Send Us a Message
              </Button>
            </Col>
            <Col>
              <span className="footerContactInfoText">Social Media</span><br />
              <span className="footerContactInfoTextGray">Follow EPI for Updates & Announcements</span>
              <br />
              <br />
              <Row>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
                <Col>
                  <img
                    alt="..."
                    className="img-raised footerContactInfoSocialImgs"
                    src={require("assets/img/bg7.jpg").default}
                  ></img>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default ContactInfo;
