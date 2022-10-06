import { useEffect } from 'react';
import Lottie from 'lottie-web';
import Loading from '../lottie/loading.json'

function LoadingLottie() {
    useEffect(() => {
        const instance = Lottie.loadAnimation({
          container: document.getElementById('LoadingLottieAnimation')!,
          animationData: Loading,
          autoplay: true,
          loop: true,
        });

        return () => instance.destroy();
      }, []);
  
      return (
            <div id="LoadingLottieAnimation"></div>
      );
}

export default LoadingLottie;