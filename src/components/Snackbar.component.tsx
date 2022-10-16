import { Alert, Snackbar, SnackbarProps } from "@mui/material";
import React from "react";
import { useState } from "react";

interface CustomSnackbarProps extends SnackbarProps {
  message: string;
  type: "success" | "error" | "warning";
}

function SnackbarComponent(props: CustomSnackbarProps) {
  const {
    message,
    action: _action,
    anchorOrigin = { vertical: "bottom", horizontal: "center" },
    open,
    type,
    ...rest
  } = props;

  const [_open, setOpen] = useState(open);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={_open}
      autoHideDuration={4000}
      onClose={handleClose}
      {...rest}
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
