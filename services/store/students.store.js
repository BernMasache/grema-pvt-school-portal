import StudentService from "../api/students.api";
import cookie from "js-cookie";

const studentsService = new StudentService();

export default class useStudentStore {

    signin = async (data) => {
        return await studentsService.signin(data).then((result => {
            if (result) {
                let user = result.data.student
                let token = result.data.token

                cookie.set('TOKEN', JSON.stringify(token), { expires: 1 / 24, sameSite: 'lax' });
                cookie.set('USER', JSON.stringify(user), { expires: 1 / 24, sameSite: 'lax' });
                
                return result
            }
        })).catch(error => {
            throw error
        });

    }
    getGrades = async (data) => {
        return await studentsService.getGrades(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });

    }
    // get = async (id) => {
    //     if (id == null) {
    //         return await studentsService.get().then((result => {
    //             if (result) {

    //                 return result
    //             }
    //         })).catch(error => {
    //             throw error
    //         });
    //     }
    //     else {
    //         return await studentsService.get(id).then((result => {
    //             if (result) {

    //                 var response = result.students.filter(item => {
    //                     return item.code == id;
    //                 });
    //                 return response
    //             }
    //         })).catch(error => {
    //             throw error
    //         });
    //     }



    // };

}

