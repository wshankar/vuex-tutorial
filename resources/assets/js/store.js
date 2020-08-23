export default {
    state:{
        welcomeMessage: "My First Vuex"
    },
    mutations:{},
    getters:{
        welcome(state){
            return state.welcomeMessage
        }
    },
    actions:{}
}