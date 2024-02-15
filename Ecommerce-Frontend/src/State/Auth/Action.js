import axios from "axios";
import { API_BASE_URL } from "../../config/ApiConfig";
import { LOGOUT } from "./ActionType";


const REGISTER_REQUEST = () => ({type: REGISTER_REQUEST});
const REGISTER_SUCCESS = (user) => ({type: REGISTER_SUCCESS,payload:user});
const REGISTER_FAILURE = (err) => ({type: REGISTER_FAILURE,payload:err});

const LOGIN_REQUEST = () => ({type: LOGIN_REQUEST});
const LOGIN_SUCCESS = (user) => ({type: LOGIN_SUCCESS,payload:user});
const LOGIN_FAILURE = (err) => ({type: LOGIN_FAILURE,payload:err});

const GET_USER_REQUEST = () => ({type: GET_USER_REQUEST});
const GET_USER_SUCCESS = (user) => ({type:GET_USER_SUCCESS,payload:user});
const GET_USER_FAILURE = (err) => ({type:GET_USER_FAILURE,payload:err});

const token = localStorage.getItem('token');

export const register = (userData) => async (dispatch)=> {
    dispatch(REGISTER_REQUEST());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`,userData);
        const user = await response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user data register", user);
        dispatch(REGISTER_SUCCESS(user.jwt));
    }catch (e) {
        dispatch(REGISTER_FAILURE(e.message));
    }
};

export const login = (userData) => async (dispatch)=> {
    dispatch(LOGIN_REQUEST());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user = await response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user data login", user);
        dispatch(LOGIN_SUCCESS(user.jwt));
    }catch (e) {
        dispatch(LOGIN_FAILURE(e.message));
    }
};

export const getUser = () => async (dispatch)=> {
    dispatch(GET_USER_REQUEST());

    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/profile`,{
            Headers:{
                "Authorization":`Bearer ${token}`,
            }
        });
        const user = await response.data;
        console.log("user data", user);
        dispatch(GET_USER_SUCCESS(user));
    }catch (e) {
        dispatch(GET_USER_FAILURE(e.message));
    }
};

export const logout = () => (dispatch) => {
    dispatch({type:LOGOUT, payload:null});
};