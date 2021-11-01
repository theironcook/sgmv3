<template>
    <navbar />
    <router-view />
    <main-footer />
    <mobile-navigation />
    <cookies-banner />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    import MobileNavigation from '@/components/MobileNavigation.vue';
    import CookiesBanner from '@/components/CookiesBanner.vue';
    import MainFooter from '@/components/MainFooter.vue';
    import Navbar from '@/components/Navbar.vue';

    export default defineComponent({
        name: 'App',
        components: { Navbar, MainFooter, CookiesBanner, MobileNavigation }
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
