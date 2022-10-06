import { Container, Grid } from '@mui/material';
import FourOhFourLottie from '../components/FourOhFourLottie.component';

function FourOhFourPage() {
    return ( 
        <Container>
            <Grid container pt={20}>
                <Grid item xs={12}>
                    <FourOhFourLottie />
                </Grid>
            </Grid>
        </Container>
     );
}

export default FourOhFourPage;