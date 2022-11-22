import {profileAPI} from "../API/API";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'post1', likesCount: 12},
        {id: 2, message: 'post2', likesCount: 11},
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
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text })
export const setUserProfileSuccess = (profile) => ({type: SET_USER_PROFILE, profile })

export const setUserProfile = (userId) => {
    return (dispatch) => {
    profileAPI.setUserProfile(userId).then(data => {
            dispatch(setUserProfileSuccess(data));
        })
    }
}

export default profileReducer;