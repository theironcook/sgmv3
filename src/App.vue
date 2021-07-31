<template>
    <navbar />
    <router-view />
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Navbar from '@/components/Navbar.vue';

    @Options({
        components: { Navbar }
    })
    export default class App extends Vue {

    }
</script>

<style lang="scss">
    #app {
        font-family: 'Quicksand', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
