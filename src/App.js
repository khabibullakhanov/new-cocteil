import React from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { useSelector } from "react-redux";
import { Router } from "./Router";
// import { Registration } from "./Pages/Registration/Registration";

function App() {
  const loading = useSelector((state) => state.loading);
  // const login = useSelector((state) => state.login);

  return (
    <>
      {/* {login.token ? <Router /> : <Registration />} */}
      <Router/>
      <Backdrop sx={{ color: "#fff", zIndex: "99999999999999" }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default App;
