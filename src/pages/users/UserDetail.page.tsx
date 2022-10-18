import {
  Avatar,
  Box,
  Card,
  Grid,
  Link,
  Rating,
  Tab,
  Tabs,
  Tooltip,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { tertiaryColor } from "../../constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { motion } from "framer-motion";

function UserDetailPage() {
  const { userId } = useParams();

  const [tabValue, setTabValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Card elevation={12}>
      <Grid container spacing={2} p={2}>
        <Grid item md={4} lg={3}>
          <Grid container>
            <Grid item xs={12}>
              <Avatar
                variant="square"
                sx={{
                  bgcolor: tertiaryColor,
                  width: "100%",
                  height: "100%",
                  fontSize: 28,
                  p: 2,
                }}
              >
                Nick
              </Avatar>
            </Grid>
            <Grid item xs={12} textAlign="center" pt={2}>
              <Tooltip title={3.7} arrow>
                <Box>
                  <Rating readOnly value={3.7} precision={0.1} />
                </Box>
              </Tooltip>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h6"
                alignItems="center"
                justifyContent="center"
                display="flex"
                fontSize={16}
              >
                <LocationOnIcon fontSize="small" /> Horsens, Denmark
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Typography variant="h6" fontSize={16}>
                popal.nicolas@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left" pt={2}>
              <Typography variant="body1" fontSize={14}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={8} lg={9}>
          <Tabs value={tabValue} onChange={handleChange} sx={{ pb: 2 }}>
            <Tab label="Products" />
            <Tab label="Services" />
          </Tabs>
          <div hidden={tabValue !== 0}>
            <Grid container spacing={2}>

              <Grid item xs={12} md={6} lg={4} xl={3}>
                <motion.div
                  whileHover={{scale: 1.1}}
                >
                  <Link sx={{ textDecoration: "none" }}
                  href="https://advella.popal.dev/product/1"
                  target="_blank">
                  <Card elevation={12} sx={{ p: 2 }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6">Selling car</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">Status: CLOSED</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                  </Link>
                </motion.div>
              </Grid>

            </Grid>
          </div>
          <div hidden={tabValue !== 1}>
            <Grid container spacing={2}>

            <Grid item xs={12} md={6} lg={4} xl={3}>
                <motion.div
                  whileHover={{scale: 1.1}}
                >
                  <Link sx={{ textDecoration: "none" }}
                  href="https://advella.popal.dev/service/1"
                  target="_blank">
                  <Card elevation={12} sx={{ p: 2 }}>
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant="h6">Renting car</Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="body2">Status: OPEN</Typography>
                      </Grid>
                    </Grid>
                  </Card>
                  </Link>
                </motion.div>
              </Grid>

            </Grid>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserDetailPage;
