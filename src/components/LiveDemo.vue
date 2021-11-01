<template>
    <section class="section">
        <div class="container content">
            <h1 class="title has-text-centered">Live Demo of SaaSGlue</h1>
            <h5 class="title has-text-centered">Only a small subset of features on display</h5>

            <select class="input select" style="width: 250px; margin-bottom: 20px;" v-model="currentScriptLanguage">
                <option value="javascript">Javascript (node 12.x runtime)</option>
                <option value="python">Python (3.7 runtime)</option>
            </select>
            <span style="margin-left: 10px;">(several other languages/runtimes/ options are available in <a href="https://console.saasglue.com">production</a>)</span>

            <div ref="scriptEditorDiv" style="width: 100%; height: 250px; background: hsl(0, 0%, 98%);"></div>

            <br>
            <button class="button is-primary" :disabled="currentScriptStep !== null" @click="runScript">Run Script in SaaSGlue Right Now!</button>

            <br>
            <br>
            <div style="background: #F5F5F5; border-color: lightgray; border-style:solid; border-width: 1px; border-radius: 5px;">
                <table>
                    <tr :class="{'selected-step': currentScriptStep === 'one'}">
                        <td> Step 1: </td> <td>Sending script to the SaaSGlue API. </td>
                    </tr>
                    <tr :class="{'selected-step': currentScriptStep === 'two'}">
                        <td style="border-style: none;"> Step 2: </td> <td style="border-style: none;">SaaSGlue API schedules the script to run immediately on AWS Lambda.</td>
                    </tr>
                    <tr :class="{'selected-step': currentScriptStep === 'two'}">
                        <td>         </td> <td>Scripts can securely run wherever you install a SaaSGlue Agent as well. (Google Cloud Compute coming soon)</td>
                    </tr>
                    <tr :class="{'selected-step': currentScriptStep === 'three'}">
                        <td style="border-style: none;"> Step 3: </td> <td style="border-style: none;">Your script is now running on AWS Lambda.</td>
                    </tr>
                    <tr :class="{'selected-step': currentScriptStep === 'three'}">
                        <td>         </td> <td>SaaSGlue monitors AWS Lambda's Cloud Watch logs and sends script results to the SaaSGlue API (results shown below).</td>
                    </tr>
                </table>
            </div>

            <br>
            <div :class="{'selected-step': currentScriptStep !== null}">
                Script results:
            </div>

            <div style="margin-top: 10px; padding: 3px; padding-left: 5px; background: #F5F5F5; border-color: lightgray; border-style:solid; border-width: 1px; border-radius: 5px;">
                <div style="max-height: 150px; overflow-y: scroll; " v-html="scriptOutput"></div>
            </div>

            <br><br>
            <div>
                You can also run SaaSGlue scripts via the SaaSGlue API.<br>
                
                <div style="display: flex; justify-content: space-between ">
                    <span>Copy this curl command and paste it in a terminal to try running the script:</span>
                    <button class="button" @click="copyUrlToClipboard">Copy Curl Command to Clipboard {{showCopyCurlSuccess ? ' (copied!)' : ''}}</button>
                </div>

            </div>
            
            <div style="margin-top: 10px; padding: 3px; padding-left: 5px; background: #F5F5F5; border-color: lightgray; border-style:solid; border-width: 1px; border-radius: 5px;">
                <div style="max-height: 150px; overflow-y: scroll; " v-html="curlCommand"></div>
            </div>

            <!-- Yucky hack to access clipboard for copy curl command -->
            <input id="curlCommandLink" :hidden="!isCopyingCurlCommand" style="opacity: .01;" type="text" v-model="curlCommandForClipboard">
        </div>
    </section>
</template>


<script lang="ts">
/* eslint-disable */ // I freaking hate this thing!

// This is the demo account: bogod23049@d3ff.com
// todo - create a permanent JWT for this account - Rich can do this pretty quickly

    import { defineComponent } from 'vue';
    import * as monaco from 'monaco-editor';
    import axios from 'axios';

    const createSmallGuid = () => Math.random().toFixed(5).substring(2);
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2M3ZWMwYThkYTkxMDAxOGUyYmUyMyIsInR5cGUiOjAsImVtYWlsIjoiYm9nb2QyMzA0OUBkM2ZmLmNvbSIsInRlYW1JZHMiOlsiNjBjMTZiNjRiMzA4ZTMwMDE3OTgxNjA5Il0sInRlYW1BY2Nlc3NSaWdodElkcyI6eyI2MGMxNmI2NGIzMDhlMzAwMTc5ODE2MDkiOiIxM2YzZjczZjg2ZjExOTgifSwidGVhbUlkc0ludml0ZWQiOltdLCJuYW1lIjoiTWFya2V0aW5nIERlbW8iLCJjb21wYW55TmFtZSI6IlNHIE1hcmtldGluZyBEZW1vIiwiZXhwIjoxNzMwMjE3NDc5LCJpYXQiOjE2MzU2MDk0Nzl9.QFMNop5Unvg4-TJQ1Voeh3mSfZdV-to3Uu0o1cIddlQ'; // this is a very limited demo account that is monitored
    const teamId = '60c16b64b308e30017981609';
    const correlationId = createSmallGuid();
    const computeJobName = () => `MarketingDemo-${correlationId}-${createSmallGuid()}`;

    export default defineComponent({
        name: 'LiveDemo ',

        data () {
            return {
                scriptEditor: null,
                currentScriptLanguage: null,
                currentScript: null,
                scriptOutput: 'Run the script to see the results',
                monacoModelListener: null,
                stompHandler: null,
                currentScriptStep: null,
                curlCommand: '',
                isCopyingCurlCommand: false,
                showCopyCurlSuccess: false,
                curlCommandForClipboard: ''
            }
        },

        beforeDestroy(){
            if(this.monacoModelListener){
                try {
                    this.monacoModelListener.dispose();
                }
                catch(err){
                    console.error('Error closing monaco editor', err);
                }
            }

            if(this.stompHandler){
                try {
                    this.stompHandler.disconnect();
                }
                catch(err){
                    console.error('Error closing stomp handler', err);
                }
            }
        },

        mounted() {
            try {

                this.stompHandler = new StompHandler('wss://@funny-finch.rmq.cloudamqp.com/ws/stomp',
                                                     'marketingwebsite',
                                                     'trysaasglue!',
                                                     'bartsVHost',
                                                     this.onNewJob,
                                                     this.onJobTail,
                                                     this.onTaskOutcome);
                this.stompHandler.connect();
            }
            catch(err){
                console.error('Unable to connect to stomp so you will not see output', err);
            }

            this.monacoModelListener = monaco.editor.onDidCreateModel((model: monaco.editor.ITextModel) => {
                model.onDidChangeContent((e: monaco.editor.IModelContentChangedEvent) => {
                    this.currentScript = model.getLinesContent().join('\n');
                    localStorage.setItem(this.currentScriptLanguage, this.currentScript);
                });
            });

            // Initialize default scripts
            if(!localStorage.getItem('javascript')){
                localStorage.setItem('javascript', 
`console.log('Hello World from the SaasGlue runtime!');

setTimeout(() => {
    console.log('I was called after 2 seconds!');
}, 2000);

// Let's call a web service or something more interesting?  
// This sample has axios available but in SaaSGlue you can add many other popular 
// runtimes are even install your own at runtime with ease

const axios = require('axios');

(async () => {
    // Here we're just using a free / simple online api to play with named jsonplaceholder
    const result = await axios.get('https://jsonplaceholder.typicode.com/users');
    if(result.data && result.data.length > 0){
        console.log('First users returned from the json placeholder api is: ', result.data[0]);
    }
    else {
        console.log('Json placeholder did not return any users.');
    }
})();
`
                );
            }

            if(!localStorage.getItem('python')){
                localStorage.setItem('python', 
`print("Hello World from the SaaSGlue runtime!")
`
                );
            }

            this.currentScriptLanguage = 'javascript';
        },

        methods: {
            
            reloadMonacoEditor(){
                const scriptEditorDiv = (<any>this.$refs).scriptEditorDiv;
                if(scriptEditorDiv){
                    scriptEditorDiv.innerHTML = ''; // clear old stuff out
                }

                this.scriptEditor = monaco.editor.create(scriptEditorDiv, {
                    value: this.currentScript,
                    language: this.currentScriptLanguage,
                    theme: 'vs',
                    automaticLayout: true,
                    readOnly: false,
                    minimap: {
                        enabled: false
                    }
                });
            },

            computeLambdaDeps(){
                if(this.currentScriptLanguage === 'javascript'){
                    return 'axios';
                }
                // todo for python
            },

            computeLambdaRuntime(){
                if(this.currentScriptLanguage === 'javascript'){
                    return 'nodejs12.x';
                }
                // todo for python
            },

            computeCurrentJob(){
                return {
                    job: {
                        dateCreated: new Date(),
                        name: computeJobName(),
                        runtimeVars: {},
                        tasks: [{
                            _teamId: teamId,
                            correlationId,
                            fromRoutes: [],
                            name: 'DemoTask',
                            requiredTags: {},
                            source: 0,
                            target: 32,
                            targetAgentId: '',
                            steps: [{
                                arguments: '',
                                command: '',
                                lambdaDependencies: this.computeLambdaDeps(),
                                lambdaMemorySize: 128,
                                lambdaRuntime: this.computeLambdaRuntime(),
                                lambdaTimeout: 3,
                                name: "DemoStep",
                                order: 0,
                                variables: {},
                                script: {
                                    code: btoa(this.currentScript)
                                }
                            }]
                        }]
                    }
                }
            },

            async runScript(){
                const results = await axios.post('https://console.saasglue.com/api/v0/job/ic/', 
                this.computeCurrentJob(),
                {
                    headers: {
                        _teamid: teamId,
                        auth: authToken
                    }
                });

                console.log('results are ', results);
            },

            // called from the stomp handler
            onNewJob() {
                this.currentScriptStep = 'one';
                setTimeout(() => {
                    if(this.currentScriptStep === 'three'){ // too fast!
                        setTimeout(() => this.currentScriptStep = 'three', 1000);
                    }
                    this.currentScriptStep = 'two';
                }, 1000);
            },

            // called from the stomp handler
            onJobTail(tails: string[]) {
                for(let tail of tails){
                    this.scriptOutput += `${tail}<br>`;
                }
            },

            // called from the stomp handler
            onTaskOutcome(taskOutcome: any) {
                if(taskOutcome.status === 10){
                    this.scriptOutput = 'Script running...<br>';
                    this.currentScriptStep = 'three';
                }
                else if(taskOutcome.status === 22){
                    this.scriptOutput += 'Script failed <br>'
                    this.currentScriptStep = null;
                }
                else if(taskOutcome.status === 20){
                    this.scriptOutput += 'Script completed successfully! <br>';
                    this.currentScriptStep = null;
                }
            },

            recalcCurlCommand(){
                this.curlCommand =
`curl 'https://console.saasglue.com/api/v0/job/ic/' \\ <br>
-H 'auth: ${authToken}' \\ <br>
-H '_teamid: ${teamId}' \\ <br>
-H 'Content-Type: application/json' \\ <br>
--data-raw '${JSON.stringify(this.computeCurrentJob())}'<br>
`;
            },

            copyUrlToClipboard(){
                this.isCopyingCurlCommand = true;
                this.$nextTick(() => {
                try {
                    const copyLink = document.getElementById('curlCommandLink');
                    (<any>copyLink).select();
                    (<any>copyLink).setSelectionRange(0, 99999); ///For mobile devices
                    document.execCommand('copy');
                    this.showCopyCurlSuccess = true;
                    setTimeout(() => {
                    this.showCopyCurlSuccess = false;
                    }, 2000);
                }
                finally {
                    this.isCopyingCurlCommand = false;
                }
                });
            }
        },

        watch: {
            currentScriptLanguage(newLanguage){
                this.currentScriptLanguage = newLanguage;
                this.currentScript = localStorage.getItem(this.currentScriptLanguage);
                this.reloadMonacoEditor();
                this.recalcCurlCommand();
            },
            currentScript(newScript){
                this.recalcCurlCommand();
            },
            curlCommand(newCommand){
                if(this.curlCommand){
                    this.curlCommandForClipboard = this.curlCommand.replaceAll('<br>', '');
                    this.curlCommandForClipboard = this.curlCommandForClipboard.replaceAll('\\', '');
                }
                else {
                    this.curlCommandForClipboard = '';
                }
            }
        }

    });


    import { Client } from '@stomp/stompjs';

    class StompHandler {
        private client: Client;
        private jobIdsForMe :string[] = []; // what job ids are associated with the current session / correlationId?

        constructor(public readonly url: string,
                    public readonly login: string,
                    public readonly passcode: string,
                    public readonly vHost: string,
                    public readonly newJobHandler: any,
                    public readonly tailHandler: any,
                    public readonly taskOutcomeHandler: any){
        }

        public async connect(){
            this.client = new Client({
            brokerURL: this.url,
            connectHeaders: {
                login: this.login,
                passcode: this.passcode,
                host: this.vHost
            },
            heartbeatIncoming: 10000,
            heartbeatOutgoing: 10000
            });

            this.client.onConnect = this.onConnect.bind(this);
            this.client.onStompError = this.onStompError.bind(this);

            this.client.activate();
        }

        public async disconnect(){
            if(this.client){
                return this.client.deactivate();
            }
        }

        private onConnect(frame: object): void {
            console.log(`Connected to the stream api at ${this.url}`);
            this.subscribe();
        }  

        private onStompError(frame: object): void {
            console.error('onStompError ', frame);
        }

        private subscribe(): void {
            const subscribeHeaders = {
            "x-queue-name": `team-${teamId}-${createSmallGuid()}`
            };

            this.client.subscribe(`/exchange/team-${teamId}/bp`, this.onMessage.bind(this), subscribeHeaders);
        }

        
        private onMessage(rawMessage: any): void {
            // console.log('StompHandler.onMessage invoked ', rawMessage);
            const parsedMessage = JSON.parse(rawMessage.body);  
            
            console.log('Got message!', parsedMessage);

            if((<any>this)[`on${parsedMessage.domainType}`]){
                (<any>this)[`on${parsedMessage.domainType}`](parsedMessage);
            }
        }

        private onJob({model}: {model: any}){
            if(model && model.name && model.name.indexOf(correlationId) !== -1){
                this.jobIdsForMe.push(model.id);
                this.newJobHandler();
            }
        }

        private onStepOutcome({model}: {model: any}){
            // should be able to correlate with the job ids :( - todo
            this.tailHandler(model.tail);
        }

        private onTaskOutcome({model}: {model: any}){
            // should be able to correlate with the job ids :( - todo
            this.taskOutcomeHandler(model);
        }
    }

</script>

<style scoped lang="scss">
    .selected-step {
        color: green;
        font-weight: 700;
    }
</style>
