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
};

function ConfirmDialogComponent(props: ConfirmDialogComponentProps) {
  const { dialogOpen = false, dialogTitle, dialogBody, cancelButton, confirmButton } = props;

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
        <Button onClick={cancelButton}>Close</Button>
        <Button color="error" onClick={confirmButton}>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ConfirmDialogComponent;
