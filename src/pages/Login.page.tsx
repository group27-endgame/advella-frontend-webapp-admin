import { Button, Grid, Paper, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import LoadingLottie from "../components/LoadingLottie.component";
import { Navigate } from 'react-router-dom';

function LoginPage() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameErr, setUsernameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const [usernameErrMsg, setUsernameErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const validateForm = () => {

        let returnVal = true;

        setUsernameErr(false);
        setUsernameErrMsg("");
        setPasswordErr(false);
        setPasswordErrMsg("");

        if(password.length < 6){
            setPasswordErr(true);
            setPasswordErrMsg("Password must have at least 6 characters.")
            returnVal = false;
        }
        if(username.length < 1){
            setUsernameErr(true);
            setUsernameErrMsg("Username field cannot be empty.");
            returnVal = false;
        }

        return returnVal;
    }

    const handleClick = () => {
        if(validateForm()){
            setIsLoading(true);
            // call API

            setTimeout(function () {
                setIsLoading(false);
                
                setIsLoggedIn(true);
            }, 5000);
        }
    }

    if(isLoggedIn)
        return (<Navigate to="/dashboard" />)

    return ( 
        <Container maxWidth="sm" sx={{ pt: 25 }}>
            <Paper sx={{ p: 8 }}>
                <LoadingLottie open={isLoading} />
                <Grid container spacing={2}>
                    <Grid item xs={12} textAlign="center" mb={2}>
                        <Typography variant="h4">
                            Admin Panel
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth={true} error={usernameErr} helperText={usernameErrMsg} placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth={true} error={passwordErr} helperText={passwordErrMsg} placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Button variant="contained" onClick={handleClick}>Login</Button>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
     );
}

export default LoginPage;
