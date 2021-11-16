import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Shared/Header/Header';
import { Box } from "@mui/system";
import { Container, Grid, Typography } from "@mui/material";
import Product from '../Product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

        useEffect(()=>{
        const url = `http://localhost:5000/products/1000`
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div>
            <Header/>
            <Box sx={{ flexGrow: 1, my:2 }}>
                <Container>
                    <Typography variant="h4" component="div" sx={{ mb:5}}>
                        Our {products.length} exiting products
                    </Typography>
                    <h2>&nbsp;</h2>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {products.map(product => <Product key={product._id} product={product}/>)}
                    </Grid>
                </Container>
            </Box>
            <Footer/>
        </div>
    );
};

export default ExploreProducts;