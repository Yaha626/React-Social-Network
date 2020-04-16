import *as axios from 'axios';


const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': 'e0b29e92-cb08-4050-b871-1f7f1156e5dd'
    }
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`${baseUrl}users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
        return instance.post(`follow/` +userId);
    },
    unfollow(userId) {
        return instance.delete(`follow/` +userId);
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object');
        return profileAPI.getProfile(userId);
    }
}


export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` +userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` +userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }

}




export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



