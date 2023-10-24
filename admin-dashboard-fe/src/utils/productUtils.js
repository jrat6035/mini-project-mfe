import axios from "axios";

export async function saveProduct({ name, description, price, quantity }) {
  const product = {
    name: name,
    description: description,
    price: price,
    quanitity: quantity,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/create-product",
      product
    );

    if (response.success) {
      res.status(200).json(response.result);
    } else {
      res.status(500).json({ error: response.error });
    }
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}

export async function getProducts() {
  try {
    const response = await axios.post("http://localhost:3000/api/get-products");
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}

export async function getProduct(productId) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/get-product",
      productId
    );

    if (response.success) {
      res.status(200).json(response.result);
    } else {
      res.status(500).json({ error: response.error });
    }
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}


























// if (response.success) {
//   res.status(200).json(response.result);
//   } else {
//     res.status(500).json({ error: response.error });
//   }

// export function saveProduct({ name, description, price, quantity, imageFile }) {
//     const navigate = useNavigate();
// let product = {productName: name,
//             productDescription: description,
//             productPrice: price,
//             productQuantity: quantity,
//             productImageUrl: imageFile
//         }

//         createProduct(product).then(res => {
//             navigate(ROUTE_PATHS.VIEW_PRODUCTS);
//     })

// }
// export async function getProducts() {
//   return axios.get("http://localhost:3000/api/get-products").
//   then((response) => {
//           return response.data;
//       }).
//   catch((exception) => {
//           // Handle error
//           throw exception;
//       })
//   }
