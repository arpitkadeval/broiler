import axios from "axios"; // Import Axios
import { URL } from "./apiCall.js";

export async function login(credentials) {
  try {
    const response = await axios.post(URL.auth.login, credentials); // Use Axios for POST request
    if (!response.data) {
      throw new Error("No response data received.");
    }
    console.log(response);
    return response.data; // Return response data
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
}

//! set data
export function localStorageSet(name, item) {
  localStorage.setItem(name, JSON.stringify(item));
}
