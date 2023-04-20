import React, { useState, useEffect } from "react";
import sample from "../../assets/images/mobiles/tan.png";
import EditNutrition from "../../components/EditNutrition";
import Overral from "./Overral";
import Detail from "./Detail";
import Spinner from "../../components/Spinner";

const Profile = () => {
  var listComponent = ["Cà chua", "Trứng chiên", "Chuối chín"];
  const listStringComponent = listComponent.join(" • ");
  const [listQuantity, setListQuantity] = useState(["1 trái", "2 quả", "1 trái"]);
  var nutrition = ["Protein", "Vitamin", "Vitamin, béo"];
  const [select, setSelect] = useState(1);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
     setItems(items.customer);
    }
    else {
      window.location.href = '/log-in';
      setItems(null);
    }
  }, []);



  return (
    <>
   {!items ?<Spinner />: <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 ">
          <div class="card bg-light mb-3" style={{ maxWidth: "50rem" }}>
            <div class="card-header">
                <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"20px", marginBottom:"20px"}}>
                <img
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2021%2F12%2F16%2Fanime-cat-names-1204854078-2000.jpg"
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem",
                  width: "100%",
                  borderRadius:"100%",
                  width:"150px",
                  height:"150px"
                }}
              />
                </div> 
              <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                <p style={{ textAlign:"center", marginRight:"10px"}}>
                    <b style={{fontSize:"15px", fontWeight:"600", color:"#B05E27", textAlign:"center"}}>
                      Cân nặng 
                    </b>
                    <br/>
                      {items.weight} KG                
                  </p>
                <p style={{ textAlign:"center", marginLeft:"10px"}}>
                <b style={{fontSize:"15px", fontWeight:"600", color:"#B05E27", textAlign:"center"}}>
                Chiều cao 
                    </b>
                    
                    <br/>
                    {items.height} m
                </p>
              </div>
            <p style={{textAlign:"center"}}>
                BMI : {items.bmi}  
            </p>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center"}}>
            <button className="btn-secondary ml-8" style={{width:"150px", fontSize:"15px",}}> 
                cập nhật
                </button>
            </div>
            </div>
           
            <div class="card-body">
       
        
          <div style={{display:"flex", justifyContent:"center", alignItems:"center", marginTop:"10px", marginBottom:"20px"}}>
            <a className={`mx-4 nav-child-item ${select==1 ? 'text-nav-effect-profile' : ' gray-color'}`} onClick={()=>{setSelect(1)}}  href="#" style={{textDecoration:"none"}}>
            Tổng quát
            </a>
            <a className={`mx-4 nav-child-item ${select==2 ? 'text-nav-effect-profile' : ' gray-color'}`} onClick={()=>{setSelect(2)}} style={{textDecoration:"none"}} href="#">
            Tiến độ
            </a>
            
          </div>
        
              
{ select==1 &&
            
            <Overral/>}
            { select==2&&
                <Detail/>}
            </div>
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default Profile;
