import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pickedMenu: 'aboutMe',
        wasAboutMeRendered: false,
    },
    mutations: {
        changeSelectedMenu(state,pickedMenu) {
            state.pickedMenu = pickedMenu
        },
        updateWasRenderedAboutMe(state,wasRenderedValue) {
            state.wasAboutMeRendered = wasRenderedValue
        }
    },
    getters: {
        pickedMenu: state => state.pickedMenu,
        wasAboutMeRendered: state => state.wasAboutMeRendered
    }

})