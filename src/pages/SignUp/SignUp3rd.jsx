/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Gastritis, Malnourished, Fat } from "../../assets/icon/icon";
import { Link } from "react-router-dom";
import InputSelect from "../../components/InputSelect";
import InputDropdown from "../../components/InputDropdown";
import banner_register from "../../assets/images/banner/banner_register.png";
import { GiStomach, GiFat } from "react-icons/gi";
import { SiThingiverse } from "react-icons/si";
import { Register } from "../../api/Authenticate";
import ModalNotify from "../../components/ModalNotify";


const SignUp3rd = () => {
  const placeholderMedical = "Tiểu sử khác";
  const placeholderAllergy = "Thực phẩm dị ứng";
  const listItemMedical = ["Tiểu đường", "Suy thận"];
  const listItemAllergy =["Hải sản", "Thịt bò"];

  const [ inputMedical, setInputMedical ] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const listItemBoxSelect = [
    {
      icon : <GiFat size="25px" />,
      title : "Béo phì",
      content :"Cân nặng quá mức cho phép",
      setInput : setInputMedical
    },
    {
      icon : <SiThingiverse size="25px" />,
      title : "Suy dinh dưỡng",
      content :"Cân nặng ít quá mức ",
      setInput : setInputMedical
    },{
      icon :  <GiStomach size="25px" />,
      title : "Viêm dạ dày",
      content :"Qúa trình đau, dẫn đến khó ăn uống",
      setInput : setInputMedical
    }
  ];

  const [inputSignUp, setInputSignUp] = useState({
    medical:[],
    allergy :""
  }) ;



  const [inputSignUp1, setInputSignUp1] = useState(null);
  const [inputSignUp2, setInputSignUp2] = useState(null);

useEffect(() => {
  const input1 = JSON.parse(localStorage.getItem('signup-1st'));
 
  if (input1) {
    setInputSignUp1(input1); 
  }

  const input2 = JSON.parse(localStorage.getItem('signup-2nd'));
  
  if (input2) {
    setInputSignUp2(input2); 
   }

}, []);
const handleRegister =()=>{
  setShowModal(!showModal); 
  Register(inputSignUp1,inputSignUp2,inputSignUp,inputMedical);
}

  return (
    <section className="h-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src={banner_register}
                    alt="Sample photo"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem",
                      width: "100%",
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h5 className="mb-5 text-uppercase">
                      Chọn tiểu sử bệnh ( nếu có )
                    </h5>
                    {
                      listItemBoxSelect.map((value, index)=>{
                        return  <InputSelect {...value}  />
                      })
                    }
           

                    <InputDropdown
                      placeholder={placeholderMedical}
                      listItemDropdown={listItemMedical}
                      nameInput="medical"
                      setInput={setInputSignUp} currentInput={inputSignUp}
                    />

                    <h5 className=" mt-40 mb-16  text-uppercase">
                      Chọn loại thực phẩm dị ứng
                    </h5>

                    <InputDropdown
                      placeholder={placeholderMedical}
                      listItemDropdown={listItemAllergy}
                      nameInput="allergy"
                      setInput={setInputSignUp} currentInput={inputSignUp}
                    />

                    <div className="d-flex justify-content-end pt-3">
                      <Link
                        to="/Sign-up-2nd"
                        type="button"
                        className="btn btn-light btn-lg"
                      >
                        Quay lại
                      </Link>
                      <Link
                        // to="/log-in"
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        style={{ backgroundColor: "#B05E27", color: "white" }}
                        onClick={handleRegister}
                      >
                        Đăng ký
                       
                      </Link>
                      <ModalNotify showModal={showModal} setShowModal={setShowModal}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp3rd;
