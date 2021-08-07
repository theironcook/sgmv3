<template>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <transition name="fade-top" appear>
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
                </transition>
                <transition name="fade-right" appear>
                    <div class="column has-text-right">
                        <figure class="image is-16by9">
                            <iframe class="has-ratio intro-video" width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                    </div>
                </transition>
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
            <div class="columns is-size-5 has-text-left">
                <div class="column">
                    <h2 class="title has-text-centered has-text-weight-normal">Integration</h2>
                    <p>Run code on any device in any network permitting outgoing HTTPS</p>
                    <p>Run scripts and compiled code in any language</p>
                    <p>Run Function-as-a-Service code in the cloud</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-centered has-text-weight-normal">Orchestration</h2>
                    <p>Create multi-step jobs with conditional path routing</p>
                    <p>Run jobs in multi-cloud and hybrid-cloud environments</p>
                    <p>Centrally monitor distributed jobs</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-centered has-text-weight-normal">Automation</h2>
                    <p>Start jobs from a schedule, with the API or from the web console</p>
                    <p>Pass variables between tasks in multi-language jobs</p>
                    <p>Import and centralize your cron jobs</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="container is-size-5">
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
                <div class="column content has-text-left is-size-5">
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
                <div class="column content has-text-left is-size-5">
                    <h2 class="subtitle is-2 has-text-weight-semibold has-text-left">Integrates with other solutions</h2>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.</p>
                    <p>Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                    <div class="tools-logo-container my-6">
                        <a href="https://about.gitlab.com/">
                            <img class="tool-logo" src="/gitlab-logo.svg" alt="Gitlab" />
                        </a>
                        <a href="https://aws.amazon.com/">
                            <img class="tool-logo is-width-50" src="/aws-logo.svg" alt="Amazon Web Services" />
                        </a>
                        <a href="https://www.jenkins.io/">
                            <img class="tool-logo" src="/jenkins-logo.svg" alt="Jenkins" />
                        </a>
                        <a href="https://azure.microsoft.com/">
                            <img class="tool-logo" src="/azure-logo.svg" alt="Microsoft Azure" />
                        </a>
                        <a href="https://www.ansible.com/">
                            <img class="tool-logo" src="/ansible-logo.svg" alt="Ansible" />
                        </a>
                        <a href="https://cloud.google.com/">
                            <img class="tool-logo" src="/google-cloud-logo.svg" alt="Google Cloud" />
                        </a>
                        <a href="https://airflow.apache.org/">
                            <img class="tool-logo" src="/apache-airflow-logo.svg" alt="Apache Airflow" />
                        </a>
                        <a href="https://www.chef.io/">
                            <img class="tool-logo is-width-50" src="/chef-logo.svg" alt="Chef" />
                        </a>
                        <a href="https://puppet.com/">
                            <img class="tool-logo" src="/puppet-logo.svg" alt="Puppet" />
                        </a>
                        <a href="https://www.terraform.io/">
                            <img class="tool-logo is-width-50" src="/terraform-logo.svg" alt="Terraform" />
                        </a>
                        <a href="https://www.prefect.io/">
                            <img class="tool-logo is-width-50" src="/prefect-logo.svg" alt="Prefect" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-info-light">
        <div class="container">
            <div class="content has-text-left is-size-5">
                <h2 class="subtitle is-2 has-text-weight-semibold">Works with any language</h2>
                <p>Our design conforms to the “dumb pipes, smart endpoints” principle. The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine.</p>
                <p>Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment.</p>
                <p>SaaSGlue’s runtime variables functionality allows you to communicate state between tasks in your job. This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.</p>
            </div>
            <div class="tags are-large">
                <span class="tag is-rounded is-info">JavaScript</span>
                <span class="tag is-rounded is-info">Two</span>
                <span class="tag is-rounded is-info">Three</span>
                <span class="tag is-rounded is-info">Four</span>
                <span class="tag is-rounded is-info">Five</span>
                <span class="tag is-rounded is-info">Six</span>
                <span class="tag is-rounded is-info">Seven</span>
                <span class="tag is-rounded is-info">Eight</span>
                <span class="tag is-rounded is-info">Nine</span>
                <span class="tag is-rounded is-info">Ten</span>
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
    export default class Home extends Vue {

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

    .tool-logo {
        width: 100%;
        height: 100%;
        transition: filter .3s linear;
        filter: grayscale(1) opacity(.5);

        &:hover {
            filter: grayscale(0) opacity(1);
        }
    }

    .is-width-50 {
        width: 50%;
    }

    .fade-right-enter-active {
        transition: transform 1s ease-out, opacity 1s ease-out;
        transform: translateX(10%);
        opacity: 0;
    }

    .fade-right-enter-to {
        transform: translateX(0);
        opacity: 1;
    }

    .fade-top-enter-active {
        transition: transform .3s ease-out, opacity .3s ease-out;
        transform: translateY(-10%);
        opacity: 0;
    }

    .fade-top-enter-to {
        transform: translateY(0);
        opacity: 1;
    }
</style>
