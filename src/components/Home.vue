<template>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <transition name="fade-top" appear>
                    <div class="tagline-container column has-text-left">
                        <h1 class="title is-size-3-desktop is-size-4-touch is-spaced has-text-weight-semibold has-text-grey-darker">
                            <span class="title-shift">SaaS <span class="has-text-deepskyblue">Based</span></span> <br />
                            <span class="is-inline-block">Scheduling <span class="has-text-deepskyblue">Platform</span></span>
                        </h1>
                        <h2 class="subtitle is-size-5-desktop is-size-6-touch has-text-weight-medium has-text-grey">A SaaS-based job scheduling platform that you can use to schedule single scripts and multi-step jobs in hybrid and multi-cloud environments.  It provides greater flexibility compared to hosted and ad hoc automation tools.</h2>
                        <div class="buttons">
                            <a href="https://console.saasglue.com/" class="button is-primary has-action-shadow hax-text-weight-bold">GET STARTED</a>
                        </div>
                    </div>
                </transition>
                <transition name="fade-right" appear>
                    <div class="column has-text-right">
                        <figure>
                            <div class="image is-16by9 has-background-placeholder has-border-radius-5">
                                <iframe class="has-ratio has-border-radius-5" width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                            <figcaption class="has-text-centered">How SaaSGlue can help you make insanely flexible data pipelines</figcaption>
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
                    <h2 class="title is-size-2-desktop is-size-4-touch has-text-weight-normal has-text-white has-text-centered">SaaS based workflow manager</h2>
                </div>
            </div>
            <div class="columns is-size-5-desktop is-size-6-touch has-text-centered">
                <div class="column">
                    <figure class="image is-3by1">
                        <img src="@/assets/images/integration.svg" width="180" height="165" />
                    </figure>
                    <h2 class="py-2 title has-text-centered has-text-white">Integration</h2>
                    <div class="is-inline-block has-text-left-touch has-text-centered">
                        <p>Run scripts and compiled code in any language</p>
                        <p>Run code on prem and in the cloud</p>
                        <p>Run code in AWS Lambda easily</p>
                    </div>
                </div>
                <div class="column">
                    <figure class="image is-3by1">
                        <img src="@/assets/images/orchestration.svg" width="210" height="160" />
                    </figure>
                    <h2 class="py-2 title has-text-centered has-text-white">Orchestration</h2>
                    <div class="is-inline-block has-text-left-touch has-text-centered">
                        <p>Centrally monitor distributed jobs</p>
                        <p>Run jobs in multi-cloud and hybrid-cloud environments</p>
                        <p>Create powerful multi-step workflows</p>
                    </div>
                </div>
                <div class="column">
                    <figure class="image is-3by1">
                        <img src="@/assets/images/automation.svg" width="150" />
                    </figure>
                    <h2 class="py-2 title has-text-centered has-text-white">Automation</h2>
                    <div class="is-inline-block has-text-left-touch has-text-centered">
                        <p>Start jobs from a schedule, with the API or from the web console</p>
                        <p>Pass variables between tasks in multi-language jobs</p>
                        <p>Import and centralize your cron jobs</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="container is-size-5-desktop is-size-6-mobile">
            <div class="columns is-multiline has-text-left">
                <div class="column is-half">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-world.svg" />
                        </figure>
                        <span class="is-flex-shrink-0">Works virtually anywhere</span>
                    </h3>
                    <p>When a SaaSGlue agent is installed, it securely connects to the SaaSGlue cloud. The agent securely recieves and executes your custom instructions.
This simple design lets the agent work on almost any network. And since agents talk only to the cloud, your job can hop from one network to another without regard to network boundaries.</p>
                </div>
                <div class="column is-half">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-serverandpcs.svg" />
                        </figure>
                        <span class="is-flex-shrink-0">Provides all the infrastructure</span>
                    </h3>
                    <p>SaaSGlue provides all the job infrastructure to manage, monitor and alert. Our lightweight agent is self-updating, placing very little management burden on you.
                        SaaSGlue takes care of the automation infrastructure and lets you focus on your code.
                    </p>
                </div>
                <div class="column is-half">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-plugs.svg" />
                        </figure>
                        <span class="is-flex-shrink-0">Integrates with other solutions</span>
                    </h3>
                    <p>All SaaSGlue functionality can be invoked via the SaaSGlue API. This makes it simple to invoke SaaSGlue jobs from third party or custom applications. And since you can execute any code in any environment with SaaSGlue, you can also leverage your existing tools like Jenkins or AirFlow in SaaSGlue jobs.</p>
                </div>
                <div class="column is-half">
                    <h3 class="subtitle has-text-weight-semibold is-flex is-align-items-center is-justify-content-center">
                        <figure class="image is-48x48 mr-4">
                            <img src="@/assets/images/network-icon-servers.svg" />
                        </figure>
                        <span class="is-flex-shrink-0">Scalable platform</span>
                    </h3>
                    <p>SaaSGlue architecture scales horizontally to handle enterprise workloads at any scale.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="section has-background-deepskyblue has-text-white">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left is-size-5-desktop is-size-6-touch">
                    <h2 class="subtitle is-size-2-desktop is-size-4-touch has-text-weight-semibold has-text-right">The <span class="has-text-white">innovation</span> twist</h2>
                    <p>Typical automation platforms wrap external tools in layers of abstraction.
                        <br><br>
                        For example, platforms like Jenkins, Airflow and others enable access to external tools via a plugin architecture.
                        If the platform doesn't have a plugin for a tool or there's a version or functionality mismatch,
                        then the tool is inaccessible to the platform.
                        It's usually time prohibitive for developers to create or update plugins in the framework.

                        <br><br>
                        SaaSGlue doesn't constrain developers by wrapping external tools with layers of abstraction like plugins.
                        If something can be scripted from the command line you can run it with SaaSGlue. This includes any custom logic
                        or driving tools like Jenkins, Airflow and others.
                    </p>
                    <p>SaaSGlue decouples job management from code execution. Job designs, including code files, are stored centrally.
                        At runtime code is delivered to the computing environment through secure agents, which you install on your machines.
                        Your code can also be executed without an agent in a serverless environment managed by SaaSGlue in AWS Lambda.</p>

                    <figure class="image is-hidden-mobile">
                        <img class="is-width-75" src="@/assets/images/innovation-twist.svg" alt="SaaSGlue workflow" />
                    </figure>
                </div>
            </div>
        </div>
    </section>
    <section class="section">
        <div class="container">
            <div class="columns is-size-5-desktop is-size-6-touch has-text-centered">
                <div class="column">
                    <figure>
                        <div class="image is-16by9">
                            <iframe class="has-ratio has-border-radius-5" width="560" height="315" src="https://www.youtube.com/embed/Ti3bx2LwtnI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </figure>
                    <h3 class="mt-5">Creating Stateful Pipelines with SaaSGlue</h3>
                </div>
                <div class="column">
                    <figure>
                        <div class="image is-16by9">
                            <iframe class="has-ratio has-border-radius-5" width="560" height="315" src="https://www.youtube.com/embed/cAwL_0yc-6g?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </figure>
                    <h3 class="mt-5">Creating Dynamically Routing Data Pipelines with SaaSGlue</h3>
                </div>
                <div class="column">
                    <figure>
                        <div class="image is-16by9">
                            <iframe class="has-ratio has-border-radius-5" width="560" height="315" src="https://www.youtube.com/embed/wMdOreB11oI?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </figure>
                    <h3 class="mt-5">The Cloud based Data Engineering Platform</h3>
                </div>
            </div>
        </div>
    </section>
    <section class="section is-medium">
        <div class="container">
            <div class="columns">
                <div class="column content has-text-left is-size-5-desktop is-size-6-touch">
                    <h2 class="subtitle is-size-2-desktop is-size-4-touch has-text-weight-semibold has-text-left">Integrates with other solutions</h2>
                    <p>Using secure credentials you can invoke jobs through the SaaSGlue API from any platform. SaaSGlue jobs can be designed to call back to any of your automation platforms, maintaining a cross-platform process thread. Because SaaSGlue works with anything you can augment your current solutions without having to rip and replace anything.</p>
                    <div class="columns is-mobile is-multiline is-centered has-text-centered mt-6">
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://about.gitlab.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/gitlab-logo.svg" alt="Gitlab" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://aws.amazon.com/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/aws-logo.svg" alt="Amazon Web Services" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://www.jenkins.io/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/jenkins-logo.svg" alt="Jenkins" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://azure.microsoft.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/azure-logo.svg" alt="Microsoft Azure" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://www.ansible.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/ansible-logo.svg" alt="Ansible" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://cloud.google.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/google-cloud-logo.svg" alt="Google Cloud" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://airflow.apache.org/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/apache-airflow-logo.svg" alt="Apache Airflow" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://www.chef.io/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/chef-logo.svg" alt="Chef" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://puppet.com/" target="_blank">
                                <img class="tool-logo" src="@/assets/images/puppet-logo.svg" alt="Puppet" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://www.terraform.io/" target="_blank">
                                <img class="tool-logo is-width-50" src="@/assets/images/terraform-logo.svg" alt="Terraform" />
                            </a>
                        </div>
                        <div class="column is-one-fifth-tablet is-half-mobile">
                            <a class="tool-link is-flex is-align-items-center is-justify-content-center" href="https://www.prefect.io/" target="_blank">
                                <img class="tool-logo prefect-logo" src="@/assets/images/prefect-logo.svg" alt="Prefect" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section has-background-deepskyblue has-text-white is-medium">
        <div class="container">
            <div class="content has-text-left is-size-5-desktop is-size-6-touch">
                <h2 class="subtitle is-size-2-desktop is-size-4-touch has-text-weight-semibold">Works with <span class="has-text-white">any</span> language</h2>
                <p>Our design conforms to the “dumb pipes, smart endpoints” principle. The agent doesn’t execute code, so you can use any programming language as long as a corresponding interpreter exists on the agent host machine.</p>
                <p>Agents assist with execution by passing in variables, arguments and artifacts to the runtime environment.</p>
                <p>SaaSGlue’s runtime variables functionality allows you to communicate state between tasks in your job. This is true even in polyglot jobs where the preceding and succeeding tasks are written in different languages.</p>
            </div>
            <div class="tags">
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Python</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Javascript</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Shell</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Bat</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Ruby</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Lua</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Perl</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Php</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Powershell</span>
                <span class="tag is-size-5-desktop is-size-6-touch is-rounded">Any Other Language</span>
            </div>
        </div>
    </section>

    <Pricing />

    <section class="section is-medium">
        <div class="container">
            <div class="box sign-up-box has-text-white p-6">
                <div class="columns is-align-items-flex-start has-text-left-tablet has-text-centered-mobile">
                    <div class="column content m-0">
                        <h2 class="subtitle is-size-3-desktop is-size-5-touch has-text-weight-semibold">Try <span class="has-text-white">SaaSGlue</span> today</h2>
                        <p class="is-size-4-desktop is-size-6-touch">You can get started in as little as five minutes and running scripts from the cloud console is free.</p>
                    </div>
                    <div class="column is-5 is-offset-1">
                        <div class="field is-grouped try-today-controls">
                            <p class="control is-expanded input-control">
                                <input class="input" type="email" placeholder="Enter your email...">
                            </p>
                            <p class="control">
                                <button class="button is-primary has-border-white has-action-shadow has-text-weight-bold">CONTINUE</button>
                            </p>
                        </div>
                        <p class="is-size-4-desktop is-size-6-touch"><span class="has-text-black">Free</span> to get started</p>
                        <p class="is-size-4-desktop is-size-6-touch">No credit card needed</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Pricing from './Pricing.vue';

    export default defineComponent({
        name: 'Home',
        components: { Pricing }
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .has-background-deepskyblue {
        background: linear-gradient(to right, #3a7bd5, #00d2ff);
        padding-bottom: 7rem;
        padding-top: 7rem;
        transform: skewY(-7deg);

        .container {
            transform: skewY(7deg);
        }
    }

    .has-action-shadow {
        box-shadow: 0 18px 20px -15px RGB(0 0 0 / 40%);
    }

    .subtitle {
        line-height: 26px;
    }

    .has-border-radius-5 {
        border-radius: 5px;
    }

    .tagline-container {
        .title {
            letter-spacing: 5px;
        }

        .title-shift {
            margin-left: 116px;
        }
    }

    .is-width-50 {
        width: 50%;
    }

    .is-width-75 {
        width: 75%;
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

    .is-primary.has-border-white {
        border: 1px solid #fff;
    }

    .tool-link {
        width: 100%;
        height: 100%;
    }

    @include desktop {
        .tool-logo {
            transition: filter .3s linear;
            filter: grayscale(1) opacity(.5);

            &:hover {
                filter: grayscale(0) opacity(1);
            }
        }
    }

    @include touch {
        .tagline-container .title-shift {
            margin-left: 95px;
        }
    }

    @include mobile {
        .tagline-container .buttons {
            justify-content: center;
        }

        .field.try-today-controls {
            flex-direction: column;

            .control.input-control {
                margin: 0 0 1rem 0;
            }
        }
    }

    // 00BFFF deep sky blue
    // CCE8F3 medium blue
    // #EDFAFF page light blue
    // 8D8D8D .5 (border color)
    // ABA5A5 lighter border color
    // D9D1D1    (inner whitish color)
</style>
