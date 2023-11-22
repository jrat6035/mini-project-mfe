import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get(`http://localhost:3000/api/v1/get-users`);
    return response.data;
  } catch (error) {
    console.error("Error in fetching orders:", error);
  }
}

export async function getUserByUserEmail(userEmail) {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/v1/get-user/${userEmail}`
    );
    return response.data;
  } catch (error) {
    console.error("Error in fetching orders:", error);
  }
}
