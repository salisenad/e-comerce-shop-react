import { API } from "../config";

export class ProductService{
    getProducts = () => {
        let products = new Promise((resolve, reject) => {
            fetch(`${API}/products`)
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));

        })
        return products
    }


    createProduct = ( product) => {
        return fetch(`${API}/create/products`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product)
        })
            .then(response => {
                return response.json();
            })
            .catch(err => {
                console.log(err);
            });
    };


    editProduct = (productId, product) => {
        let editedProduct = new Promise((resolve, reject) => {
            fetch(`${API}/products/${productId}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify(product)
            })
            .then(response => {
                resolve(response.json());
            })
            .catch(reject => console.log(reject));
        })
        return editedProduct
    }
  

    deleteProduct = (productId) => {
        let deletedProduct = new Promise((resolve, reject) => {
            fetch(`${API}/products/${productId}`, {
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
        return deletedProduct
    }


  
    
}

export default ProductService;