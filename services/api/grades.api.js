import axios from "axios";
const resource = "http://localhost:5000/api/schools";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const crypto = new useCrypto();
export default class GradesService {
  getAllGrades() {
    return axios
      .get(resource + "/student/grades/all", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("TOKEN")))?.token
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
      .get(`${resource}/grades/${data?.term}&${data?.form}&${data?.year}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("TOKEN")))?.token
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
      .get(`${resource}/all/grades/${data?.term}&${data?.form}&${data?.year}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            JSON.parse(crypto.decrypt(cookie.get("TOKEN")))?.token
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
