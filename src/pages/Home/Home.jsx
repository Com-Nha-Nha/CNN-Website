import React, { useState } from "react";
import { redirect, Link } from "react-router-dom";
import bannerhhome from "../../assets/images/banner/banner_home.png";
import bannerhhome2 from "../../assets/images/banner/banner_home_2.png";
import bannerhhome3 from "../../assets/images/banner/banner_home_3.png";
import mobile1 from "../../assets/images/mobiles/mobile1.png";
import mobile2 from "../../assets/images/mobiles/mobile2.png";
import fat from "../../assets/images/nutrition/fat.png";
import protein from "../../assets/images/nutrition/protein.png";
import starch from "../../assets/images/nutrition/starch.png";
import vitamin from "../../assets/images/nutrition/vitamin.png";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextClick = () => {
    setActiveIndex((activeIndex + 1) % 3);
  };

  const handlePrevClick = () => {
    setActiveIndex((activeIndex - 1 + 3) % 3);
  };

  const handleButtonUse =()=>{
    redirect('/log-in');
  }

  const slides = [
    {
      id: 0,
      imageUrl: bannerhhome,
    },
    {
      id: 1,
      imageUrl: bannerhhome2,
    },
    {
      id: 2,
      imageUrl: bannerhhome3,
    },
  ];
console.log(`${process.env.REACT_APP_API_KEY}${process.env.REACT_APP_API_CUSTOMER}`)
  const items = Array.from({ length: slides.length }, (_, i) => (
    <button
      className={`mx-2 ${i === activeIndex ? "bg-white-80" : "bg-white-50"}`}
      style={{
        width: "80px",
        height: "15px",
        borderRadius: "10px",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      onClick={() => {
        setActiveIndex(i);
      }}
    ></button>
  ));

  return (
    <div>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={slide.id === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(slide.id)}
            />
          ))}
        </ol>
        <div className="carousel-inner">
          <ol className="carousel-indicators">{items}</ol>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`carousel-item  ${
                slide.id === activeIndex ? "active" : ""
              }`}
            >
              <div className="image-container ">
                <img
                  className="d-block w-100 slide-image"
                  src={slide.imageUrl}
                  alt={`Slide ${slide.id}`}
                  style={{ height: "90vh", objectFit: "cover" }}
                />

                <div className="overlay"></div>
              </div>
              <div
                className="carousel-caption text-center"
                style={{ bottom: "20vh" }}
              >
                <h1>
                  Đánh giá và gợi ý món ăn{" "}
                  <b style={{ color: "yellow" }}> phù hợp </b>
                </h1>
                <h4 style={{ marginTop: "20px", fontWeight:"400" }}>
                  {" "}
                  Bữa ăn dễ dàng khi đánh giá được thành phần dinh dưỡng, calo
                  và gợi ý món ăn phù hợp nhu cầu{" "}
                </h4>
                <Link to="/log-in" type="button" className="btn btn-warning" style={{color:"white", borderRadius:"5px", marginTop:"20px", fontSize:"1.3rem",fontWeight:"400", padding:"15px"}}>Dùng ngay</Link>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          onClick={handlePrevClick}
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          onClick={handleNextClick}
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </a>
      </div>

      {/* <div className="bg-reactangle "></div>
      <div className="flex-c-center">
        <img className="d-block slide-image" src={mobile1} style={{width:"10vw", height:"auto"}}/>
        <img className="d-block slide-image" src={mobile2} style={{width:"10vw", height:"auto"}}/>
      </div> */}
      {/* <div style={{backgroundColor:"#EEE2DA", textAlign:"center"}}>
        <h4>Đề xuất bữa ăn theo tình trạng cơ thể</h4>
        <div className="flex-c-center">
            <img className="d-block slide-image" src={fat} style={{width:"10vw", height:"auto"}}/>
            <img className="d-block slide-image" src={protein} style={{width:"10vw", height:"auto"}}/>
            <img className="d-block slide-image" src={starch} style={{width:"10vw", height:"auto"}}/>
            <img className="d-block slide-image" src={vitamin} style={{width:"10vw", height:"auto"}}/>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
