import axios from "axios";
const resource = "http://localhost:5000/api/schools";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";
const crypto = new useCrypto();
export default class StudentService {
  signin(data) {
    return axios
      .post(resource + "/signin/student", data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  }

  distinctData(term) {
    return axios
      .get(resource + "/distinct/student-subject/" + term, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("TOKEN")))?.token
          }`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  }
  updatePassword(data) {
    return axios
      .patch(resource + "/password/update/student/" + data.id, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("TOKEN")))?.token
          }`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  }
}
