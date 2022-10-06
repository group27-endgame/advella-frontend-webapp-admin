import { useEffect } from 'react';
import { Container } from '@mui/material';
import Lottie from 'lottie-web';
import FourOhFour from '../lottie/404.json'

function FourOhFourLottie() {
    useEffect(() => {
        Lottie.loadAnimation({
          container: document.getElementById('FourOhFourAnimation')!,
          animationData: FourOhFour,
        });
      }, []);
  
      return (
        <Container maxWidth="sm">
            <div id="FourOhFourAnimation"></div>
        </Container>
      );
}

export default FourOhFourLottie;