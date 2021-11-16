import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Product.css'

const Product = (props) => {
    const {pname, price, imgurl, description, _id} = props.product;
    const buyNow = () => {

    }
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0, boxShadow: 0, minHeight:470 }}>
            <CardMedia
                component="img"
                height="140"
                style={{width: 'auto', height:'80px', margin:'5px auto'}}
                image={imgurl}
                alt="green iguana"
            />
            <CardContent>
                <Typography variant="h5" component="div">
                {pname}
                </Typography>
                <Typography variant="h6" component="div">
                ${price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                <br />
                {'"a benevolent smile"'}
                </Typography>
                <Link
            to={{
                pathname: `/buy-now/${_id}`,
                state: {
                detail: props.product,
                },
            }}
        >
                <Button className="buy-btn" variant="contained" onClick={buyNow}><ShoppingCartIcon/>BuyNow</Button></Link>
            </CardContent>
        </Card>
      </Grid>  
    );
};

export default Product;