import { API } from "../config";


export class CategoriesService {
getCategories = () => {
    let categories = new Promise((resolve, reject) => {
        fetch(`${API}/categories`)
        .then(response => {
            resolve(response.json());
        })
        .catch(reject => console.log(reject));
    })
    return categories
}

createCategory = (category) => {
    return fetch(`${API}/create/categories`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(category)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}



editCategory = (categoryId, category) => {
    let editedCategory = new Promise((resolve, reject) => {
        fetch(`${API}/carousels/${categoryId}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(category)
        })
        .then(response => {
            resolve(response.json());
        })
        .catch(reject => console.log(reject));
    })
    return editedCategory
}


deleteCategory = (categoryId) => {
    let deletedProduct = new Promise((resolve, reject) => {
        fetch(`${API}/carousels/${categoryId}`, {
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

export default CategoriesService