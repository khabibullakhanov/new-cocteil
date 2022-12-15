import React from 'react'
import './Menu.css'
import menuLogo from "../../Assets/Images/Menu Logo.png"
import { Link } from 'react-router-dom'
import { CatalogSearch } from "../../Companents/CatalogSearch/CatalogSearch"

export function Menu() {

    const menuNames = [
        {
            name: "Женщинам",
            path: "/dress",
        },
        {
            name: "Мужчинам",
            path: "/dress",
        },
        {
            name: "Детям",
            path: "/dress",
        },
        {
            name: "Обувь",
            path: "/dress",
        },
        {
            name: "Игрушки",
            path: "/dress",
        },
        {
            name: "Аксессуары",
            path: "/dress",
        },
        {
            name: "Большие размеры",
            path: "/dress",
        },
        {
            name: "Дополнительно",
            path: "/dress",
        },
        {
            name: "Акции",
            path: "/dress",
        },
        {
            name: "Майки",
            path: "/dress",
        },
        {
            name: "Костюмы",
            path: "/dress",
        },
        {
            name: "Брюки",
            path: "/dress",
        },
        {
            name: "Джинсы",
            path: "/dress",
        },
        {
            name: "Юбки",
            path: "/dress",
        },
        {
            name: "Шорты",
            path: "/dress",
        },
        {
            name: "Свитшоты, худи",
            path: "/dress",
        },
        {
            name: "Блузки и рубашки",
            path: "/dress",
        },
        {
            name: "Пиджаки и жакеты",
            path: "/dress",
        },
        {
            name: "Платья и сарафаны",
            path: "/dress",
        },
        {
            name: "Верхняя одежда",
            path: "/dress",
        },
    ]

    return (
        <>
            <CatalogSearch />
            <div id='menu-main-container'>
                <figure>
                    <img src={menuLogo} alt="" />
                </figure>
                <div id='menu-item-content'>
                    {menuNames.map((item, index) => {
                        return (
                            <Link to={item.path}>
                                {item.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
