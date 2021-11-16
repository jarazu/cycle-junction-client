import { useEffect, useState } from "react";
import React from 'react';
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

        useEffect(()=>{
        const url = `http://localhost:5000/products/6`
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h4" component="div" sx={{ m:2}}>
                    Top {products.length} exiting products
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {products.map(product => <Product key={product._id} product={product}/>)}
                </Grid>
            </Container>
        </Box>
    );
};

export default Products;