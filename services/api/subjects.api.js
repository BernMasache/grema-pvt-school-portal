import axios from 'axios';
const resource = "http://localhost:3000/api/subjects";

export default class SubjectService {

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