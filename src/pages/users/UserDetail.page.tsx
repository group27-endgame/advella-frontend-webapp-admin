import { Avatar, Box, Card, Grid, Tab, Tabs, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { tertiaryColor } from "../../constants";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";

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
            <Grid item xs={12} pt={2}>
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
          <Tabs value={tabValue} onChange={handleChange} sx={{pb: 2}}>
            <Tab label="Products" />
            <Tab label="Services" />
            <Tab label="Bids" />
          </Tabs>
            <div hidden={tabValue !== 0}>Products</div>
            <div hidden={tabValue !== 1}>Services</div>
            <div hidden={tabValue !== 2}>Bids</div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserDetailPage;
