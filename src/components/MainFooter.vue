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
                    <p><router-link to="/solutions">Solutions</router-link></p>
                </div>
                <div class="column">
                    <h5 class="is-uppercase has-text-weight-bold">Quick Links</h5>
                    <p><a href="https://console.saasglue.com">Sign In</a></p>
                    <p><router-link to="/news">News</router-link></p>
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
                <div class="column has-text-left-desktop has-text-centered-touch">
                    <span class="pr-3"><a target="_blank" href="https://www.saasglue.com/privacy-policy.html">Privacy Policy</a></span>
                    <span class="pr-3"><a target="_blank" href="https://www.saasglue.com/terms-of-service.html">Terms of Use</a></span>
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

    @include touch {
        .footer {
            margin-bottom: 4rem;
        }
    }
</style>
