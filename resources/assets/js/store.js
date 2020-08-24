import { getLocalUser } from "./Helpers/auth"

const user = getLocalUser();

export default {
    state:{
        currentUser: user,
        isLoggedin: !!user,
        loading: false,
        auth_error: null,
        customers:[]
    },
    getters:{
        isLoading(state){
            return state.loading;
        },
        isLoggedin(state){
            return state.isLoggedin;
        },
        currentUser(state){
            return state.currentUser;
        },
        authError(state){
            return state.auth_error;
        },
        customers(state){
            return state.customers;
        },
    
    },
    mutations:{
        login(state){
            state.loading = true;
            state.auth_error = null;
        },
        loginSucces(state, payload){
            state.auth_error = null;
            state.isLoggedin = true;
            state.loading = false;
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});

            localStorage.setItem("user", JSON.stringify(state.currentUser));
        },
        loginFailed(state, payload){
            state.loading = false;
            state.auth_error = payload.error
        },
        logout(state){
            localStorage.removeItem('user');
            state.isLoggedin = false;
            state.currentUser = null;
        },
        updateCustomers(state, payload){
            state.customers = payload;
        }
    },
    actions:{
        login(context){
            context.commit('login')
        },
        getCustomers(context){
            axios.get('/api/customers', {
                headers:{
                    Authorization: `Bearer ${context.state.currentUser.token}`
                }
            })
            .then((response)=> {
                context.commit('updateCustomers', response.data.customers);
            })
        }
    }
}