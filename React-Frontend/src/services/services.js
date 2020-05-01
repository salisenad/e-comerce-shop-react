import { API } from "../config";


export class Service {
    getProducts = () => {
        let products = new Promise((resolve, reject) => {
            fetch(`${API}/products`)
            .then(response => {
                resolve(response.json());
            })
        });
        return products;
    }

    getCarousels = () => {
        let carousels = new Promise((resolve, reject) => {
            fetch(`${API}/carousels`)
            .then(response => {
                resolve(response.json());
            })
        });
        return carousels;
    }

    getCategories = () => {
        let categories = new Promise((resolve, reject) => {
            fetch(`${API}/categories`)
            .then(response =>  {
                resolve(response.json())
            })
        });
        return categories;
    }
}

export default Service;