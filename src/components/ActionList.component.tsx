import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ReactElement } from "react";
interface ActionListProps extends PaperProps {
  children?: ReactElement;
}

function ActionListComponent(props: ActionListProps) {
  const { elevation = 12, title, children, ...rest } = props;

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Paper elevation={elevation} {...rest}>
        <Grid container p={5}>
          <Grid item xs={12} textAlign="center">
            <Typography sx={{ textTransform: "uppercase", fontSize: 24 }}
              variant="h6">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {children}
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default ActionListComponent;
