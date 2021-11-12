import React from "react";
import StickyBox from "react-sticky-box";

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
  console.log('Show me the main state TotalCard 1.0 =>', props.state.value.total)
  const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  let total = numberWithCommas(props.state.value.total);
  
  return (
    <>
    <StickyBox offsetTop={60} offsetBottom={60}>
      <Card className="text-center" style={{ width: "15rem" }}>
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
    </StickyBox>
    </>
  );
}

export default TotalCard;