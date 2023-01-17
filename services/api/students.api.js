import axios from 'axios';
const resource = "http://localhost:5000/api/grema";
import cookie from 'js-cookie';
export default class StudentService {

    getUser() {
        let user = JSON.parse(cookie.get('TOKEN'))
        return user.uuid
    }

    signin(data) {
        return axios
            .post(resource + "/signin/student", data, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                return response;
            })
            .catch(error => {
                if (error) {
                    throw error;
                }
            });

    };



}