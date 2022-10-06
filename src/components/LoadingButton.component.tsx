import { Button, CircularProgress } from "@mui/material";
import { fontColor } from "../constants";

type LoadingButtonProps = {
    children: string
}
function LoadingButton(props: LoadingButtonProps) {
    return ( 
        <Button sx={{ color: fontColor }} variant="outlined" disabled><CircularProgress size={12} sx={{ mr:2 }} />{ props.children }</Button>
     );
}

export default LoadingButton;