<template>
    <aside class="menu">
        <ul class="menu-list">
            <li>
                <a href="/docs#account-management" :class="{'is-active': $route.hash === '#account-management'}">Account Management</a>
                <ul>
                    <li><a href="/docs#invite-members" :class="{'is-active': $route.hash === '#invite-members'}">Invite Team Members</a></li>
                </ul>
            </li>
        </ul>

        <ul class="menu-list">
            <li>
                <a href="/docs#product-docs" :class="{'is-active': $route.hash === '#product-docs'}">Product Documentation</a>
                <ul>
                    <li><a href="/docs#sg-overview" :class="{'is-active': $route.hash === '#sg-overview'}">SaaSGlue Framework Overview</a></li>
                    <li><a href="/docs#jobs-structure" :class="{'is-active': $route.hash === '#jobs-structure'}">The Structure of Jobs</a></li>
                    <li><a href="/docs#job-definition" :class="{'is-active': $route.hash === '#job-definition'}">Job Definition</a></li>
                    <li><a href="/docs#task-definition" :class="{'is-active': $route.hash === '#task-definition'}">Task Definition</a></li>
                    <li><a href="/docs#step-definition" :class="{'is-active': $route.hash === '#step-definition'}">Step Definition</a></li>
                    <li><a href="/docs#script-definition" :class="{'is-active': $route.hash === '#script-definition'}">Script Definition</a></li>
                    <li><a href="/docs#script-injection" :class="{'is-active': $route.hash === '#script-injection'}">Script Injection</a></li>
                    <li><a href="/docs#runtime-variables" :class="{'is-active': $route.hash === '#runtime-variables'}">Runtime Variables</a></li>
                    <li><a href="/docs#job-schedule" :class="{'is-active': $route.hash === '#job-schedule'}">Job Schedule</a></li>
                    <li><a href="/docs#service-tasks" :class="{'is-active': $route.hash === '#service-tasks'}">Service Tasks</a></li>
                </ul>
            </li>
        </ul>

        <ul class="menu-list">
            <li>
                <a href="/docs#endpoint" :class="{'is-active': $route.hash === '#endpoint'}">Endpoint / Object Reference</a>
                <ul>
                    <li><a href="/docs#agent" :class="{'is-active': $route.hash === '#agent'}">Agent</a></li>
                    <li><a href="/docs#artifact" :class="{'is-active': $route.hash === '#artifact'}">Artifact</a></li>
                    <li><a href="/docs#job" :class="{'is-active': $route.hash === '#job'}">Job</a></li>
                    <li><a href="/docs#jobdef" :class="{'is-active': $route.hash === '#jobdef'}">JobDef</a></li>
                    <li><a href="/docs#schedule" :class="{'is-active': $route.hash === '#schedule'}">Schedule</a></li>
                    <li><a href="/docs#script" :class="{'is-active': $route.hash === '#script'}">Script</a></li>
                    <li><a href="/docs#step" :class="{'is-active': $route.hash === '#step'}">Step</a></li>
                    <li><a href="/docs#stepdef" :class="{'is-active': $route.hash === '#stepdef'}">StepDef</a></li>
                    <li><a href="/docs#stepoutcome" :class="{'is-active': $route.hash === '#stepoutcome'}">StepOutcome</a></li>
                    <li><a href="/docs#task" :class="{'is-active': $route.hash === '#task'}">Task</a></li>
                    <li><a href="/docs#taskdef" :class="{'is-active': $route.hash === '#taskdef'}">TaskDef</a></li>
                    <li><a href="/docs#taskoutcome" :class="{'is-active': $route.hash === '#taskoutcome'}">TaskOutcome</a></li>
                    <li><a href="/docs#teamvariable" :class="{'is-active': $route.hash === '#teamvariable'}">TeamVariable</a></li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Menu'
    });
</script>

<style scoped lang="scss">
    .menu {
        height: calc(100vh - 7.5rem);
        top: 7.5rem;
        overflow: auto;
        position: sticky;
    }
</style>
