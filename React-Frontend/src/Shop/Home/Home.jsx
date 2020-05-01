import React, {Fragment, useState, useEffect } from 'react';

import Footer from "./Layout/footer/Footer";
import Product from "./product/Product";
import CarouselUp from "./carousel/Carousel";
import Header from "./Layout/header/Header";
import { getCart } from './cart-helper/cartHelper';
import ProductService from '../../services/product-service';
const http = new ProductService();


const  Home = () => {

        const [run, setRun] = useState(false);
        const [items, setItems] = useState([]);
        const [productsArrived, setProducts] = useState([]);
        
            useEffect(() => {
              loadProducts();
              setItems(getCart());
        
            }, [run]);

            const loadProducts = () => {
                http.getProducts().then(data => {
                    if(data.error) {
                      console.log(data.error);
                    }else {
                      setProducts(data)
                    }
                })
            }
           
        return ( 
            <Fragment>
                <Header setRun={setRun} run={run}
                items={items}/>
                <CarouselUp /><br/>
                <div className="container">
                    <div className="row">
                        
                        {productsArrived.map((product,  i )=> (
                        <div className="col-sm-4 mb-5"key={i}>
                            <Product  
                                product={product}
                                setRun={setRun}
                                run={run}/>
                           
                        </div>
                        
                        ) ) }
                    </div>
                </div>
                <Footer/>
            </Fragment>
 )
}
 
export default Home;