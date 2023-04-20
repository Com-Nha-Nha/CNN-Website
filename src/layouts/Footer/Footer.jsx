import React from "react";
import downloadAppStore from "../../assets/images/downloadAppStore.png";
import downloadChPlay from "../../assets/images/downloadChPlay.png";
import { Link } from "react-router-dom";

const FooterList = ({ content, title }) => {
  return (
    <div className="col-md-6 col-12 flex-c-start" >
      <ul className="gap-into">
        <p className="fw-600 fs-larger">{title}</p>
        {content &&
          content.map((value, index) => {
            return (
              <a className="list-group-item c-primary" style={{zIndex:10}} href={value.redirect}>{value.content}</a>
            );
          })}
      </ul>
    </div>
  );
};

const Footer = () => {
  const first_list = [
    {
      redirect: "/scan",
      content: "Quét món",
    },
    { 
      redirect: "/reccomend-meals", 
      content: "Gợi ý món ăn" 
    },
    { 
      redirect: "/profile", 
      content: "Theo dõi hồ sơ dinh dưỡng" 
    }
  ];
  const first_title = "Cơm nhà nha";

  const second_list = [
    { 
      redirect: "https://www.facebook.com/nangtamsuckhoesinhvienViet", 
      content:"Fanpage"
    }, 
    { 
      redirect: "", 
      content:"Email"
    }
  ];

  const second_title = "Liên hệ";

  return (
    <footer className="container" >
      <div className="row" style={{ gap: "20px",zIndex:"10000" }}>
        <div className="col-md-6 col-12 row ">
          <FooterList content={first_list} title={first_title} />
          <FooterList content={second_list} title={second_title} />
        </div>
        <div className="col-md-6 col-12 justify-content-center flex-c-end">
          <div style={{ display: "inline", paddingLeft:"25px" }}>
            <p className="fw-600 fs-larger">Tải ứng dụng</p>
            <p>Quản lý việc chế độ dinh dưỡng của bạn từ mọi nơi, mọi lúc.</p>
            <img src={downloadAppStore} alt="app store" className="mr-8 mb-8" />
            <img src={downloadChPlay} alt="ch play" className="mb-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
