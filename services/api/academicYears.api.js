import axios from 'axios';
const resource = "http://localhost:5000/api/grema";
import cookie from 'js-cookie';
import useCrypto from '../cryptoJs';

const crypto = new useCrypto()
export default class AcademicYearsService {

    getAllAcademicYearsReleaseTrue() {
        return axios
            .get(resource + "/student/all-academic-years", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${cookie.get('TOKEN')}`
                }
            })
            .then(response => {
                return response.data;
            })
            .catch(error => {
                if (error) {
                    throw error;
                }
            });

    };
}