import {followAtUser, getUsers, unfollowAtUser} from "../API/api";

const FOLLOW = 'FOLLOW';
const SET_USERS = 'SET_USERS';
const CURRENT_PAGE = 'CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageTotal: 0,
    pageCount: 20,
    pageNumber: 1,
    isFetching: false,
    followingInProgress: [2,3]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type){
        case FOLLOW:

            return{
                ...state,
                users: state.users.map(elem => {
                    if(elem.id === action.userId){
                        return {...elem, followed: !elem.followed};
                    }
                    return elem;
                }),
            }

        case CURRENT_PAGE:{
            return {
                ...state,
                pageNumber: action.page
            }
        }

        case SET_TOTAL_COUNT: {
            return{
                ...state,
                pageTotal: action.total
            }
        }


        case SET_USERS:{
            return {
                ...state,
                users: [...action.users]
            }
        }

        case TOGGLE_IS_FETCHING:{
            return{
                ...state,
                isFetching: action.toggle
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return{
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }

        default: return state
    }
}

export const followed = (userId) => ({type: FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (page) => ({type: CURRENT_PAGE, page})
export const setTotalCount = (total) => ({type: SET_TOTAL_COUNT, total})
export const toggleFetching = (toggle) => ({type: TOGGLE_IS_FETCHING, toggle})
export const toggleFollowingFetching = (toggle, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, toggle, userId})


export const getUser = (pageNumber,pageCount) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        getUsers(pageNumber, pageCount).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalCount(data.totalCount));
            dispatch(toggleFetching(false));
        });
    }
}
export const follow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingFetching(true, id));

        followAtUser(id).then(data => {
            if(data.resultCode === 0){
                dispatch(followed(id));
                dispatch(toggleFollowingFetching(false, id));
            }
        })
    }
}
export const unfollow = (id) => {
    return (dispatch) => {
        dispatch(toggleFollowingFetching(true, id));

        unfollowAtUser(id).then(data => {
            if(data.resultCode === 0){
                dispatch(followed(id));
                dispatch(toggleFollowingFetching(false, id));
            }
        })
    }
}


export default usersReducer;