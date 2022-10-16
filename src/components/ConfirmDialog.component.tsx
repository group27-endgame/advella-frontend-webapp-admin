import * as React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

type ConfirmDialogComponentProps = {
  dialogOpen?: boolean;
  dialogTitle: string;
  dialogBody: string;
  confirmButton: () => void;
  cancelButton: () => void;
  mainAction: {
    value: string;
    state: "error" | "success" | "warning" | "primary"
  };
  closeAction: {
    value: string;
    state: "error" | "success" | "warning" | "primary"
  };
};

function ConfirmDialogComponent(props: ConfirmDialogComponentProps) {
  const { dialogOpen = false, dialogTitle, dialogBody, mainAction, closeAction, cancelButton, confirmButton } = props;

  return (
    <Dialog
      open={dialogOpen}
      onClose={cancelButton}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>
      <DialogContent>
          <Typography variant="body1">{dialogBody}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={cancelButton} color={closeAction.state}>{closeAction.value}</Button>
        <Button color={mainAction.state} onClick={confirmButton}>
          {mainAction.value}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialogComponent;
