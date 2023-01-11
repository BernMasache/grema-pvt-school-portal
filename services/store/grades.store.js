
import GradesService from "../api/grades.api";

const gradesService = new GradesService();

export default class useGradesStore {

    get = async (code, term, form, year) => {
        if (code == null && term == null && form == null && year == null) {
            return await gradesService.get().then((result => {
                if (result) {

                    return result
                }
            })).catch(error => {
                throw error
            });
        }
        else {
            return await gradesService.get(code, term, form, year).then((result => {
                if (result) {

                    var response = result.grades.filter(item => {
                        return item.studentCode == code;
                    });
                    return response
                }
            })).catch(error => {
                throw error
            });
        }
    };

    allGrades = async (term, form, year) => {
        if (term == null && form == null && year == null) {
            return await gradesService.get().then((result => {
                if (result) {

                    return result
                }
            })).catch(error => {
                throw error
            });
        }
        else {
            return await gradesService.get(term, form, year).then((result => {
                if (result) {
                    return result
                }
            })).catch(error => {
                throw error
            });
        }
    };
}

