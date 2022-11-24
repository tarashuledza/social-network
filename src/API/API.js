import axios from "axios";
import {setAuthUserData} from "../redux/auth-reducer";
import {getUserStatus} from "../redux/profile-reducer";

const instance = axios.create ({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    "API_KEY":'b5ec3420-2ef6-4734-b1eb-0a61c578b8cf'
})

export const userAPI = {
    getUsers (currentPage, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    follow (userId) {
        return instance.post(`follow/${userId}`);
    },
    unfollow (userId) {
        return instance.delete(`follow/${userId}`);
    }
}
export const profileAPI = {
    setUserProfile (userId) {
        return instance.get(`profile/`+ userId)
            .then(response => {
                return response.data;
            })
    },
    getUserStatus (userId) {
        return instance.get(`profile/status/`+ userId);
    },
    updateUserStatus (status) {
        return instance.put('profile/status',{ status: status });
    }
}
export const authAPI = {
    setAuthUserData () {
        return instance.get(`auth/me`);
    }
}