import { Grid, Paper, PaperProps, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { motion } from "framer-motion";

interface CardComponentProps extends PaperProps {
  cardTitle: string;
  trendingPercentage: number;
  trendingValue: number;
  valueSign?: string;
}

function CardComponent(props: CardComponentProps) {
  const {
    elevation = 12,
    cardTitle,
    trendingPercentage,
    trendingValue,
    valueSign,
    children: _children,
    ...rest
  } = props;

  return (
    <motion.div whileTap={{scale: 1.1}} whileHover={{y: -5}}>
      <Paper elevation={elevation} sx={{ p: 2 }} {...rest}>
        <Grid container>
          <Grid item xs={8}>
            <Typography
              sx={{ textTransform: "uppercase", fontSize: 18 }}
              variant="h6"
            >
              {cardTitle}
            </Typography>
          </Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Typography
              color={trendingPercentage > 0 ? "success.main" : "error.main"}
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                fontSize: 14,
              }}
            >
              {trendingPercentage > 0 && (
                <>
                  <TrendingUpIcon fontSize="small" sx={{ pr: 1 }} />+
                  {trendingPercentage}%
                </>
              )}
              {trendingPercentage === 0 && (
                <>
                  <TrendingFlatIcon fontSize="small" sx={{ pr: 1 }} />
                  {trendingPercentage}%
                </>
              )}
              {trendingPercentage < 0 && (
                <>
                  <TrendingDownIcon fontSize="small" sx={{ pr: 1 }} />
                  {trendingPercentage}%
                </>
              )}
            </Typography>
          </Grid>
          <Grid item xs={12} mt={2}>
            <Typography textAlign="left" variant="body2" fontSize={24}>
            {valueSign}{trendingValue.toLocaleString()}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </motion.div>
  );
}

export default CardComponent;
