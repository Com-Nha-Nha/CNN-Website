import axios from "axios";

const getDishs = (inforUser, setRes) => {
  // 
   axios
     .post(`${process.env.REACT_APP_API_KEY}/api/v1/dishes/healthy/?limit=3&page=1/?limit=3&page=1`,{
    customer: {
          
      "desires": [0, 2, 5],
      "diseases": [3, 3, 3],
      "allergicFoods": ["Hải sản"]
}
  })
     .then((response) => { 
      console.log(response)
      setRes(response.data.content)
     })
     .catch((error) => {
       console.log("Error", error);
     });
 };


export { getDishs };