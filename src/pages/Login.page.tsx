import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Container } from "@mui/system";
import LoadingButton from "../components/LoadingButton.component";

function LoginPage() {
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
                        <TextField fullWidth={true} placeholder="Username" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField fullWidth={true} placeholder="Password" type="password" />
                    </Grid>
                    <Grid item xs={12} textAlign="center">
                        <Button variant="contained">Login</Button>
                        <LoadingButton>Loading</LoadingButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
     );
}

export default LoginPage;