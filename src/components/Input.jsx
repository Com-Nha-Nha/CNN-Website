import React from 'react';

const Input =  ({ placeholder, icon, setInput, nameInput, typeText="text" }) => {
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setInput((prevFormState) => ({ ...prevFormState, [name]: value }));
  };
  
    return (
        <div className="row">
        <div className="input-group mb-3 ">
          <span
            className="input-group-text"
            style={{ backgroundColor: "transparent", borderRight: "0px" }}
            id="basic-addon1"
          > 
            {icon && icon}
          </span>
          <input
            name={nameInput}
            type={typeText}
            className="form-control"
            placeholder={placeholder}
            aria-label="Username"
            aria-describedby="basic-addon1"
            style={{ height: "45px", borderLeft: "0px", outline: "none" }}
            onChange={handleInputChange}
          />
        </div>
      </div>
    );
};

export default Input;

