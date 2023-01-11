
import SubjectService from "../api/subjects.api";

const subjectsService = new SubjectService();

export default class useSubjectStore {

    get = async () => {

        return await subjectsService.get().then((result => {
            if (result) {

                return result
            }
        })).catch(error => {
            throw error
        });



    };

}

