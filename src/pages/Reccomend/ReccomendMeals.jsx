import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {getDishs} from "../../api/Dish"
// import Nutrition from "../../assets/data/Nutrition";
import RangeInput from "../../components/multiRangeSlider/RangeInput"
import { BiSearchAlt } from "react-icons/bi";


const ReccomendMeals = () => {
  const [ resultPost, setResultPost ] = useState(null);
  useEffect(()=>{
    // getListMeals(setResultPost);
     setResultPost(Meals) 
  },[])
  console.log(Meals);
 
  const handleSelectMeals =(value)=>{
    localStorage.setItem('meal', JSON.stringify(value));
  }
  const [select, setSelect] = useState(1);

  const [items, setItems] = useState([]);
  const [ res, setRes] = useState(null)
  const [visibleCount, setVisibleCount] = useState(6);
  const handleSeeMore = () => {
    setVisibleCount(visibleCount + 3); // show 6 more posts
  };

  const handleSeeLess = () => {
    setVisibleCount(6); // show 6 posts again
  };
// useEffect(() => { 
//   const items = JSON.parse(localStorage.getItem('account'));
//   if (items) {
//    setItems(items.customer);
//    getDishs(items.customer, setRes)
//   //  
//   }
// }, []);

  
  return (
    <div> 
      <div style={{display:"flex",justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"20px"}}>
        <div class="input-group mb-3 border-color-primary" style={{width:"60vw", borderColor:"red"}}>
          <input type="text" class="form-control  border-color-primary" aria-label="Text input with dropdown button"  placeholder="Recipient's username"/>
          <BiSearchAlt/>
          <button class="btn btn-outline-warning dropdown-toggle  border-color-primary" type="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</button>
          <ul class="dropdown-menu dropdown-menu-end">
          <form className="multi-range-field my-5 pb-5">
                
                <RangeInput id="multi3" value="50" min="0" max="100" step="1" width="100" />
              </form>
          </ul>
        </div>
      </div>
    
       
          <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <a  className={`mx-4 nav-child-item ${select==1 ? 'text-nav-effect' : ' gray-color'}`} onClick={()=>{setSelect(1)}}  href="#" style={{textDecoration:"none"}}>
              Buổi sáng
            </a>
            <a className={`mx-4 nav-child-item  ${select==2 ? 'text-nav-effect' : ' gray-color'}`} onClick={()=>{setSelect(2)}} style={{textDecoration:"none"}} href="#">
              Buổi trưa
            </a>
            <a className={`mx-4 nav-child-item  ${select==3 ? 'text-nav-effect' : ' gray-color'}`} style={{textDecoration:"none"}}  href="#" onClick={()=>{setSelect(3)}}>
              Buổi chiều
            </a>
          </div>
        
      <div className="container mt-16">
        <div className="row">
          {resultPost &&
            resultPost.slice(0, visibleCount).map((value, index) => {
              // const listStringComponent = value.nutritionMeals.join(" • ");
              // let  Cal =0;
              // for(let  i=0;i<Nutrition.length;i++)
              // {
              //     value.elementMeals.includes(Nutrition[i].nameDish)
              //     Cal = Cal + Nutrition[i].numberCalo
              // }
              // console.log(Cal);
              return (
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4  mb-16"> 
                {/*  */}
                  <Link class="card" to="/reccomend-store"  onClick={handleSelectMeals(value.listRestaurant)} >
                    <img
                      class="card-img-top"
                      src={value.thumbnail} style={{height:"30vh"}}
                      alt="Card image cap"
                    />
                    <div class="card-body" style={{ color:"black"}}>
                      <h5 class="card-title" > {value.nameMeals}</h5>
                      <p class="card-text">
                        {/* {listStringComponent} */}
                      </p>
                      <p>
                        {value.calo} Calo
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
        {resultPost && visibleCount < resultPost.length ?
         (
            <button onClick={handleSeeMore}>See More</button>
          ) : (
            <button onClick={handleSeeLess}>See Less</button>
          )
        }
          
      </div>
    </div>
  );
};

export default ReccomendMeals;
// eslint-disable-next-line import/no-anonymous-default-export, no-sparse-arrays
const restaurants = [
  {
    thumbnail:
      "https://drhueclinic.vn/images/seoworld/nha-hang-co-khong-gian-dep-tphcm.png",
    title: "Quán ăn gia đình Nhỏ",
    address: "87-89 Đinh Tiên Hoàng, phường Đa Kao, quận 1, TP.HCM",
    rate: 5,

    prices: "35.0000",
  },
  {
    thumbnail:
      "https://pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-bo-suu-tap/10-nh-an-dong-qua-hcm/top-10-nha-hang-quan-an-dong-que-ngon-noi-tieng-o-tphcm-8.jpg",
    title: "Tiệm ăn quê hương tôi",
    address: "197 Nguyễn Thị Minh Khai, phường 6, quận 3, TP.HCM",
    rate: 5,
    prices: "30.0000",
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtiDrZ6eu8BKC2uhF2FEr9n85u6qzB6uAjPA&usqp=CAU",
    title: "Nhà ăn Hòa Bình",
    address: "95-197 Phan Xích Long, phường 2, quận Phú Nhuận, TP.HCM",
    rate: 5,
    prices: "35.0000",
  },
  {
    thumbnail:
      "https://filetrangtri.com/wp-content/uploads/2021/08/trang-tri-quan-an-vat-don-gian-dep-01a.jpg",
    title: "Healthy Quán",
    address: "323 Phan Xích Long, phường 2, quận Phú Nhuận, TP.HCM",
    rate: 4.9,
    prices: "28.0000",
  },
  {
    thumbnail: "https://gacobap.com/wp-content/uploads/2018/05/kinh-nghiem-mo-quan-an-nho-2.jpg",
    title: "Nhà hàng Góc",
    address: "số 531 Kỳ Đồng, Phường 9, Quận 3, Tp.HCM",
    rate: 4.8,
    prices: "25.0000",
  },
  ,
  {
    thumbnail: "https://cdn.nguyenkimmall.com/images/companies/_1/tin-tuc/kinh-nghiem-meo-hay/meo%20vat/quan-an-gan-day-1.jpg",
    title: "Quán Băm Sài Gòn",
    address: "số 41 Kỳ Đồng, Phường 9, Quận 3, Tp.HCM",
    rate: 5.0,
    prices: "23.0000",
  },

  {
    thumbnail: "https://noithatlongthanh.vn/upload/images/thiet-ke-nha-hang-banh-mi-tai-ho-dac-di-2.jpg",
    title: "Quán Hồ Đắc Di",
    address: "số 41 Nguyễn Trãi, Phường Nguyễn Cưu Trinh, Quận 1, Tp.HCM",
    rate: 4.9,
    prices: "20.0000",
  },
  {
    thumbnail: "https://websitecukcukvn.misacdn.net/wp-content/uploads/2019/02/quan20an20sang202.jpg",
    title: "Quán Hồ Đặc sản mới",
    address: "số 82/3 Lê Đại Thành, Phường 4, Quận 1, Tp.HCM",
    rate: 4.9,
    prices: "22.0000",
  },

];

const Meals =  [
  {
    thumbnail:
      "data:image/jpeg;base64,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",
    nameMeals: "Cơm tấm sườn trứng",
    calo: 527,
    listRestaurant: [
        restaurants[0],
        restaurants[2],
        restaurants[1]
    ],
  },
  {
    thumbnail:
      "https://d1sag4ddilekf6.cloudfront.net/compressed_webp/items/5-CZDYE6WHPEL3JJ-CZDYE6WJLXNDLJ/detail/menueditor_item_7d97d6060776462a93e165886e16fa8b_1590066897175368538.webp",
    nameMeals: "Cơm tấm chả trứng",
    calo: 414,
    listRestaurant: [
        restaurants[2],
        restaurants[0],
        restaurants[1]
    ],
  },
  {
    thumbnail:
      "https://cdn.tgdd.vn/Files/2021/08/16/1375565/cach-nau-com-tam-suon-bi-cha-tai-nha-ngon-nhu-ngoai-tiem-202108162216045436.jpg",
    nameMeals: "Cơm tấm sườn",
    calo: 565,
    listRestaurant: [
        restaurants[5],
        restaurants[2],
        restaurants[3]
    ],
  },
  {
    thumbnail: "https://comtamanhtu.com/images/stores/2019/11/16/A5.jpg",
    nameMeals: "Cơm tấm chả",
    calo: 592,
    listRestaurant: [
        restaurants[1],
        restaurants[2],
        restaurants[4]
    ],
  },
  {
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX9oC0vZivSGnvXfRpFgfjnuE7e8kRJxAs_AhTOG1iWKRwcrly9RBSLh_c25MC5C2hDDU&usqp=CAU",
    nameMeals: "Cơm tấm bì",
    calo: 627,
    listRestaurant: [
        restaurants[4],
        restaurants[2],
        restaurants[0]
    ],
  },
  {
    thumbnail:
      "https://comtamthuankieu.com.vn/wp-content/uploads/2020/12/bdfffb.png",
    nameMeals: "Cơm tấm sườn bì chay",
    calo: 590,
    listRestaurant: [
        restaurants[5],
        restaurants[2],
        restaurants[3]
    ],
  },
  {
    thumbnail: "https://i.ytimg.com/vi/qP9IRIaefsA/maxresdefault.jpg",
    nameMeals: "Bún xào",
    calo: 570,
    listRestaurant: [
        restaurants[5],
        restaurants[4],
        restaurants[6]
    ],
  },
  {
    thumbnail: "https://cdn.tgdd.vn/2020/07/CookProduct/dzgbd-1200x676.jpg",
    nameMeals: "Hủ tíu bò kho",
    calo: 410,
    listRestaurant: [
        restaurants[6],
        restaurants[4],
        restaurants[7]
    ],
  },
  {
    thumbnail:
      "https://cdn.tgdd.vn/Files/2019/07/13/1179249/cach-nau-banh-canh-gio-heo-ngon-thit-mem-va-nuoc-dung-ngot-thanh-202112221326033228.jpg",
    nameMeals: "Bánh canh giò heo",
    calo: 483,
    listRestaurant: [
      {
        thumbnail: "",
        title: "",
        address: "",
        rate: "",
        prices: "",
      },
    ],
  },
  {
    thumbnail: "",
    nameMeals: "Cháo gỏi vịt",
    calo: 930,
    listRestaurant: [
        restaurants[3],
        restaurants[6],
        restaurants[5]
    ],
  },
  {
    thumbnail: "https://i.ytimg.com/vi/_cdBAMq5KZ0/maxresdefault.jpg",
    nameMeals: "Cơm chiên dương châu",
    calo: 530,
    listRestaurant: [
        restaurants[5],
        restaurants[6],
        restaurants[4]
    ],
  },
  {
    thumbnail:
      "https://cdn.tgdd.vn/2022/02/CookRecipe/Avatar/ca-com-chien-gion-thumbnail.jpg",
    nameMeals: "Cá cơm lăn bột chiên",
    calo: 195,
    listRestaurant: [
        restaurants[0],
        restaurants[4],
        restaurants[1]
    ],
  },

  {
    thumbnail:
      "https://photo.famicook.com/image/canh-kho-qua-nau-tom-i6313-640w.jpg",
    nameMeals: "Canh khổ qua hầm",
    calo: 175,
    listRestaurant: [
        restaurants[7],
        restaurants[1]
    ],
  },
  {
    thumbnail:
      "https://cdn.tgdd.vn/Files/2020/03/12/1241599/chi-trang-chia-se-cach-lam-dau-hu-nhoi-thit-mon-don-gian-va-de-an-202209091444581966.jpg",
    nameMeals: "Đậu hủ dồn thịt",
    calo: 328,
    listRestaurant: [
        restaurants[6],
        restaurants[2],
        restaurants[5]
    ],
  },
  {
    thumbnail:
      "https://cdn.tgdd.vn/Files/2020/08/14/1279784/cach-lam-thit-kho-trung-voi-7-up-thit-mem-sieu-nhanh-len-mau-dep-khien-chong-con-tam-tac-khen-ngoi-202201071134249663.jpg",
    nameMeals: "Thịt kho trứng",
    calo: 315,
    listRestaurant: [
        restaurants[1],
        restaurants[6],
        restaurants[7]
    ],
  },
  {
    thumbnail: "https://cdn.tgdd.vn/2021/02/CookProduct/1200-1200x676-16.jpg",
    nameMeals: "Mì quảng",
    calo: 541,
    listRestaurant: [
        restaurants[2],
        restaurants[7],
        restaurants[0]
    ],
  },
  {
    thumbnail:
      "https://www.huongnghiepaau.com/wp-content/uploads/2019/08/banh-mi-kep-thit-nuong-thom-phuc.jpg",
    nameMeals: "Bánh mì thịt",
    calo: 461,
    listRestaurant: [
        restaurants[3],
        restaurants[0],
        restaurants[1]
    ],
  },
  {
    thumbnail: "https://yummyday.vn/uploads/images/banh-mi-cha-2.jpg",
    nameMeals: "Bánh mì kẹp chả lụa",
    calo: 431,
    listRestaurant: [
        restaurants[7],
        restaurants[0],
        restaurants[3]
    ],
  },
  {
    thumbnail: "https://cdn.tgdd.vn/2021/09/CookProduct/1200(3)-1200x676-2.jpg",
    nameMeals: "Phở gà",
    calo: 483,
    listRestaurant: [
        restaurants[6],
        restaurants[0],
        restaurants[4]
    ],
  },
];


export  {Meals};