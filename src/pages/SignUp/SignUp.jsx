/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, {useState} from "react";
import { CiUser } from "react-icons/ci";
import { MdSecurityUpdateGood } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import Input from "../../components/Input";
import { FaUser } from "react-icons/fa";
import banner_register from "../../assets/images/banner/banner_register.png";
import InputDropdown from "../../components/InputDropdown";
import { GiWeight } from "react-icons/gi";
import { RxHeight } from "react-icons/rx";

const SignUp = () => {
  const menuYear = [
  ];
  let i=1950
  while( i<=2022)
  {
    menuYear.push(i);
    i=i+1;
  }

  const menuGender = ["nam", "nữ", "khác"];

  const placeholderInputDropdown = "Nghề nghiệp";
  const listItemDropdown = ["Sinh viên", "Văn phòng", " Khác"];
  const [ isWarning, setIsWarning ] = useState(false);
  const [inputsSignUp, setInputsSignUp] = useState({
    username :"",
    email:"",
    password:"",
    job:null,
    dob:null,
    gender:null,
    height:null,
    weight:null
  });

  const paramsInfoBasic =[
    {
      icon:<FaUser color="#ced4da" />,
      placeholder:"Tên đăng nhập",
      setInput:setInputsSignUp, 
      nameInput : "username"
    },
    {
      icon:<MdSecurityUpdateGood color="#ced4da" />,
      placeholder:"Email/ số điện thoại",
      setInput:setInputsSignUp, 
      nameInput : "email"
    },
    {
      icon: <RiLockPasswordLine color="#ced4da" />,
      placeholder:"Mật khẩu",
      setInput:setInputsSignUp, 
      nameInput : "password",
      typeText:"password"
    }
  ];

  const handleContinue =(event)=>{
    const oneValuesNull = Object.values(inputsSignUp).some(val => val === null);
    if(oneValuesNull){
      setIsWarning(true);
      event.preventDefault();
    }
    else {
      localStorage.setItem('signup-1st', JSON.stringify(inputsSignUp));
    }
  }

  let visible = "";
  if (isWarning) {
    visible = "visible ";
  } else {
    visible = "invisible ";
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
                    <h3 className="mb-2 text-uppercase">Đăng kí</h3>
                    <div class={"text-danger mb-3 "+ ((!isWarning) && "invisible")} style={{fontSize:"20px"}}>
                         Vui lòng nhập đầy đủ thông tin
                        </div>
                    {
                      paramsInfoBasic.map((value, index)=>{
                        return <Input {...value}/>
                      })
                    }

                    <InputDropdown placeholder={placeholderInputDropdown} nameInput="job" listItemDropdown={listItemDropdown}  setInput={setInputsSignUp} currentInput={inputsSignUp}/>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <Dropdown placeholder="Năm sinh" menu={menuYear}  setInput={setInputsSignUp} nameInput="dob" currentInput={inputsSignUp}/>
                      </div>
                      <div className="col-md-6 mb-3">
                        <Dropdown placeholder="Giới tinh" menu={menuGender}  setInput={setInputsSignUp} nameInput="gender" currentInput={inputsSignUp}/>
                      </div>
                    </div>

                    <div className="row mb-3">
                      <div className="col-md-6 ">
                        <Input
                         icon={<GiWeight color="#ced4da" />}
                          placeholder="Cân nặng (vd : 35.5)"
                          setInput={setInputsSignUp} 
                          nameInput={"weight"}
                        />
                      </div>
                      <div className="col-md-6 ">
                        <Input
                          icon={<RxHeight color="#ced4da" />}
                          placeholder="Chiều cao (vd : 1.72)"
                          setInput={setInputsSignUp} 
                          nameInput={"height"}
                        />
                      </div>
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <Link type="button" className="btn btn-light btn-lg">
                        Quay lại
                      </Link>
                      
                      <Link
                        to="/sign-up-2nd"
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

export default SignUp;
