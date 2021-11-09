import React , { useState } from "react";

// reactstrap components
import {
  Row,
  Col,
  Button,
} from "reactstrap";
// core components

import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";
import CustomTab from "./CustomTab";
import TotalCard from "./TotalCard";

function Customizer(){
  const [data, setData] = useState(
    {
      step: 1,
      total: 7999,
      pipe_orientation: {
        horizion: false,
        vertical: false,
        horizion_price: 1000,
        vertical_price: 200
      }
    }
  );

  // go back to previous step
  const prevStep = () => {
    const { step } = data;
    setData(prevState => ({
      ...prevState,  step: step - 1
    }));
  }

  // proceed to the next step
  const nextStep = () => {
    const { step } = data;
    setData(prevState => ({
      ...prevState,  step: step + 1
    }));
  }

  // Handle fields change
  // const handleChange = input => e => {
  //   console.log('Show me the data change 1.0 =>', input, e.target.value)

  //   const val = e.target.value;
  //   let total = +data.total + +val;
  //   setData(prevState => ({
  //     ...prevState, [input]: total
  //   }));

  //   console.log('Show me the data change 1.1 =>', data)
  //   // setData(data_1);
  //   // setData({ [input]: e.target.value });
  //   // setData({ [input]: e.target.value });
  // }

  const handleChange = (props) => {
    console.log('Show me the data change 1.0 =>', props)

    const type = props.type
    const value = props.value;

    if(type == 'pipe_orientation'){
      pipe_orientation_change({
        type: type,
        value: value
      })
    }
  }

  const pipe_orientation_change = (pipe_data) => {
    const type = pipe_data.type;
    const value = pipe_data.value;
    if(value == 'horizion' && !data[type][value]){
      let price_other = data[type]['vertical' + '_price']
      let total_1 = +data.total - +price_other;
  
      let price = data[type][value + '_price']
      let total = +total_1 + +price;

      setData(prevState => ({
        ...prevState,
          [type]:{
            ...prevState[type],
              horizion: true,
              vertical: false
          }
      }));

      setData(prevState => ({
        ...prevState, 'total': total
      }));
    }

    if(value == 'vertical' && !data[type][value]){  
      let price_other = data[type]['horizion' + '_price']
      let total_1 = +data.total - +price_other;
  
      let price = data[type][value + '_price']
      let total = +total_1 + +price;
  
      setData(prevState => ({
        ...prevState,
          [type]:{
            ...prevState[type],
              horizion: false,
              vertical: true
          }
      }));
  
      setData(prevState => ({
        ...prevState, 'total': total
      }));
    }
  }

  const { step, total, pipe_orientation } = data;
  const values = { step, total, pipe_orientation }
  
  return (
    <>
      <div className="section section-about-us" style={{ 'background': '#EBF2FF', 'padding-bottom': '50px', 'padding-top': ''}}>
        <MeterCustomizerNavbar />
        <h3 className="title text-center">Meter Customizer</h3>
        <p className="text-center">Description text</p>
        <Col className="ml-auto mr-auto" md="10">
          <Row>
            <Col className="ml-auto mr-auto" md="9">
              <CustomTab
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleChange={ handleChange }
                value={ values }
              />
            </Col>

            <Col className="ml-auto mr-auto" md="3">
              <TotalCard state={data} />
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
        </Col>
      </div>
    </>
  );
}

export default Customizer;