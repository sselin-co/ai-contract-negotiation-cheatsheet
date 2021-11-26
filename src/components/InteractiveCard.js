import Card from "./Card";
import { useState } from "react";

const InteractiveCard = (props) => {
  // Set default state of the output card
  const [value, setValue] = useState("");
  const [title, setTitle] = useState(
    "Start tuning the sliders to your situation to get personalized contract provision statements for your situation."
  );
  // Set values for the sliders
  const [dataVal, setDataVal] = useState(50);
  const [modelVal, setModelVal] = useState(50);
  const [indemnityVal, setIndemnityVal] = useState(50);
  const dataString =
    "You grant to us an irrevocable, worldwide, non-exclusive, royalty-free license to access, collect, store and use any data, information, records or files that you load, transmit to or enter into, or that we collect from, the Alpha Program (collectively, the “Model Training Set”) to the extent necessary for IAI to provide  the Alpha Program to you, including to create the Performance Metrics.";
  const dataTitle = "Data - ";
  const modelString =
    "All right, title and interest, including intellectual property rights, in the Alpha Program Portal, Transmitter, all related materials provided by us hereunder, and any updates, adaptation, translation, customization or derivative works thereof will remain the sole property of IAI. The Alpha Program Portal, Transmitter, and all materials provided by us hereunder are made available or licensed and not “sold” to you.  All rights not expressly granted to you in these Terms of Use are reserved by IAI.  For greater clarity, any trademarks, graphics or logos appearing in the Alpha Program are the exclusive property of IAI (or our third-party suppliers) and may not be used in any manner without our express written consent.";
  const modelTitle = "Model - ";
  const indemnityString = `You will defend, indemnify and hold harmless us, our affiliates and service providers, and each of their and our respective officers, directors, employees, and agents, and any licensees, successors and assigns from and against any claims, causes of action, demands, recoveries, losses, damages, fines, penalties or other costs or expenses of any kind or nature including reasonable legal and accounting fees, arising out of or in connection with: 
  (a)                your use (or the use by any third party using your Credentials) of the Alpha Program;

  (b)                your breach of any provision of these Terms of Use or any documents referenced herein; or
  
  (c)                 your violation of any law or the rights of a third party (including intellectual property rights).`;
  const indemnityTitle = "Indemnity - ";
  // Set the output card's text based on the sliders' values
  const mutateOutput = (val, title, text) => {
    if (val > 70) {
      setTitle(title + "High Risk");
      setValue(text);
    } else if (val < 70 && val > 30) {
      setTitle(title + "Medium Risk");
      setValue(text);
    } else {
      setTitle(title + "Low Risk");
      setValue(text);
    }
    // if (dataVal > 60) {
    //   setTitle("Data - High Risk:");
    //   setValue(
    //     "You grant to us an irrevocable, worldwide, non-exclusive, royalty-free license to access, collect, store and use any data, information, records or files that you load, transmit to or enter into, or that we collect from, the Alpha Program (collectively, the “Model Training Set”) to the extent necessary for IAI to provide  the Alpha Program to you, including to create the Performance Metrics."
    //   );
    // } else if (dataVal < 60 && dataVal > 30) {
    //   setTitle("Data - Medium Risk:");
    //   setValue(
    //     "You grant to us an irrevocable, worldwide, non-exclusive, royalty-free license to access, collect, store and use any data, information, records or files that you load, transmit to or enter into, or that we collect from, the Alpha Program (collectively, the “Model Training Set”) to the extent necessary for IAI to provide  the Alpha Program to you, including to create the Performance Metrics."
    //   );
    // } else if (dataVal < 30) {
    //   setTitle("Data - Low Risk:");
    //   setValue(
    //     "You grant to us an irrevocable, worldwide, non-exclusive, royalty-free license to access, collect, store and use any data, information, records or files that you load, transmit to or enter into, or that we collect from, the Alpha Program (collectively, the “Model Training Set”) to the extent necessary for IAI to provide  the Alpha Program to you, including to create the Performance Metrics."
    //   );
    // }
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
  // const displayPrivacy = () => {
  //   if (liabilityVal >= 70) {
  //     return "High risk";
  //   }
  //   if (liabilityVal >= 30 && liabilityVal <= 70) {
  //     return "Medium risk";
  //   }
  //   if (liabilityVal <= 30) {
  //     return "Low risk";
  //   }
  // };
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
          mutateOutput(event.target.value, dataTitle, dataString);
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
          mutateOutput(event.target.value, modelTitle, modelString);
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
          mutateOutput(event.target.value, indemnityTitle, indemnityString);
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
