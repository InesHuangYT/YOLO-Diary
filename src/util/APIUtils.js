import { API_BASE_URL, ACCESS_TOKEN } from '../constants';
import axios from 'axios';
import {SET_CURRENT_USER} from '../constants';
import jwt from 'jsonwebtoken';

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 
        response.json().then(json => {
            if(!response.ok) {
                return Promise.reject(json);
            }
            return json;
        })
    );
};


export function createAlbum(albumData) {
    return request({
        url: API_BASE_URL + "/album",
        method: 'POST',
        body: JSON.stringify(albumData)         
    });
}

// export function login(loginRequest) {
//     return request({
//         url: API_BASE_URL + "/auth/login",
//         method: 'POST',
//         body: JSON.stringify(loginRequest)
//     });
// }

export function signup(signupRequest) {
    return request({
        url: API_BASE_URL + "/auth/signup",
        method: 'POST',
        body: JSON.stringify(signupRequest)
    });
}

export function checkUsernameAvailability(username) {
    return request({
        url: API_BASE_URL + "/user/checkUsernameAvailability?username=" + username,
        method: 'GET'
    });
}

export function checkEmailAvailability(email) {
    return request({
        url: API_BASE_URL + "/user/checkEmailAvailability?email=" + email,
        method: 'GET'
    });
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/user/me",
        method: 'GET'
    });
}

export default function setAuthorizationToken(token){
if(token){
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}else{
    delete axios.defaults.headers.common['Authorization'];
}
}

export function setCurrentUser(user){
    return {
        type : SET_CURRENT_USER,
        user
    } ;
}


export function login(data) {
    return dispatch => {
      return axios.post('/api/auth/login', data).then(res => {
        const token = res.data.accesstoken;
        console.log(res);
        console.log(res.data);  
        sessionStorage.setItem('accesstoken', token);
        setAuthorizationToken(token);
        console.log(jwt.decode(token))
        dispatch(setCurrentUser(jwt.decode(token)));
      });
    }
}

export function logout() {
    return dispatch => {
      sessionStorage.removeItem('accesstoken');
      setAuthorizationToken(false);
      dispatch(setCurrentUser({}));
    }
  }