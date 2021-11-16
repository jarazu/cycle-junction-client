import React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputIcon from '@mui/icons-material/Input';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css'

const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} sx={{alignItems:'center'}} className="footer-area">
                <Grid item xs={12} md={6}>
                    <Typography variant="overline" gutterBottom component="div" sx={{fontWeight:'bold'}}>
                        &copy; Cycle Junction
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                    <ul className="footer-icon">
                        <li><FacebookIcon /></li>
                        <li><YouTubeIcon /></li>
                        <li><InstagramIcon /></li>
                        <li><LinkedInIcon /></li>
                    </ul>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;