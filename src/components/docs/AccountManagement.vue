<template>
    <h1 class="title is-spaced">Account Management</h1>
    <h2 class="subtitle">Invite Team Members</h2>
    <p>You can invite new team members by
            clicking the “Copy to clipboard”
            link, which will provide a url which
            can be used to join your team. Be
            aware that anyone who receives this
            link will be able to join your
            team.
    </p>
    <p>You can also invite new team
            members by entering their email
            address in one of the provided boxes
            and clicking “Add Teammates”. If
            additional boxes are needed, click
            the “+ add more teammates”
            link.
    </p>
    <p>Click “Accept Invitations” to join
            other teams to which you have been
            invited.
    </p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'AccountManagement'
    });
</script>
