import { Button, CircularProgress, Container, Grid, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
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
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt:5}} variant="button" display="block" gutterBottom>
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
                    <h2>Login banner</h2>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;