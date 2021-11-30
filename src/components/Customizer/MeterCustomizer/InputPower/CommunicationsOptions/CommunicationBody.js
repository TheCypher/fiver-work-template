import React from "react";

import Profibus from "../Profibus";
import Bacnet from "../Bacnet";
import Hart from "../Hart";
import MultiRange from "../MultiRange";
import MultiRangeNoTemp from "../MultiRangeNoTemp";
import Standard from "../Standard";

function CommunicationBody({handleChange, selectedCommunication}){
  switch (selectedCommunication) {
    case 'standard':
        return(
          <Standard
            handleChange={handleChange}
          />
        );
      break;

    case 'multi_range_temp_out':
        return(
          <MultiRange
            handleChange={handleChange}
          />
        );
      break;
        return(
          <MultiRangeNoTemp
            handleChange={handleChange}
          />
        );
      break;

    case 'hart':
        return(
          <Hart
            handleChange={handleChange}
          />
        );
      break;

    case 'bacnet':
        return(
          <Bacnet
            handleChange={handleChange}
          />
        );
      break;

    case 'profibus':
        return(
          <Profibus
            handleChange={handleChange}
          />
        );
      break;

    default:
        return(
          <Standard
            handleChange={handleChange}
          />
        );
      break;
  }

  return(<> </>);
}

export default CommunicationBody;