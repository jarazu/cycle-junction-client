import { Container, Box } from '@mui/material';
import { useEffect, useState } from "react";
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Reviews.css';

import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Reviews = () => {
    
    const [reviews, setReviews] = useState([]);

      useEffect(()=>{
        const url = `https://peaceful-temple-93209.herokuapp.com/reviews`
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    },[]);

    return (
        <Container sx={{my: 5}}>
            <Box >
            <Typography variant="h4" gutterBottom component="div">
                    Our Happy Clients
            </Typography>
            <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >
            {
                reviews.map(review => 
                <div>
                    <img src="https://image.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg" alt="" />
                    <div className="myCarousel">
                        <h3>{review.name}</h3>
                        <h6>{review.email}</h6>
                        <p>{review.details}</p>
                        <Rating name="read-only" value={review.rating} readOnly />
                    </div>
                </div>)
            }
        </Carousel>
        </Box>
      </Container>
    );
};

export default Reviews;