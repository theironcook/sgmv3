<template>
    <section class="section">
        <div class="container content">
            <h1 class="title has-text-centered">Latest blogs, tutorials, podcasts, meetups etc.</h1>
            <div class="columns">
                <div class="column is-6">
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://medium.com/@rich_81505/a-better-kubernetes-job-scheduler-ef99c09f5dd">A Better Kubernetes Job Scheduler</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2022-10-29">October 29, 2022</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://blog.devops.dev/scale-your-streaming-data-pipelines-efficiently-with-kubernetes-part-2-3e2bc8889eac">Scale your streaming data pipelines efficiently with kubernetes - Part 2</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2022-7-8">July 8, 2022</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://blog.devops.dev/scale-your-streaming-data-pipelines-efficiently-with-kubernetes-part-1-ab818be6ebd">Scale your streaming data pipelines efficiently with kubernetes - Part 1</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2022-4-23">April 23, 2022</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://medium.com/@rich_81505/minimize-the-cost-of-your-aws-batch-data-pipelines-with-severless-and-ephemeral-compute-7dc883836f9c">Minimize the cost of your AWS batch data pipelines with serverless and ephemeral compute</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2022-1-22">January 22, 2022</time>
                        </footer>
                    </div>
                </div>

                <div class="column is-6">
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://medium.com/@rich_81505/build-a-hybrid-cloud-data-pipeline-in-minutes-43261d07c8a9">How to build a twitter analyzer with a hybrid cloud data pipeline and a single page web app</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-7-17">July 17, 2021</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://www.dataengineeringpodcast.com/saasglue-cloud-workflow-manager-episode-201/">Podcast - Stick All Of Your Systems And Data Together With SaaSGlue As Your Workflow Manager - Episode 201</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-6-5">July 5, 2021</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://jack-wood.medium.com/architectures-of-pipeline-automation-tools-compared-3b3e6e9768db">Blog - Architectures of Pipeline Automation Tools Compared</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-6-30">June 30, 2021</time>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'News'
    });
</script>

<style scoped lang="scss">
    .card {
        border-left: 10px solid deepskyblue;
    }
</style>
