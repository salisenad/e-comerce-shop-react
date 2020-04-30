import React, { Component, Fragment } from 'react';

import Footer from "./Layout/footer/Footer";
import Product from "./product/Product";
import CarouselUp from "./carousel/Carousel";
import Header from "./Layout/header/Header";


class Home extends Component {
    render() { 
        return ( 
            <Fragment>
                <Header/>
                <CarouselUp />
                <Product/>
                <Footer/>
            </Fragment>
         );
    }
}
 
export default Home;