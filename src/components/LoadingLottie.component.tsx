import { useEffect } from 'react';
import Lottie from 'lottie-web';
import Loading from '../lottie/loading.json'
import { Backdrop } from '@mui/material';

type LoadingLottieProps = {
  open: boolean
}

function LoadingLottie(props: LoadingLottieProps) {
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
           <Backdrop open={props.open}        sx={{zIndex: (theme) => theme.zIndex.drawer + 1 }}
           >
             <div id="LoadingLottieAnimation"></div>
           </Backdrop>
      );
}

export default LoadingLottie;