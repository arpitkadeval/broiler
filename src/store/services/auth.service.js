import Axios from "axios";
import { TEST_API_URL } from "./constant";

// const header = {
//   "Content-Type":
//     "application/x-www-form-urlencoded; charset=UTF-8;application/json",
// };

class AuthService {
  async login(data) {
    try {
      const response = await Axios.post(
        `${TEST_API_URL}pos-services/v1/api/admin/signIn`,
        data,
      );
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  async signup(data) {
    try {
      const response = await Axios.post(`${TEST_API_URL}auth/signup`, data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
export default AuthService;
