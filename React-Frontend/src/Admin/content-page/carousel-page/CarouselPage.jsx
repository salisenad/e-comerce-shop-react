import React, { useState, useEffect, Fragment } from 'react';
import CarouselService from '../../../services/carousel-service';
import Modal from 'react-modal';
import ReactTooltip from "react-tooltip";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const http = new CarouselService();
toast.configure()

const CarouselPage = () => {

  useEffect(() => {
    loadCarousels();
  }, []);

  const initalFormState = {id: '', carouselImages: '', caruselUrl: '' }
  const [carousel, setCarousel] = useState(initalFormState)
  const [carouselArrived, setCarousels] = useState([]);
  const [error, setError] = useState(false);
  const [modalIsOpen,setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top:          '50%',
      left:         '50%',
      right:        'auto',
      bottom:       'auto',
      marginRight:  '-50%',
      transform:    'translate(-50%, -50%)'
    }
  };
  const successNotify = () => {toast.success('Carousel Is Submited Successfully!')}

  const errorNotify = () => {toast.error('Something Went Wrong, Check Again!')}

  const deletedNotify = () => {toast.warn('Carousel Deleted Successfully!')}

  const handleInputChange = event => {
    const {name, value} = event.target
    setError("");
    setCarousel({...carousel, [name]: value})
  }
    
  const openModal = (carousel) => {
    if(!carousel) {
      initalFormState()
    }else {
      setCarousel(carousel)
    }
    setIsOpen(true);
  }

  const afterOpenModal = () => {
  }
 
  const closeModal = () =>{
    setIsOpen(false);
  }


    const loadCarousels = () => {
      http.getCarousels().then(data => {
        if(data.error) {
          console.log(data.error);
        }else {
          setCarousels(data)
        }
      })
    }
  
    const clickSubmit = event => {
      event.preventDefault();
      http.createCarousels(carousel).then(data => {
        console.log('produkti qe pe qoj', carousel)
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          loadCarousels();
          successNotify()
          carouselsList();
          closeModal()
        }
       });
      };

    const editCarousels = (carouselId, carousel) => {
      http.editCarousel(carouselId, carousel).then(data => {
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          successNotify();
          loadCarousels();
          carouselsList();
          closeModal()
        }})
    }
    
    const deleteCarousels = carouselId => {
      http.deleteCarousel(carouselId).then(data => {
        if(data.error) {
          errorNotify()
        }else {
          setError("");
          deletedNotify()
          loadCarousels();
          carouselsList();
        }})
    } 

    const carouselsList = () => {
      const carouselList = carouselArrived.map(carousel =>
                      <tr key={carousel.id}>
                        <th style={{width: "5%"}}>{carousel.id}</th>
                        <td style={{width: "35%"}}>{carousel.carouselImages}</td>
                        
                        <td style={{width: "35%"}}><img  style={{width: "55%"}}src={carousel.caruselUrl} alt="Product"/></td>
                        <td style={{width: "5%"}}>
                          <i className="fa cursor-pointer fa-edit text-success h5" data-tip="Edit carousel" onClick={() =>openModal(carousel)}></i>
                          <br/><ReactTooltip /><i className="fa fa-trash mt-4 cursor-pointer text-danger h5" data-tip="Delete carousel"
                          onClick={(e) => { if (window.confirm('Are you sure you wish to delete this item?')) deleteCarousels(carousel.id) } }></i>
                        </td>
                      </tr>
                     )
                     return (carouselList);
    }

    const newPostForm = () => (
      <div className="container border">
        <form className="mb-3 " onSubmit={clickSubmit}>
            <h5 className="text-center mb-4 mt-2" hidden={carousel.id}>Create carousel</h5>
            <h5 className="text-center mb-4 mt-2" hidden={!carousel.id}>Edit carousel</h5>
            <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <input required placeholder="Id" type="hidden" name="id" onChange={handleInputChange} className="form-control" value={carousel.id}/>
                  </div>
                  <div className="form-group">
                    <label className="text-muted">Product name</label>
                    <input required placeholder="Title"  name="carouselImages" onChange={handleInputChange} type="text" className="form-control" value={carousel.carouselImages} />
                  </div>
                
              </div>
              <div className="col-md-6">
                 
                  
              <div className="form-group">
              <label className="text-muted">Add an img url </label>
              <textarea placeholder="Put an images address" className="form-control" value={carousel.caruselUrl} 
                onChange={handleInputChange} type="text" name="caruselUrl"  /> 
              <img src={carousel.imgUrl} className="mt-4" style={{width: '30%'}} alt=""/>
            </div> 
                  
              </div>
            </div>
           
            <button className="btn btn-outline-success mt-3" hidden={carousel.id} disabled={!carousel.caruselUrl}>Submit Product</button>
            <button className="btn btn-outline-success mt-3" hidden={!carousel.id} disabled={!carousel.caruselUrl}
               onClick={e=> { e.preventDefault(); editCarousels(carousel.id,carousel)} }>Edit carousel
            </button>
        </form>
    </div>
    );

    return (
          <Fragment>
                <div id='main'>
                  <h3 className="text-center mb-2 font-weight-bold">Carousel</h3>
                  <button onClick={openModal} type="button" className="btn text-white float-right mb-3" 
                  style={{backgroundColor: 'black', borderColor:'black'}}>
                  +  Create New Carousel
                  </button>
                  <table className="table table-striped table-hover table-responsive">
                      <thead> 
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Name</th>
                          <th scope="col">Img</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carouselsList()}
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

export default CarouselPage; 
