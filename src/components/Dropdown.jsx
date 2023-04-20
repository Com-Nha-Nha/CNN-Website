/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";

const InputDropdown = ({ placeholder, menu, setInput, nameInput, currentInput }) => {
  const handleSelected = ( value ) =>{
    setInput((prevFormState) => ({ ...prevFormState, [nameInput]: value }));
  }
  return (
    <div className="dropdown show">
      <button
        style={{
          width: "100%",
          height: "45px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ced4da",
        }}
        className="btn  btn-outline-secondary dropdown-toggle"
        href="#"
        role="button"
        id="dropdownMenuLink"
        data-bs-toggle="dropdown"
        data-bs-haspop="true"
        data-bs-expanded="false" 
        
      >
        <p style={{ paddingTop: "15px" }}>{currentInput[nameInput] ? currentInput[nameInput] :placeholder}</p>
      </button>

      <div
        className="dropdown-menu" 
        aria-labelledby="dropdownMenuLink"
        style={{ maxHeight: "50vh", overflow: "scroll" }}
      >
        {menu &&
          menu.map((value, index) => {
            return (
              <a className="dropdown-item" href="#" index={index} onClick={()=>handleSelected(value)}>
                {value}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default InputDropdown;
