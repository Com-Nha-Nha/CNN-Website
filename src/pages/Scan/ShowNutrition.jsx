import React, { useEffect, useState } from "react";
import { MdAddCircleOutline } from "react-icons/md";
import EditNutrition from "../../components/EditNutrition";
import { Link } from "react-router-dom";
import ModalAddDish from "../../components/ModalAddDish";
import ModalRemindLogin from "../../components/ModalRemindLogin";
import { addNutritionHistory } from "../../api/NutritionHistory";

const ShowNutrition = ({imageSource}) => {
  var listComponent = ["Nước mắm", "Chả", "Cơm", "Bì", "Gà"];
  const [ listGradientOut, setListGradientOut ] = useState([]);
  const [showModal, setShowModal] = useState(false);
  let flagListGradient=[]
  let listDish =[]
  let totalCalo =0;
  var listIngrediants =[ 
    {
      name:"Nước mắm",
      number:100,
      unit: "gam",
      calo: 34,
      nutrition : ["Protein","Vitamin"]
    },
    {
      name:"Chả trứng",
      number:100,
      unit: "gam",
      calo: 195,
      nutrition : ["Protein","Vitamin", "Chất béo"]
    },
    {
      name:"Cơm trắng",
      number:100,
      unit: "gam",
      calo: 130,
      nutrition : ["Bột đường","Vitamin"]
    },
    {
      name:"Bì lợn",
      number:100,
      unit: "gam",
      calo: 544 ,
      nutrition : ["Protein","Chất béo"]
    },
    {
      name:"Gà quay",
      number:100,
      unit: "gam",
      calo: 165 ,
      nutrition : ["Protein", "Chất béo"]
    },
    {
      name:"Thịt sườn",
      number:100,
      unit: "gam",
      calo: 120 ,
      nutrition : ["Protein", "Chất béo", "Vitamin"]
    },
    {
      name:"Lạp xưởng",
      number:100,
      unit: "gam",
      calo: 340 ,
      nutrition : ["Protein", "Chất béo"]
    },
     {
      name:"Cà chua",
      number:100,
      unit: "gam",
      calo: 18 ,
      nutrition : ["Vitamin", "Khoáng chất"]
    },
    {
      name:"Dưa leo",
      number:100,
      unit: "gam",
      calo: 15  ,
      nutrition : ["Vitamin", "Khoáng chất"]
    },
    {
      name:"Mì",
      number:100,
      unit: "gam",
      calo: 188 ,
      nutrition : ["Bột đường", "Béo"]
    },
    {
      name:"Bún",
      number:100,
      unit: "gam",
      calo: 110  ,
      nutrition : ["Bột đường"]
    },
  ];


  for (let i = 0; i < imageSource.keys.length; i++) {
    if(imageSource.keys[i]=="Nuoc mam"){
      flagListGradient.push(listIngrediants[0]);
      listDish.push(listIngrediants[0].name)
      totalCalo = totalCalo + listIngrediants[0].calo
    }
    else  if(imageSource.keys[i]=="Cha"){
      flagListGradient.push(listIngrediants[1])
      listDish.push(listIngrediants[1].name)
      totalCalo = totalCalo + listIngrediants[1].calo
    }
    else  if(imageSource.keys[i]=="Com"){
      flagListGradient.push(listIngrediants[2])
      listDish.push(listIngrediants[2].name)
      totalCalo = totalCalo + listIngrediants[2].calo
    }
    else  if(imageSource.keys[i]=="Bi"){
      flagListGradient.push(listIngrediants[3])
      listDish.push(listIngrediants[3].name)
      totalCalo = totalCalo + listIngrediants[3].calo
    }
    else  if(imageSource.keys[i]=="Ga"){
      flagListGradient.push(listIngrediants[4])
      listDish.push(listIngrediants[4].name)
      totalCalo = totalCalo + listIngrediants[4].calo
    }
    else  if(imageSource.keys[i]=="Suon"){
      flagListGradient.push(listIngrediants[5])
      listDish.push(listIngrediants[5].name)
      totalCalo = totalCalo + listIngrediants[5].calo
    }
    else  if(imageSource.keys[i]=="Lap xuong"){
      flagListGradient.push(listIngrediants[6])
      listDish.push(listIngrediants[6].name)
      totalCalo = totalCalo + listIngrediants[6].calo
    }
    else  if(imageSource.keys[i]=="Ca chua"){
      flagListGradient.push(listIngrediants[7])
      listDish.push(listIngrediants[7].name)
      totalCalo = totalCalo + listIngrediants[7].calo
    }
    else  if(imageSource.keys[i]=="Dua leo"){
      flagListGradient.push(listIngrediants[8])
      listDish.push(listIngrediants[8].name)
      totalCalo = totalCalo + listIngrediants[8].calo
    }
    else  if(imageSource.keys[i]=="Mi"){
      flagListGradient.push(listIngrediants[9])
      listDish.push(listIngrediants[9].name)
      totalCalo = totalCalo + listIngrediants[9].calo
    }
    else  if(imageSource.keys[i]=="Bun"){
      flagListGradient.push(listIngrediants[10])
      listDish.push(listIngrediants[10].name)
      totalCalo = totalCalo + listIngrediants[10].calo
    }
  }

 useEffect(()=>{
  setListGradientOut(flagListGradient)
 },[])

 const [items, setItems] = useState([]);

 useEffect(() => {
   const items = JSON.parse(localStorage.getItem('account'));
   if (items) {
    setItems(items.customer);
   }
   else {
     setItems(null);
   }
 }, []);

 const [remindLogin, setRemindLogin] = useState(false);
  const handleSave = (event)=>{
    if(!items){
      setRemindLogin(true);
      event.preventDefault();
    }
    else {
      //items._id
      //listGradientOut
      //imageSource.image
      // customerID, foods,dishImage
      addNutritionHistory(items._id,listGradientOut,imageSource.image)
    }
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 ">
          <div class="card bg-light mb-3" style={{ maxWidth: "50rem" }}>
            <div class="card-header">
              <img
                src={imageSource.image}
                alt="Sample photo"
                className="img-fluid"
                style={{
                  borderTopLeftRadius: ".25rem",
                  borderBottomLeftRadius: ".25rem",
                  width: "100%",
                }}
              />
            </div>
            <div class="card-body">
       
              <h5 class="card-title">{listDish.join(" • ")}</h5>
              <p class="card-title">Hàm lượng : {totalCalo} Cal</p>
              <div className="container">
                <div className="row">
                <div className="col-12 col-xxl-6 col-xl-6 col-lg-6 ">
              {
                    listGradientOut && listGradientOut.map((value, index)=>{
                        const passParam = {
                            nameDish:value.name, 
                            nutrition:value.nutrition,
                            // listGradientOut,
                            cal:value.calo,
                            setListGradientOut, 
                            numberDish :value.number +" "+ value.unit,
                            index}
                        
                        return(
                            <EditNutrition  {...passParam}/>
                        )
                    })
                }
                {/* <div style={{textAlign:"center"}} className="my-8">
                  <MdAddCircleOutline size="30px" color="#b05e27" style={{marginTop:"8px",marginBottom:"8px"}}/>
                </div> */}
                 
           </div> 
                </div>

              </div>
            <div style={{display:"flex", flexWrap:"wrap", gap:"15px", marginTop:"15px", justifyContent:"center"}}>
              
                <button 
                  className="btn-primary btn-secondary "
                  onClick={()=>{setShowModal(!showModal); }}
                >
                  Thêm thành phần
                </button>
                <Link to="/profile"
                  className="btn-primary"
                  onClick={handleSave}
                  style={{  textAlign:"center", width:"165px", color:"white" }}
                >
                  Lưu thông tin
                </Link>
                <ModalAddDish showModal={showModal} setShowModal={setShowModal} setListGradientOut={setListGradientOut}/>
                <ModalRemindLogin showModal={remindLogin} setShowModal={setRemindLogin}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowNutrition;
