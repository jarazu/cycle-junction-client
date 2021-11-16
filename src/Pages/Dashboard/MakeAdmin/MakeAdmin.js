import React, {useState} from 'react';
import {TextField, Button, Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [makeAdminError, setMakeAdminError] = useState('');
    const {token, checkAdmin} = useAuth();

    const user = {email};
    const handleAdminSubmit = e => {
        e.preventDefault();
        fetch('https://peaceful-temple-93209.herokuapp.com/users/admin', {
            method: 'put',
            headers: {
                'authorization':`Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                console.log(data)
                setEmail('');
                setSuccess(true);
                setMakeAdminError('');
            }else{
                setSuccess(false);
                setMakeAdminError('Opps!! some thing went wrong');
            }
        }).catch((error) => {
            console.log(error)
        });
    }
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
        return (
        <div>
            <h2>Make an admin</h2>
            {checkAdmin &&
            <form onSubmit={handleAdminSubmit}>
                <TextField required sx={{width: '50%', my: 2}} type="email" label="Email" name="email" variant="standard" onBlur={handleOnBlur}/> <br/>
                <Button sx={{mb: 2}} type="submit" variant="contained">Make Admin</Button>
            </form>}
            {success && <Alert severity="success">Make admin successfull</Alert> }
            {makeAdminError && <Alert severity="error">{makeAdminError}</Alert> }
        </div>
    );
};

export default MakeAdmin;