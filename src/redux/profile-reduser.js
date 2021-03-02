import {getStatusProfileAPI, setUserProfileAPI, updateStatusProfileAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const GET_STATUS_PROFILE = 'GET_STATUS_PROFILE';
const UPDATE_STATUS_PROFILE = 'UPDATE_STATUS_PROFILE';

let initialState = {
    posts:[
        {id: 1, post: 'post 1'},
        {id: 2, post: 'post 2'},
        {id: 3, post: 'post 3'},
    ],
    info: {
        name: "Aleksandr T.",
        date: "2/12/1987",
        city:'Magnitogorsk',
        education:'MGTU 10',
        img: '../img/user.png'
    },
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {

    switch (action.type){
        case ADD_POST:
            let post = action.text;
            console.log(action);
            if(post){
                return {
                    ...state,
                    posts: [...state.posts, {id: Math.floor(Math.random() * 99), post: post}],
                    newPost: ''
                };
            }else{
                return state;
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.text
            };

        case GET_STATUS_PROFILE:
            return {
                ...state,
                status: action.text
            };

        case UPDATE_STATUS_PROFILE:
            return {
                ...state,
                status: action.text
            };

        default:
            return state;
    }

}

//actions

export default profileReducer;

export const addPostActionCreator = (text) => ({type: ADD_POST, text: text})

export const updateNewPostActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const getStatusProfileAC = (text) => ({type: GET_STATUS_PROFILE, text})

export const updateStatusProfileAC = (text) => ({type: UPDATE_STATUS_PROFILE, text})

// thunk

export const userProfile = (id) => {
    return (dispatch) => {
        setUserProfileAPI(id).then(data => {
            dispatch(setUserProfile(data));
        })
    }
}

export const getStatusProfile = (id) => {
    return (dispatch) => {
        getStatusProfileAPI(id).then(data => {
            dispatch(getStatusProfileAC(data));
        })
    }
}

export const updateStatusProfile = (status) => {
    return (dispatch) => {
        updateStatusProfileAPI(status).then(data => {
            dispatch(updateStatusProfileAC(status));
        })
    }
}

