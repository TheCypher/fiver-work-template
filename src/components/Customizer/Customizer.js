import React , { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  Row,
  Col,
  Button,
} from "reactstrap";
// core components

import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";
import CustomizerPriceFooter from "components/Footers/CustomizerPriceFooter";
import PipeOrientation from "./MeterCustomizer/PipeOrientation";
import TotalCard from "./MeterCustomizer/TotalCard";
import MeterHousing from "./MeterCustomizer/MeterHousing";
import InputPower from "./MeterCustomizer/InputPower";


function Customizer(){
  const [data, setData] = useState(
    {
      step: 1,
      total: {
        base: 7000
      },
      meter_orientation: {
        pipe_orientation: {
          horizion: false,
          vertical: true,
        },
        pipe_orientation_prices: {
          horizion_price: 0,
          vertical_price: 2000
        },
        flow_direction: {
          top_to_bottom: true,
          bottom_to_top: false,
        },
        enclosure_mounting_preference: {
          left_side: true,
          right_side: false,
        }
      }
    }
  );

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

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

  const handleChange = (props) => {
    console.log('Show me the data change 1.0 =>', props)

    const type = props.type
    const values = props.values;
    const section = props.section;
    const price_effect = props.price_effect;

    makeChange({
      type: type,
      value: values[0],
      section: section,
      values: values,
      price_effect
    })
  }

  const makeChange = (props) => {
    const { type, value, values, section, price_effect } = props;

    const valuesObj = values.reduce((acc,curr)=> (acc[curr]=false,acc),{});

    if(!data[section][type][value]){
      valuesObj[value] = true;

      setData(prevState => ({
        ...prevState,
          [section]:{
            ...prevState[section],
              [type]: {
                ...prevState[type],
                valuesObj
              }
          }
      }));

      if(price_effect){
        const pricesObj = data[section][type + '_prices'];
        const valuePrice = pricesObj[value + '_price'];
        setData(prevState => ({
          ...prevState,
            ['total']:{
              ...prevState['total'],
              pipe_orientation: valuePrice
            }
        })); 
      }
      console.log('Show me the data change 2.0 =>', data)
    }
  }

  const sum = (obj) => {
    var sum = 0;
    for( var el in obj ) {
      if( obj.hasOwnProperty( el ) ) {
        sum += parseFloat( obj[el] );
      }
    }
    return sum;
  }

  const ShowFooter = (props) => {
    if (isMobile) {
      return <CustomizerPriceFooter state={props} />
    } else {
      return(<> </>)
    }
  }

  const ShowTotalCard = (props) => {
    if (isMobile) {
      return (<> </>)
    } else {
      return <TotalCard state={props} />
    }
  }

  const total = sum(data.total);
  const { step, pipe_orientation } = data;
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
              <PipeOrientation
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleChange={ handleChange }
                value={ values }
              />

              <MeterHousing
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleChange={ handleChange }
                value={ values }
              />

              <InputPower
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleChange={ handleChange }
                value={ values }
              />
            </Col>

            <Col className="ml-auto mr-auto" md="3">
              <ShowTotalCard value={values} />
            </Col>
          </Row>
          <div className="separator separator-primary"></div>
        </Col>
        <ShowFooter value={values} />
      </div>
    </>
  );
}

export default Customizer;