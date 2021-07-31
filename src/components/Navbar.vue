<template>
    <div class="section">
        <div class="container">
            <nav :class="{'has-shadow': hasScrollOffset}" class="navbar is-white" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="/logo.png" width="180" height="30">
                    </a>
                </div>
                <div class="navbar-menu">
                    <div class="navbar-start">
                        <a class="navbar-item">Getting started</a>
                        <a class="navbar-item">Docs</a>
                        <a class="navbar-item">Pricing</a>
                        <a class="navbar-item">Blog</a>
                    </div>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a class="button is-light">Log in</a>
                                <a class="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
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
</style>
