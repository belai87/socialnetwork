import React from 'react';
import * as axios from "axios";

const API_KEY = "030f474a-1360-4b5e-ae7f-a689c2826637";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {"API-KEY": API_KEY}
});

export const getUsers = (pageNumber, pageCount) => {
    return instance.get(`/users?page=${pageNumber}&count=${pageCount}`).then(response => response.data);
}

export const unfollowAtUser = (id) => {
    return instance.delete(`/follow/${id}`).then(response => response.data);
}

export const followAtUser = (id) => {
    return instance.post(`/follow/${id}`,null).then(response => response.data);
}

export const loginAtUser = () => {
    return instance.get(`/auth/me`).then(response => response.data);
}

export const setUserProfileAPI = (id) => {
    return instance.get(`/profile/${id}`).then(response => response.data);
}

export const getStatusProfileAPI = (id) => {
    return instance.get(`/profile/status/${id}`).then(response => response.data);
}

export const updateStatusProfileAPI = (text) => {
    return instance.put(`/profile/status/`, {status: text}).then(response => response.data);
}

export const loginIn = (email,password,remember = false) => {
    return instance.post(`/auth/login`, {email,password,remember}).then(response => response.data);
}
export const loginOut = () => {
    return instance.delete(`/auth/login`);
}






