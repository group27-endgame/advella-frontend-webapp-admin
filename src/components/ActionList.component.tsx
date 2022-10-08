import { Grid, Paper, PaperProps, Typography } from "@mui/material";

interface ActionListProps extends PaperProps {
    title: string;
}

function ActionListComponent(props: ActionListProps) {
    
    const {
        elevation = 12,
        title,
        children: _children,
        ...rest
      } = props;

    return ( 
        <Paper elevation={elevation} {...rest}>
            <Grid container p={5}>
                <Grid item xs={12} textAlign="center">
                    <Typography variant="h6" fontSize={30}>
                        { title }
                    </Typography>
                </Grid>
                <Grid item xs={12}>

                </Grid>
            </Grid>            
        </Paper>
     );
}

export default ActionListComponent;