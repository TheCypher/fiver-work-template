import React from "react";

import { Input } from "reactstrap";

function CommunicationsOptions({ MakeChangeDropdown, selectedPower }){

  console.log('Show me CommunicationsOptions 1.0 =>', selectedPower);
  
  const Options = () => {
    if( selectedPower === 'vdc_12_18'){
      return(
        <>
          <option value="standard">Standard (MODBUS RTU)</option>
          <option value="multi_range_temp_out">Multi-Range + Temp Out</option>
          <option value="multi_range_no_temp">Multi-Range + No Temp</option>
          <option value="bacnet">BACnet</option>
        </>
      )
    } else {
      return(
        <>
          <option value="standard">Standard (MODBUS RTU)</option>
          <option value="multi_range_temp_out">Multi-Range + Temp Out</option>
          <option value="multi_range_no_temp">Multi-Range + No Temp</option>
          <option value="hart">HART</option>
          <option value="bacnet">BACnet</option>
          <option value="profibus">Profibus</option>
        </>
      )
    }
    
  }

  return(
    <>
      <Input
        className="epiInputSize"
        id="exampleFormControlSelect1"
        type="select"
        onChange={ (e) => MakeChangeDropdown({
          section: 'input_power_communication',
          type: 'communications_options',
          values: [
            'standard',
            'multi_range_temp_out',
            'multi_range_no_temp',
            'hart',
            'bacnet',
            'profibus'
          ],
          price_effect: false,
          change_effect: 'communications',
          option: e,
        }, e)}
      >
        <option value="" selected disabled>Select Communication Options</option>
        <Options />
      </Input>
    </>
  )
}

export default CommunicationsOptions;