import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        pickedMenu: 'aboutMe',
        wasAboutMeRendered: false,
        pickedTheme: JSON.parse(window.localStorage.getItem('settingsSh')) != null ? JSON.parse(window.localStorage.getItem('settingsSh')).theme : 'night',
        contact: {
            name: '',
            email: '',
            message: ''
        }
    },
    mutations: {
        changeTheme(state, pickedTheme) {
            state.pickedTheme = pickedTheme;
        },
        changeSelectedMenu(state, pickedMenu) {
            state.pickedMenu = pickedMenu
        },
        updateWasRenderedAboutMe(state, wasRenderedValue) {
            state.wasAboutMeRendered = wasRenderedValue
        },
        updateContact(state, oElement) {
            switch (oElement.id) {
                case "name":
                    state.contact.name = oElement.value;
                    break;
                case "email":
                    state.contact.email = oElement.value;
                    break;
                case "message":
                    state.contact.message = oElement.value;
                    break;
            }
        }
    },
    getters: {
        pickedTheme: state => state.pickedTheme,
        pickedMenu: state => state.pickedMenu,
        wasAboutMeRendered: state => state.wasAboutMeRendered,
        contact: state => state.contact
    }

})