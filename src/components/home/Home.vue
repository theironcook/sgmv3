<template>
    <section class="section is-medium has-background-blue-light">
        <div class="container">
            <div class="columns">
                <transition name="fade-top" appear>
                    <div class="column has-text-left">
                        <h1 class="tagline title is-2 is-spaced has-text-weight-semibold has-text-grey-darker">
                            Insanely <span class="has-text-deepskyblue">Flexible</span> <br />
                            <span class="is-inline-block title-shift">Data <span class="has-text-deepskyblue">Pipelines</span></span>
                        </h1>
                        <h2 class="subtitle is-5 has-text-weight-medium has-text-grey">SaaSGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure.</h2>
                        <div class="buttons">
                            <a href="#" class="button is-success has-action-shadow">Get Started</a>
                        </div>
                    </div>
                </transition>
                <transition name="fade-right" appear>
                    <div class="column has-text-right">
                        <figure class="image is-16by9 has-background-placeholder">
                            <iframe class="has-ratio intro-video" width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </figure>
                    </div>
                </transition>
            </div>
        </div>
    </section>
    <section class="section has-background-deepskyblue">
        <div class="container has-text-white">
            <div class="columns">
                <div class="column pb-6">
                    <h2 class="title is-2 has-text-weight-normal has-text-white">Cloud based workflow manager</h2>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="@/assets/images/integration.svg" width="180" height="165" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="@/assets/images/orchestration.svg" width="210" height="160" />
                    </figure>
                </div>
                <div class="column">
                    <figure class="is-flex is-justify-content-center">
                        <img src="@/assets/images/automation.svg" width="150"  />
                    </figure>
                </div>
            </div> D9D1D1 A6A6A6
            <div class="columns is-size-5 has-text-left">
                <div class="column">
                    <h2 class="title has-text-centered has-text-black">Integration</h2>
                    <p>Run code on any device in any network permitting outgoing HTTPS</p>
                    <p>Run scripts and compiled code in any language</p>
                    <p>Run Function-as-a-Service code in the cloud</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-centered has-text-black">Orchestration</h2>
                    <p>Create multi-step jobs with conditional path routing</p>
                    <p>Run jobs in multi-cloud and hybrid-cloud environments</p>
                    <p>Centrally monitor distributed jobs</p>
                </div>
                <div class="column">
                    <h2 class="title has-text-centered has-text-black">Automation</h2>
                    <p>Start jobs from a schedule, with the API or from the web console</p>
                    <p>Pass variables between tasks in multi-language jobs</p>
                    <p>Import and centralize your cron jobs</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-blue-light">
        <div class="container is-size-5">
            <div class="columns has-text-left mb-6">
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-world.svg" />
                        </figure>
                        <span>Works virtually anywhere</span>
                    </h3>
                    <p>When the SaaSGlue agent is installed, it immediately calls home to the cloud and establishes a regular secure heartbeat through HTTPS. The agent receives instructions from a message queue and sends results to the API.
This simple design lets the agent work on almost any network. And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries.</p>
                </div>
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-serverandpcs.svg" />
                        </figure>
                        <span>Provides all the infrastructure</span>
                    </h3>
                    <p>SaaSGlue provides all the job infrastructure to Initiate, Manage, Monitor, Alert. Our lightweight agent is self-updating, placing very little management burden on you.
                        SaaSGlue takes care of the automation infrastructure and lets you focus on your code.
                    </p>
                </div>
            </div>
            <div class="columns has-text-left">
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-plugs.svg" />
                        </figure>
                        <span>Integrates with other solutions</span>
                    </h3>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.
Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                </div>
                <div class="column">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-servers.svg" />
                        </figure>
                        <span>Scalable platform</span>
                    </h3>
                    <p>SaaSGlue scales horizontally to handle enterprise workloads.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section has-background-deepskyblue has-text-white">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left is-size-5">
                    <h2 class="subtitle is-2 has-text-weight-semibold has-text-right">The <span class="has-text-white">innovation</span> twist</h2>
                    <p>Other platforms adapt external tools to themselves by wrapping them in layers of abstraction. Each new tool requires another layer in order to be accessible to the platform. For example many automation platforms have domain specific languages used to encode desired state instructions. These abstractions tend to leak over time and require imperative solutions to fill the gaps.</p>
                    <p>SaaSGlue works with everything else by decoupling job management from code execution. Job designs, including code files, are stored centrally. At runtime code is delivered to the computing environment through agents, which you install on your machines.</p>
                    <p>This design gives you the freedom to access all of your compute endpoints directly without abstraction layers and with the power of centrally managed jobs.
                    Here is our rule of thumb: If you can do something from the local command prompt you can do it the same way in SaaSGlue.</p>
                    <figure class="image">
                        <img src="@/assets/images/innovation-twist.svg" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-blue-light">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left is-size-5">
                    <h2 class="subtitle is-2 has-text-weight-semibold has-text-left">Integrates with other solutions</h2>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread.</p>
                    <p>Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                    <div class="columns is-multiline is-centered mt-6">
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://about.gitlab.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/gitlab-logo.svg" alt="Gitlab" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://aws.amazon.com/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/aws-logo.svg" alt="Amazon Web Services" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://www.jenkins.io/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/jenkins-logo.svg" alt="Jenkins" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://azure.microsoft.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/azure-logo.svg" alt="Microsoft Azure" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://www.ansible.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/ansible-logo.svg" alt="Ansible" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://cloud.google.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/google-cloud-logo.svg" alt="Google Cloud" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://airflow.apache.org/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/apache-airflow-logo.svg" alt="Apache Airflow" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://www.chef.io/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/chef-logo.svg" alt="Chef" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://puppet.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/puppet-logo.svg" alt="Puppet" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://www.terraform.io/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/terraform-logo.svg" alt="Terraform" />
                            </a>
                        </div>
                        <div class="column is-one-fifth has-text-centered is-half-mobile">
                            <a href="https://www.prefect.io/" target="_blank">
                                <img class="tool-logo prefect-logo" src="@/assets/images/prefect-logo.svg" alt="Prefect" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section has-background-deepskyblue has-text-white">
        <div class="container">
            <div class="content has-text-left is-size-5">
                <h2 class="subtitle is-2 has-text-weight-semibold">Works with <span class="has-text-white">any</span> language</h2>
                <p>Our design conforms to the “dumb pipes, smart endpoints” principle. The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine.</p>
                <p>Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment.</p>
                <p>SaaSGlue’s runtime variables functionality allows you to communicate state between tasks in your job. This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.</p>
            </div>
            <div class="tags are-large">
                <span class="tag is-rounded is-info">Python</span>
                <span class="tag is-rounded is-info">Javascript</span>
                <span class="tag is-rounded is-info">Shell</span>
                <span class="tag is-rounded is-info">Bat</span>
                <span class="tag is-rounded is-info">Ruby</span>
                <span class="tag is-rounded is-info">Lua</span>
                <span class="tag is-rounded is-info">Perl</span>
                <span class="tag is-rounded is-info">Php</span>
                <span class="tag is-rounded is-info">Powershell</span>
                <span class="tag is-rounded is-info">Any Other Language</span>
            </div>
        </div>
    </section>
    <section class="section is-medium has-background-blue-light">
        <div class="container">
            <div class="box sign-up-box has-text-white p-6">
                <div class="columns is-align-items-flex-start has-text-left">
                    <div class="column content m-0">
                        <h2 class="subtitle has-text-weight-semibold">Try <span class="has-text-white">SaaSGlue</span> today</h2>
                        <p class="is-size-4">You can get started in as little as five minutes and running scripts from the cloud console is free.</p>
                    </div>
                    <div class="column is-5 is-offset-1">
                        <div class="field is-grouped">
                            <p class="control is-expanded">
                                <input class="input" type="email" placeholder="Enter your email...">
                            </p>
                            <p class="control">
                                <button class="button is-primary has-action-shadow">Continue</button>
                            </p>
                        </div>
                        <p class="is-size-4"><span class="has-text-black">Free</span> to get started</p>
                        <p class="is-size-4">No credit card needed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <main-footer />
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import MainFooter from '@/components/MainFooter.vue';

    export default defineComponent({
        name: 'Home',
        components: { MainFooter }
    });
</script>

<style scoped lang="scss">
    .has-text-deepskyblue {
        color: deepskyblue;
    }

    .has-background-placeholder {
        background: rgb(172,158,158);
    }

    .has-background-deepskyblue {
        background-color: deepskyblue;
    }

    .has-action-shadow {
        box-shadow: 0 18px 20px -15px RGB(0 0 0 / 40%);
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

    .tool-logo {
        transition: filter .3s linear;
        filter: grayscale(1) opacity(.5);

        &:hover {
            filter: grayscale(0) opacity(1);
        }
    }

    .tagline {
        letter-spacing: 5px;
    }

    .title-shift {
        margin-left: 81px;
    }

    .is-width-50 {
        width: 50%;
    }

    .prefect-logo {
        width: 35%;
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

    .sign-up-box {
        background: linear-gradient(105deg, #2edaff, #0085ff);
        box-shadow: 0 79px 68px -47px RGB(0 0 0 / 43%);
    }
</style>
