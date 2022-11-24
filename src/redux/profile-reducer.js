import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = {
    posts: [
        {id: 1, message: 'yooooyoyoyoyoyoyoyoyoyoyoo', likesCount: 12},
        {id: 2, message: 'post2', likesCount: 100},
        {id: 3, message: 'yoyo', likesCount: 11},
        {id: 4, message: 'yoyo', likesCount: 11}
    ],
    newPostText: '',
    profile: undefined,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
             return {
                 ...state,
                 posts: [ newPost, ...state.posts],
                 newPostText: ""
             };
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText};
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        case SET_USER_STATUS:
            return {...state, status: action.status};
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getUserStatus(userId).then(response => {
                dispatch(setUserStatus(response.data));
        })
    }
}
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateUserStatus(status).then(response => {
            if(response.data.resultCode === 0)
                dispatch(setUserStatus(status));
        })
    }
}


export const setUserProfile = (userId) => {
    return (dispatch) => {
    profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUserProfileSuccess(data));
        })
    }
}

export default profileReducer;