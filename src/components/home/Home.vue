<template>
    <div class="columns">
        <div class="column">
            <h1>Integrate Anything, Automate Everything</h1>
            <h2>SaaSGlue is a SaaS-based integration, orchestration and automation platform that lets you fill the gaps in your existing automation infrastructure</h2>
        </div>
        <div class="column">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b_7u17gZcX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
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
    h3 {
    margin: 40px 0 0;
    }
    ul {
    list-style-type: none;
    padding: 0;
    }
    li {
    display: inline-block;
    margin: 0 10px;
    }
    a {
    color: #42b983;
    }
</style>
