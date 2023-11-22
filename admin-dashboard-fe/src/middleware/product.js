import axios from "axios";

export async function saveProduct({ name, description, price, quantity }) {
  const product = {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  };

  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/create-product",
      product
    );
    if (response.data.success) {
      return {
        message: "Product created successfully",
        product: product,
      };
    } else {
      throw new Error("Creating product failed");
    }
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}

export async function getProducts() {
  try {
    const response = await axios.get(
      "http://localhost:3000/api/v1/get-products"
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching products:", error);
  }
}

export async function getProductById(productId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/get-product/${productId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in fetching product:", error);
  }
}

export async function updateProduct({
  id,
  name,
  description,
  price,
  quantity,
}) {
  const product = {
    name: name,
    description: description,
    price: price,
    quantity: quantity,
  };

  try {
    const response = await axios.put(
      `http://localhost:3000/api/v1/update-product/${id.productId}`,
      product
    );
    if (response.data.success) {
      return {
        message: "Product updated successfully",
        product: product,
      };
    } else {
      throw new Error("Updating product failed");
    }
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}

export async function removeProduct(productId) {
  try {
    const response = await axios.delete(
      `http://localhost:3000/api/v1/delete-product/${productId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error in removing product:", error);
  }
}
