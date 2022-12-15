import React from 'react'
import { SearchBar } from '../../Companents/SearchBar/SearchBar'
import "./MainScreen.css"
import rightArrow from '../../Assets/Icons/Right Arrow.svg'
import { useNavigate } from 'react-router-dom'


export function MainScreen() {
    const navigate = useNavigate()
    return (
        <div id="main-screen-main-container">
            <SearchBar />
            <div id='main-screen-inside-content'>
                <h2>Добро пожаловать в <span>Cocteil</span></h2>
                <p>Экономим Ваше время! Предлагаем лучшие цены! Доставляем в кратчайшие сроки!</p>
                <div id='main-screen-see-more-content' onClick={() => {
                    navigate("/catalog")
                }}>
                    <p>Каталог</p>
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        </div>
    )
}
