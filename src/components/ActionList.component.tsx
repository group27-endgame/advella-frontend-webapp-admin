import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CircleIcon from "@mui/icons-material/Circle";

interface ActionListProps extends PaperProps {
  list: {
    listId: number;
    title: string;
    dateTime: number;
    color: string;
    subscription: string;
  }[];
}

function ActionListComponent(props: ActionListProps) {
  const { elevation = 12, title, children: _children, list, ...rest } = props;

  const timePosted = (dateTime: number) => {
    const timeNow = Date.now();

    const difference = (timeNow - dateTime)/1000;

    if(difference  < 60)
      return "Less than minute ago";
    else if(difference < 3600)
      return `${Math.floor(difference/60)} minute(s) ago`
    else if(difference < 24*3600)
      return `${Math.floor(difference/3600)} hour(s) ago`
    else
    return `${Math.floor(difference/(24*3600))} day(s) ago`
  }

  return (
    <motion.div whileHover={{ y: -5 }}>
      <Paper elevation={elevation} {...rest}>
        <Grid container p={5}>
          <Grid item xs={12} textAlign="center">
            <Typography
              sx={{ textTransform: "uppercase", fontSize: 24 }}
              variant="h6"
            >
              {title}
            </Typography>
          </Grid>
          {list.map((l) => (
            <Grid item xs={12} key={l.listId}>
              <Grid container>
                <Grid item xs={1} textAlign="center" alignItems="center" justifyContent="center" display="flex">
                  <CircleIcon fontSize="small" sx={{ color: l.color }} />
                </Grid>
                <Grid item xs={11}>
                  <Grid container>
                    <Grid item xs={6} textAlign="left">
                      <Typography variant="body1" fontSize={18}>
                        {l.title}
                      </Typography>
                    </Grid>
                    <Grid item xs={6} textAlign="right">
                      <Typography variant="subtitle2">
                        {timePosted(l.dateTime)}
                      </Typography>
                    </Grid>

                    <Grid item xs={6} textAlign="left">
                      <Typography variant="subtitle2">
                        {l.subscription}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default ActionListComponent;
