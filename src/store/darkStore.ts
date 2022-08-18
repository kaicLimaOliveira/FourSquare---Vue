import { defineStore } from "pinia"

export const darkModeStore = defineStore('darkModeStore', {
    state: () => ({
        isDark: true,
    }),
    actions: {
        changeBackground() {
            this.isDark = !this.isDark

            if (this.isDark)
                localStorage.setItem("ThemeMode", "light")
            else
                localStorage.setItem("ThemeMode", "dark")
        },

        verifyTheme() {
            const themeStorage = localStorage.getItem("ThemeMode")
            if (themeStorage == "dark")
                this.isDark = false
            else
                this.isDark = true

            return this.isDark
        }
    }

})