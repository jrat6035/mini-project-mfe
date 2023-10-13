import axios from "axios";
import { API_ROUTE_PATHS } from "../constants/routes";

export async function getProducts(active) {
    return axios.get(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}?activeStatus=${active}`).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}

export async function createProduct(product) {
    return axios.post(API_ROUTE_PATHS.PRODUCTS_BASE_URL, product).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}

export async function getProduct(productId) {
    return axios.put(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/${productId}`).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}

export async function getProductById(productId) {
    return axios.put(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/${productId}`).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}

export async function updateProductById(productId, product) {
    return axios.put(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/${productId}`, product).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}

export async function removeProductById(productId) {
    return axios.delete(`${API_ROUTE_PATHS.PRODUCTS_BASE_URL}/${productId}`).
    then((response) => {
            return response.data;
        }).
    catch((exception) => {
            // Handle error
            throw exception;
        })
}




























// class ProductService {
//     getProducts() {
//         return axios.get(API_ROUTE_PATHS.PRODUCTS_BASE_URL);
//     }

//     createPrduct(product) {
//         return axios.post(API_ROUTE_PATHS.PRODUCTS_BASE_URL, product);
//     }

//     getProductById(productId) {
//         return axios.get(API_ROUTE_PATHS.PRODUCTS_BASE_URL/productId)
//     }
// }

// Import as an object and not as a class
// export default new ProductService();
