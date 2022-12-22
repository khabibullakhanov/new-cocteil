import React, { useState } from "react";
import "./Basket.css";
import topIcon from "../../Assets/Icons/Scroll To Top Arrow.svg";
import { useLocation } from "react-router-dom";
import { BasketProducts } from "../../Companents/BasketProducts/BasketProducts";
import uy1 from "../../Assets/Images/uy-1.webp";
import uy2 from "../../Assets/Images/uy-2.webp";
import uy3 from "../../Assets/Images/uy-3.webp";
import uy4 from "../../Assets/Images/uy-4.webp";

export function Basket() {
  const location = useLocation();
  const [product, setProduct] = useState([
    {
      id: 0,
      name: "Namangan Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 1,
      name: "Kosonsoy Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 2,
      name: "Chust Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 3,
      name: "Pop Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 4,
      name: "Namangan Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 5,
      name: "Davlatobod Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 6,
      name: "Uhcqo'rg'on Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 7,
      name: "To'raqo'rg'on Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 8,
      name: "Chust Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 9,
      name: "Pop Sh. ",
      cost: "50.00 р",
      img: [uy1, uy2, uy3, uy4],
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
  ]);
  return (
    <div id="basket-main-container">
      <div
        style={
          location.pathname === "/basket"
            ? { display: "flex", zIndex: "99999" }
            : { display: "block" }
        }
        id="scroll-to-top-basket" 
      >
        <div id="scroll-to-top-basket-top">
          <img
            src={topIcon}
            alt=""
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          />
        </div>
        <div id="scroll-to-top-basket-inside">
          <p>
            К оформлению <span>{product.length} шт</span> шт,{" "}
            <span>
              {" "}
              {product.reduce((a, b) => a + b.count * b.totalPrice, 0)} p
            </span>
            .
          </p>
        </div>
      </div>
      <BasketProducts product={product} setProduct={setProduct} />
      <div></div>
    </div>
  );
}
