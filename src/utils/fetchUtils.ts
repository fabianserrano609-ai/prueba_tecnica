import type { NewUserDataToSend } from "@/types/types";

/* GET requests */
async function getListUsers() {
  const url = `https://reqres.in/api/collections/users/records`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error("Error retrieving data:", (error as Error).message);
    throw error;
  }
}

async function getDataUser(id: string) {
  const url = `https://reqres.in/api/collections/users/records/${id}`;

  const options: RequestInit = {
    method: "GET",
    headers: {
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
  };

  try {
    const response = await fetch(url, options);
    return response;
  } catch (error) {
    console.error("Error retrieving user data:", (error as Error).message);
    throw error;
  }
}

/* POST requests */
async function createNewUser(data: NewUserDataToSend) {
  const url = `https://reqres.in/api/collections/users/records`;

  const options: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    return response;
  } catch (error) {
    console.error("Request error:", (error as Error).message);
    throw error;
  }
}

/* PUT requests */
async function editUserData(userId: string, data: NewUserDataToSend) {
  const url = `https://reqres.in/api/collections/users/records/${userId}`;

  const options: RequestInit = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_API_KEY,
    },
    body: JSON.stringify(data),
  };

  try {
    const response = await fetch(url, options);

    return response;
  } catch (error) {
    console.error("Request error:", (error as Error).message);
    throw error;
  }
}

export { getListUsers, getDataUser, createNewUser, editUserData };
