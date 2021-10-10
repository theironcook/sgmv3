<template>
    <navbar />
    <router-view />
    <main-footer />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import MainFooter from '@/components/MainFooter.vue';
    import Navbar from '@/components/Navbar.vue';

    export default defineComponent({
        name: 'App',
        components: { Navbar, MainFooter }
    });
</script>

<style lang="scss">
    #app {
        font-family: 'Quicksand', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #fff;
    }
</style>
