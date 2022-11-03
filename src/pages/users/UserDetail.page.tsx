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
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserService from "../../services/User.service";
import { UserModel } from "../../models/User.model";
import { useCookies } from "react-cookie";
import LoadingLottie from "../../components/LoadingLottie.component";

function UserDetailPage() {
  const { userId } = useParams();

  const [cookie, ,] = useCookies(["token"]);

  const [tabValue, setTabValue] = useState(0);
  const [user, setUser] = useState<UserModel | undefined>(undefined);

  useEffect(() => {
    const userService: UserService = new UserService();

    userService.getUserById(cookie.token, Number(userId)).then((res) => {
      setUser(res);
      console.log(res);
    });
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (!user) return <LoadingLottie open={user ? false : true} />;

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
                {user.username}
              </Avatar>
            </Grid>
            <Grid item xs={12} textAlign="center" pt={2}>
              <Tooltip title={3.7} arrow>
                <Box>
                  <Rating readOnly value={3.7} precision={0.1} />
                </Box>
              </Tooltip>
            </Grid>
            {user.location && (
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                  fontSize={16}
                >
                  <LocationOnIcon fontSize="small" /> {user.location}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12} textAlign="center">
              <Typography variant="h6" fontSize={16}>
                {user.email}
              </Typography>
            </Grid>
            <Grid item xs={12} textAlign="left" pt={2}>
              <Typography variant="body1" fontSize={14}>
                {user.description}
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
              {user.postedProduct.map((p) => (
                <Grid item xs={12} md={6} lg={4} key={p.productId}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link
                      sx={{ textDecoration: "none" }}
                      href={`https://advella.popal.dev/product/${p.productId}`}
                      target="_blank"
                    >
                      <Card elevation={12} sx={{ p: 2 }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography variant="h6">{p.title}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body2">
                              Status: {p.productStatus}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Link>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
          <div hidden={tabValue !== 1}>
            <Grid container spacing={2}>
              {user.postedService.map((s) => (
                <Grid item xs={12} md={6} lg={4} key={s.serviceId}>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Link
                      sx={{ textDecoration: "none" }}
                      href={`https://advella.popal.dev/service/${s.serviceId}`}
                      target="_blank"
                    >
                      <Card elevation={12} sx={{ p: 2 }}>
                        <Grid container>
                          <Grid item xs={12}>
                            <Typography variant="h6">{s.title}</Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Typography variant="body2">
                              Status: {s.serviceStatus}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Card>
                    </Link>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default UserDetailPage;
