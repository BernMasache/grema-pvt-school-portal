
import AcademicYearsService from "../api/academicYears.api";

const academicYearsService = new AcademicYearsService();

export default class useAcademicYearsStore {

    getAllAcademicYearsReleaseTrue = async (data) => {
        return await academicYearsService.getAllAcademicYearsReleaseTrue(data).then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }
    getCurrentAcademicYear = async () => {
        return await academicYearsService.getCurrentAcademicYear().then((result => {
            if (result) {
                return result
            }
        })).catch(error => {
            throw error
        });
    }

}

