/* eslint-disable jsx-a11y/img-redundant-alt */
import React,{useEffect, useState} from 'react';
import Input from "../../components/Input";
import { MdSecurityUpdateGood } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import banner_register from "../../assets/images/banner/banner_register.png";
import { Link } from "react-router-dom";
import { Login as LoginApi } from '../../api/Authenticate';

function Login() {

  const [ responseApi, setResponseApi ] = useState(null);

  const [inputsLogin, setInputsLogin] = useState({
    email :"",
    password:""
  });

  const paramsToInput=[
    {
      icon:<MdSecurityUpdateGood color="#ced4da" />,
      placeholder:"Email/ số điện thoại",
      setInput:setInputsLogin, 
      nameInput : "email"
    },
    {
      icon:<RiLockPasswordLine color="#ced4da" />,
      placeholder:"Mật khẩu",
      setInput:setInputsLogin, 
      nameInput : "password",
      typeText:"password"
    },
  ]

  const handleLogin = () =>{
    
    LoginApi(inputsLogin, setResponseApi);
  }
  
  useEffect(()=>{
    if(responseApi)
    {
      console.log(responseApi)
      localStorage.setItem('account', JSON.stringify(responseApi));
      window.location.href = '/';
    }

  },[responseApi]);

  return (
  
      <section className="h-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img src={banner_register}
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
                    <div >
                      <h3 className="mb-5 text-uppercase">Đăng nhập</h3>
                      {
                        paramsToInput.map((value, index)=>{
                          return <Input {...value} />
                        })
                      }
                    </div>
                    <p style={{fontSize:"medium"}} >
                      Chúng tôi cam kết bảo mật thông tin cá nhân và quyền riêng tư của người dùng Cơm Nhà Nha
                    </p>
                    <div style={{display:"flex", flexDirection:"column", gap:"40px", paddingTop:"50px"}}>
                    <Link
                        // to="/"
                        type="button"
                        className="btn btn-warning btn-lg "
                        style={{ backgroundColor: "#B05E27", color: "white" }}
                        onClick={handleLogin}
                      >
                        Đăng nhập
                      </Link>
                      <span className="middle-line"> Hoặc </span>
                      <Link type="button" to="/sign-up" className="btn btn-light btn-lg" style={{backgroundColor: "white", color: "#B05E27", border:"solid 1px #B05E27" }}>
                        Đăng kí 
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
}

export default Login;