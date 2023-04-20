/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Pagment, Diet, Gymer, Officer } from "../../assets/icon/icon";
import { Link } from "react-router-dom";
import BoxSelect from "../../components/BoxSelect";
import banner_register from "../../assets/images/banner/banner_register.png";
import InputDropdown from "../../components/InputDropdown";

const SignUp2nd = () => {
  const placeholderInputDropdown = "Nhu cầu khác";
  const listItemDropdown = [ "Đẹp da", "Khác"];

  const [ inputSignUp, setInputSignUp] = useState([]);
 
  const [ otherDemandInput, setOtherDemandInput ] = useState({
    demand:null
  })
  const paramsToBoxSelect = [
    {
      content:"Tăng cân",
       icon:<Pagment />,
       setInput : setInputSignUp
    },
    {
      content:"Giảm cân",
       icon:<Diet />,
       setInput : setInputSignUp
    },    
    {
      content:"Vận động mạnh",
      icon:<Gymer />,
      setInput : setInputSignUp
    }, 
    {
      content:"Duy trì cân nặng",
      icon:<Officer />,
      setInput : setInputSignUp
    }
  ];

  const handleContinue = () =>{
    localStorage.setItem('signup-2nd', JSON.stringify(inputSignUp.concat(otherDemandInput.demand)));
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
                    <h3 className="mb-5 text-uppercase">Chọn nhu cầu</h3>
                    <div className="row"> 
                        {
                          paramsToBoxSelect.map((value, index)=>{
                            return (
                              <div className="col-md-6 mb-4"> 
                                <BoxSelect {...value} />
                              </div>
                            )
                          })
                        }
                    </div>
                    <InputDropdown placeholder={placeholderInputDropdown} nameInput="demand" listItemDropdown={listItemDropdown}  setInput={setInputSignUp} currentInput={inputSignUp}/>
                    <div className="d-flex justify-content-end pt-3">
                      <Link
                        to="/Sign-up"
                        type="button"
                        className="btn btn-light btn-lg"
                      >
                        Quay lại
                      </Link>
                      <Link
                        to="/sign-up-3rd"
                        type="button"
                        className="btn btn-warning btn-lg ms-2"
                        style={{ backgroundColor: "#B05E27", color: "white" }}
                        onClick={handleContinue}
                      >
                        Tiếp tục
                      </Link>
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

export default SignUp2nd;
