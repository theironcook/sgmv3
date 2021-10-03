<template>
    <aside class="menu">
        <ul class="menu-list">
            <li>
                <a>Account Management</a>
                <ul>
                    <li><a>Invite Team Members</a></li>
                </ul>
            </li>
        </ul>

        <ul class="menu-list">
            <li>
                <a>Product Documentation</a>
                <ul>
                    <li><a>SaaSGlue Framework Overview</a></li>
                    <li><a>The Structure of Jobs</a></li>
                    <li><a>Job Definition</a></li>
                    <li><a>Task Definition</a></li>
                    <li><a>Step Definition</a></li>
                    <li><a>Script Definition</a></li>
                    <li><a>Script Injection</a></li>
                    <li><a>Runtime Variables</a></li>
                    <li><a>Job Schedule</a></li>
                    <li><a>Service Tasks</a></li>
                </ul>
            </li>
        </ul>

        <ul class="menu-list">
            <li>
                <a>Endpoint / Object Reference</a>
                <ul>
                    <li><a>Agent</a></li>
                    <li><a>Artifact</a></li>
                    <li><a>Job</a></li> 
                    <li><a>JobDef</a></li>
                    <li><a>Schedule</a></li>
                    <li><a>Script</a></li>
                    <li><a>Step</a></li>
                    <li><a>StepDef</a></li>
                    <li><a>StepOutcome</a></li>
                    <li><a>Task</a></li>
                    <li><a>TaskDef</a></li>
                    <li><a>TaskOutcome</a></li>
                    <li><a>TeamVariable</a></li>
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
