import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <Carousel className="container banner-area">
            <Carousel.Item>
                <img
                className="d-block w-100 slider-height"
                src="https://www.freewheel.co.uk/media/catalog/category/XC-banner.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>BIKES</h3>
                <p>Get on your bike and discover what the roads, mountains and city paths have to offer. From mountain bikes to road bikes, electric bikes to hybrid bikes, folding bikes to cyclocross bikes, and everything in between – whatever way you ride, we have the kind of bike that you need. Whether you are a beginner or a seasoned pro, we cater to every type of cyclist and will help you find your perfect bike.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-height"
                src="https://www.freewheel.co.uk/media/catalog/category/Bikes-banner.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>MOUNTAIN BIKES</h3>
                <p>Mountain bikes are made to enjoy the trails. Big tyres, suspension, disc brakes and a wide range of gears to keep you pedalling no matter what type of terrain that you are hitting. Whether you are looking for full suspension or hardtail; standard or electric; 26, 27.5 or 29er. With so many great mountain bike options to choose from in our range</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 slider-height"
                src="https://www.freewheel.co.uk/media/catalog/category/Touring_banner.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>TOURING BIKES</h3>
                <p>The best way to see the world is by bike. Whether that’s the little corner you like to call home, or crossing continents, or even the world; our bikes have been there. Pack your panniers, load the bike and see something new.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;