import StudentService from "../api/students.api";

const studentsService = new StudentService();

export default class useStudentStore {

    get = async (id) => {
        if (id == null) {
            return await studentsService.get().then((result => {
                if (result) {

                    return result
                }
            })).catch(error => {
                throw error
            });
        }
        else {
            return await studentsService.get(id).then((result => {
                if (result) {
                    
                    var response = result.students.filter(item => {
                        return item.code == id;
                    });
                    return response
                }
            })).catch(error => {
                throw error
            });
        }



    };

}

