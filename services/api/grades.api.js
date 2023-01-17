import axios from 'axios';
const apiUrl = process.env.NEXT_PUBLIC_API_URL
export default class GradesService {

    get() {
        return axios
            .get(apiUrl+"/api/grades", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
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