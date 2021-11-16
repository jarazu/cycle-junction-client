import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import InputIcon from '@mui/icons-material/Input';
import './Subscribe.css'

const Subscribe = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#295c8ede' }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4" sx={{color: 'white'}} gutterBottom component="div">
                        Save time, save money!
                    </Typography>
                    <Typography variant="h6" sx={{color: 'white'}} gutterBottom component="div">
                        Sign up and we'll send the best deals to you
                    </Typography>
                    <Paper
                    component="form"
                    sx={{ display: 'flex', alignItems: 'center', width: '50%', mb: 5, mx: 'auto'}}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Your Email ...."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                        
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Typography variant="button">Subscribe</Typography>
                        <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions">
                           <InputIcon />
                        </IconButton>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Subscribe;