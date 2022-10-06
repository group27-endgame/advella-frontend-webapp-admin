import { Button, Grid, Paper, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import LoadingButton from "../components/LoadingButton.component";

export const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [usernameErr, setUsernameErr] = useState(false);
    const [passwordErr, setPasswordErr] = useState(false);

    const [usernameErrMsg, setUsernameErrMsg] = useState("");
    const [passwordErrMsg, setPasswordErrMsg] = useState("");

    const [isLoading, setIsLoading] = useState(false);

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
        setIsLoading(true);

        if(validateForm()){
            // call API
        }

        setIsLoading(false);
    }

    return ( 
        <Container maxWidth="sm" sx={{height: "100vh", pt: 20}}>
            <Paper sx={{ p: 8 }}>
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
                        {!isLoading && <Button variant="contained" onClick={handleClick}>Login</Button>}
                        {isLoading && <LoadingButton>Loading</LoadingButton>}
                    </Grid>
                </Grid>
            </Paper>
        </Container>
     );
}

export default LoginPage;