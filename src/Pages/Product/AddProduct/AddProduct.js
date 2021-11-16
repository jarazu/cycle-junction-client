import React, {useState} from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Box, Container, Alert } from '@mui/material';

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const [productSuccess, setProductSuccess] = useState('');

  const handleSubmit = e => {
        e.preventDefault();
        setProductSuccess('');
        console.log(e)
        const prdct = {...product}
        fetch('http://localhost:5000/products', {
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
                setProductSuccess('Product saved successfully');
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
    }
    return (
        <Container maxWidth="sm">
            <Box sx={{height: '100vh' }}>
                <form onSubmit={handleSubmit}>
                    <TextField required sx={{width: '70%'}} id="standard-basic" label="Product Name" variant="standard" name="pname" autoComplete="off" onChange={handleonChange}/> <br/>
                    <TextField required sx={{width: '70%'}} id="standard-basic" label="Price" variant="standard" type="number" name="price" autoComplete="off" onChange={handleonChange}/> <br/>
                    <TextField required sx={{width: '70%'}} id="standard-basic" label="Image Url" variant="standard" name="imgurl" autoComplete="off" onChange={handleonChange}/> <br/>
                    <TextField required sx={{width: '70%'}} id="standard-basic" label="Description" variant="standard" name="description" autoComplete="off" onChange={handleonChange}/> <br/>
                    <Button sx={{my: 2}} type="submit" variant="contained">Add Product</Button>
                </form>
                {productSuccess && <Alert severity="success">{productSuccess}</Alert> }
            </Box>
        </Container>

    );
};

export default AddProduct;