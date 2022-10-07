import { Button } from "@mui/material";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { fontColor } from "../constants";

function LogoutComponent() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const handleClick = () => {
    setIsLoggedOut(true);

    //TODO: remove cookie
  };

  if (isLoggedOut) return <Navigate to="/" />;

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
