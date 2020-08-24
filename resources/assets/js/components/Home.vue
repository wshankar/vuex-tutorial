<template>
        <div class="row justify-content-center mt-4">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        I'm an example component.
                        {{ welcome }}
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    computed: {
        welcome(){
            return this.$store.getters.welcome
        }
    }
}
</script>

<style>

</style>