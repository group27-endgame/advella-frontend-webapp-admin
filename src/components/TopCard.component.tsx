import { Card, Grid, PaperProps, Rating, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { ReactElement } from "react";

interface CardComponentProps extends PaperProps {
    cardTitle: string;
    topList: ReactElement[];
  }

function TopCardComponent(props: CardComponentProps) {
    const { cardTitle, topList, elevation = 12, ...rest } = props

    return ( 
        <motion.div whileHover={{y: -5}}>
        <Card elevation={elevation} {...rest}>
            <Grid container p={2}>
                <Grid item xs={12} textAlign="center" mb={2}>
                    <Typography variant="h6">{cardTitle}</Typography>
                </Grid>
                {topList.map((l, i) => <Grid key={i} item xs={12}>
                    {l}
                </Grid>)}
            </Grid>
        </Card>
        </motion.div>
     );
}

export default TopCardComponent;