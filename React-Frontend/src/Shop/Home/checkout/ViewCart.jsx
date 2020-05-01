import React, { Component, Fragment } from 'react';
import Header from '../Layout/header/Header';

const ViewCart = () => {


    return (
        <Fragment>
            <Header items={JSON.parse(localStorage.getItem('cart'))}/>
            <div></div>
        </Fragment>
    )
}
export default ViewCart