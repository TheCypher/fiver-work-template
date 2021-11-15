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
import ApplicationInformation from "./MeterCustomizer/ApplicationInformation";


function Customizer(){
  const [data, setData] = useState(
    {
      step: 1,
      total: {
        base: 3020,
        air: 0,
        pipe_orientation: 0
      },
      meter_orientation: {
        pipe_orientation: {
          horizion: false,
          vertical: true,
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
      },
      application_information: {
        gas:{
          Air: true, 
          Argon: false,
          Chlorine: false,
          Blast_Furnace_Gas: false,
          BioGas: false,
          Landfill_Gas: false,
          Ethylene: false,
          Ethane: false,
          Propane: false,
          Liquid_Propane_Gas: false,
          Butane_Gas: false,
          Benzene: false,
          Methane: false,
          Methane_Helium_Mix: false,
          Methane_Nitrogen_Mix: false,
          Carbon_Monoxide: false,
          Carbon_Dioxide: false,
          Hydrogen: false,
          Hydrogen_Nitrogen_Mix: false,
          Helium: false,
          Mix_Gas: false,
          Flare_gas: false,
          Flue_Gas: false,
          Nitrogen: false,
          Natural_Gas: false,
          Ammonia: false,
          Oxygen: false,
          O3: false,
          SNGPL_Gas: false,
          SSGCL_Gas: false,
          MARI_Gas: false
        },
        gas_prices:{
          Air: 0, 
          Argon: 440,
          Chlorine: 440,
          Blast_Furnace_Gas: 693,
          BioGas: 693,
          Landfill_Gas: 693,
          Ethylene: 858,
          Ethane: 858,
          Propane: 473,
          Liquid_Propane_Gas: 474.10,
          Butane_Gas: 474.10,
          Benzene: 660,
          Methane: 275,
          Methane_Helium_Mix: 1177,
          Methane_Nitrogen_Mix: 682,
          Carbon_Monoxide: 341,
          Carbon_Dioxide: 341,
          Hydrogen: 495,
          Hydrogen_Nitrogen_Mix: 715,
          Helium: 825,
          Mix_Gas: 693,
          Flare_gas: 693,
          Flue_Gas: 220,
          Nitrogen: 220,
          Natural_Gas: 275,
          Ammonia: 275,
          Oxygen: 220,
          O3: 220,
          SNGPL_Gas: 275,
          SSGCL_Gas: 275,
          MARI_Gas: 275
        },
        condensing_moisture: {
          yes: false,
          no: true
        },
        reference_conditions: {
          temperature_60: false,
          temperature_70: false,
          temperature_0: false
        },
        other_temperature: {
          temperature_70: false,
          temperature_21: false,
          temperature_20: false, 
          temperature_0_Bar: false,
          temperature_0_Hg: false,
          temperature_20kPa: false,
          temperature_0ׄ_1_Bar: false,
          temperature_60_ATM:false
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
        const valuePrice = pricesObj[value];
        console.log('Show me the data change value price 2.0 =>', pricesObj, valuePrice)
        setData(prevState => ({
          ...prevState,
            ['total']:{
              ...prevState['total'],
              type: valuePrice
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

              <ApplicationInformation
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