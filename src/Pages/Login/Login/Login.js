import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {isLoading, user, loginUserByEmailPass, authError} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {
        e.preventDefault();
        loginUserByEmailPass(loginData.email, loginData.password, location, history)
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{mt:5}}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt:1}} variant="button" display="block" gutterBottom>
                        login
                    </Typography>
                    {!isLoading &&
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

                            <NavLink to="/register" style={{textDecoration: 'none'}}>
                                    <Button  sx={{width:'75%', mt:1}} variant="text">Haven't any account? Signup</Button>
                                </NavLink>
                        </form>
                    }
                    {isLoading && <CircularProgress />}
                    {user?.email && 
                            <Alert severity="success">Congratulations !!! Login successfull</Alert>
                        }
                    {authError && 
                            <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src='https://image.freepik.com/free-photo/cyclist-man-riding-bike-road_346278-1365.jpg' alt="" style={{width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;