import axios from "axios";
// const resource = "http://localhost:5000/api/1.0.0/schools";
const url = process.env.NEXT_PUBLIC_URL_API;

import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const crypto = new useCrypto();
export default class GradesService {
  getAllGrades() {
    return axios
      .get(url + "/student/grades/all", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token
          }`,
        },
      })
      .then((response) => {
        return response?.data;
      })
      .catch((error) => {
        if (error) {
          throw error;
        }
      });
  }

  getGrades(data) {
    return axios
      .get(`${url}/grades/${data?.term}&${data?.form}&${data?.year}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token
          }`,
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((e) => {
        if (e) {
          throw e;
        }
      });
  }

  studentsGradesPerTermFormAcademicYear(data) {
    return axios
      .get(`${url}/all/grades/${data?.term}&${data?.form}&${data?.year}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token
          }`,
        },
      })
      .then((res) => {
        return res?.data;
      })
      .catch((e) => {
        if (e) {
          throw e;
        }
      });
  }
}
