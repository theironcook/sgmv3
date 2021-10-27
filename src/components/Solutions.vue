<template>
    <section class="section">
        <div class="container content">
            <div class="columns">
                <div class="column is-3 is-offset-1">
                    <h2 class="sticky has-text-right">Cron Jobs</h2>
                </div>
                <article class="column is-7 px-5">
                    <h1 class="title is-size-4">A SaaS platform to centrally manage all your cron jobs, regardless of where they run</h1>
                    <p>SaaSGlue is a low cost cron alternative with no sign up fee and no minimum monthly fees. It lets you centrally schedule and manage your existing jobs from a cloud console. With SaaSGlue you’ll be able to go beyond cron limitations to manage job dependencies, failover tasks between machines and review the audit logs for all your jobs in a single location.</p>

                    <h2 class="subtitle is-size-5">Centrally manage and audit all your cron jobs</h2>
                    <p>See all your cron jobs in a single web console. Review completed jobs, including the scripts that ran and their output. Verify when future jobs are scheduled to run. Read the standard error output of failed jobs and get notifications when they fail.</p>

                    <h2 class="subtitle is-size-5">Manage dependencies between scripts</h2>
                    <p>Combine related scripts into a single job and let SaaSGlue verify that preceding tasks complete before subsequent tasks are kicked off. Create conditional dependencies that execute subsequent tasks only when certain criteria are met in the preceding tasks.</p>

                    <h2 class="subtitle is-size-5">Reduced the number of failed jobs</h2>
                    <p>Because scripts are stored in the cloud and delivered to agents at runtime you can pool agents together to failover between agents when the first one is unavailable to run a job.</p>

                    <h2 class="subtitle is-size-5">Run jobs in any network or cloud service</h2>
                    <p>Agents securely connect to the SaaSGlue cloud and subscribe to a message queue to receive tasks. This simple, secure design lets you run jobs in corporate data centers, private clouds and public clouds.</p>

                    <h2 class="subtitle is-size-5">Centrally manage your scripts</h2>
                    <p>Gather all your scripts from the distributed servers where they are stored and manage them in a central location. See when a script is updated and who made the update.</p>

                    <h2 class="subtitle is-size-5">Automatically upload cron jobs</h2>
                    <p>The SaasGlue agent looks for cron jobs on the host machine once it is installed and offers to upload them to the cloud for you.</p>

                    <h2 class="subtitle is-size-5">Stand up your SaaSGlue solution in minutes</h2>
                    <p>Creating an account is easy and installing the agent takes minutes. Best of all, there is no server to install and manage. Once your cron jobs are uploaded you can turn off the local cron jobs and run them all from the cloud.</p>

                    <h2 class="subtitle is-size-5">Get started for FREE</h2>
                    <p>There is no up-front cost to get started. Running ad hoc scripts from the console is free. You pay only for the scripts you run in a job with no monthly service charge.</p>
                </article>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Solutions'
    });
</script>

<style scoped lang="scss">
    .sticky {
        color: deepskyblue;
        position: sticky;
        top: 7.5rem;
    }

    article {
        border-right: 2px solid deepskyblue;
        border-left: 2px solid deepskyblue;
        border-radius: 5px;
    }
</style>
