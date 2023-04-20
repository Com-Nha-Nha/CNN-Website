import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function ModalAddDish({showModal, setShowModal, setListGradientOut}) { 
    const [ newDish, setNewDish ] = useState({
        name:"",
        number:null,
        unit: "gam",
        calo: null 
    })

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };
  function toggleValueInArray(array, value) {
    const index = array.indexOf(value);
  
    if (index === -1) {
      array.push(value);
    } else {
      array.splice(index, 1);
    }
  
    return array;
  }
 
  const [isChecked, setIsChecked] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
    checkbox5: false,
    checkbox6: false,
  });
  const nutritions = ["Protein",
  "Béo",
  "Vitamin",
   "Tinh bột",
  "Khoáng chất",
    "Khác"]
  const handleInputChange = (event) => {
    const { name, value } = event.target; 
    setNewDish((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  const handleCheckboxChange = (event) => {
    setIsChecked({
      ...isChecked,
      [event.target.name]: event.target.checked,
    });
  };

  const handleAdd =()=>{
    let listNutrition =[]
    
    let i=0;
    for (const key in isChecked) {
        if( isChecked[key])
        {
                listNutrition.push(nutritions[i]);
        }
        i=i+1;
      }
      console.log({ 
        name:newDish.name,
        number:newDish.number,
        unit: newDish.unit, 
        calo: newDish.calo,
        nutrition:listNutrition
      })
    //   setListGradientOut({ 
    //     name:newDish.name,
    //     number:newDish.number,
    //     unit: newDish.unit, 
    //     calo: newDish.calo,
    //     nutrition:listNutrition
    //   })
      
      setListGradientOut(prevState => [...prevState, { 
        name:newDish.name,
        number:newDish.number,
        unit: newDish.unit, 
        calo: newDish.calo,
        nutrition:listNutrition
      }]);
      setShowModal(false);
  }

  return (
    <> 
      {showModal && (
        <div className="modal modal-backdrop" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Thêm thành phần món</h5>
                
              </div>
              <div className="modal-body"> 
              <input
                    className="form-control"
                    placeholder="Tên thành phần"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    style={{ outline: "none", marginBottom:"15px" }} 
                     name="name"
                      onChange={handleInputChange}
                />
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"  
                        checked={isChecked.checkbox1}
                        onChange={handleCheckboxChange}
                        name="checkbox1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1">{nutritions[0]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"
                        checked={isChecked.checkbox2}
                        onChange={handleCheckboxChange}
                        name="checkbox2"
                        />
                    <label class="form-check-label" for="inlineCheckbox2">{nutritions[1]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3"
                        checked={isChecked.checkbox3}
                        onChange={handleCheckboxChange}
                        name="checkbox3"
                        />
                    <label class="form-check-label" for="inlineCheckbox3">{nutritions[2]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox4" value="option4" 
                        checked={isChecked.checkbox4}
                        onChange={handleCheckboxChange}
                        name="checkbox4"
                    />
                    <label class="form-check-label" for="inlineCheckbox4">{nutritions[3]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox5" value="option5" 
                        checked={isChecked.checkbox5}
                        onChange={handleCheckboxChange}
                        name="checkbox5"
                    />
                    <label class="form-check-label" for="inlineCheckbox5">{nutritions[4]}</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox6" value="option6"
                        checked={isChecked.checkbox6}
                        onChange={handleCheckboxChange}
                        name="checkbox6"
                        />
                    <label class="form-check-label" for="inlineCheckbox6">{nutritions[5]}</label>
                </div>
                <div style={{display:"flex", gap:"10px", marginTop:"15px"}}> 
                    <input  type="number"
                        className="form-control"
                        placeholder="Khối lượng"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ outline: "none" }} 
                        name="number"
                        onChange={handleInputChange}
                    />
                   <input  type="number"
                        className="form-control"
                        placeholder="Lượng Calo"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ outline: "none" }} 
                        name="calo"
                        onChange={handleInputChange}
                    />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>
                  Quay lại
                </button> 
                <Link type="button" className="btn btn-primary" onClick={handleAdd}>
                  Thêm
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalAddDish;
