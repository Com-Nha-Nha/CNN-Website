import React, { useState } from "react";
import { MdModeEdit } from "react-icons/md";
import { GiMeal } from "react-icons/gi";
import { IoIosRemoveCircle } from "react-icons/io";
import iconDish from "../assets/icon/dish.jpg";

const EditNutrition = ({
  nameDish,
  // listQuantity,
  cal,
  setListGradientOut,
  nutrition,
  numberDish,
  index,
}) => {
  const [isOpenInput, setIsOpenInput] = useState(false);
  console.log({
    nameDish,
    // listQuantity,
    cal,
    nutrition,
    index,
  });
  // const lastSpaceIndex = listQuantity[index].lastIndexOf(' '); // find the index of the last space character

  // const shortName = listQuantity[index].substring(lastSpaceIndex + 1);

  let listNumber = [];
  for (let i = 1; i < 10; i++) {
    listNumber.push(i * 50);
  }
  function handleSelectChange(event) {
    setListGradientOut((prevItems) => {
      return prevItems.map((item) => {
        if (item.name === nameDish) {
          item.calo = item.calo * (event.target.value / item.number);
          item.number = event.target.value;
        }
        return item;
      });
    });
  }

  const handleDeleteDish = () => {
    setListGradientOut((prevItems) => {
      return prevItems.map((item) => {
        if (item.name != nameDish) {
          return item;
        }
      });
    });
  };

  return (
    <>
    {  <div
        style={{
          display: "flex",
          marginBottom: "10px",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <div>
          {/* <GiMeal /> */}
          <img src={iconDish} style={{ width: "30px", height: "30px" }} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            marginLeft: "20px",
          }}
        >
          <div style={{ minWidth: "220px" }}>{nameDish}</div>
          <div>{nutrition.join(" • ")}</div>

          <div>
            {" "}
            {numberDish} • {cal} Calo
          </div>
        </div>
        <div>
          <div
            style={{ cursor: "pointer", marginBottom: "10px" }}
            onClick={() => {
              setIsOpenInput(!isOpenInput);
            }}
          >
            <MdModeEdit color="#b05e27" size="20px" />
          </div>
          <div style={{ cursor: "pointer" }} onClick={handleDeleteDish}>
            <IoIosRemoveCircle color="#b05e27" size="20px" />
          </div>
        </div>
      </div>}
      {isOpenInput && (
        <select
          className="form-control"
          id="sel1"
          style={{ marginBottom: "10px" }}
          onChange={handleSelectChange}
        >
          {listNumber.map((value, key) => {
            return <option>{value}</option>;
          })}
        </select>
      )}
    </>
  );
};

export default EditNutrition;
