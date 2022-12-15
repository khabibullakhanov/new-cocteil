import React, { useState } from "react";

import trashIcon from "../../Assets/Icons/trash Icon.svg";
import IconButton from "@mui/material/IconButton";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import { Checkbox } from "@mui/material";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";
import "swiper/css/pagination";

export function Likes() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("likes") || "[]") ||
      JSON.parse(localStorage.getItem("catalog") || "[]")
  );
  console.log(products);
  //   const likelar = (item) => {
  //     setLike(item);
  //     localStorage.setItem("likes", JSON.stringify([...cart, item]));
  //   };

  //   const plus = (id) => {
  //     setProduct(() =>
  //       product.map((item) =>
  //         item.id === id
  //           ? {
  //               ...item,
  //               count: item.count + 1,
  //             }
  //           : item
  //       )
  //     );
  //     product.count >= 15 ? (product.count = 15) : (product.count += 1);
  //   };

  //   const minus = (id) => {
  //     setProduct((Cart) =>
  //       product.map((item) =>
  //         item.id === id
  //           ? { ...item, count: item.count > 1 ? item.count - 1 : 1 }
  //           : item
  //       )
  //     );
  //   };

  const DeleteFromLikes = (i) => {
    // e.preventDefault();
    let del = products.filter((item, index) => index !== i);
    setProducts(del);
    console.log(setProducts(del));
    toast.error("Product seccessfully deleted !");
  };
  return (
    <div id="product-catalogs-main-container">
      <div
        style={
          products.length === 0 ? { display: "block" } : { display: "none" }
        }
      >
        <h1>Ҳозирча лике босилган уйлар йўқ</h1>
        <h2
          onClick={() => {
            navigate("/catalog");
          }}
        >
          Уйларни кориш
        </h2>
      </div>
      {products.map((item, index) => {
        const houseImages = item.img;
        return (
          <div key={index} id="product-catalog-main-container">
            <div id="product-catalog-main-container-top">
              <div id="product-catalog-main-container-top-left">
                {/* <figure>
                                    <img src={item.img} alt="" />
                                </figure> */}
                <Swiper
                  grabCursor={true}
                  effect={"creative"}
                  pagination={true}
                  // navigation={true}
                  creativeEffect={{
                    prev: { shadow: true, translate: [0, 0, -400] },
                    next: { translate: ["100%", 0, 0] },
                  }}
                  modules={[EffectCreative, Pagination]}
                  className="mySwiper"
                >
                  {houseImages.map((uy, indeks) => {
                    return (
                      // <div key={uyIndex}>
                      <SwiperSlide
                        slide="true"
                        key={indeks}
                        id="swiper-img-content"
                      >
                        <img src={uy} alt="" />
                      </SwiperSlide>
                      // </div>
                    );
                  })}
                  {/* <SwiperSlide id="swiper-img-content">
                    <img src={item.img} alt="" />
                  </SwiperSlide> */}
                  <div
                    className="swiper-pagination"
                    style={{ color: "black" }}
                  ></div>
                </Swiper>
              </div>
              <div id="product-catalog-main-container-top-right">
                <div id="product-catalog-main-container-top-right-first-content">
                  <h6>{item.name}</h6>
                  <p>{item.code}</p>
                </div>
                <div id="product-catalog-main-container-top-right-second-content">
                  <p>Холати : {item.color}</p>
                  <p>Размер: {item.size}</p>
                </div>
                {/* <div id="product-catalog-main-container-top-right-third-content">
                  <IconButton>
                    <p>-</p>
                  </IconButton>
                  <h3>{item.count}</h3>
                  <IconButton>
                    <p>+</p>
                  </IconButton>
                </div> */}
                <div id="product-catalog-main-container-top-right-fourth-content">
                  <div id="product-catalog-main-container-top-right-fourth-content-top">
                    <h6>Стоимость</h6>
                    <h4>
                      {item.count * item.totalPrice}.00 <span>&#8381;</span>
                    </h4>
                  </div>
                  {/* <div id="product-catalog-main-container-top-right-fourth-content-bottom">
                    <Checkbox
                      onClick={() => {
                        toast.success("Маҳсулот қошилди !");
                      }}
                      icon={
                        <FavoriteBorderIcon
                          onClick={() => {
                            toast.success("Маҳсулот cafdvhgsjhdbsjadbahsh !");
                          }}
                          id="like-basket-content"
                          style={{ color: "black", fontSize: "15px" }}
                        />
                      }
                      checkedIcon={
                        <FavoriteIcon
                          id="like-basket-content"
                          style={{ color: "black", fontSize: "15px" }}
                        />
                      }
                    />
                    <p>В избранное</p>
                  </div> */}
                </div>
              </div>
            </div>
            <div id="product-catalog-main-container-bottom">
              <div
                id="product-catalog-main-container-bottom-left"
                onClick={() => {
                  DeleteFromLikes(item.id);
                }}
              >
                <img src={trashIcon} alt="" />
                <p>Удалить</p>
              </div>
              <div
                id="product-catalog-main-container-bottom-right"
                onClick={() => {
                  navigate(`product/${item.id}`);
                }}
              >
                <p>Информация о доставке</p>
                <IconButton>
                  <ArrowRightAltIcon id="catalog-right-icon" />
                </IconButton>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
