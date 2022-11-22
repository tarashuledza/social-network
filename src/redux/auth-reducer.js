import {authAPI} from "../API/API";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";

let initialState = {
    userId: null,
    login: null,
    email: null,
    isLoading: false,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_AUTH_USER_DATA:
        return {
            ...state,
            ...action.data
        }
        default:
            return state;
    }
}
export const setAuthUserDataSuccess = (userId, login, email) => ({type: SET_AUTH_USER_DATA, data: {userId, login, email}});

export const setAuthUserData = () => (dispatch) => {
    authAPI.setAuthUserData().then(response => {
        if(response.data.resultCode === 0){
            let {id, login, email} = response.data.data;
            dispatch(setAuthUserDataSuccess(id, login, email));
        }
    })
}

export default authReducer;