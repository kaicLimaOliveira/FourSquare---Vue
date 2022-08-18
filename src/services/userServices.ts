import axios from "./api"

export default {
    login(data: object) {
        return axios.api().post('login/', data)
    },

    register(data: object) {
        return axios.api().post('registration-user/', data)
    }
}