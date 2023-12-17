import axios from 'axios';
// const resource = "http://localhost:5000/api/1.0.0/schools";
const url = process.env.NEXT_PUBLIC_URL_API;

import cookie from 'js-cookie';
import useCrypto from '../cryptoJs';

const crypto = new useCrypto()
export default class AcademicYearsService {

    getAllAcademicYearsReleaseTrue() {
        return axios
            .get(url + "/student/all-academic-years", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token}`
                }
            })
            .then(response => {
                return response?.data;
            })
            .catch(error => {
                if (error) {
                    throw error;
                }
            });

    };

    getCurrentAcademicYear() {
        return axios
            .get(url + "/current/academic-year", {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(crypto.decrypt(cookie.get("PTOKEN")))?.token}`
                }
            })
            .then(response => {
                return response?.data;
            })
            .catch(error => {
                if (error) {
                    throw error;
                }
            });

    };
}