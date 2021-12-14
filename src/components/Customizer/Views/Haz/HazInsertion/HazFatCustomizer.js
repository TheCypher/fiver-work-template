import React , { useState } from "react";
import { useMediaQuery } from 'react-responsive';

// reactstrap components
import {
  Row,
  Col
} from "reactstrap";
// core components

import MeterCustomizerNavbar from "components/Navbars/MeterCustomizerNavbar";
import CustomizerPriceFooter from "components/Footers/CustomizerPriceFooter";
import MeterOrientation from "components/Customizer/Haz/HazInsertion/HazFat/MeterOrientation";
import TotalCard from "components/Customizer/Haz/HazInsertion/HazFat/TotalCard";
import MeterHousing from "components/Customizer/Haz/HazInsertion/HazFat/MeterHousing";
import InputPower from "components/Customizer/Haz/HazInsertion/HazFat/InputPower";
import PipeInformation from "components/Customizer/Haz/HazInsertion/HazFat/PipeInformation";
import ApplicationInformation from "components/Customizer/Haz/HazInsertion/HazFat/ApplicationInformation";
import QuestionsOrComments from "components/Customizer/Haz/HazInsertion/HazFat/QuestionsOrComments";
import MountingRequirements from "components/Customizer/Haz/HazInsertion/HazFat/MountingRequirements";
import FlowBody from "components/Customizer/Haz/HazInsertion/HazFat/FlowBody";
import Enhancements from "components/Customizer/Haz/HazInsertion/HazFat/Enhancements";
import ProcessParameters from "components/Customizer/Haz/HazInsertion/HazFat/ProcessParameters";
import ProbeSelection from "components/Customizer/Haz/HazInsertion/HazFat/ProbeSelection";


function HazFatCustomizer(){
  const [data, setData] = useState(
    {
      step: 1,
      total: {
        base: 3020,
        air: 0,
        pipe_orientation: 0,
        sensors:0,
        calibration_ctp_prices:0,
        input_power: 0,
        sensors_shield:275
      },
      warranty: {
        warranty: 0
      },
      meter_orientation: {
        pipe_orientation: {
          horizion: false,
          vertical: true,
        },
        flow_direction_vertical: {
          top_to_bottom: true,
          bottom_to_top: false,
        },
        flow_direction_horizontal: {
          left_to_right: true,
          right_to_left: false
        },
        enclosure_mounting_preference_vertical: {
          left_side: true,
          right_side: false,
        },
        enclosure_mounting_preference_horizontal: {
          above_pipe: true,
          below_pipe: false
        }
      },
      meter_housing: {
        display:{
          display: true,
          no_display: false 
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
          2: false,
          2.5: false,
          3: false,
          4: false
        },
        pipe_size_other: {
          size: false
        },
        pipe_length_other: {
          length: false
        },
        pipe_inner_diameter_other: {
          diameter: false
        },
        schedule:{
          40: true
        },
        inner_diameter:{
          idk: true
        },
        duct_shape:{
          rectangular: true,
          round: false
        },
        duct_rectangular:{
          height: false,
          width: false,
          dimention: false,
          wall: false,
          probe: false
        },
        duct_round:{
          outer: false,
          inner: false,
          units: false,
          wall: false
        },
        tube:{
          outer: false,
          inner: false,
          units: false,
          wall: false
        }
      },
      application_information: {
        application:{
          application_type: false
        },
        gas:{
          Air: false, 
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
          Air: 220, 
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
        application_options: {
          compressed_air: false,
          hvac: false,
          landfill_gas: false,
          natural_gas: false,
          waste_water: false,
          flue_gas: false,
          flare: false,
          other: false
        },
        application_options_other: {
          application: false
        },
        reference_conditions: {
          temperature_70: true,
          temperature_0: false,
          other: false
        },
        other_temperature: {
          temperature_21: false,
          temperature_20: false, 
          temperature_0_Hg: false,
          temperature_20kPa: false,
          temperature_0ׄ_1_Bar: false,
          temperature_60_ATM:false,
          temperature_60_Hg:false
        }
      },
      probe_section: {
        probe_width: {
          width: false
        },
        probe_length: {
          length: false
        }
      },
      questions_or_comments: {
        input_options: {
          from_email: false,
          contact_option: false,
          comments: false
        },
        input_values: {
          from_email: '',
          contact_option: '',
          comments: ''
        }
      },
      flow_body:{
        sensors:{
          cer: false,
          sss: true,
          has: false          
        },
        sensors_prices:{
          cer: 0,
          sss: 0,
          has: 1320     
        },
        sensors_shield:{
          standard: false,
          rod: false,
          sheild: false
        },
        sensors_shield_prices:{
          standard: 0,
          rod: 275,
          sheild: 275
        }
      },
      enhancements:{
        certificates_origin:{
          orgin: false,
          none: true
        },
        certificates_origin_prices:{
          orgin: 125,
          none: 0
        },
        certificates_oxygen:{
          oxygen: false,
          none: true,
        },
        certificates_oxygen_prices:{
          oxygen: 395,
          none: 0,
        },
        certificates_leak:{
          leak: false,
          none: true
        },
        certificates_leak_prices:{
          leak: 125,
          none: 0
        },
        certificates_welding:{
          welding: false,
          none: true
        },
        certificates_welding_prices:{
          welding: 750,
          none: 0
        },
        calibration_ctp:{
          ctp: false,
          none: true
        },
        calibration_ctp_prices:{
          ctp: 225,
          none: 0
        },
        calibration_left_curve:{
          left_curve: false,
          none: true
        },
        calibration_left_curve_prices:{
          left_curve: 225,
          none: 0
        },
        test_pmi:{
          pmi: false,
          none: true
        },
        test_pmi_prices:{
          pmi: 250,
          none: 0
        },
        test_liquid:{
          liquid: false,
          none: true,
        },
        test_liquid_prices:{
          liquid: 250,
          none: 0,
        },
        test_welds:{
          welds: false,
          none: true
        },
        test_welds_prices:{
          welds: 250,
          none: 0
        },
        test_wetted:{
          wetted: false,
          none: true
        },
        warranty:{
          none: true,
          1:false,
          2: false,
          3: false
        },
        warranty_prices:{
          none: 0,
          1: 10,
          2: 20,
          3: 30
        },
        stainless:{
          stainless: false,
          none: true
        },
        stainless_prices:{
          stainless: 45,
          none: 0
        },
        electropolish:{
          none: false,
          sensor_window: false,
          probe_sensor_window: true
        },
        electropolish_prices:{
          none: 0,
          sensor_window: 260,
          probe_sensor_window: 260
        }
      },
      process_parameters: {
        flow_rate_mininum:{
          minimum: false
        },
        flow_rate_maximum:{
          maximum: 0
        },
        flow_rate_optimal:{
          optimal: false
        },
        flow_rate_units:{
          units: false
        },
        gas_mininum:{
          minimum: false
        },
        gas_maximum:{
          maximum: false
        },
        gas_optimal:{
          optimal: false
        },
        gas_units:{
          units: false
        },
        ambient_mininum:{
          minimum: false
        },
        ambient_maximum:{
          maximum: false
        },
        ambient_optimal:{
          optimal: false
        },
        ambient_units:{
          units: false
        },
        process_mininum:{
          minimum: false
        },
        process_maximum:{
          maximum: false
        },
        process_optimal:{
          optimal: false
        },
        process_units:{
          units: false
        }
      },
      input_power_communication: {
        input_power: {
          vdc_12_18: false,
          vdc_18_24: false,
          vac_105_120: false,
          vac_210_240: false
        },
        input_power_prices: {
          vdc_12_18: 0,
          vdc_18_24: 0,
          vac_105_120: 204,
          vac_210_240: 204
        },
        communications_options: {
          standard: false,
          multi_range_temp_out: false,
          multi_range_no_temp: false,
          hart: false,
          bacnet: false,
          profibus: false
        },
        standard_ma_flow:{
          self: true,
          isolated: false
        },
        standard_vdc_flow:{
          5: true,
          10: false
        },
        standard_vdc_temp:{
          5: true,
          10: false
        },
        multi_ma_flow:{
          self: true,
          isolated: false
        },
        multi_vdc_flow:{
          5: true,
          10: false
        },
        multi_vdc_temp:{
          5: true,
          10: false
        },
        hart_ma_flow:{
          self: true,
          isolated: false
        },
        hart_vdc_flow:{
          5: true,
          10: false
        },
        hart_vdc_temp:{
          5: true,
          10: false
        },
        bacnet_ma_flow:{
          self: true,
          isolated: false
        },
        bacnet_vdc_flow:{
          5: true,
          10: false
        },
        bacnet_vdc_temp:{
          5: true,
          10: false
        },
        profibus_ma_flow:{
          self: true,
          isolated: false
        },
        profibus_vdc_flow:{
          5: true,
          10: false
        },
        profibus_vdc_temp:{
          5: true,
          10: false
        }
      },
      mounting_requirements:{
        mounting_types:{
          mnpt: false,
          butt: false,
          flange: true
        },
        flange_type: {
          150: false,
          300: false
        },
        flange_type_other: {
          size: false
        }
      }
    }
  );

  const [pipeInfoPipeSize, setPipeInfoPipeSize] = useState(0.25);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const handleChange = (props) => {
    console.log('Show me the data change 1.0 =>', props)

    const type = props.type
    const values = props.values;
    const section = props.section;
    const price_effect = props.price_effect;
    var price_effect_warranty = false;

    if(props.price_effect_warranty) {
      makeChange({
        type: type,
        value: values[0],
        section: section,
        values: values,
        price_effect,
        price_effect_warranty: props.price_effect_warranty
      })
    } else if(props.option_value && props.text_input){
      const option_value = props.option_value;
      const text_input = props.text_input;
      makeChangeText({
        type: type,
        value: option_value,
        section: section,
        values: values,
        price_effect,
        text_input,
        price_effect_warranty: price_effect_warranty
      })
    } else if(props.option_value) {
      const option_value = props.option_value;
      makeChange({
        type: type,
        value: option_value,
        section: section,
        values: values,
        price_effect,
        price_effect_warranty: price_effect_warranty
      })
    } else {
      makeChange({
        type: type,
        value: values[0],
        section: section,
        values: values,
        price_effect,
        price_effect_warranty: price_effect_warranty
      })
    }
  }

  const makeChange = (props) => {
    const { type, value, values, section, price_effect, price_effect_warranty } = props;

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
              [type]: valuePrice
            }
        })); 
      }

      if(price_effect_warranty){
        const pricesObj = data[section][type + '_prices'];
        const valuePrice = pricesObj[value];
        console.log('Show me the data change value price 2.0.1 =>', pricesObj, valuePrice)
        setData(prevState => ({
          ...prevState,
            ['warranty']:{
              ...prevState['warranty'],
              [type]: valuePrice
            }
        })); 
      }
      console.log('Show me the data change 2.0 =>', data, value)
    }
  }

  const makeChangeText = (props) => {
    const { type, value, values, section, price_effect } = props;

    const valuesObj = values.reduce((acc,curr)=> (acc[curr]=false,acc),{});

    if(props.text_input){
      valuesObj[values[0]] = value;
    }

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
            [type]: valuePrice
          }
      })); 
    }
    console.log('Show me the data change 2.0 =>', data, value)
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

  const warrantyPercentage = (total, warranty) => {
    const percentage = (total / 100) * warranty;
    return(parseFloat(total + percentage));
  }

  const ShowFooter = (props) => {
    if (isMobile) {
      return (<CustomizerPriceFooter state={props} />)
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

  const total_bare = sum(data.total);
  const total = warrantyPercentage(total_bare, data.warranty.warranty);
  const { step, pipe_orientation } = data;
  const values = { step, total, pipe_orientation }
  
  return (
    <>
      <div className={ !isMobile? ' section section-about-us CustomizerPage' : ' section section-about-us CustomizerPageMobile'}>
        <MeterCustomizerNavbar />
        <h3 className="title text-center">Meter Customizer</h3>
        <p className="text-center">Description text</p>
        <Col className="ml-auto mr-auto" md="10">
          <Row>
            <Col className="ml-auto mr-auto" md="9">
              <MeterOrientation
                handleChange={ handleChange }
                value={ values }
              />

              <MeterHousing
                handleChange={ handleChange }
                value={ values }
              />

              <ProbeSelection
                handleChange={ handleChange }
                value={ values }
              />

              <PipeInformation
                handleChange={ handleChange }
                setPipeInfoPipeSize={ setPipeInfoPipeSize }
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

              <MountingRequirements
                handleChange={ handleChange }
                pipeInfoPipeSize={ pipeInfoPipeSize }
                value={ values }
              />

              <ProcessParameters
                handleChange={ handleChange }
                value={ values }
                customizerData={data}
              />

              <FlowBody
                handleChange={ handleChange }
                value={ values }
              />

              <Enhancements
                handleChange={ handleChange }
                value={ values }
              />

              <QuestionsOrComments
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

export default HazFatCustomizer;