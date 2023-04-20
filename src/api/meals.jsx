import axios from "axios";

const getListMeals = ( setResult) => {
   axios
     .get('http://192.168.2.159:8080/api/v1/meals')
     .then((response) => { 
       console.log(response.data);
       setResult(response.data)
     })
     .catch((error) => {
       console.log("Error", error);
     });


 };
 
export { getListMeals };