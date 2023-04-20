import React, { useState } from 'react';
import { VscCircleLargeFilled, VscCircleLarge } from "react-icons/vsc";

const InputSelect = ({ title, content, icon, setInput }) => {
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
          "border-input-select " +
          ((isBlur || isSelected) && "border-color-primary")
        }
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onClick={handleClick}
      >
        <div style={{ margin: "0px 20px 0px 10px" }} className={textColor}>{icon}</div>
        <div>
          <h5 style={{ margin: "0px" }} className={textColor}>{title}</h5>
          <p style={{ marginBottom: "0px",  }} className={textColor}> 
           {content}
          </p>
        </div>
        {isSelected ?
         <VscCircleLargeFilled
         size="20px"
         style={{ position: "absolute", right: "30px", top: "20px" }}
         className={textColor}
       />
        :
        <VscCircleLarge
          size="20px"
          style={{ position: "absolute", right: "30px", top: "20px" }}
          className={textColor}
        />}
      </div>
    );
};

export default InputSelect;


