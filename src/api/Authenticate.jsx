import axios from "axios";

const Register = (inputSignUp1,inputSignUp2,inputSignUp3, inputMedical) => {
  const gender = inputSignUp1.gender=="nữ" ?0:1;
  
  let listDesire = []
  for (let i = 0; i < inputSignUp2.length; i++) {
    let numberPresent ;
    if(inputSignUp2[i])
    {
      if(inputSignUp2[i]=="Tăng cân")
      {
        numberPresent=0
      }
      else if(inputSignUp2[i]=="Giảm cân")
      {
        numberPresent=2
      }
      else if(inputSignUp2[i]=="Vận động mạnh")
      {
        numberPresent=3
      }
      else if(inputSignUp2[i]=="Giảm cân")
      {
        numberPresent=4
      }
      else 
      {
        numberPresent=5
      }
      listDesire.push(numberPresent);
    }
  }

  let listDiseases = []
  for (let i = 0; i < inputMedical.length; i++) {
    let numberPresent ;
    if(inputSignUp2[i])
    {
      if(inputSignUp2[i]=="Béo phì")
      {
        numberPresent=0
      }
      else if(inputSignUp2[i]=="Suy dinh dưỡng")
      {
        numberPresent=1
      }
      else if(inputSignUp2[i]=="Viêm dạ dày")
      {
        numberPresent=2
      }
      else 
      {
        numberPresent=3
      }
      listDiseases.push(numberPresent);
    }
  }
  console.log(inputSignUp3,{
    "name": inputSignUp1.username,
    "email": inputSignUp1.email,
    "password": inputSignUp1.password,
    "job": inputSignUp1.job,
    "yob": inputSignUp1.dob,
    "sex": gender,
    "weight": inputSignUp1.weight,
    "height": inputSignUp1.height,
    "desires": listDesire,
    "diseases": listDiseases,
    "allergicFoods": inputSignUp3.allergy
  })
   axios
     .post(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_CUSTOMER}`,{
      "name": inputSignUp1.username,
      "email": inputSignUp1.email,
      "password": inputSignUp1.password,
      "job": inputSignUp1.job,
      "yob": inputSignUp1.dob,
      "sex": gender,
      "weight": inputSignUp1.weight,
      "height": inputSignUp1.height,
      "desires": listDesire,
      "diseases": listDiseases,
      "allergicFoods": inputSignUp3.allergy
    })
     .then((response) => { 
      console.log(response.data)
       
     })
     .catch((error) => {
       console.log("Error", error);
     });
 };

 const Login=(inputs, setResponseApi)=>{
  axios
     .post(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_LOGIN}`,{
      "email": inputs.email,
      "password": inputs.password
    })
     .then((response) => { 
      setResponseApi(response.data.content)
     })
     .catch((error) => {
       console.log("Error", error);
     });
 }

 const Logout=()=>{
  localStorage.removeItem("account")
 }
 
export { Register, Login, Logout };