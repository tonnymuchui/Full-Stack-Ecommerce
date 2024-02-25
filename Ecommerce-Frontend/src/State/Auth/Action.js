import axios from "axios";
import { API_BASE_URL } from "../../config/ApiConfig";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";


// Action creator functions
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (err) => ({ type: REGISTER_FAILURE, payload: err });

const loginRequest = () => ({type: LOGIN_REQUEST});
const loginSuccess = (user) => ({type: LOGIN_SUCCESS,payload:user});
const loginFailure = (err) => ({type: LOGIN_FAILURE,payload:err});

const getUserRequest = () => ({type: GET_USER_REQUEST});
const getUserSuccess = (user) => ({type:GET_USER_SUCCESS,payload:user});
const getUserFailure = (err) => ({type:GET_USER_FAILURE,payload:err});

const token = localStorage.getItem('token');

// Thunk action creator
export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest()); // Dispatch the action creator function

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);
        const user = await response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user data register", user);
        dispatch(registerSuccess(user.jwt)); // Dispatch the action creator function with payload
    } catch (e) {
        dispatch(registerFailure(e.message)); // Dispatch the action creator function with payload
    }
};

export const login = (userData) => async (dispatch)=> {
    dispatch(loginRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signin`,userData);
        const user = await response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user data login", user);
        dispatch(loginSuccess(user.jwt));
    }catch (e) {
        dispatch(loginFailure(e.message));
    }
};

export const getUser = () => async (dispatch)=> {
    dispatch(getUserRequest());

    try {
        const response = await axios.post(`${API_BASE_URL}/api/users/profile`,{
            Headers:{
                "Authorization":`Bearer ${token}`,
            }
        });
        const user = await response.data;
        console.log("user data", user);
        dispatch(getUserSuccess(user));
    }catch (e) {
        dispatch(getUserFailure(e.message));
    }
};

export const logout = () => (dispatch) => {
    dispatch({type:LOGOUT, payload:null});
    localStorage.clear();
};