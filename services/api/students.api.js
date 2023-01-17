import axios from 'axios';
const resource = "http://localhost:5000/api/grema";
import cookie from 'js-cookie';
export default class StudentService {

    getUser() {
        let user = JSON.parse(cookie.get('TOKEN'))
        return user.uuid
    }

    getGrades(data) {
        return axios.get(`${resource}/grades/${data.term}&${data.form}&${data.year}`, {

            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(cookie.get('TOKEN'))}`

            }
        }).then(res => {
            return res
        }).catch(e => {
            if (e) {
                throw e
            }
        })
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