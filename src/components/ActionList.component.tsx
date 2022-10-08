import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import { ReactElement } from "react";
interface ActionListProps extends PaperProps {
    children?: ReactElement;
}

function ActionListComponent(props: ActionListProps) {
  const {
    elevation = 12,
    title,
    children,
    ...rest
  } = props;

  return (
    <Paper elevation={elevation} {...rest}>
      <Grid container p={5}>
        <Grid item xs={12} textAlign="center">
          <Typography variant="h6" fontSize={30}>
            {title}
          </Typography>
        </Grid>
        <Grid item xs={12}>
            {children}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default ActionListComponent;
