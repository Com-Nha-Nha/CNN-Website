import axios from "axios";

const getIngrediants = () => {
   axios
     .get(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_INGREDIENT}`)
     .then((response) => { 
      console.log(response.data)
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 };


export { getIngrediants };