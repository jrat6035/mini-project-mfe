import axios from "axios";

export async function placeOrder(email, id, quantity, description) {
  const order = {
    userEmail: email,
    productId: id,
    productQuantity: quantity,
    description: description,
  };
  
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/place-order",
      order
    );
    if (response.data.success) {
      return {
        message: "Order placed successfully",
        order: order,
      };
    } else {
      throw new Error("Order placing failed");
    }
  } catch (error) {
    console.error("Network Error:", error);
    throw new Error("Network Error: Failed to connect to the server.");
  }
}

export async function getOrders() {
  try {
    const response = await axios.get("http://localhost:3000/api/v1/get-orders");
    return response.data;
  } catch (error) {
    console.error("Error in fetching orders:", error);
  }
}

export async function approveOrder(id) {
  try {
    const response = await axios.patch(
      `http://localhost:3000/api/v1/approve-order/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in approving orders:", error);
  }
}

export async function getOrdersByUserEmail(userEmail) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/get-orders/${userEmail}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching orders:", error);
  }
}
