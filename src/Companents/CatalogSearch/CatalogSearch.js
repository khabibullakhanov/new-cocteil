import React, { useState } from 'react'
import searchIcon from "../../Assets/Icons/Search Icon.svg"
import "./CatalogSearch.css"
import { useDispatch, useSelector } from 'react-redux'
import { acSearch } from '../../Redux/Search'
import { Link } from 'react-router-dom'


export function CatalogSearch() {
    const [search, setSearch] = useState()
    const dispatch = useDispatch()
    const searched = useSelector((state) => state.search);
    const products = [
        {
          id: 0,
          name: "Namangan Sh. ",
          cost: "50.00 р",
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
          code: "Dos'tlik 5-dom 43-uy",
          color: "Al'o",
          size: "75 kv",
          count: 1,
          totalPrice: 127,
        },
      ]
    return (
        <div id='search-bar-catalog-container'>
            <p>Каталог</p>
            <form id='search-form'
                onSubmit={(e) => {
                    e.preventDefault()
                }}
            >
                <img src={searchIcon} alt="" />
                <input type="text" placeholder='Поиск...'
                    onChange={(e) => {
                        dispatch(acSearch(e.target.value.toLowerCase()))
                        setSearch(e.target.value);
                    }}
                />
            </form>
            <div id='searched-catalog-content-container' style={search ? { display: "flex", } : { display: "none" }}>
                {search ? products.filter((itemn) => itemn.name.includes(searched))
                    .map((item, index) => {
                        return (
                            <div key={index}>
                                <div id="searched-content-container-inside">
                                    <p>{index + 1}</p>
                                    <Link
                                        onClick={() => {
                                            setSearch(false);
                                        }}
                                        to={`/product/${item.id}`}>{item.name}</Link>
                                </div>
                            </div>
                        )
                    }) : ""
                }
            </div>
        </div>
    )
}
