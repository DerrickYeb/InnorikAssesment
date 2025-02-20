﻿import axios from "axios";

const API_URL = "https:localhost:7284/api/authenticate/";

class AuthService {
    login(username, password) {
        return axios
            .post(API_URL + "user", {
                username,
                password
            })
            .then(response => {
                if (response.data.Token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }

                return response.data;
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(username,password) {
        return axios.post(API_URL + "signup", {
            username,
            password
        });
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }
}

export default new AuthService();