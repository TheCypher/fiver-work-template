import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardImg,
  CardFooter,
  CardTitle,
  CardText,
  Row,
  Col,
  FormGroup,
  Label,
  Input
} from "reactstrap";

function CustomTab(){
  return (
    <>
      <Card>
        <CardBody>
          <Row>
            <Col>
              <p>Pipe Orientation</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Horizion</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Vertical</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>

              <p>Flow Direction</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Top to Bottom</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Bottom to Top</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>


              <p>Enclosure Mounting Preference</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Left Side</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Row>
                    <Col>
                      <p>Right Side</p>
                    </Col>
                  </Row>
                  <Input
                    defaultChecked
                    defaultValue="no"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  ></Input>
                  <span className="form-check-sign"></span>
                </Label>
              </FormGroup>
              <p>Display Orientation</p>
              <Button
                color="info"
                size="lg"
                href="#pablo"
                onClick={e => e.preventDefault()}
              >
                Rotate 90
              </Button>
            </Col>
            <Col className="text-center">
              <CardImg alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
}

export default CustomTab;
