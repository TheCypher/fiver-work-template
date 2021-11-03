import React, { useState } from "react";

// core components
import HelpMeChoosePagination from "./HelpMeChoosePagination";
import Approvals from "./Approvals";
import Purity from "./Purity";
import Temperature from "./Temperature";
import LineSize from "./LineSize";
import Power from "./Power";
import Communication from "./Communication";
import HelpResults from "./HelpResults";

function HelpMeChoose() {
  const [data, setData] = useState(
    {
      step: 1,
      temperature: 125,
      line_size: 0.4,
      power: 12,
      approvals: 'hazardous',
      purity: 'no',
      communication: 'modbus'
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
  const handleChange = input => e => {
    console.log('Show me the data change 1.0 =>', input, e.target.value)

    const val = e.target.value;
    setData(prevState => ({
      ...prevState, [input]: val
    }));

    console.log('Show me the data change 1.1 =>', data)
    // setData(data_1);
    // setData({ [input]: e.target.value });
    // setData({ [input]: e.target.value });
  }

  // const step = data.step;
  const { step, temperature, line_size, power, approvals, purity, communication } = data;
  const values = { temperature, line_size, power, approvals, purity, communication }
  const nowStep = { step }

  console.log('Need to see data 1.0 =>', approvals, purity, power)

  switch (step) {
    case 1:
      return (
        <>
          <p className="nav-product-main-title">Help Me Choose</p>
          <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <HelpMeChoosePagination 
            step={ step }
          />
    
          <div style={{ 'margin-bottom': '100px' }}>
            <Approvals 
              nextStep={ nextStep }
              prevStep={ prevStep }
              handleChange={ handleChange }
              value={ values }
            />
          </div>
        </>
      )
      break;

      case 2:
        return (
          <>
            <p className="nav-product-main-title">Help Me Choose</p>
            <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <HelpMeChoosePagination step={ step } />
      
            <div style={{ 'margin-bottom': '100px' }}>
            <Purity 
              nextStep={ nextStep }
              prevStep={ prevStep }
              handleChange={ handleChange }
              value={ values }
            />
            </div>
          </>
        )
        break;

        case 3:
          return (
            <>
              <p className="nav-product-main-title">Help Me Choose</p>
              <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <HelpMeChoosePagination step={ step } />
        
              <div style={{ 'margin-bottom': '100px' }}>
              <Temperature 
                nextStep={ nextStep }
                prevStep={ prevStep }
                handleChange={ handleChange }
                value={ values }
              />
              </div>
            </>
          )
          break;

          case 4:
            return (
              <>
                <p className="nav-product-main-title">Help Me Choose</p>
                <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <HelpMeChoosePagination step={ step } />
          
                <div style={{ 'margin-bottom': '100px' }}>
                <LineSize 
                  nextStep={ nextStep }
                  prevStep={ prevStep }
                  handleChange={ handleChange }
                  value={ values }
                />
                </div>
              </>
            )
            break;

            case 5:
              return (
                <>
                  <p className="nav-product-main-title">Help Me Choose</p>
                  <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <HelpMeChoosePagination step={ step } />
            
                  <div style={{ 'margin-bottom': '100px' }}>
                  <Power 
                    nextStep={ nextStep }
                    prevStep={ prevStep }
                    handleChange={ handleChange }
                    value={ values }
                  />
                  </div>
                </>
              )
              break;

              case 6:
                return (
                  <>
                    <p className="nav-product-main-title">Help Me Choose</p>
                    <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <HelpMeChoosePagination step={ step } />
              
                    <div style={{ 'margin-bottom': '100px' }}>
                    <Communication 
                      nextStep={ nextStep }
                      prevStep={ prevStep }
                      handleChange={ handleChange }
                      value={ values }
                    />
                    </div>
                  </>
                )
                break;

                case 7:
                  return (
                    <>
                      <p className="nav-product-main-title">Help Me Choose</p>
                      <p className="nav-product-main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      <HelpMeChoosePagination step={ step } />
                
                      <div style={{ 'margin-bottom': '100px' }}>
                      <HelpResults 
                        nextStep={ nextStep }
                        prevStep={ prevStep }
                        handleChange={ handleChange }
                        value={ values }
                      />
                      </div>
                    </>
                  )
                  break;
  
    default:
      break;
  }
}

export default HelpMeChoose;