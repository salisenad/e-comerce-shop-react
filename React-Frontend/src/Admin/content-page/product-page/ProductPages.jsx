import React, { useState, useEffect, Fragment } from 'react';
import ProductService from '../../../services/product-service';
import CategoriesService from '../../../services/category-service';
import Modal from 'react-modal';
import ReactTooltip from "react-tooltip";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const httpProduct = new ProductService();
const httpCategory = new CategoriesService();
toast.configure()

const ProductPages = () => {

  useEffect(() => {
    getCategories();
    loadProducts();
  }, []);

  const initalFormState = {id: '', title: '', price: '', description: '' , imgUrl: '', allowInShop:'', categoryName:'' }
  const [product, setProduct] = useState(initalFormState)
  const [productsArrived, setProducts] = useState([]);
  const [categories, setCategory] = useState([])
  const [error, setError] = useState(false);
  const [modalIsOpen,setIsOpen] = useState(false);

  const customStyles = { 
    content: {
      width:        '50%',
      top:          '50%',
      left:         '50%',
      right:        'auto',
      bottom:       'auto',
      marginRight:  '-50%',
      transform:    'translate(-50%, -50%)'
    }
  };
  const successNotify = () => {toast.success('Product Is Submited Successfully!')}

  const errorNotify = () => {toast.error('Something Went Wrong, Check Again!')}

  const deletedNotify = () => {toast.warn('Product Deleted Successfully!')}

  const handleInputChange = event => {
    const {name, value} = event.target
    setError("");
    setProduct({...product, [name]: value})
  }
    
  const openModal = (product) => {
    if(!product) {
      initalFormState()
    }else {
      setProduct(product)
    }
    setIsOpen(true);
  }

  const afterOpenModal = () => {
  }
 
  const closeModal = () =>{
    setIsOpen(false);
  }
    const getCategories = () => {
      httpCategory.getCategories().then(data => {
            if (data.error) {
               console.log(error)
            } else {
                setCategory(data)
            }
        });
    };

    const loadProducts = () => {
      httpProduct.getProducts().then(data => {
        if(data.error) {
          console.log(data.error);
        }else {
          setProducts(data)
        }
      })
    }
  
    const clickSubmit = event => {
      event.preventDefault();
      httpProduct.createProduct(product).then(data => {
        console.log('produkti qe pe qoj', product)
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          loadProducts();
          successNotify()
          productsList();
          closeModal()
        }
       });
      };

    const editProductonJsx = (productId, product) => {
      httpProduct.editProduct(productId, product).then(data => {
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          successNotify();
          loadProducts();
          productsList();
          closeModal()
        }})
    }
    
    const deleteProduct = productId => {
      httpProduct.deleteProduct(productId).then(data => {
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          deletedNotify()
          loadProducts();
          productsList();
        }})
    } 

    const productsList = () => {
      const productsList = productsArrived.map(product =>
                      <tr key={product.id}>
                        <th style={{width: "5%"}}>{product.id}</th>
                        <td style={{width: "15%"}}>{product.title}</td>
                        <td style={{width: "15%"}}>{product.description}</td>
                        <td style={{width: "15%"}}>{product.price}</td>
                        <td style={{width: "15%"}}>{product.categoryName}</td>
                        <td style={{width: "15%"}}>{product.allowInShop === '1' ? 'Allowed' : 'Not Allowed'}</td>
                        <td style={{width: "15%"}}><img  style={{width: "55%"}}src={product.imgUrl} alt="Product"/></td>
                        <td style={{width: "15%"}}>
                          <i className="fa cursor-pointer fa-edit text-success h5" data-tip="Edit Product" onClick={() =>openModal(product)}></i>
                          <br/><ReactTooltip /><i className="fa fa-trash mt-4 text-danger h5 cursor-pointer" data-tip="Delete Product"
                          onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteProduct(product.id) } }></i>
                        </td>
                      </tr>
                     )
                     return (productsList);
    }

    const newPostForm = () => (
      <div className="container border">
        <form className="mb-3 " onSubmit={clickSubmit}>
            <h5 className="text-center mb-4 mt-2" hidden={product.id}>Create product</h5>
            <h5 className="text-center mb-4 mt-2" hidden={!product.id}>Edit product</h5>
            <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <input required placeholder="Id" type="hidden" name="id" onChange={handleInputChange} className="form-control" value={product.id}/>
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Product name</label>
                    <input required placeholder="Title"  name="title" onChange={handleInputChange} type="text" className="form-control" value={product.title} />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Price</label>
                    <input required placeholder="Price" name="price" onChange={handleInputChange} type="number" className="form-control" value={product.price} />
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Category</label>
                    <select required onChange={handleInputChange} name="categoryName" value={product.categoryName} className="form-control">
                        <option>Please select</option>
                        {categories &&
                        categories.map(category => (
                        <option key={category.id} value={category.name}>
                          {category.categoryName}
                        </option>
                        ))}
                    </select>
                  </div>
                  
              </div>
              <div className="col-md-6">
                 
                  
                  <div className="form-group">
                    <label className="text-muted">Allow on shop</label>
                    <select onChange={handleInputChange} value={product.allowInShop} name="allowInShop"className="form-control">
                        <option>Please select</option>
                        <option  value="1">Yes</option>
                        <option value="0">No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Description</label>
                    <textarea placeholder="Description" name="description" onChange={handleInputChange} className="form-control" value={product.description} />
                  </div>
                  
              </div>
            </div>
            <div className="form-group">
              <label className="text-muted">Add an img url </label>
              <textarea placeholder="Put an images address" className="form-control" value={product.imgUrl} 
                onChange={handleInputChange} type="text" name="imgUrl"  /> 
              <img src={product.imgUrl} className="mt-4" style={{width: '30%'}} alt=""/>
            </div>
            <button className="btn btn-outline-success mt-3" hidden={product.id} disabled={!product.imgUrl}>Submit Product</button>
            <button className="btn btn-outline-success mt-3" hidden={!product.id} disabled={!product.imgUrl}
               onClick={e=> { e.preventDefault(); editProductonJsx(product.id,product)} }>Edit Product
            </button>
        </form>
    </div>
    );

    return (
          <Fragment>
                <div id='main'>
                  <h3 className="text-center mb-2 font-weight-bold">Products</h3>
                  <button onClick={openModal} type="button" className="btn btn-success text-white float-right mb-3" 
                  // style={{backgroundColor: 'black', borderColor:'black'}}
                  >
                  +  Create New Product
                  </button>
                  <table className="table table-striped table-hover table-responsive">
                      <thead> 
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Description</th>
                          <th scope="col">Price</th>
                          <th scope="col">Category name</th>
                          <th scope="col">Is Allowed on Shop?</th>
                          <th scope="col">Img</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {productsList()}
                      </tbody>
                  </table>
                </div>
                <div>
                  <Modal style={{zIndex: '999999'}}
                    isOpen={modalIsOpen}
                    // onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    ariaHideApp={false}
                    contentLabel="Example Modal">
                    <p className="text-right text-danger cursor-pointer font-weight-bold" onClick={closeModal}>X</p>
                    {newPostForm()}
                  </Modal>
                </div>
        </Fragment>
    );
};

export default ProductPages; 
