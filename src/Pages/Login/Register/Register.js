import { Button, CircularProgress, Container, Grid, Snackbar, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import MuiAlert from '@mui/material/Alert';
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Register = () => {
    // const {registerUser, isLoading, user} = useAuth();
    const [registerData, setRegister] = useState({});
    const [open, setOpen] = React.useState(false);
    const [severity, setSeverity] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const isLoading = false

    const handleRegistrationSubmit = e => {
        e.preventDefault();
        if(registerData.password !== registerData.passwordRetype){
            setOpen(true);
            setSeverity('error');
            setResponseMessage('Email not matched');
            return;
        }
        // registerUser(registerData.email, registerData.password, registerData.name, history);
    }
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = {...registerData};
        newRegisterData[field] = value;
        setRegister(newRegisterData);
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography sx={{mt:8}} variant="body1" gutterBottom>
                        Register
                        {
                            !isLoading && <form action="" onSubmit={handleRegistrationSubmit}>
                                
                                <TextField sx={{width:'75%', my:1}} id="name" label="Your Name" variant="standard" name="name" onBlur={handleOnBlur} />

                                <TextField sx={{width:'75%', my:1}} id="email" label="Your Email" variant="standard" name="email" onBlur={handleOnBlur} />

                                <TextField sx={{width:'75%', my:1}} id="password" label="Your Password" variant="standard" type="password" name="password" onBlur={handleOnBlur} />

                                <TextField sx={{width:'75%', my:1}} id="passwordRetype" label="Retype Password" variant="standard" type="password" name="passwordRetype" onBlur={handleOnBlur} />
                                
                                <Button type="submit" sx={{width:'75%', mt:0}} variant="contained">Register</Button>
                                
                                <NavLink to="/login" style={{textDecoration: 'none'}}>
                                    <Button  sx={{width:'75%', mt:1}} variant="text">Already Registered? Login</Button>
                                </NavLink>
                            </form> 
                        }
                        {
                            isLoading && <CircularProgress />
                        }
                    </Typography>
                    {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                        {responseMessage}
                        </Alert>
                    </Snackbar> */}
                </Grid>
                <Grid item  xs={12} md={6}>
                    <img src='https://image.freepik.com/free-photo/cyclist-sunny-day-bike-adventure-travel-photo_1150-7513.jpg' alt="" style={{width:'100%'}}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;