import React, { useEffect } from "react";
import { useState } from "react";
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const ModalOrder = ({
  showModal,
  setShowModal,
  value
}) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("meal"));
    if (item) {
      setItems(item);
    }
  }, []);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  var handleArrayComponent=(value)=>{
    return  value.join(" • ");
  }

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                 ĐẶT MÓN ĂN
                </h5>
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              {items && (
                <>
                <div className="modal-body" style={{ margin: "auto" }}>
                  <img src={items.thumbnail} alt="" style={{ width: "60vh" }} />
                </div>
                 <div style={{fontWeight:"500", fontSize:"25px", paddingLeft:"25px", paddingRight:"25px", paddingTop:"10px", paddingBottom:"10px"}}>
                 {/* {handleArrayComponent(items.elementMeals)} */}
               </div>
               </>
              )} 
                 <div style={{paddingLeft:"25px", paddingRight:"25px", paddingTop:"10px", paddingBottom:"10px"}}>
               
                   
               <BiMoneyWithdraw /> {value.prices}
             </div>
              <div style={{paddingLeft:"25px", paddingRight:"25px", paddingTop:"10px", paddingBottom:"10px"}}>
                {value.title}
              </div>
           
              <div style={{paddingLeft:"25px", paddingRight:"25px", paddingTop:"10px", paddingBottom:"10px"}}>
              {value.address}
                
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleCloseModal}
                >
                  Đóng
                </button>
                <button type="button" className="btn btn-primary">
                  Đặt món
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalOrder;
