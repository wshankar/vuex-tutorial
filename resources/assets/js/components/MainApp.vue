<template>
    <div id="main">
        <nav-bar/>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import NavBar from './NavBar';
    export default {
        components:{ NavBar }
    }
</script>
