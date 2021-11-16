import { useEffect, useState } from "react";
import React from 'react';
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

        useEffect(()=>{
        const url = `https://peaceful-temple-93209.herokuapp.com/products/6`
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <br/>
                <Typography variant="h4" component="div" sx={{ mt:5}}>
                    Top {products.length} exiting products
                </Typography>
                <br/>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map(product => <Product key={product._id} product={product}/>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;