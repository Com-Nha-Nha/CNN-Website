import axios from "axios";

const postImage = (base64Image, setResult) => {
    console.log("POST : ",base64Image)
   axios
     .post(`${process.env.REACT_APP_API_AI}`,{
        "image":base64Image
    })
     .then((response) => { 
       console.log(response.data.image);
       setResult(response.data)
       
     })
     .catch((error) => {
       console.log("Error", error);
     });


 };
 
export { postImage };