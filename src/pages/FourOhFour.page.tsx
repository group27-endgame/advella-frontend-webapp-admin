import { Container, Grid, Typography } from '@mui/material';
import FourOhFourLottie from '../components/FourOhFourLottie.component';
import RouterLink from '../components/RouterLink.component';
import { primaryColor } from '../constants';

function FourOhFourPage() {
    return ( 
        <Container maxWidth="sm">
            <Grid container pt={20}>
                <Grid item xs={12}>
                    <FourOhFourLottie />
                </Grid>
                <Grid item xs={12} textAlign="center">
                    <Typography variant='body1'>
                        Click <RouterLink to='/' color={primaryColor}>HERE</RouterLink> to go to main page.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
     );
}

export default FourOhFourPage;