import React from "react";
import Image from "../../assets/images/banner/summary.png";

const Overral = () => {
  return (
    <div className="container">
      <div className="row">
        {/* <div style={{display:"flex", justifyContent:"center", aligItems:"center", marginTop:"10px", marginBottom:"10px"}}>
          <button className="btn-secondary ml-8" style={{ width: "150px" }}>
            <b>Nạp vào</b>
            <br />
            500 Cal
          </button>
          <button className="btn-secondary ml-8" style={{ width: "150px" }}>
            <b>Tiêu hao</b>
            <br />
            300 Cal
          </button>
        </div> */}
          <div class="alert alert-warning" role="alert">
           Tính năng đang được phát triển
          </div>
        <p style={{textAlign:"center", marginTop:"5px", marginBottom:"10px", fontSize:"20px", fontWeight:"600"}}>Tổng quát</p>
        <div style={{display:"flex", justifyContent:"center", aligItems:"center", marginTop:"10px", marginBottom:"10px"}}>
          {/* <img
            src={Image}
            alt="Sample photo"
            className="img-fluid"
            style={{
              borderTopLeftRadius: ".25rem",
              borderBottomLeftRadius: ".25rem",
              width: "80%",
            }}
          /> */}
         
        </div> 
        <div class="alert alert-warning" role="alert">
           Tính năng đang được phát triển
          </div>
        <p style={{textAlign:"center", marginTop:"5px", marginBottom:"10px", fontSize:"20px", fontWeight:"600"}}>Cảnh báo</p>
        <div style={{marginTop:"5px", marginBottom:"5px"}}>
          <div class="alert alert-warning" role="alert">
          Tính năng đang được phát triển
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overral;
