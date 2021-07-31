<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column has-text-left">
                    <h1 class="title is-2 is-spaced has-text-weight-semibold has-text-grey-darker">
                        Insanely <span class="deepskyblue">Flexible</span> <br />
                        Data <span class="deepskyblue">Pipelines</span>
                    </h1>
                    <h2 class="subtitle is-5 has-text-weight-medium has-text-grey">SaaSGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure.</h2>
                    <div class="buttons">
                        <button class="button is-info">Get Started</button>
                    </div>
                </div>
                <div class="column has-text-right">
                    <iframe class="intro-video" width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </section>
    <section class="section has-background-info-light">
        <div class="container">
            <div class="columns">
                <div class="column pb-6">
                    <h2 class="title is-2 has-text-weight-normal">Cloud based workflow manager</h2>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="/integration.svg" width="180" height="165" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="/orchestration.svg" width="210" height="160" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="/automation.svg" width="190" height="160" />
                    </figure>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <h2 class="title has-text-weight-normal">Integration</h2>
                    <p>Run code on any device in any network permitting outgoing HTTPS</p>
                    <p>Run scripts and compiled code in any language</p>
                    <p>Run Function-as-a-Service code in the cloud</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-weight-normal">Orchestration</h2>
                    <p>Create multi-step jobs with conditional path routing</p>
                    <p>Run jobs in multi-cloud and hybrid-cloud environments</p>
                    <p>Centrally monitor distributed jobs</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-weight-normal">Automation</h2>
                    <p>Start jobs from a schedule, with the API or from the web console</p>
                    <p>Pass variables between tasks in multi-language jobs</p>
                    <p>Import and centralize your cron jobs</p>
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

    .intro-video {
        border-radius: 5px;
    }
</style>
