import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardText
} from "reactstrap";

function TotalCard(props){
  // console.log('Show me the main state 1.0 =>', props.state.total)
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let total = numberWithCommas(props.state.total);
  
  return (
    <>
      <Card className="text-center" style={{ width: "15rem" }}>
        <CardImg alt="..." src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" top></CardImg>
        <CardBody>
          <CardTitle tag="h5">Total Cost</CardTitle>
          <CardTitle tag="h3" style={{ "color": "#0A60FF" }}><strong>${ total }</strong></CardTitle>
          <CardText>
            The price listed is for the meter with the current configuration.
          </CardText>
          <Button
            color="info"
            size="lg"
            outline
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            Save Quote
          </Button>
        </CardBody>
      </Card>
    </>
  );
}

export default TotalCard;