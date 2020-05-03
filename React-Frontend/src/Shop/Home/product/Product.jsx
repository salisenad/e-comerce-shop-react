import React, {  Fragment, useState } from 'react';
import Modal from 'react-modal';
import "./Product.css";
import {addItem} from '../cart-helper/cartHelper';
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

 const Product = ({ product, 
  setRun = f => f, run = undefined})  =>{

  const [modalIsOpen,setIsOpen] = useState(false);
  const customStyles = { content: {
      width:        '70%',
      top:          '50%',
      left:         '50%',
      right:        'auto',
      bottom:       'auto',
      marginRight:  '-50%',
      transform:    'translate(-50%, -50%)'
    }
  };
  const successNotify = () => {toast.success('Product Added On Cart Successfully!')}

  const openModal = (product) => {
    setIsOpen(true);
  } 

  const closeModal = () =>{
    setIsOpen(false);
  }
    const addToCart = () => {
      addItem(product);
      closeModal();
      successNotify();
    };
  

    const productList = () => {
       if(product.allowInShop !== '0') {
        return (
          <div className="card p-3 " style={{boxShadow: '0px 2px 9px 0px #0000003b'}}>
              <div className="min-height-product border-bottom" >
                  <span><i className="fa fa-eye h5 cursor-pointer float-right text-success"  
                      onClick={() =>openModal(product)}></i></span>
                  <img className="card-img-top cursor-pointer" 
                      onClick={() =>openModal(product)} src={product.imgUrl} alt="Product"></img>
              </div>
              <div className="">
                  <h5 className="card-title mt-3"> {product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <h5>€{Number(product.price).toFixed(2)}</h5>
              </div>
              <div>
                  <button onClick={() =>{addToCart() ;setRun(!run);}} 
                  className="btn btn-success float-right mt-2 mb-2 card-btn-1">
                  Add to cart
                  </button>
              </div>
              </div> 
        )
      }
    }
        return (
        <Fragment>
              {productList()}
              <Modal style={{zIndex: '999999'}}
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              ariaHideApp={false}
              contentLabel="Example Modal">
              <p className="text-right text-danger cursor-pointer font-weight-bold" onClick={closeModal}>X</p>
              <div className="container">
                  <div className="row">
                      <div className="col-sm-6">
                          <img style={{width: '100%'}} src={product.imgUrl} alt=""/>
                      </div>
                      <div className="col-sm-6">
                          <h3 className="mb-5">{product.title}</h3>
                          <p className="mb-5">{product.description}</p>
                          <div className="mt-5 row">
                              <h3 className="mt-5 ml-3">Price: €{Number(product.price).toFixed(2)}    </h3>
                              <button onClick={() =>{addToCart() ;setRun(!run);} } className="btn btn-success ml-3 float-right mt-5  card-btn-1">
                              Add to cart
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
              </Modal>
        </Fragment>            

          );
    
}
 
export default Product;