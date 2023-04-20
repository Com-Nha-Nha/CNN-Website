import React, { useState, useEffect} from "react";
import Image from "../../assets/images/banner/summary.png";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import {getNutritionHistory} from "../../api/NutritionHistory";

const Detail = () => {
  const [items, setItems] = useState([]);
  const [res, setRes ] = useState([]);


  const [ weightYDM, setWeightYDM ] = useState(0);

  let listDate =[];

  const getCurrentYDM = () =>{ 
    for(var i=weightYDM; i>weightYDM-3; i--)
    {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() + i);
      const day = currentDate.getDate().toString().padStart(2, '0');
      var month ;

      if(currentDate.getMonth()==0)
      {
        month = 12 ;
      }
      else if( currentDate.getMonth() == 12)
      {
        month=1;
      }
      else {
       month = currentDate.getMonth() +1 ;
       month = month.toString().padStart(2, '0');
      }
     
      const year = currentDate.getFullYear().toString()
      
      listDate.push({
        day,
        month,
        year
      });

    }
  }

  getCurrentYDM()
  const daysOfWeek = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
  
  const getDayOfWeek = (day, month, year) =>{
    const date = new Date(year, month - 1, day);
    const dayOfWeek = daysOfWeek[date.getDay()];
    return dayOfWeek;
  }

  const [ pageHistoryDish, setPageHistoryDish ] = useState(0);
  const selectPage = {
    backgroundColor: '#b05e27',
    color:"white", fontWeight:"600",
    paddingLeft:"20px",
    paddingRight:"20px",
    paddingTop:"5px",
    paddingBottom:"5px",
    borderRadius:"5px",
    cursor:"pointer"
  };

  const unSelectPage = {
    
    color:"GrayText", fontWeight:"600",
    cursor:"pointer"
  };


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('account'));
    if (items) {
     setItems(items);
     const dateSE = listDate[pageHistoryDish].day+"/"+listDate[pageHistoryDish].month+"/"+listDate[pageHistoryDish].year
     getNutritionHistory(items.customer._id,setRes,dateSE)
    }
  }, [pageHistoryDish]);


  return (
    <div className="container">
      <div className="row">
        <p
          style={{
            fontSize: "17px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          <FcPrevious />
          <FcPrevious />{listDate[0].day}.{listDate[0].month} - {listDate[listDate.length-1].day}.{listDate[listDate.length-1].month} <FcNext />
          <FcNext />{" "}
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <button className="btn-secondary ml-8" style={{ width: "150px" }}>
            Tìm kiếm
          </button>
        </div>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:"10px", marginBottom:"10px"}}>
       
     {
       listDate && listDate.map((value, index)=>{
          const dayOfWeek =  getDayOfWeek(value.day, value.month, value.year);
          const styleButton = index == pageHistoryDish ? selectPage : unSelectPage;
          return (<div style={styleButton} onClick={()=>setPageHistoryDish(index)} key={index}>
            {value.day}.{value.month}
            <br/>
           {dayOfWeek}
        </div>)}
      )
     }
        </div>
        {/* <div className="alert alert-danger" role="alert">
          Hôm nay bạn đã tiêu thụ nhiều chất béo
        </div> */}
     
        {
          res && res.map((value, index)=>{
            let listDishes =[];
            let listIngredints = []
            for(let i=0;i<value.foods.length; i++ )
            {
              listDishes.push(value.foods[i].name)
              value.foods[i].nutrition.forEach((element) => {
                if(!listIngredints.includes(element))
                {
                  listIngredints.push(element)
                }
              });
            }
            const date = new Date(value.dateTime);

            const hour = date.getHours();
            const minutes = date.getMinutes();
            return (
              <div key={index} style={{ border: "solid 1px #C4C4C4", borderRadius: "5px", marginTop:"20px" }}>
                    <p style={{ textAlign: "center", fontWeight: "600", marginTop:"10px" }}>
                    {listDishes.join(" • ")}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "15px", color: "gray" }}>
                     {hour}:{minutes}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "17px" }}>
                    {listIngredints.join(" • ")}
                    </p>
                    <p style={{ textAlign: "center", fontSize: "17px" }}>{value.totalCalo} Calo</p>

              </div>
            )
          })
        }

      </div>
    </div>
  );
};

export default Detail;
