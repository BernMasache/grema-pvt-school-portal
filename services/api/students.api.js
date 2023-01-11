import axios from 'axios';
const resource = "http://localhost:3000/api/students";

export default class StudentService {

    get() {
        return axios
            .get(resource, {
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