<template>
    <nav :class="{'has-shadow': hasScrollOffset}" class="navbar is-transparent" role="navigation" aria-label="main navigation">
        <div class="container py-2">
            <div class="navbar-brand">
                <a class="navbar-item" href="/">
                    <img src="/logo.png" alt="SaaSGlue logo" width="180" height="30">
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a href="#" class="navbar-item">Getting started</a>
                    <a href="#" class="navbar-item">Docs</a>
                    <a href="#" class="navbar-item">Pricing</a>
                    <a href="#" class="navbar-item">Blog</a>
                </div>
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-ghost">Log in</a>
                            <a class="button is-primary">
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
    import { Options, Vue } from 'vue-class-component';

    @Options({})
    export default class Navbar extends Vue {
        private hasScrollOffset: boolean = false;

        public created (): void {
            document.addEventListener('scroll', this.onScroll);
        }

        private onScroll (): void {
            this.hasScrollOffset = document.documentElement.scrollTop > 60;
        }

        public destroyed (): void {
            document.removeEventListener('scroll', this.onScroll);
        }
    }
</script>

<style scoped lang="scss">
    .navbar {
        position: sticky;
        top: 0;
        transition: box-shadow .3s linear;
    }

    .navbar-item {
        text-transform: uppercase;
    }

    .navbar.has-shadow {
        box-shadow: 0 0 10px RGB(0 0 0 / 30%);
    }
</style>
