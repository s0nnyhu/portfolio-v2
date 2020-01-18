import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pickedMenu: 'aboutMe',
    },
    mutations: {
        changeSelectedMenu(state,pickedMenu) {
            state.pickedMenu = pickedMenu
        }
    },
    getters: {
        pickedMenu: state => state.pickedMenu
    }
})