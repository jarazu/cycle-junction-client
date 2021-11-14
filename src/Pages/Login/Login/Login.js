import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    // const {isLoading, user, loginUserByEmailPass, loginByGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {
        e.preventDefault();
        // loginUserByEmailPass(loginData.email, loginData.password, location, history)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    // const handleGoogleLogin = () => {
    //     loginByGoogle(location, history);
    // }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt:5}} variant="button" display="block" gutterBottom>
                        login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{width:'75%', mt:2}}
                            id="filled-basic" 
                            label="Email" 
                            variant="filled"
                            name="email" 
                            onChange={handleOnChange} 
                        />
                        <TextField
                            sx={{width:'75%', mt:2}}
                            id="filled-basic" 
                            label="Password" 
                            variant="filled"
                            type="password"
                            name="password"
                            onChange={handleOnChange} 
                        />
                        <Button type="submit" sx={{width:'75%', mt:2}} variant="contained">Login</Button>
                    </form>
                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Login banner</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;