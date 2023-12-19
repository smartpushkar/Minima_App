import axios from 'axios'
import { CURRENTUSER_API, Developer_Registration_API, LOGIN_API, LOGOUT_API } from '../config/APIUrls';

class AuthService {
    login = async (data) => {
        const headers = {
            'Content-Type': 'application/json'
        }
        return await axios.post(LOGIN_API, data, {
            headers: headers
        });
    }
    developerRegistration = async (data) => {
        const headers = {
            'Content-Type': 'application/json'
        }
        return await axios.post(Developer_Registration_API, data, {
            headers: headers
        });
    }
    verifyLoginUser = async (token) => {
        const headers = {
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('webToken')}`
        }
        return await axios.get(CURRENTUSER_API, {
            headers: headers
        });
    }
    
    logout = async () => {
        const headers = {
            'Content-Type': 'application/json'
        }
        return await axios.post(LOGOUT_API, {
            headers: headers
        });
    }
}
const AuthServiceInstance = new AuthService();

export default AuthServiceInstance;