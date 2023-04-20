import React, { useState } from "react";
import { VscCircleLarge } from "react-icons/vsc";
import Selected from "../assets/icon/Selected";

const BoxSelect = ({ content, icon, setInput }) => {
  const [isBlur, setIsBlur] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  function toggleValue(val) {
    setInput(prevState => {
      if (prevState.includes(val)) {
        return prevState.filter(item => item !== val);
      } else {
        return [...prevState, val];
      }
    });
  }


  let textColor = "";
  if (isBlur || isSelected) {
    textColor = "text-color-primary";
  } else {
    textColor = "text-color-secondary";
  }
  const handleMouseOver = () => {
    setIsBlur(true);
  };
  const handleMouseOut = () => {
    setIsBlur(false);
  };
  const handleClick = () => {
    toggleValue(content);
    
    if(isSelected){
      setIsSelected(!isSelected);
      setIsBlur(false);
    }
    else {
      setIsSelected(!isSelected);
    }
  };
  return (
    <div
      className={
        "box-select-container " +
        ((isBlur || isSelected) && "border-color-primary")
      }
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      {isSelected ? (
        <Selected />
      ) : (
        <VscCircleLarge
          style={{ margin: "10px 0px 0px 10px" }}
          className={textColor}
          size="25px"
        />
      )}
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {icon}
        <p className={textColor}> {content} </p>
      </div>
    </div>
  );
};

export default BoxSelect;
