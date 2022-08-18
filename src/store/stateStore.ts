import { defineStore } from "pinia"

export const stateStore = defineStore('stateStore', {
    state: () => ({
        isLoading: false,
        isCheckNotification: false,
        notificationsIsActive: false,
    }),
    actions: {
        changeNotificationStatusSwitch() {
            this.notificationsIsActive = !this.notificationsIsActive
            localStorage.setItem("switchNotificationStatus", String(this.notificationsIsActive))
        },

        verifyNotificationStatusSwitch() {
            const status = localStorage.getItem("switchNotificationStatus")
            if (status)
                this.notificationsIsActive = true
            else
                this.notificationsIsActive = false

            return this.notificationsIsActive
        }
    }
})