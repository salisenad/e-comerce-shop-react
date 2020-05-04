import { API } from "../config";


export class ContactUsService {
    getContactUs = () => {
        let contactUs = new Promise ((resolve, reject) => {
            fetch(`${API}/customerMessage`)
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));
        })
        return contactUs
    }


    createContactUs = ( contactUs) => {
        return fetch(`${API}/create/customerMessage`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactUs)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };


    

  

}
export default ContactUsService;