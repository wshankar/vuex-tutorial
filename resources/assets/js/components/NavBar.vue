<template>
   <nav class="navbar navbar-expand-md navbar-white bg-white">
      <router-link class="navbar-brand" to="/">Aung EMR</router-link>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav ml-auto">
          <template v-if="!currentUser">
            <li class="nav-item active">
              <router-link to="/login" class="nav-link btn btn-outline-primary">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link btn btn-outline-primary">Register</router-link>
            </li>
          </template>
          <template v-else>
            <li class="nav-item">
              <router-link to="/customers" class="nav-link btn btn-outline-primary">Customers</router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ currentUser.name }}</a>
              <div class="dropdown-menu" aria-labelledby="dropdown01">
                <a class="dropdown-item" href="#" @click.prevent="logout">Logout</a>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
    methods:{
        logout(){
           this.$store.commit('logout')
           this.$router.push('/login')
        }
    },
    computed:{
          currentUser(){
               return this.$store.getters.currentUser
          }
    }
}
</script>

<style>

</style>