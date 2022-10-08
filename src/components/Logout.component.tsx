import { Button } from "@mui/material";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { fontColor } from "../constants";

function LogoutComponent() {
  const [, , removeCookie] = useCookies(["token"]);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");

    removeCookie("token");
  };

  return (
    <Button
      onClick={handleClick}
      variant="text"
      sx={{ color: fontColor, textTransform: "none" }}
      size="large"
    >
      Logout
    </Button>
  );
}

export default LogoutComponent;
