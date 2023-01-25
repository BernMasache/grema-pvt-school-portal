import StudentService from "../api/students.api";
import cookie from "js-cookie";
import useCrypto from "../cryptoJs";

const studentsService = new StudentService();
// const crypto = new useCrypto()
export default class useStudentStore {

    signin = async (data) => {
        return await studentsService.signin(data).then((result => {
            if (result) {
                let user = JSON.stringify(result.data.student)
                let token = result.data.token 
                cookie.set('TOKEN', token, { expires: 2 / 24, sameSite: 'lax' });
                cookie.set('USER', user, { expires: 2 / 24, sameSite: 'lax' });
                return result
            }
        })).catch(error => {
            throw error
        });
    }


}

