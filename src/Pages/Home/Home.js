// import { Reviews } from '@mui/icons-material';
import React from 'react';
import Products from '../Product/Products/Products';
import Header from '../Shared/Header/Header';
import Navigation from '../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
import Reviews from './Reviews/Reviews';
import Subscribe from './Subscribe/Subscribe';

const Home = () => {
    return (
        <div>
            <Header/>
            <Banner/>
            <Products/>
            <Reviews/>
            <Subscribe/>
            <Footer/>
        </div>
    );
};

export default Home;