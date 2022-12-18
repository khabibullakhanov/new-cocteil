import React from 'react'
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Checkbox } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { toast } from "react-toastify";
import uy1 from "../../Assets/Images/uy-1.webp";
import uy2 from "../../Assets/Images/uy-2.webp";
import uy3 from "../../Assets/Images/uy-3.webp";
import uy4 from "../../Assets/Images/uy-4.webp";

export function CatalogProducts() {
  const cart = JSON.parse(localStorage.getItem("catalog") || "[]");
  const likelar = (item) => {
    localStorage.setItem("catalog", JSON.stringify([...cart, item]));
    console.log(item);
  };

  const data = [
    {
      id: 1,
      name: "Namangan Sh. ",
      cost: "50.00 р",
      img: uy1,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 2,
      name: "Kosonsoy Sh. ",
      cost: "50.00 р",
      img: uy2,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 3,
      name: "Chust Sh. ",
      cost: "50.00 р",
      img: uy3,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 4,
      name: "Pop Sh. ",
      cost: "50.00 р",
      img: uy4,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 5,
      name: "Namangan Sh. ",
      cost: "50.00 р",
      img: uy2,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 6,
      name: "Davlatobod Sh. ",
      cost: "50.00 р",
      img: uy1,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 7,
      name: "Uhcqo'rg'on Sh. ",
      cost: "50.00 р",
      img: uy3,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 8,
      name: "To'raqo'rg'on Sh. ",
      cost: "50.00 р",
      img: uy4,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 9,
      name: "Chust Sh. ",
      cost: "50.00 р",
      img: uy1,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
    {
      id: 10,
      name: "Pop Sh. ",
      cost: "50.00 р",
      img: uy3,
      code: "Dos'tlik 5-dom 43-uy",
      color: "Al'o",
      size: "75 kv",
      count: 1,
      totalPrice: 127,
    },
  ];

  return (
    <div id="catalogs-main-container">
    {data.map((item, index) => {
      return (
        <div key={index} id="catalog-main-container">
          <figure id="catalog-figure-content">
            <img src={item.img} alt="" />
            <IconButton
              onClick={() => {
                //   toast.warn("Product is addedfdsfdsfdsd to the likes !");
                likelar(item);
              }}
            >
              <Checkbox
                icon={<FavoriteBorderIcon style={{ color: "black" }} />}
                checkedIcon={<FavoriteIcon style={{ color: "black" }} />}
              />
            </IconButton>
          </figure>
          <div id="catalog-inside-bottom-content">
            <p>{item.cost}</p>
            <div id="catalog-inside-bottom-content-basket">
              <span>{item.name}</span>
              <div id="catalog-inside-bottom-content-text">
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
                <div id="catalog-basket-icon-content">
                  <IconButton
                    onClick={() => {
                      toast.success("Product is added to the cart !");
                    }}
                  >
                    <ShoppingBagOutlinedIcon
                      id="catalog-basket-icon"
                      style={{ color: "black" }}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}
