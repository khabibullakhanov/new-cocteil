import React, { useState } from 'react'
import "./Registration.css"
import { PatternFormat } from 'react-number-format';
import arrowRight from "../../Assets/Icons/Right Arrow.svg"
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export function Registration() {

    const [data, setData] = useState()
    const navigate = useNavigate()


    return (
        // <div>
        <div id='regis-main-container'>
            <form id='regis-form-container'
            onSubmit={(e) => {
                e.preventDefault()
                toast.success("Вы успешно зарегистрировались !")
                navigate("/")
            }}
            >
                <h2>Регистрация</h2>
                <div id='regis-form-inside'>
                    <input
                        type="text"
                        placeholder='ФИО'
                        autoComplete='off'
                        required
                    />
                    <PatternFormat
                        autoComplete='off'
                        placeholder="Номер телефона"
                        format="+99 (8##) ### ####"
                        name="phone"
                        required
                        onValueChange={(values) => {
                            const { value } = values;
                            setData({ ...data, phone: value });
                        }}
                    />
                    <input
                        type="email"
                        autoComplete='off'
                        required
                        name="email"
                        placeholder='Электронная почта'
                    />
                    <div id='regis-form-recept-content'>
                        <input type="radio" />
                        <p id='regist-form-recept-p'>Даю согласие на обработку персональных данных</p>
                    </div>
                </div>
                <div id='regis-submit-content'>
                    <button type='submit'>Отправить <img src={arrowRight} alt="" /></button>
                </div>
            </form>
        </div>
        // </div>
    )
}
