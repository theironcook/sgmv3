<template>
    <nav :class="{'has-shadow': hasScrollOffset}" class="navbar is-transparent has-background-blue-light" role="navigation" aria-label="main navigation">
        <div class="container py-2">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="@/assets/images/logo.png" alt="SaaSGlue logo" width="180" height="30">
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a href="#" class="navbar-item">Getting started</a>
                    <a href="#" class="navbar-item">Tutorials</a>
                    <a href="#" class="navbar-item">Solutions</a>
                    <a href="#" class="navbar-item">Pricing</a>
                    <a href="#" class="navbar-item">News</a>
                    <router-link to="/docs" class="navbar-item">Docs</router-link>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-ghost">Log in</a>
                            <a class="button is-success has-action-shadow">
                                <strong>Sign up</strong>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        data () {
            return {
                hasScrollOffset: false
            };
        },

        created (): void {
            document.addEventListener('scroll', this.onScroll);
        },

        unmounted (): void {
            document.removeEventListener('scroll', this.onScroll);
        },

        methods: {
            onScroll (): void {
                this.hasScrollOffset = document.documentElement.scrollTop > 60;
            }
        }
    });
</script>

<style scoped lang="scss">
    .navbar {
        position: sticky;
        top: 0;
        transition: box-shadow .3s linear;
        background-color: inherit;
    }

    .navbar-start {
        flex-grow: 1;
        justify-content: center;
    }

    .navbar-item {
        text-transform: uppercase;
    }

    .navbar.has-shadow {
        box-shadow: 0 0 10px RGB(0 0 0 / 30%);
    }

    .has-action-shadow {
        box-shadow: 0 18px 20px -15px RGB(0 0 0 / 40%);
    }
</style>
