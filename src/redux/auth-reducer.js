import {loginIn, loginAtUser, loginOut} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type){
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }
}

export default authReducer;

export const setUserData = (data) => ({type: SET_USER_DATA, data});

export const checkAuth = () => {
    return (dispatch) => {
        loginAtUser().then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData(data.data));
            }
        })
    }
}

export const Login = (email, password, remember) => {
    return (dispatch) => {
        loginIn(email, password, remember).then(data => {
            if(data.resultCode === 0){
                dispatch(checkAuth(data.data));
            }
        })
    }
}

export const LogOut = () => {
    return (dispatch) => {
        loginOut().then(data => {
            if(data.resultCode === 0){
                dispatch(setUserData(data.data));
            }
        })
    }
}

