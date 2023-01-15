import React, { useState } from "react";
import "./Registration.css";
import { PatternFormat } from "react-number-format";
import arrowRight from "../../Assets/Icons/Right Arrow.svg";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { acLoading } from "../../Redux/Loading";
import { acLogin } from "../../Redux/Login";
import axios from "axios";

export function Registration() {
  const dispatch = useDispatch();
  const [data, setData] = useState();
//   const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();
    // toast.success("Вы успешно зарегистрировались !");
    // navigate("/");
    dispatch(acLoading(true));
    const { login, password, chek } = data;
    axios("https://honey.pandashop.uz/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        login,
        password,
      },
    })
      .then((res) => {
        dispatch(acLoading(false));
        if (chek) {
          localStorage.setItem("admin", JSON.stringify(res.data));
          dispatch(acLogin(res.data));
        } else {
          sessionStorage.setItem("admin", JSON.stringify(res.data));
          dispatch(acLogin(res.data));
        }
        toast.success(res.response.data.message);
      })
      .catch((err) => {
        dispatch(acLoading(false));
        toast.error(err.response.data.message);
      });
    reset();
  };

  return (
    // <div>
    <div id="regis-main-container">
      <form id="regis-form-container" onSubmit={handleSubmit(onSubmit)}>
        <h2>Регистрация</h2>
        <div id="regis-form-inside">
          <input type="text" placeholder="ФИО" autoComplete="off" required />
          <PatternFormat
            autoComplete="off"
            placeholder="Номер телефона"
            format="+99 (8##) ### ####"
            name="phone"
            required
            allowemptyformatting="true"
            onValueChange={(values) => {
              const { value } = values;
              setData({ ...data, phone: value });
            }}
          />
          <input
            type="text"
            autoComplete="off"
            required
            name="email"
            placeholder="Электронная почта"
            {...register("login")}
          />
          <input
            type="password"
            autoComplete="off"
            required
            name="password"
            placeholder="Password"
            {...register("password")}
          />
          <div id="regis-form-recept-content">
            <input type="radio" {...register("chek")}/>
            <p id="regist-form-recept-p">
              Даю согласие на обработку персональных данных
            </p>
          </div>
        </div>
        <div id="regis-submit-content">
          <button type="submit">
            Отправить <img src={arrowRight} alt="" />
          </button>
        </div>
      </form>
    </div>
    // </div>
  );
}
