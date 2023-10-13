import { useNavigate } from "react-router-dom";
import { createProduct } from "../services/ProductService";
import { ROUTE_PATHS } from "../constants/routes";
import { PRODUCT_STATUS } from "../constants/constants";

export function saveProduct({ name, description, price, quantity, status }) {
    const navigate = useNavigate();
    let product = {productName: name,
                productDescription: description,
                productPrice: price,
                productQuantity: quantity,
                productStatus: status != null ? status : PRODUCT_STATUS.available,
                productListedDate: new Date()
            }
    
    createProduct(product).then(res => {
        navigate(ROUTE_PATHS.VIEW_PRODUCTS);
    })

}