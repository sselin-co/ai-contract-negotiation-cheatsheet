import Card from "./Card";
import { useState } from "react";
import { useTranslation } from "next-i18next";

const InteractiveCard = (props) => {
  // Set default state of the output card
  const { t } = useTranslation("contract-provisions");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(
    "Start tuning the sliders to your situation to get personalized contract provision statements for your situation."
  );
  // Set values for the sliders
  const [dataVal, setDataVal] = useState(50);
  const [modelVal, setModelVal] = useState(50);
  const [indemnityVal, setIndemnityVal] = useState(50);
  // Set the output card's text based on the sliders' values
  const mutateOutput = (title, text) => {
    setTitle(title);
    setValue(text);
  };
  // Set the slider display text based on the sliders' values
  const displayData = () => {
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
  // Define each range component
  const ranges = [
    <div className="text-center" key="range1">
      <p>{props.title[0]}</p>
      <input
        id="range1"
        type="range"
        max="100"
        step="5"
        className="range range-primary"
        value={dataVal}
        onChange={(event) => {
          setDataVal(event.target.value);
          if (event.target.value <= 30) {
            mutateOutput(t("data-low-title"), t("data-low-content"));
          } else if (event.target.value >= 70) {
            mutateOutput(t("data-high-title"), t("data-high-content"));
          } else {
            mutateOutput(t("data-medium-title"), t("data-medium-content"));
          }
        }}
      ></input>
      <label htmlFor="range1" className="text-neutral-content">
        <p className="text-primary font-bold">{displayData()}</p>
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
          setModelVal(event.target.value);
          if (event.target.value <= 30) {
            mutateOutput(t("model-low-title"), t("model-low-content"));
          } else if (event.target.value >= 70) {
            mutateOutput(t("model-high-title"), t("model-high-content"));
          } else {
            mutateOutput(t("model-medium-title"), t("model-medium-content"));
          }
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
          setIndemnityVal(event.target.value);
          if (event.target.value <= 30) {
            mutateOutput(t("liability-low-title"), t("liability-low-content"));
          } else if (event.target.value >= 70) {
            mutateOutput(
              t("liability-high-title"),
              t("liability-high-content")
            );
          } else {
            mutateOutput(
              t("liability-medium-title"),
              t("liability-medium-content")
            );
          }
        }}
      ></input>
      <label htmlFor="range3" className="text-neutral-content">
        <p className="text-secondary font-bold">{displayIndemnity()}</p>
      </label>
    </div>,
    // <div className="text-center" key="range4">
    //   <p>{props.title[3]}</p>
    //   <input
    //     id="range4"
    //     type="range"
    //     max="100"
    //     step="10"
    //     className="range range-info"
    //     value={liabilityVal}
    //     onChange={(event) => {
    //       console.log(liabilityVal);
    //       setliabilityVal(event.target.value);
    //       mutateOutput();
    //     }}
    //   ></input>
    //   <label htmlFor="range4" className="text-neutral-content">
    //     {displayPrivacy()}
    //   </label>
    // </div>
    ,
  ];
  return (
    <>
      <div className="flex flex-wrap">
        <Card
          title="Key Contract Provisions"
          content={ranges}
          isOutput="true"
          outputTitle={title}
          output={value}
        />
      </div>
    </>
  );
};

export default InteractiveCard;
