import { API } from "../config";


export class OrderService {
getOrders = () => {
    let orders = new Promise((resolve, reject) => {
        fetch(`${API}/orders`)
        .then(response => {
            resolve(response.json());
        })
        .catch(reject => console.log(reject));
    })
    return orders
}


createOrder = (orders) => {
    return fetch(`${API}/create/orders`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(orders)
    })
    .then(response => {
        return response.json();
    })
    .catch(err => {
        console.log(err);
    })
}








}

export default OrderService