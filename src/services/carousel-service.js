import { API } from "../config";


export class CarouselService {
    getCarousels = () => {
        let carousels = new Promise ((resolve, reject) => {
            fetch(`${API}/carousels`)
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));
        })
        return carousels
    }


    createCarousels = ( carousel) => {
        return fetch(`${API}/create/carousels`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carousel)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };


    editCarousel = (carouselId, carousel) => {
        let editedCarousel = new Promise((resolve, reject) => {
            fetch(`${API}/carousels/${carouselId}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(carousel)
            })
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));
        })
        return editedCarousel
    }
  

    deleteCarousel = (carouselid) => {
        let deletedCarousel = new Promise((resolve, reject) => {
            fetch(`${API}/carousels/${carouselid}`, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));
        })
        return deletedCarousel
    }


  

}
export default CarouselService;