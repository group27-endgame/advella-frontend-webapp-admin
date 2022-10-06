import { useEffect } from 'react';
import Lottie from 'lottie-web';
import FourOhFour from '../lottie/404.json'

export const FourOhFourLottie = () => {
    useEffect(() => {
        const instance = Lottie.loadAnimation({
          container: document.getElementById('FourOhFourAnimation')!,
          animationData: FourOhFour,
          autoplay: true,
          loop: true,
        });

        return () => instance.destroy();
      }, []);
  
      return (
            <div id="FourOhFourAnimation"></div>
      );
}

export default FourOhFourLottie;