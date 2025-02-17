import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

class YodlrApi {
  
    static async request(endpoint, data = {}, method = "get") {
      console.debug("API Call:", endpoint, data, method);
  
      const url = `${BASE_URL}/${endpoint}`;
      const params = (method === "get")
          ? data
          : {};
  
      try {
        return (await axios({ url, method, data, params})).data;
      } catch (err) {
        console.error("API Error:", err.response);
        let message = err.response.data.error.message;
        throw Array.isArray(message) ? message : [message];
      }
    }
  
    // Individual API routes
  
    /** Signup as a new user */
  
    static async signup({email, firstName, lastName}) {
      await this.request(`users`, {email, firstName, lastName}, 'post');
    }
  
    /** Get the data of all currently existing users */
  
    static async getUsers() {
      let res = await this.request(`users`);
      return res;
    }
  
  }
  
  export default YodlrApi