import axios from "axios";

export async function signUp(fullname, username, email, password) {
  try {
    const response = await axios.post("http://localhost:3000/api/v1/sign-up", {
      fullname: fullname,
      username: username,
      email: email,
      password: password,
    });

    if (response.data.success) {
      return response.data.user;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function confirmSignUp(username, code) {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/confirm-signup",
      {
        username,
        code,
      }
    );

    if (response.data.success) {
      return response.data.result;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signIn(username, password) {
  console.log("Sign in");
  try {
    const response = await axios.post("http://localhost:3000/api/v1/signin", {
      username: username,
      password: password,
    });
    if (response.data.success) {
      return response.data.result;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getCurrentUser() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/v1/current-user"
    );
    if (response.data.success) {
      console.log(response.data.cognitoUser);
      return response.data.cognitoUser;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function getSession() {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/current-session"
    );
    if (response.data.success) {
      return response.data.result;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}

export async function signOut() {
  try {
    const response = await axios.post("http://localhost:3000/api/signout");
    if (response.data.success) {
      return response.data.result;
    } else {
      throw new Error(response.data.error);
    }
  } catch (error) {
    throw new Error(error.message);
  }
}
