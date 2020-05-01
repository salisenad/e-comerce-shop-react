import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './Carousel.css';
import CarouselService from "../../../services/carousel-service";

const http = new CarouselService();
class CarouselUp extends Component {
    constructor(props) {
        super(props)
        this.state = {carousel: []};
        this.loadCarousel = this.loadCarousel.bind(this);
        this.loadCarousel();
    }

    loadCarousel = () => {
        http.getCarousels().then(data => {
            this.setState({carousel: data});
            console.log("carousel lala", data);
        })
    }

    carouselList = () => {
        const carouselList = this.state.carousel.map(carousel => 
            <div className="pt-5" key={carousel.id}> 
                <img  src={carousel.caruselUrl} alt=""></img>
            </div>
        )
        return (carouselList);
    }
    render() { 
        return (
            <Carousel className="">
              {this.carouselList()}
            </Carousel>
          );
    }
}
 
export default CarouselUp;