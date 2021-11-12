import Card from "./Card";
import { useState } from "react";

const InteractiveCard = (props) => {
  // Set default state of the output card
  const [value, setValue] = useState(
    "Start tuning the sliders to your situation to get personalized recommendations."
  );
  // Set values for the sliders
  const [liabilityVal, setLiabilityVal] = useState(50);
  const [ownershipVal, setOwnershipVal] = useState(50);
  const [indemnityVal, setIndemnityVal] = useState(50);
  const [privacyVal, setPrivacyVal] = useState(50);
  // Set the output card's text based on the sliders' values
  const mutateOutput = () => {
    if (liabilityVal >= 70 && ownershipVal >= 70 && indemnityVal >= 70) {
      setValue(
        "Your contract has high liability, ownership of product, and indemnity."
      );
    }
    if (liabilityVal <= 30) {
      setValue("This is considered low liability");
    }
  };
  // Set the slider display text based on the sliders' values
  const displayLiability = () => {
    if (liabilityVal >= 90) {
      return "Full liability";
    }
    if (liabilityVal >= 70) {
      return "High liability";
    }
    if (liabilityVal >= 30 && liabilityVal <= 70) {
      return "Medium liability";
    }
    if (liabilityVal <= 30) {
      return "Low liability";
    }
  };
  const displayOwnership = () => {
    if (ownershipVal >= 90) {
      return "Full ownership";
    }
    if (ownershipVal >= 70) {
      return "High ownership";
    }
    if (ownershipVal >= 30 && ownershipVal <= 70) {
      return "Medium ownership";
    }
    if (ownershipVal <= 30) {
      return "Low ownership";
    }
  };
  const displayIndemnity = () => {
    if (indemnityVal >= 90) {
      return "Full indemnity";
    }
    if (indemnityVal >= 70) {
      return "High indemnity";
    }
    if (indemnityVal >= 30 && indemnityVal <= 70) {
      return "Medium indemnity";
    }
    if (indemnityVal <= 30) {
      return "Low indemnity";
    }
  };
  const displayPrivacy = () => {
    if (privacyVal >= 90) {
      return "Full privacy";
    }
    if (privacyVal >= 70) {
      return "High privacy";
    }
    if (privacyVal >= 30 && privacyVal <= 70) {
      return "Medium privacy";
    }
    if (privacyVal <= 30) {
      return "Low privacy";
    }
  };
  // Define each range component
  const ranges = [
    <div className="text-center">
      <input
        id="range1"
        type="range"
        max="100"
        step="10"
        className="range range-primary"
        value={liabilityVal}
        onChange={(event) => {
          console.log(liabilityVal);
          setLiabilityVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range1" className="text-neutral-content">
        {displayLiability()}
      </label>
    </div>,
    <div className="text-center">
      <input
        id="range2"
        type="range"
        max="100"
        step="10"
        className="range range-primary"
        value={ownershipVal}
        onChange={(event) => {
          console.log(ownershipVal);
          setOwnershipVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range2" className="text-neutral-content">
        {displayOwnership()}
      </label>
    </div>,
    <div className="text-center">
      <input
        id="range3"
        type="range"
        max="100"
        step="10"
        className="range range-primary"
        value={indemnityVal}
        onChange={(event) => {
          console.log(indemnityVal);
          setIndemnityVal(event.target.value);
          mutateOutput();
        }}
      ></input>
      <label htmlFor="range3" className="text-neutral-content">
        {displayIndemnity()}
      </label>
    </div>,
    <div className="text-center">
      <input
        id="range4"
        type="range"
        max="100"
        step="10"
        className="range range-primary"
        value={privacyVal}
        onChange={(event) => {
          console.log(privacyVal);
          setPrivacyVal(event.target.value);
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
      <div className="flex">
        <div className="flex flex-wrap">
          <Card
            title={props.title[0]}
            text={props.text[0]}
            content={ranges[0]}
          />
          <Card
            title={props.title[1]}
            text={props.text[1]}
            content={ranges[1]}
          />
          <Card
            title={props.title[2]}
            text={props.text[2]}
            content={ranges[2]}
          />
          <Card
            title={props.title[3]}
            text={props.text[3]}
            content={ranges[3]}
          />
        </div>
        <div className="flex flex-wrap">
          <Card title="Output" text={value} isOutput="true" />
        </div>
      </div>
    </>
  );
};

export default InteractiveCard;
