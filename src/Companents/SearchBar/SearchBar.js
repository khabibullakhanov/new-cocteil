import React, { useState } from "react";
import searchIcon from "../../Assets/Icons/Search Icon.svg";
import "./SearchBar.css";
import { useDispatch, useSelector } from "react-redux";
import { acSearch } from "../../Redux/Search";
import { Link } from "react-router-dom";
import uy1 from "../../Assets/Images/uy-1.webp"
import uy2 from "../../Assets/Images/uy-2.webp"
import uy3 from "../../Assets/Images/uy-3.webp"
import uy4 from "../../Assets/Images/uy-4.webp"

export function SearchBar() {
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const searched = useSelector((state) => state.search);
  const [products] = useState([
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
    <div id="search-bar-container">
      <form
        id="search-form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Поиск..."
          onChange={(e) => {
            dispatch(acSearch(e.target.value.toLowerCase()));
            setSearch(e.target.value);
          }}
        />
      </form>
      <div
        id="searched-content-container"
        style={search ? { display: "flex" } : { display: "none" }}
      >
        {search
          ? products
              .filter((itemn) => itemn.name.includes(searched))
              .map((item, index) => {
                return (
                  <div key={index}>
                    <div id="searched-content-container-inside">
                      <p>{index + 1}</p>
                      <Link
                        onClick={() => {
                          setSearch(false);
                        }}
                        to={`/product/${item.id}`}
                      >
                        {item.name}
                      </Link>
                    </div>
                  </div>
                );
              })
          : ""}
      </div>
    </div>
  );
}
