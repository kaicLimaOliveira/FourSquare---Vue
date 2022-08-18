import { defineStore } from "pinia";
import axios from "axios";


export const isAuthStore = defineStore("auth", {
    state: () => ({
        isAuth: false,
    }),
    actions: {
        async requiresAuth() {
            let response = false

            await axios.get(import.meta.env.VITE_API_URL + "validate-access-token/", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRFToken": String(localStorage.getItem("csrftoken")),
                    "Token-Name": "access-token",
                },
                withCredentials: true
            }).then(res => {
                this.isAuth = true
                response = true

            }).catch(err => { })

            return response
        }
    }
})