<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-2 is-offset-1">
                </div>
                <div class="column is-7 px-5">
                    <h2 class="title is-size-2-desktop has-text-centered is-size-4-touch mb-5">Start free, scale effortlessly</h2>
                </div>
            </div>
        </div>
        <div class="container content mt-5">
            <div class="columns is-size-5-desktop is-size-6-mobile">
                <div class="column is-2 is-offset-1">
                </div>
                <article class="column is-7 px-5">
                    <h1 class="title is-size-4">Per script pricing</h1>
                    <p>When you sign up for SaaSGlue your first 1,000 scripts are free! After that you pay $0.01 per script.</p>

                    <h1 class="title is-size-4">Additional pricing</h1>

                    <h2 class="title is-size-5-desktop is-size-6-mobile">AWS Lambda</h2>
                    <p>You can run scripts on your own machines via the SaaSGlue Agent but if you prefer to run your scripts on AWS Lambda, we've got you covered. You pay an additional $0.0000166667 for every GB-second and $0.20 per 1M requests for scripts executed on AWS Lambda. This includes indvidual scripts executed on AWS Lambda via the web console.</p>

                    <h2 class="subtitle is-size-5-desktop is-size-6-mobile">Artifacts</h2>
                    <p>We also provide the convenience of uploading and attaching artifacts to your tasks, which are downloaded and available to your scripts at runtime. Artifacts uploaded to SaaSGlue are charged at a rate of $0.09 per GB per month, while artifacts downloaded to execute a task are charged at a rate of $0.023 per GB.</p>

                    <h2 class="subtitle is-size-5-desktop is-size-6-mobile">Try SaaSGlue Today</h2>
                    <p>At SaaSGlue, we believe in transparency and simplicity when it comes to pricing. So you can focus on what matters most - automating your software, while leaving the rest to us.</p>

                    <div class="buttons">
                        <a href="https://console.saasglue.com/" class="button is-primary has-action-shadow hax-text-weight-bold">GET STARTED</a>
                    </div>
                </article>
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
