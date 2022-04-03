<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column">
                    <h2 class="title is-size-2-desktop has-text-centered is-size-4-touch mb-5">Our Pricing</h2>
                </div>
            </div>
            <div class="columns is-centered pricing-columns">
                <div class="column is-narrow-desktop">
                    <div class="box content has-border-primary">
                        <header>
                            <h5>Free</h5>
                        </header>
                        <p class="has-text-weight-bold is-align-items-center is-flex is-justify-content-center">
                            <span class="pr-1">$</span>
                            <span class="is-size-1">0</span>
                        </p>
                        <a href="https://console.saasglue.com/" class="button is-fullwidth is-primary is-outlined has-text-weight-bold">GET STARTED</a>
                        <div class="has-text-left my-5 is-flex is-flex-direction-column">
                            <p class="icon-text is-flex is-align-items-center is-flex-wrap-nowrap">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Run unlimited scripts from the web console</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Create unlimited agents</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Store unlimited scripts</span>
                            </p>
                            <p class="icon-text has-text-grey-lighter">
                                <span class="icon mr-2">
                                    <img class="has-icon-muted" src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Create unlimited jobs</span>
                            </p>
                            <p class="icon-text has-text-grey-lighter">
                                <span class="icon mr-2">
                                    <img class="has-icon-muted" src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Schedule jobs</span>
                            </p>
                            <p class="icon-text has-text-grey-lighter">
                                <span class="icon mr-2">
                                    <img class="has-icon-muted" src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Launch jobs through the API</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="column is-narrow-desktop">
                    <div class="box content has-border-primary">
                        <header>
                            <h5>Standard</h5>
                        </header>
                        <p class="has-text-weight-bold is-align-items-center is-flex is-justify-content-center">
                            <span class="pr-1">$</span>
                            <span class="is-size-1">0.01</span>
                            <span class="pt-5">/script</span>
                        </p>
                        <a href="https://console.saasglue.com/" class="button is-fullwidth is-primary has-text-weight-bold">GET STARTED</a>
                        <div class="has-text-left my-5 is-flex is-flex-direction-column">
                            <p class="icon-text is-flex is-align-items-center is-flex-wrap-nowrap">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Run unlimited scripts from the web console</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Create unlimited agents</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Store unlimited scripts</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Create unlimited jobs</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Schedule jobs</span>
                            </p>
                            <p class="icon-text">
                                <span class="icon mr-2">
                                    <img src="@/assets/images/checkmark.svg" />
                                </span>
                                <span>Launch jobs through the API</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Pricing'
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .has-icon-muted {
        filter: grayscale(1);
        opacity: .3;
    }

    .has-border-primary {
        border: 1px solid deepskyblue;
    }

    @include tablet {
        .pricing-columns .column:first-child {
            margin-right: 2rem;
        }
    }
</style>
