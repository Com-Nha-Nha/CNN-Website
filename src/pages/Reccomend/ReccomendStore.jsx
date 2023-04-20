import React, { useState } from 'react';
import SearchBar from "../../components/SearchBar";
import { Link } from "react-router-dom";
import ModalOrder from '../../components/ModalOrder';
import { useLocation } from 'react-router-dom'
import { BiMoneyWithdraw } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";

const ItemCard =({value})=>{
  const [showModal, setShowModal]= useState(false)
  console.log("->>",value)
  return (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
    <Link class="card" style={{color:"black", marginBottom:"20px"}} onClick={()=>setShowModal(!showModal)} >
    {/* thumbnail, prices, address, rate, nameMeals, element */}
    <ModalOrder showModal={showModal} setShowModal={setShowModal}  value={value}/>
      <img
        class="card-img-top"
        src={value.thumbnail}
        alt="Card image cap"
        style={{height:"30vh"}}
      />
      <div class="card-body" >
        <h5 class="card-title">{value.title}</h5>
        <p class="card-text">
          {value.address}
        </p>
        <div style={{display:"flex", justifyContent:"space-between", aligItems:" center", borderTop:" solid 1px gray", paddingTop:"10px"}}>
        <p class="card-text">
        <AiOutlineStar/>
          {value.rate}
        </p>
        <p>
        <BiMoneyWithdraw/>
          {value.prices}
        </p>
        </div>
      
    
      </div>
    </Link>
  </div>
  ) 
}
const ReccomendStore = () => {

    const listStore = [
        {
          thumbnail:
            "https://drhueclinic.vn/images/seoworld/nha-hang-co-khong-gian-dep-tphcm.png",
          title: "Quán ăn gia đình Nhỏ",
        address: "87-89 Đinh Tiên Hoàng, phường Đa Kao, quận 1, TP.HCM",
          rate: 5,

          prices : "35.0000"
        },
        {
          thumbnail:
            "https://pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-bo-suu-tap/10-nh-an-dong-qua-hcm/top-10-nha-hang-quan-an-dong-que-ngon-noi-tieng-o-tphcm-8.jpg",
          title: "Tiệm ăn quê hương tôi",
        address: "197 Nguyễn Thị Minh Khai, phường 6, quận 3, TP.HCM",
          rate: 5,
          prices : "35.0000"
        },
        {
          thumbnail:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiDrZ6eu8BKC2uhF2FEr9n85u6qzB6uAjPA&usqp=CAU",
          title: "Nhà ăn Hòa Bình",
        address: "95-197 Phan Xích Long, phường 2, quận Phú Nhuận, TP.HCM",
          rate: 5,
          prices : "35.0000"
        },
      ];
    return (
        <div>
            {/* <SearchBar/> */}
       
            <div className="container">
        <div className="row">
          {listStore &&
            listStore.map((value, index) => {
              return (
              <ItemCard value={value}/>
              );
            })}
        </div>
      </div>
        </div>
    );
};

export default ReccomendStore;