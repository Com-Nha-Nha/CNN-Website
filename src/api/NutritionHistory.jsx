import axios from "axios";


 const addNutritionHistory=(customerID, foods,dishImage)=>{
   
    let listFoods =[]
    for(let i=0; i<foods.length; i++)
    {
        listFoods.push({
            "name": foods[i].name,
            "unit": {
                "name": foods[i].unit,
                "unitAmount": foods[i].number
            },
            "calo": foods[i].calo, 
            "nutrition": foods[i].nutrition 
        })
    }
    console.log({
        customerID:customerID,
        foods:listFoods,
        dishImage:dishImage
    })
  axios
     .post(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_NUTRITION_HISTORY}`,{
        customerID:customerID,
        foods:listFoods,
        dishImage:dishImage
    })
     .then((response) => { 
      console.log(response.data)
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 }
 

 const getNutritionHistory=(customerID, setRes, dateSE)=>{
    const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  console.log(dateSE);

  console.log(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_NUTRITION_HISTORY}/${customerID}?dateBegin="26/03/2023"&dateEnd="31/03/2023"`)
  axios
     .get(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_NUTRITION_HISTORY}/${customerID}?dateBegin=${dateSE}&dateEnd=${dateSE}`)
     .then((response) => { 
        setRes(response.data.content.nutritionHistories )
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 }
export { addNutritionHistory, getNutritionHistory };