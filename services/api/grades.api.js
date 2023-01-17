import axios from 'axios';
const resource = "http://localhost:5000/api/grema";
import cookie from 'js-cookie';

export default class GradesService {

    getAllGrades() {
        return axios
            .get(resource + "/student/grades/all", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(cookie.get('TOKEN'))}`

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


}