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
import PipeInformation from "./MeterCustomizer/PipeInformation";


function Customizer(){
  const [data, setData] = useState(
    {
      step: 1,
      total: {
        base: 3020
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
      },
      pipe_infornation: {
        type: {
          pipe: true,
          duct: false,
          tube: false
        },
        pipe_standard: {
          ansi: true,
          jis: false,
          din: false
        },
        pipe_size: {
          '1.5': true,
          '0.75': false,
          '1': false,
          '1_0.25': false,
          '1_1.5': false,
          '2': false,
          '2_1.5': false,
          '3': false,
          '4': false
        },
        schedule:{
          40: true
        },
        inner_diameter:{
          idk: true
        }
      }
    }
  );

  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const handleChange = (props) => {
    console.log('Show me the data change 1.0 =>', props)

    const type = props.type
    const values = props.values;
    const section = props.section;
    const price_effect = props.price_effect;

    if(props.option_value){
      const option_value = props.option_value;
      makeChange({
        type: type,
        value: option_value,
        section: section,
        values: values,
        price_effect
      })
    } else {
      makeChange({
        type: type,
        value: values[0],
        section: section,
        values: values,
        price_effect
      })
    }
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
                handleChange={ handleChange }
                value={ values }
              />

              <MeterHousing
                handleChange={ handleChange }
                value={ values }
              />

              <PipeInformation
                handleChange={ handleChange }
                value={ values }
              />

              <InputPower
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