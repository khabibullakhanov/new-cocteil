import React from 'react'
import "./NavigationTop.css"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import eng from "../../Assets/Icons/eng.svg"
import uzb from "../../Assets/Icons/uzb"
import rus from "../../Assets/Icons/rus"
import { useNavigate } from 'react-router-dom';

export function NavigationTop() {
    const navigate = useNavigate()
    return (
        <div id='navigatio-top-main-container'>
            <div id='navigatio-top-main-container-inside'>
                <IconButton onClick={() => {
                    navigate(-1)
                }}>
                    <ArrowBackIosIcon style={{ color: "white" }} />
                </IconButton>
                <h2>
                    Регистрация
                </h2>
                <PopupState variant="popover" popupId="demo-popup-menu">
                    {(popupState) => (
                        <React.Fragment>
                            <IconButton {...bindTrigger(popupState)}>
                                <MoreVertIcon style={{ color: "white" }} />
                            </IconButton>
                            <Menu {...bindMenu(popupState)}>
                                <MenuItem id="menu-languages" onClick={popupState.close}><img id='country-flags-uzb' src={uzb} alt="" /> Uzb</MenuItem>
                                <MenuItem id="menu-languages" onClick={popupState.close}><img id='country-flags' src={eng} alt="" /> Eng</MenuItem>
                                <MenuItem id="menu-languages" onClick={popupState.close}><img id='country-flags-rus' src={rus} alt="" /> Rus</MenuItem>
                                <MenuItem id="menu-languages" onClick={popupState.close}><p onClick={() => {
                                    navigate("/feedbacks");
                                }}>Reviews</p></MenuItem>
                            </Menu>
                        </React.Fragment>
                    )}
                </PopupState>
            </div>
        </div>
    )
}
