<template>
    <nav class="navbar is-flex is-hidden-desktop is-fixed-bottom mobile-nav has-background-blue-light">
        <router-link to="/docs" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/docs1.svg" />
            <span :class="{'is-active': $route.path === '/docs'}">Docs</span>
        </router-link>
        <router-link to="/solutions" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/solutions1.svg" />
            <span :class="{'is-active': $route.path === '/solutions'}">Solutions</span>
        </router-link>
        <router-link to="/news" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/news1.svg" />
            <span :class="{'is-active': $route.path === '/news'}">News</span>
        </router-link>
        <a href="https://console.saasglue.com" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/login1.svg" />
            <span>Sign In</span>
        </a>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'MobileNavigation'
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .mobile-nav {
        border-top: 1px solid #ccc;

        a.navbar-item:hover {
            background-color: transparent;
        }

        .is-active {
            border-bottom: 3px solid deepskyblue;
        }
    }

    @include touch {
        .navbar {
            height: 4rem;
        }
    }

    @include tablet {
        .navbar-item {
            flex-direction: row;

            img {
                margin-right: 1rem;
            }
        }
    }

    @include mobile {
        .navbar-item {
            flex-direction: column;
        }
    }
</style>
