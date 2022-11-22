import {userAPI} from "../API/API";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_FOLLOW_PROGRESS = "TOGGLE_FOLLOW_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isLoading: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                        return u;
                })
            };
        case UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.users}
        case SET_TOTAL_USER_COUNT:
            return {...state, totalUserCount: action.totalCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_FETCHING:
            return {...state, isLoading: action.toggleFetching}
        case TOGGLE_FOLLOW_PROGRESS:
            return {...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
                }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUserCount = (totalCount) => ({type: SET_TOTAL_USER_COUNT, totalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const isFetching = (toggleFetching) => ({type: TOGGLE_FETCHING, toggleFetching});
export const toggleFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_FOLLOW_PROGRESS, followingInProgress, userId});
export default usersReducer;

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));

        userAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(isFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUserCount(data.totalCount));
        })
    }
}
export const follow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

            userAPI.follow(userId).then(response => {
                if(response.data.resultCode === 1){
                    dispatch(followSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProgress(true, userId));

        userAPI.follow(userId).then(response => {
            if(response.data.resultCode === 1){
                dispatch(unfollowSuccess(userId));
            }
            dispatch(toggleFollowingProgress(false, userId));
        })
    }
}