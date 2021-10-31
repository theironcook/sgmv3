<template>
    <div class="cookies-banner" v-if="!cookiesAccepted">
        <div class="section py-0">
            <div class="container has-text-white py-3 is-relative">
                <div class="columns is-vcentered">
                    <div class="column is-narrow">
                        <h2 class="title is-size-4 pr-5 has-text-white">
                            <strong>This site uses cookies</strong>
                        </h2>
                    </div>
                    <div class="column">
                        <p>
                            By continuing to use our site, you understand that we use cookies to improve your experience and collect analytics data. Learn more in our
                            <a class="has-text-white has-text-weight-bold is-underlined" target="_blank" href="https://www.saasglue.com/privacy-policy.html">Privacy Policy</a>
                        </p>
                    </div>
                    <div class="column is-narrow is-flex banner-controls">
                        <button type="button" class="button" @click="onCookiesAccept">I LIKE COOKIES</button>
                        <img @click="onCookiesAccept" class="dismiss" src="@/assets/images/cross-white-icon.svg" width="24" height="24" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CookiesBanner',

        data (): { cookiesAccepted: boolean } {
            return {
                cookiesAccepted: JSON.parse(localStorage.getItem('cookiesAccepted'))
            };
        },

        methods: {
            onCookiesAccept (): void {
                this.cookiesAccepted = true;

                localStorage.setItem('cookiesAccepted', JSON.stringify(true));
            }
        }
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .cookies-banner {
        background: deepskyblue;
        position: fixed;
        z-index: 1;
        bottom: 0;
        left: 0;
        right: 0;
    }

    .title {
        border-right: 3px solid #fff;
    }

    .dismiss {
        margin-left: 15px;
        cursor: pointer;
    }

    @include touch {
        .cookies-banner {
            bottom: 4rem;
        }
    }

    @include mobile {
        .title {
            border: 0;
        }

        .dismiss {
            position: absolute;
            right: 0;
            top: 0.75rem;
        }

        .banner-controls {
            justify-content: end;
        }
    }
</style>
