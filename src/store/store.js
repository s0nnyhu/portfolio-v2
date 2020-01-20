import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pickedMenu: 'aboutMe',
        wasAboutMeRendered: false,
        pickedTheme: 'normal'
    },
    mutations: {
        changeTheme(state,pickedTheme) {
            state.pickedTheme = pickedTheme
        },
        changeSelectedMenu(state,pickedMenu) {
            state.pickedMenu = pickedMenu
        },
        updateWasRenderedAboutMe(state,wasRenderedValue) {
            state.wasAboutMeRendered = wasRenderedValue
        }
    },
    getters: {
        pickedTheme: state => state.pickedTheme,
        pickedMenu: state => state.pickedMenu,
        wasAboutMeRendered: state => state.wasAboutMeRendered
    }

})