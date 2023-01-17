
import GradesService from "../api/grades.api";

const gradesService = new GradesService();

export default class useGradesStore {

    getGrades = async (data) => {
        return await gradesService.getGrades(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });

    }

    // allGrades = async (term, form, year) => {
    //     if (term == null && form == null && year == null) {
    //         return await gradesService.get().then((result => {
    //             if (result) {

    //                 return result
    //             }
    //         })).catch(error => {
    //             throw error
    //         });
    //     }
    //     else {
    //         return await gradesService.get(term, form, year).then((result => {
    //             if (result) {
    //                 return result
    //             }
    //         })).catch(error => {
    //             throw error
    //         });
    //     }
    // };
}

