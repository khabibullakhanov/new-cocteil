import React, { useState } from "react";
import "./ProductView.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import { EffectCreative, Pagination, EffectCoverflow } from "swiper";
import "swiper/css/pagination";
import uy1 from "../../Assets/Images/uy-1.webp";
import uy2 from "../../Assets/Images/uy-2.webp";
import uy3 from "../../Assets/Images/uy-3.webp";
import uy4 from "../../Assets/Images/uy-4.webp";
import { Checkbox } from "@mui/material";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

export function ProductView() {
  const [data, setData] = useState([
    {
      id: 0,
      name: "Namangan Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      about: "lorem ipsum dolor sit amet.",
      totalPrice: 127,
    },
  ]);

  const [mostSeen, setMostSeen] = useState([uy1, uy2, uy3, uy4]);

  return (
    <div id="product-view-main-container">
      {data.map((item, index) => {
        const houseImages = item.img;
        return (
          <div key={index} id="product-view-inside-content">
            <Swiper
              grabCursor={true}
              effect={"creative"}
              id="view-swiper"
              pagination={true}
              creativeEffect={{
                prev: { shadow: true, translate: [0, 0, -400] },
                next: { translate: ["100%", 0, 0] },
              }}
              modules={[EffectCreative, Pagination]}
              className="mySwiper"
            >
              {houseImages.map((uy, indeks) => {
                return (
                  <SwiperSlide
                    slide="true"
                    key={indeks}
                    id="product-view-swiper"
                  >
                    <img src={uy} alt="" />
                  </SwiperSlide>
                );
              })}
              <div
                className="swiper-pagination"
                style={{ color: "black" }}
              ></div>
            </Swiper>
            <div id="product-view-about-content">
              <div id="product-view-flex-content">
                <h4>Город :</h4>
                <p>{item.name} ;</p>
              </div>
              <div id="product-view-flex-content">
                <h4>Адрес :</h4>
                <p>{item.code} ;</p>
              </div>
              <div id="product-view-flex-content">
                <h4>Условие :</h4>
                <p>{item.color} ;</p>
              </div>
              <div id="product-view-flex-content">
                <h4>Размер :</h4>
                <p>{item.size} ;</p>
              </div>
              <div id="product-view-flex-content">
                <h4>Стоимость :</h4>
                <p>{item.size} ;</p>
              </div>
              <div id="product-view-opisaniya-content">
                <h4>Описание :</h4>
                <div>
                  <p>{item.about}</p>
                  <p>{item.about}</p>
                </div>
              </div>
              <div id="catalog-stars-container">
                <Checkbox
                  icon={
                    <StarOutlineOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                  checkedIcon={
                    <StarOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                />
                <Checkbox
                  icon={
                    <StarOutlineOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                  checkedIcon={
                    <StarOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                />
                <Checkbox
                  icon={
                    <StarOutlineOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                  checkedIcon={
                    <StarOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                />
                <Checkbox
                  icon={
                    <StarOutlineOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                  checkedIcon={
                    <StarOutlinedIcon
                      id="catalog-stars"
                      style={{ color: "#514A7E" }}
                    />
                  }
                />
              </div>
              <div id="product-view-bottom-connect-content">
                <a href="" >Добавить отзыв</a>
                <a href="" >Смотреть все отзывы</a>
              </div>
              <div id="product-veiw-buy-content">
                <button>Купить сейчас</button>
                <button>
                  В корзину <ShoppingBagOutlinedIcon />{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {mostSeen.map((mostItem, mostIndex) => {
          return (
            <SwiperSlide id="mostSeen-bestseller-swiper" key={mostIndex}>
              <img src={mostItem} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
