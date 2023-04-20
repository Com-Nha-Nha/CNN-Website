import React from "react";
import { RiLockPasswordLine } from "react-icons/ri";

const InputDropdown = ({ placeholder, listItemDropdown, setInput, currentInput, nameInput }) => {

  const handleSelected = ( value ) =>{
    setInput((prevFormState) => ({ ...prevFormState, [nameInput]: value }));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setInput((prevFormState) => ({ ...prevFormState, [name]: value }));
  };


  return (
    <div className="input-group mb-3 ">
      <span
        className="input-group-text"
        style={{ backgroundColor: "transparent", borderRight: "0px" }}
        id="basic-addon1"
      >
        <RiLockPasswordLine color="#ced4da" />
      </span>

      <input
        placeholder={placeholder}
        name={nameInput}
        value={currentInput[nameInput]}
        onChange={handleInputChange}
        type="text"
        className="form-control"
        aria-label="Text input with dropdown button"
        style={{
          height: "45px",
          borderLeft: "0px",
          outline: "none",
        }}
      />
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        data-bs-expanded="false"
      >
        Dropdown
      </button>
      <ul className="dropdown-menu dropdown-menu-end">
        {listItemDropdown &&
          listItemDropdown.map((itemValue, index) => {
            return (
              <li index={index}>
                <a className="dropdown-item" onClick={()=>handleSelected(itemValue)}>
                  {itemValue}
                </a>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default InputDropdown;
