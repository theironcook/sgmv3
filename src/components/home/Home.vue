<template>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <div class="column has-text-left">
                    <h1 class="title is-2 is-spaced has-text-weight-semibold has-text-grey-darker">
                        Insanely <span class="deepskyblue">Flexible</span> <br />
                        Data <span class="deepskyblue">Pipelines</span>
                    </h1>
                    <h2 class="subtitle is-5 has-text-weight-medium has-text-grey">SaaSGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure.</h2>
                    <div class="buttons">
                        <a href="" class="button is-info">Get Started</a>
                    </div>
                </div>
                <div class="column has-text-right">
                    <figure class="image is-16by9">
                        <iframe class="has-ratio intro-video" width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </figure>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-info-light">
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
    <section class="section is-medium">
        <div class="container">
            <div class="columns has-text-left mb-6">
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold">Works virtually anywhere</h3>
                    <p>When the SaaSGlue agent is installed, it immediately calls home to the cloud and establishes a regular secure heartbeat through HTTPS. The agent receives instructions from a message queue and sends results to the API.
This simple design lets the agent work on almost any network. And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries.</p>
                </div>
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold">Provides all the infrastructure</h3>
                    <p>SaaSGlue provides all the job infrastructure to Initiate, Manage, Monitor, Alert. Our lightweight agent is self-updating, placing very little management burden on you.
                        SaaSGlue takes care of the automation infrastructure and lets you focus on your code.
                    </p>
                </div>
                <!-- <div class="column">
                    <h3 class="subtitle">Works with any language</h3>
                    <p>Our design conforms to the “dumb pipes, smart endpoints” principle. The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine.
Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment.
SaaSGlue’s runtime variables functionality allows you to communicate state between tasks in your job. This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.</p>
                </div> -->
            </div>
            <div class="columns has-text-left">
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold">Integrates with other solutions</h3>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.
Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                </div>
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold">Scalable platform</h3>
                    <p>SaaSGlue scales horizontally to handle enterprise workloads.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-info-light">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left">
                    <h2 class="subtitle is-2 has-text-weight-semibold has-text-right">The <span class="deepskyblue">innovation</span> twist</h2>
                    <p>Other platforms adapt external tools to themselves by wrapping them in layers of abstraction. Each new tool requires another layer in order to be accessible to the platform. For example many automation platforms have domain specific languages used to encode desired state instructions. These abstractions tend to leak over time and require imperative solutions to fill the gaps.</p>
                    <p>SaaSGlue works with everything else by decoupling job management from code execution. Job designs, including code files, are stored centrally. At runtime code is delivered to the computing environment through agents, which you install on your machines.</p>
                    <p>This design gives you the freedom to access all of your compute endpoints directly without abstraction layers and with the power of centrally managed jobs.
                    Here is our rule of thumb: If you can do something from the local command prompt you can do it the same way in SaaSGlue.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left">
                    <h2 class="subtitle has-text-weight-semibold has-text-left">Integrates with other solutions</h2>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.</p>
                    <p>Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                    <div class="tools-logo-container my-6">
                        <img class="tool-logo" src="/gitlab-logo.svg" alt="Gitlab" />
                        <img class="tool-logo" src="/aws-logo.svg" alt="Amazon Web Services" />
                        <img class="tool-logo" src="/jenkins-logo.svg" alt="Jenkins" />
                        <img class="tool-logo" src="/azure-logo.svg" alt="Microsoft Azure" />
                        <img class="tool-logo" src="/ansible-logo.svg" alt="Ansible" />
                        <img class="tool-logo" src="/google-cloud-logo.svg" alt="Google Cloud" />
                        <img class="tool-logo" src="/apache-airflow-logo.svg" alt="Apache Airflow" />
                    </div>
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

    .tools-logo-container {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-gap: 1rem 5rem;
        justify-items: center;
        align-items: center;
    }
</style>
