<template>
    <footer class="footer pb-0 has-background-blue-light">
        <div class="container">
            <div class="columns is-multiline content has-text-right-desktop has-text-centered-touch">
                <div class="column is-5-desktop is-full-touch has-text-left-desktop">
                    <h5 class="is-uppercase has-text-weight-bold has-text-centered-touch">Recent posts</h5>
                    <div class="block">
                        <h6><a href="#">Recent post title 1</a></h6>
                        <p class="has-line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit animi tenetur quas</p>
                    </div>
                    <div class="block">
                        <h6><a href="#">Recent post title 2</a></h6>
                        <p class="has-line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit animi tenetur quas</p>
                    </div>
                    <div class="block">
                        <h6><a href="#">Recent post title 3</a></h6>
                        <p class="has-line-clamp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint suscipit animi tenetur quas</p>
                    </div>
                </div>
                <div class="column">
                    <h5 class="is-uppercase has-text-weight-bold">Developers</h5>
                    <p><router-link to="/docs">Docs</router-link></p>
                    <p><a href="#">Solutions</a></p>
                </div>
                <div class="column">
                    <h5 class="is-uppercase has-text-weight-bold">Quick Links</h5>
                    <p><a href="https://console.saasglue.com">Sign In</a></p>
                    <p><a href="#">News</a></p>
                    <p><router-link to="/pricing">Pricing</router-link></p>
                </div>
                <div class="column">
                    <h5 class="is-uppercase has-text-weight-bold">Contact us</h5>
                    <p><a href="mailto:info@saasglue.com">info@saasglue.com</a></p>
                    <p><a href="mailto:help@saasglue.com">help@saasglue.com</a></p>
                </div>
            </div>
            <div class="columns is-vcentered py-3">
                <div class="column is-4 has-text-left-desktop has-text-centered-mobile">
                    <img src="@/assets/images/logo.png" alt="SaaSGlue logo" width="180" height="30">
                </div>
                <div class="column is-4 is-offset-2 has-text-left-desktop">
                    <span class="pr-3"><a href="#">Privacy Policy</a></span>
                    <span class="pr-3"><a href="#">Terms of Use</a></span>
                    <p class="pr-3">Copyright © {{ new Date().getFullYear() }} SaaSGlue LLC</p>
                </div>
                <div class="column is-2">
                    <div class="level is-mobile">
                        <div class="level-right is-flex-grow-1">
                            <div class="level-item">
                                <figure class="image is-32x32">
                                    <a href="https://www.linkedin.com/company/saasglue/">
                                        <img src="@/assets/images/linkedin-icon.svg" alt="LinkedIn" />
                                    </a>
                                </figure>
                            </div>
                            <div class="level-item">
                                <figure class="image is-32x32">
                                    <a href="https://www.youtube.com/channel/UCX8IuYTUDtAZVEszO-tiKRA">
                                        <img src="@/assets/images/youtube-icon.svg" alt="Youtube" />
                                    </a>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <nav class="navbar is-flex is-hidden-desktop is-fixed-bottom mobile-nav has-background-blue-light">
        <router-link to="/docs" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/docs1.svg" />
            <span>Docs</span>
        </router-link>
        <a href="#" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/solutions1.svg" />
            <span>Solutions</span>
        </a>
        <a href="#" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/news1.svg" />
            <span>News</span>
        </a>
        <a href="https://console.saasglue.com" class="navbar-item is-flex is-flex-grow-1 is-align-items-center is-justify-content-center">
            <img src="@/assets/images/login1.svg" />
            <span>Sign In</span>
        </a>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'MainFooter'
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .footer {
        background-color: inherit;
    }

    .has-line-clamp {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }

    .mobile-nav {
        border-top: 1px solid #ccc;

        a.navbar-item:hover {
            background-color: transparent;
        }
    }

    @include touch {
        $mobile-navbar-height: 4rem;

        .footer {
            margin-bottom: $mobile-navbar-height;
        }

        .navbar {
            height: $mobile-navbar-height;
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
