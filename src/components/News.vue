<template>
    <section class="section">
        <div class="container content">
            <h1 class="title has-text-centered">Latest blogs, tutorials, podcasts, meetups etc.</h1>
            <div class="columns">
                <div class="column is-6">
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://www.saasglue.com/workshop">Workshop - Creating cross-cloud data pipelines</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-9-21">September 21st and 28th, 6pm MDT 2021</time>
                        </footer>
                    </div>
                    <div class="card mb-3">
                        <div class="card-content">
                            <a target="_blank" href="https://jack-wood.medium.com/architectures-of-pipeline-automation-tools-compared-3b3e6e9768db">Blog - Architectures of Pipeline Automation Tools Compared</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-5-30">June 30, 2021</time>
                        </footer>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <a target="_blank" href="https://www.meetup.com/DevOpsUT/events/278127038/">Utah Devops Workshop - Day 1: Kubernetes Online Workshop</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-5-9">June 9, 2021</time>
                        </footer>
                    </div>
                </div>

                <div class="column is-6">
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
                            <a target="_blank" href="https://www.meetup.com/DevOpsUT/events/wfzmlryccjbmb/">Utah Devops Workshop - Day 2: Kubernetes Online Workshop</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-5-16">June 16, 2021</time>
                        </footer>
                    </div>
                    <div class="card">
                        <div class="card-content">
                            <a target="_blank" href="https://www.meetup.com/DevOpsUT/events/wfzmlryccgbsb/">Utah Devops Meetup - Learn how to deploy a single-page webapp onto a Kubernetes cluster in AWS</a>
                        </div>
                        <footer class="card-footer p-2">
                            <img src="@/assets/images/calendar-icon.svg" class="mr-2" width="24" />
                            <time datetime="2021-4-14">April 14, 2021</time>
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
