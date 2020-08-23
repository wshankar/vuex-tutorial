<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                      <div class="form-group row">
                          <label for="email">Email:</label>
                          <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                      </div>
                      <div class="form-group row">
                          <label for="password">Password:</label>
                          <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                      </div>
                      <div class="form-group row">
                          <input type="submit" value="Login" class="btn-secondary">
                      </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {login} from '../../Helpers/auth'
export default {
    data(){
        return{
            form:{
                email: "",
                password: ""
            },
            error: null
        }
    },
    methods:{
        authenticate(){
            this.$store.dispatch('login');

            login(this.$data.form)
            .then((res) =>{
                this.$store.commit('loginSucces', res)
                this.$router.push({path: '/'})
            })
            .catch((error) => {
                this.$store.commit('loginFailed', {error})
            })
        }
    }
}
</script>

<style>

</style>