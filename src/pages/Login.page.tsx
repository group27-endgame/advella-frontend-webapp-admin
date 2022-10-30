import {
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
  Container,
  Snackbar,
  Alert,
} from "@mui/material";
import { useState } from "react";
import LoadingLottie from "../components/LoadingLottie.component";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import AuthService from "../services/Auth.service";

function LoginPage() {
  const [, setCookie] = useCookies(["token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [usernameErr, setUsernameErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let returnVal = true;

    setUsernameErr(false);
    setUsernameErrMsg("");
    setPasswordErr(false);
    setPasswordErrMsg("");

    if (password.length < 4) {
      setPasswordErr(true);
      setPasswordErrMsg("Password must have at least 4 characters.");
      returnVal = false;
    }
    if (username.length < 1) {
      setUsernameErr(true);
      setUsernameErrMsg("Username field cannot be empty.");
      returnVal = false;
    }

    return returnVal;
  };

  const handleClick = () => {
    const authService: AuthService = new AuthService();
    if (validateForm()) {
      setIsLoading(true);

      authService
        .login(username, password)
        .then((token) => {
          if (token) {
            setCookie("token", token);
            navigate("/dashboard");
          } else {
            setIsError(true);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          setIsError(true);
        });
    }
  };

  return (
    <Container maxWidth="sm" sx={{ pt: 25 }}>
      <Paper sx={{ p: 8 }}>
        <LoadingLottie open={isLoading} />
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center" mb={2}>
            <Typography variant="h3">Admin Panel</Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              error={usernameErr}
              helperText={usernameErrMsg}
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth={true}
              error={passwordErr}
              helperText={passwordErrMsg}
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} textAlign="center">
            <Button variant="contained" onClick={handleClick}>
              Login
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Snackbar
        open={isError}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setIsError(false)}
          severity="error"
          sx={{ width: "100%" }}
        >
          Wrong username, password or simply you do not have a permission to
          access this webpage.
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default LoginPage;
