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
            .then(response => response.data);
    }
}




