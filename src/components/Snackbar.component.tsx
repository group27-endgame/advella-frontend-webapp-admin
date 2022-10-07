import { Alert, IconButton, Snackbar, SnackbarProps } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

interface CustomSnackbarProps extends SnackbarProps {
  message: string;
  type: "success" | "error" | "warning";
}

function SnackbarComponent(props: CustomSnackbarProps) {
  const {
    message,
    action: _action,
    anchorOrigin = { vertical: "bottom", horizontal: "center" },
    open: _open,
    type,
    ...rest
  } = props;

  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={anchorOrigin}
      open={open}
      {...rest}
    >
      <Alert severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;