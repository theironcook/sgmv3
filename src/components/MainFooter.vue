<template>
    <footer class="footer pb-0 has-background-blue-light">
        <div class="container">
            <div class="columns content">
                <div class="column is-5 has-text-left">
                    <h5 class="is-uppercase has-text-weight-bold">Recent posts</h5>
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
                <div class="column is-2 is-offset-1 has-text-left">
                    <h5 class="is-uppercase has-text-weight-bold">Developers</h5>
                    <p><a href="#">Docs</a></p>
                    <p><a href="#">Getting Started</a></p>
                    <p><a href="#">Community</a></p>
                </div>
                <div class="column is-2 has-text-left">
                    <h5 class="is-uppercase has-text-weight-bold">Quick Links</h5>
                    <p><a href="#">Log In</a></p>
                    <p><a href="#">Sign Up</a></p>
                    <p><a href="#">Reset password</a></p>
                    <p><a href="#">Blog</a></p>
                    <p><a href="#">Pricing</a></p>
                </div>
                <div class="column is-2 has-text-left">
                    <h5 class="is-uppercase has-text-weight-bold">Contact us</h5>
                    <p><a href="mailto:info@saasglue.com">info@saasglue.com</a></p>
                    <p><a href="mailto:help@saasglue.com">help@saasglue.com</a></p>
                </div>
            </div>
            <div class="columns is-vcentered py-3">
                <div class="column is-4 has-text-left">
                    <img src="@/assets/images/logo.png" alt="SaaSGlue logo" width="180" height="30">
                </div>
                <div class="column is-4 is-offset-2 has-text-left">
                    <span class="pr-3"><a href="#">Privacy Policy</a></span>
                    <span class="pr-3"><a href="#">Terms of Use</a></span>
                    <p class="pr-3">Copyright © {{ new Date().getFullYear() }} SaaSGlue LLC</p>
                </div>
                <div class="column is-2">
                    <div class="level">
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
    .has-line-clamp {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
    }
</style>
