
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "./assets/styles/index.css";
import MainRoute from './route/MainRoute';
import Header from './layouts/Header/Header'; 
import Footer from './layouts/Footer/Footer';
function App() {
  return (
    <div className="App" style={{minHeight:"100vh",display:"flex", flexDirection:"column",backgroundColor:"#F9F9F9"}}>
      <Header/>
      <div style={{}}>
        <MainRoute/>
      </div>
      <div style={{marginTop:"50px", backgroundColor:"white", paddingTop:"30px", borderTop:"solid 0.5px gray"}}> 
        <Footer/>
      </div>
   
   
    </div>
  );
}

export default App;
