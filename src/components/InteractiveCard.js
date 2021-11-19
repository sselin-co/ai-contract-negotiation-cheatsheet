import Card from "./Card";
import { useState } from "react";

const InteractiveCard = (props) => {
  // Set default state of the output card
  const [value, setValue] = useState(
    "Start tuning the sliders to your situation to get personalized contract provision statements for your situation."
  );
  // Set values for the sliders
  const [dataVal, setdataVal] = useState(50);
  const [modelVal, setmodelVal] = useState(50);
  const [indemnityVal, setIndemnityVal] = useState(50);
  const [liabilityVal, setliabilityVal] = useState(50);
  // Set the output card's text based on the sliders' values
  const mutateOutput = () => {
    // if (dataVal >= 70 && modelVal >= 70 && indemnityVal >= 70) {
    //   setValue(
    //     "Your contract has high liability, ownership of product, and indemnity. Dolor tempor laboris eiusmod labore pariatur."
    //   );
    // } else if (dataVal <= 30) {
    //   setValue(
    //     "This is considered low liability. Cupidatat ipsum sint fugiat velit voluptate in irure sint."
    //   );
    // } else if (dataVal >= 70) {
    //   setValue(
    //     "This is considered high liability. Cupidatat ipsum sint fugiat velit voluptate in irure sint."
    //   );
    // }
    if (dataVal <= 70 && dataVal >= 30) {
      setValue(
        "Data - Medium Risk: Limitations of Liability. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL LICENSEE BE LIABLE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER LEGAL THEORY, FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES; OR LOST PROFITS, PERSONAL INJURY, FINES, FEES, PENALTIES OR OTHER LIABILITIES, IN EACH CASE, WHETHER OR NOT LICENSEE WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM OR RELATED TO THIS AGREEMENT.  TO THE EXTENT THAT THE FOREGOING LIMITATION IS NOT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL LICENSEE’S TOTAL AGGREGATE LIABILITY IN CONNECTION WITH OR UNDER THIS AGREEMENT EXCEED $100USD. FOR GREATER CERTAINTY, THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THIS AGREEMENT WILL NOT INCREASE THIS MAXIMUM LIABILITY AMOUNT.Limitations of Liability. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL LICENSEE BE LIABLE, WHETHER BASED ON WARRANTY, CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR ANY OTHER LEGAL THEORY, FOR ANY DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL, EXEMPLARY OR PUNITIVE DAMAGES; OR LOST PROFITS, PERSONAL INJURY, FINES, FEES, PENALTIES OR OTHER LIABILITIES, IN EACH CASE, WHETHER OR NOT LICENSEE WAS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES, RESULTING FROM OR RELATED TO THIS AGREEMENT.  TO THE EXTENT THAT THE FOREGOING LIMITATION IS NOT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL LICENSEE’S TOTAL AGGREGATE LIABILITY IN CONNECTION WITH OR UNDER THIS AGREEMENT EXCEED $100USD. FOR GREATER CERTAINTY, THE EXISTENCE OF ONE OR MORE CLAIMS UNDER THIS AGREEMENT WILL NOT INCREASE THIS MAXIMUM LIABILITY AMOUNT."
      );
    }
  };
  // Set the slider display text based on the sliders' values
  const displayLiability = () => {
    if (dataVal >= 70) {
      return "High risk";
    }
    if (dataVal >= 30 && dataVal <= 70) {
      return "Medium risk";
    }
    if (dataVal <= 30) {
      return "Low risk";
    }
  };
  const displayOwnership = () => {
    if (modelVal >= 70) {
      return "High risk";
    }
    if (modelVal >= 30 && modelVal <= 70) {
      return "Medium risk";
    }
    if (modelVal <= 30) {
      return "Low risk";
    }
  };
  const displayIndemnity = () => {
    if (indemnityVal >= 70) {
      return "High risk";
    }
    if (indemnityVal >= 30 && indemnityVal <= 70) {
      return "Medium risk";
    }
    if (indemnityVal <= 30) {
      return "Low risk";
    }
  };
  const displayPrivacy = () => {
    if (liabilityVal >= 70) {
      return "High risk";
    }
    if (liabilityVal >= 30 && liabilityVal <= 70) {
      return "Medium risk";
    }
    if (liabilityVal <= 30) {
      return "Low risk";
    }
  };
  // Define each range component
  const ranges = [
    <div className="text-center" key="range1">
      <p>{props.title[0]}</p>
      <input
        id="range1"
        type="range"
        max="100"
        step="10"
        className="range range-primary"
        value={dataVal}
        onChange={(event) => {
          setdataVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range1" className="text-neutral-content">
        <p className="text-primary font-bold">{displayLiability()}</p>
      </label>
    </div>,
    <div className="text-center" key="range2">
      <p>{props.title[1]}</p>
      <input
        id="range2"
        type="range"
        max="100"
        step="10"
        className="range range-accent"
        value={modelVal}
        onChange={(event) => {
          console.log(modelVal);
          setmodelVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range2" className="text-neutral-content">
        <p className="text-accent font-bold">{displayOwnership()}</p>
      </label>
    </div>,
    <div className="text-center" key="range3">
      <p>{props.title[2]}</p>
      <input
        id="range3"
        type="range"
        max="100"
        step="10"
        className="range range-secondary"
        value={indemnityVal}
        onChange={(event) => {
          console.log(indemnityVal);
          setIndemnityVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range3" className="text-neutral-content">
        <p className="text-secondary font-bold">{displayIndemnity()}</p>
      </label>
    </div>,
    <div className="text-center" key="range4">
      <p>{props.title[3]}</p>
      <input
        id="range4"
        type="range"
        max="100"
        step="10"
        className="range range-info"
        value={liabilityVal}
        onChange={(event) => {
          console.log(liabilityVal);
          setliabilityVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range4" className="text-neutral-content">
        {displayPrivacy()}
      </label>
    </div>,
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <Card
          title="Key Contract Provisions"
          content={ranges}
          isOutput="true"
          output={value}
        />
      </div>
    </>
  );
};

export default InteractiveCard;
