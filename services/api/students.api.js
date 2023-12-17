import axios from "axios";
// const resource = "http://localhost:5000/api/1.0.0/schools";
const url = process.env.NEXT_PUBLIC_URL_API;

import cookie from "js-cookie";
import useCrypto from "../cryptoJs";
const crypto = new useCrypto();
export default class StudentService {
  signin(data) {
    return axios
      .post(url + "/signin/student", data, {
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
      .get(url + "/distinct/student-subject/" + term, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token
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
      .patch(url + "/password/update/student/" + data.id, data, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token
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
