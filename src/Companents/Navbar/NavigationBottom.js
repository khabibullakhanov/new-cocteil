import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import "./NavigationBottom.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";
// import { Drawer } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';

export function NavigationBottom() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false)

  return (
    <div id="navigation-bottom-navbar">
      {/* <Box
        sx={{
          width: "100%",
          height: "auto",
          backgroundColor: "#514A7E",
          zIndex: "99999",
        }}
      > */}
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#514A7E",
            color: "white",
          }}
          id="navigation-bottom-navbar"
        >
          {/* <BottomNavigationAction
                        label="Menu"
                        icon={<LunchDiningIcon />}
                        onClick={() => {
                            dispatch(acOpenMenu(true));
                            navigate("/");
                        }}
                    /> */}
          <BottomNavigationAction
            id="navigation-bottom-icons"
            icon={<HomeOutlinedIcon style={{ color: "white" }} />}
            onClick={() => {
              navigate("/");
            }}
          />
          <BottomNavigationAction
            id="navigation-bottom-icons"
            icon={<FavoriteBorderIcon style={{ color: "white" }} />}
            onClick={() => {
              navigate("/likes");
            }}
          />

          <BottomNavigationAction
            id="navigation-bottom-icons"
            icon={<PersonOutlineOutlinedIcon style={{ color: "white" }} />}
            onClick={() => {
              navigate("/registration");
            }}
          />
          <BottomNavigationAction
            id="navigation-bottom-icons"
            icon={<ShoppingBagOutlinedIcon style={{ color: "white" }} />}
            onClick={() => {
              navigate("/basket");
            }}
          />

          <BottomNavigationAction
            style={{ width: "100px" }}
            onClick={() => {
              // setOpen(true)
              navigate("/menu");
            }}
            id="navigation-bottom-icons"
            icon={<MenuIcon style={{ color: "white" }} />}
          />
        </BottomNavigation>
      {/* </Box> */}
      {/* <Drawer
                anchor="right"
                id="drawer"
                open={open}
                onClose={() => {
                    setOpen(!open);
                }}
            >
                <div id="close-appabr-navbar-div">
                    <CloseIcon
                        onClick={() => {
                            setOpen(false)
                        }}
                        id="close-appbar-navbar"
                    />
                </div>
                <div className="drawer">

                </div>
            </Drawer> */}
    </div>
  );
}
