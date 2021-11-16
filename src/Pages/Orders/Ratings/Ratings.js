import React, {useState} from 'react';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';
import { Button, Box, Container, Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


// const MyOrder = () => {
const Ratings = ()=> {
    const [value, setValue] = React.useState(0);
    const [details, setDetails] = useState('');
    const [reviewSuccess, setReviewSuccess] = useState('');
    const {user} = useAuth();
    const [review, setReview] = useState({name:user.displayName, email:user.email});

  const handleSubmit = e => {
        e.preventDefault();
        setReviewSuccess('');
        const rev = {...review, rating: value, details: details}
        fetch('https://peaceful-temple-93209.herokuapp.com/review', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(rev)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                clearFields(e);
                setValue(0);
                setReviewSuccess('Thanks, Review submitted successfully');
            }
        })
    }

    const clearFields = event =>{
        Array.from(event.target).forEach((e) => {
            if(e.name === 'details'){e.value = ""};
        });
    }
    const handleonChange = e => {
        const value = e.target.value;
        setDetails(value);
        console.log(value);
    }
  
  return (
    <Container maxWidth="sm">
            <Box sx={{height: '100vh' }}>
                <Typography variant="h4" gutterBottom component="div">
                    Give us feedback
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField sx={{width: '70%'}} id="standard-basic" label="Name" variant="standard" defaultValue={user.displayName} disabled/> <br/>
                    <TextField sx={{width: '70%'}} id="standard-basic" label="Email" variant="standard" defaultValue={user.email} disabled/> <br/>
                    <TextField required sx={{width: '70%'}} id="standard-basic" label="Details" variant="standard" name="details" autoComplete="off" onChange={handleonChange}/> <br/>
                    <Typography component="legend" sx={{mt:2}}>How you rate us</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                    />
                    <br/>
                    <Button sx={{my: 2}} type="submit" variant="contained">Submit Feedback</Button>
                </form>
                {reviewSuccess && <Alert severity="success">{reviewSuccess}</Alert> }
            </Box>
        </Container>
  );
}

export default Ratings;