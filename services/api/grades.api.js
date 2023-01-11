import axios from 'axios';
const resource = "http://localhost:3000/api/grades";
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