import React, {useState, useEffect, Fragment } from 'react';
import ContactUsService from '../../../services/contactUs-service';


const http = new ContactUsService()
const ContactUs = () => {
    const [contactUsArrived, setContactUs] = useState([])


    useEffect(() =>{
        loadContactUs()
    },[])

    const loadContactUs = () => {
        http.getContactUs().then(data => {
            setContactUs(data)
            console.log('data data  contact us ', data)
        })
    }

    const contactUsLists = () => {
        const contactUsList = contactUsArrived.map(contactUs => 
                        <tr key={contactUs.id}>
                          <th style={{width: "10%"}}>{contactUs.id}</th>
                          <td style={{width: "20%"}}>{contactUs.customerName}</td>
                          <td style={{width: "20%"}}>{contactUs.customerName}</td>
                          <td style={{width: "20%"}}>{contactUs.customerMessage}</td>
                        </tr>
                       )
                       return (contactUsList);
                    }


        return ( 
            <Fragment>
            <div>
                 <h3 className="text-center mb-5 font-weight-bold">Contact Us Messages</h3>
                <table className="table table-striped table-hover ">
                      <thead> 
                        <tr>
                          <th scope="col">Contact us Id</th>
                          <th scope="col">Customer Name</th>
                          <th scope="col">Email</th>
                          <th scope="col">Customer Messages</th>                          
                        </tr>
                      </thead>
                      <tbody>
                        {contactUsLists()}
                      </tbody>
                  </table>
            </div>
          </Fragment>
         );
}
 
export default ContactUs;