import React, { useState } from 'react'
import "./Feedback.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Checkbox } from "@mui/material";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import arrowRight from "../../Assets/Icons/Right Arrow.svg"




export function Feedback() {

    const [modal, setModal] = useState(true)

    return (
        <div style={modal ? { display: "flex" } : { display: "none" }} id='feedback-main-container'>
            <form id='feedback-main-form-container'>
                <div id='feedback-main-form-container-top'>
                    <div>
                        <IconButton
                            onClick={() => {
                                setModal(false)
                            }}
                        >
                            <CloseOutlinedIcon style={{ fontSize: "14px" }} />
                        </IconButton>
                    </div>
                    <h2>Ваш отзыв</h2>
                </div>
                <div id='feedback-form-name-part'>
                    <input type="text" placeholder='Фамилия и имя' />
                    <div id='feedback-form-text-part'>
                        <input type="text" placeholder='Напишите свой отзыв...' />
                        <div id='feedback-form-text-part-bottom'>
                            <p>Отзыв</p>
                            <div id='feedback-form-text-part-bottom-right'>
                                <label>
                                    <span>Прикрепить фото</span>
                                    <AttachFileIcon />
                                    <input type="file" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Checkbox
                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                        />
                        <Checkbox
                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                        />
                        <Checkbox
                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                        />
                        <Checkbox
                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                        />
                        <Checkbox
                            icon={<StarOutlineOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                            checkedIcon={<StarOutlinedIcon id="catalog-stars" style={{ color: "#514A7E" }} />}
                        />
                    </div>
                </div>
                <button id='send-feedback-btn' type='button'>
                    Сохранить
                    <img src={arrowRight} alt="" />
                </button>
            </form>
        </div>
    )
}
