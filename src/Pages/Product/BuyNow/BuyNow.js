import React, {useState} from 'react';
import { useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Box, Alert } from '@mui/material';
import Header from '../../Shared/Header/Header';
import Footer from '../../Home/Footer/Footer';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const BuyNow = () => {
    const {user} = useAuth();
    const location = useLocation() 
    const {_id, pname, price, description, imgurl} = location.state.detail;

    const [product, setProduct] = useState({status:'Pending',productId: _id ,name: user.displayName, email: user.email, product: location.state.detail});
    
    const [productSuccess, setProductSuccess] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        setProductSuccess('');
        const prdct = {...product}
        fetch('http://localhost:5000/order', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(prdct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                clearFields(e)
                setProductSuccess('Order submitted successfully');
            }
        })
    }
    
    const clearFields = event =>{
        Array.from(event.target).forEach((e) => (e.value = ""));
    }

    const handleonChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...product};
        newInfo[field] = value;
        setProduct(newInfo)
        console.log('product', product);
    }

    return (
        <>
            <Header/>
            <Box sx={{ flexGrow: 1, mt:10 }}>
                <Grid container spacing={2}>
                    {/* left side content */}
                    <Grid item xs={12} md={8}>
                        <Box sx={{ width: '70%', m:'0 auto'}}>
                            <img src={imgurl} alt="" />
                            <Typography variant="h2" gutterBottom component="div">
                                {pname}
                            </Typography>
                            <Typography variant="h3" gutterBottom component="div">
                                ${price}
                            </Typography>
                            <Typography variant="body2" gutterBottom>
                                {description}
                            </Typography>
                        </Box>
                    </Grid>

                    {/* right side content */}  
                    <Grid item xs={12} md={4}>
                        <Box sx={{height: '100vh' }}>
                            <form onSubmit={handleSubmit}>
                                <TextField required sx={{width: '70%'}} id="standard-basic" label="Name" variant="standard" disabled defaultValue={user.displayName}/> <br/>

                                <TextField required sx={{width: '70%'}} id="standard-basic" label="Email" variant="standard" disabled defaultValue={user.email} /> <br/>

                                <TextField required sx={{width: '70%'}} id="standard-basic" label="Phone Number" variant="standard" name="phone" autoComplete="off" onChange={handleonChange}/> <br/>

                                <TextField required sx={{width: '70%'}} id="standard-basic" label="Address" variant="standard" name="address" autoComplete="off" onChange={handleonChange}/> <br/>
                                <br/>
                                <Button sx={{my: 2}} type="submit" variant="contained">Submit Order</Button>
                                <br/>
                            </form>
                            {productSuccess && <Alert severity="success">{productSuccess}</Alert> }
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer/>
        </>
    );
};

export default BuyNow;