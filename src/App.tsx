import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Paper, TextField, Typography } from '@mui/material';

function App() {
  return (
   <Grid container>
    <Grid item>
      <Paper>
        <Typography variant='h1'>
          Text
        </Typography>
        <TextField variant="outlined" />
      </Paper>
    </Grid>
   </Grid>
  );
}

export default App;
