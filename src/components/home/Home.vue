<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column has-text-left">
                    <h1 class="title is-2 is-spaced has-text-weight-semibold has-text-grey-darker">
                        Integrate <span class="deepskyblue">Anything,</span>
                        <br /> Automate <span class="deepskyblue">Everything</span>
                    </h1>
                    <h2 class="subtitle is-5 has-text-weight-medium has-text-grey">SaaSGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure.</h2>
                    <div class="buttons">
                        <button class="button is-info">Get Started</button>
                    </div>
                </div>
                <div class="column">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    @Options({
        props: {
            msg: String
        }
    })
    export default class HelloWorld extends Vue {

    }
</script>

<style scoped lang="scss">
    .deepskyblue {
        color: deepskyblue;
    }

    .button.is-info {
        background-color: deepskyblue;
    }

    .subtitle {
        line-height: 26px;
    }
</style>
