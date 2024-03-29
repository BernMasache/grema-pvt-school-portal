import StudentService from "../api/students.api";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const studentsService = new StudentService();
const crypto = new useCrypto();
export default class useStudentStore {
  signin = async (data) => {
    return await studentsService
      ?.signin(data)
      .then((result) => {
        if (result?.status == 200 && result?.data?.error == false) {
          let user = JSON.stringify(result?.data?.student);
          let token = { token: result?.data?.token };
          cookie.set("TOKEN", crypto?.encrypt(JSON.stringify(token)), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          cookie.set("PUSER", crypto.encrypt(user), {
            expires: 2 / 24,
            sameSite: "lax",
          });
          return result;
        } else {
          return result;
        }
      })
      .catch((error) => {
        throw error;
      });
  };
  distinctData = async (term) => {
    return await studentsService
      .distinctData(term)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
  updatePassword = async (data) => {
    return await studentsService
      ?.updatePassword(data)
      ?.then((result) => {
        return result;
      })
      .catch((error) => {
        throw error;
      });
  };
}
