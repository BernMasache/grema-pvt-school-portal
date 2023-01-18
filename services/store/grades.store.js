
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

    allGrades = async () => {

        return await gradesService.getAllGrades().then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }
}

