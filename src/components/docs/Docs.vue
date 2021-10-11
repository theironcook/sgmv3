<template>
    <section class="section">
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                    <Menu />
                </div>
                <div class="column is-three-quarters content">
                    <h1 class="title is-spaced">Product Documentation</h1>
                    <h2 class="subtitle pb-2">SaaSGlue Framework Overview</h2>

                    <h3>Cloud and Agents</h3>
                    <p>The basic components of the
                            SaaSGlue platform are the cloud
                            service and Agents installed on
                            machines. The machines can be
                            physical, virtual or containers. And
                            they can be located in many types of
                            environments including corporate
                            networks, private clouds and
                            more.
                    </p>
                    <p>When agents are installed they
                            begin sending a heartbeat to the
                            SaaSGlue cloud. They receive
                            instructions to execute scripts and
                            send the results back to the
                            cloud.</p>

                    <h3>Scripts and Jobs</h3>
                    <p>Scripts can be tied together in
                            Jobs with specific instructions on
                            how they are to be run.
                    </p>
                    <p>SaaSGlue can run any script and It
                            can even run compiled code. The
                            Agent doesn’t run the scripts.
                            Instead it hands them off to the
                            specified interpreter for execution
                            and collects the output.
                    </p>
                    <p>Scripts are contained in Steps
                            which also include Arguments and
                            Environment variables which can be
                            passed to the script runtime
                            environment.
                    </p>
                    <p>Steps are contained in Tasks which
                            can include one or more Steps. All
                            Steps in a Task are executed
                            sequentially on the same machine by
                            the same Agent.
                    </p>
                    <p>Jobs contain instructions for how a
                            set of Tasks are to be run. They
                            order the Tasks, direct them to the
                            right Agent(s), pass in runtime
                            variables and define conditions when
                            there are alternate Task
                            routes.
                    </p>
                    <p>Jobs are the central feature that
                            makes SaaSGlue a powerful automation
                            engine. They can reach across all
                            kinds of networks, devices,
                            languages and applications,
                            incorporating them into unified,
                            well-orchestrated workflows.
                    </p>

                    <h2 class="subtitle pb-2">The Structure of Jobs</h2>
                    <p>Jobs are a hierarchical structure
                            of sub-components, including <b>Tasks</b>,
                            <b>Steps</b> and <b>Scripts</b>.
                    </p>

                    <h3>Job</h3>
                    <p>The Job organizes Tasks into a
                            flexible workflow. It contains
                            instructions for how the Job is to
                            be run and stores runtime variables
                            to be consumed during Script
                            execution.
                    </p>

                    <h3>Task</h3>
                    <p>The Task collects steps into a
                            logical unit that run on an Agent.
                            It also stores qualifications for
                            which Agent(s) can run the
                            Task.
                    </p>
                    <p>Route codes define how the Job
                            moves from Task to Task and sets
                            conditions for alternate
                            routing.
                    </p>

                    <h3>Step</h3>
                    <p>The Steps of a Task are executed in
                            a set sequence. The Step object
                            stores its order in the sequence and
                            environment variables and command
                            line arguments to be passed to
                            Script execution. It can also store
                            a specific command to use to execute
                            the Script. This would override the
                            default interpreter based on the
                            Script type. For example, a command
                            value of <code>/usr/bin/python2.7</code> for a
                            Step running a python Script would
                            result in the Script being executed
                            with the interpreter located at
                            <code>/usr/bin/python2.7</code> on the machine
                            where the Step runs.
                    </p>

                    <h3>Script</h3>
                    <p>The Script is a SaaSGlue object
                            which contains the code that is to
                            be executed by the interpreter and
                            the type of interpreter to use to
                            run the script.
                    </p>

                    <h2 class="subtitle pb-2">Job Definition</h2>
                    <p>Job Definitions (JobDefs) are
                            structured workflow templates that
                            coordinate the execution of one or
                            more Tasks to accomplish a goal. For
                            example, a <code>JobDef</code> could consist of a
                            single Task that watches for new
                            files in a specific location. When a
                            new file is discovered, it could
                            launch a new Job based on another
                            <code>JobDef</code> with a series of Tasks that
                            constitute a data pipeline for
                            processing the file.
                    </p>
                    <p>JobDefs are normally designed using
                            the SaaSGlue web application.
                            However, they can also be created
                            dynamically using the SaaSGlue
                            API.
                    </p>
                    <p>JobDefs are used to create Jobs,
                            which are runtime implementations of
                            JobDefs. Creating a Job from a
                            <code>JobDef</code> can be accomplished in three
                            ways:
                    </p>
                    <ul>
                        <li>Schedule a <code>JobDef</code> using the
                            SaaSGlue web application or the
                            SaaSGlue API. When the Schedule is
                            triggered, the <code>JobDef</code> will be used
                            as a template to create and run a
                            Job. A scheduled Job may be triggered but not run immediately
                            or at all based on certain <code>JobDef</code>
                            attributes.</li>
                        <li>A Job can be launched from a
                            <code>JobDef</code> manually using the SaaSGlue
                            API or using the SaaSGlue web
                            application.</li>
                        <li>A <code>JobDef</code> can be defined in <code>JSON</code>
                            and sent to the SaaSGlue API in an
                            <code>Http POST</code>.</li>
                    </ul>

                    <h3>Routes</h3>
                    <p>The <code>JobDef</code> ties Tasks together with
                            routes. Routes include two
                            components, the task name and the
                            route pattern. The route pattern can
                            be any valid javascript regular
                            expression. For example, a route
                            pattern of <code>^(?!fail$).*$</code> would
                            match any route code other than
                            <code>fail</code>. For a route to be satisfied,
                            a task must be completed with a
                            route code matching the route
                            pattern.
                    </p>
                    <p>By default, tasks that complete
                            successfully (all steps in the task
                            complete with <code>exit code 0</code>) have a
                            blank route code. Tasks that fail (a
                            step in the task completes with
                            non-zero exit code) have route code
                            <code>fail</code>. Tasks that are interrupted
                            (either by <code>CTRL+C</code> or canceled using
                            SaaSGlue) have route code
                            <code>interrupt</code>. To set a custom route
                            code, print a string to stdout
                            following the pattern <code>@sgo{"route": "[route name]"}</code>
                            from a script. If
                            multiple scripts within a task set a
                            custom route code, the last one will
                            be used.
                    </p>
                    <p>SaaSGlue supports two types of task
                            routing – <b>inbound</b> and <b>outbound</b>
                            routes. Inbound routes require all
                            routes to be satisfied before the
                            target task is executed. For
                            example, if we have inbound routes
                            from <code>task1</code> with route pattern <code>.*</code>
                            and <code>task2</code> with route pattern <code>.*</code>
                            to <code>task3</code>, both routes must be
                            satisfied for <code>task3</code> to execute.
                    </p>
                    <p>Outbound routes cause the target
                            task to be executed every time the
                            outbound route is satisfied. For
                            example, if we have outbound routes
                            from <code>task1</code> with route pattern <code>.*</code>
                            to <code>task3</code> and from <code>task2</code> with
                            route pattern <code>.*</code> to <code>task3</code>, then
                            every time the <code>task1</code> route is
                            satisfied, <code>task3</code> will be executed,
                            and every time the <code>task2</code> route is
                            satisfied, <code>task3</code> will be executed.
                            An example use case would be a
                            general failed task handler. You
                            could implement this by creating an
                            outbound route from every other task
                            in the job to a <code>failed task handler</code> task. This scenario is
                            facilitated in the web application
                            by the <code>Route All To [task name]</code>
                            button in the Workflow Designer
                            view.
                    </p>
                    <div class="notification is-info is-light">
                        Task routes can be defined using
                        the SaaSGlue API for JobDefs and
                        Jobs and using the SaaSGlue web
                        application. There are a few settings in the job
                        definition that define conditions
                        for how jobs are to be run.
                    </div>
                    <ul>
                        <li><b>Max Instances</b> – defines how many instances of a job
                        can run concurrently.</li>
                        <li><b>Misfire Grace Time</b> –
                            defines how long a job can wait past
                            a scheduled start time before it is
                            cancelled. This setting applies only
                            to jobs executed by a
                            schedule.</li>
                        <li><b>Coalesce</b> –
                            directs SaaSGlue to skip all but
                            one job when there are multiple jobs
                            queued up. This setting is useful
                            for scenarios where an agent has
                            gone offline and missed the start
                            time for several scheduled jobs. It
                            may be desirable to run only one
                            instance and skip the rest.</li>
                            <li><b>Pause on Failed Job</b> –
                            if <code>true</code>, when a Job created from
                            the <code>JobDef</code> fails, the <code>JobDef</code> will be
                            <b>paused</b> until it is manually
                            <b>resumed</b> (using the SaaSGlue cloud
                            interface or the API [link to JobDef
                            API documentation]) or all failed
                            Tasks are either canceled or
                            completed successfully. This
                            facilitates certain workflow
                            scenarios, for example where all
                            Jobs created from a <code>JobDef</code> must
                            complete in order.</li>
                    </ul>
                    <div class="notification is-info is-light">
                        Job Definitions can include runtime variables.
                    </div>

                    <h2 class="subtitle pb-2">Task Definition</h2>
                    <p>Each <code>Task</code> can have one or more
                            <code>Steps</code> that must be run in a set
                            sequence.
                    </p>
                    <p>Tasks can target one or multiple
                            Agents. If a <code>Task</code> targets multiple
                            Agents each Agent will run separate
                            instances of the <code>Task</code> in parallel.
                            Once an Agent begins processing a
                            <code>Task</code>, all <code>Steps</code> in the <code>Task</code> will be
                            completed on that Agent machine. If
                            a <code>Task</code> fails or is interrupted it
                            can be restarted, although it may
                            not be restarted on the machine
                            where it was previously
                            running.
                    </p>
                    <p>The <code>Steps</code> of a specific Task
                            instance must all be completed by
                            the same Agent because there are
                            some sequences of events that cannot
                            be shared across multiple machines.
                            Here is an example.
                    </p>
                    <ol>
                        <li>Install Java</li>
                        <li>Run a Java application</li>
                    </ol>
                    <p>If step 1 runs on one machine and
                            step 2 runs on a different machine
                            where Java has not been installed,
                            step2 will fail.
                    </p>
                    <p>The <code>Job</code> designer must understand
                            the logical boundaries of each
                            discrete part of the Job and design
                            accordingly.
                    </p>
                    <p>Dependencies on prior <code>Task</code> outcomes
                            are stored in the <code>Task</code> definition
                            <b>inbound</b> routes. They determine
                            whether the <code>Job</code> route will route
                            through a given <code>Task</code> or not.
                            Downstream dependencies are stored
                            in the <code>Task</code> definition <b>outbound</b>
                            routes. They determine which Tasks
                            will be started when this <code>Task</code>
                            completes. See the JobDef routing
                            description for details.
                    </p>
                    <p>Task definitions store the
                            qualifications for determining which
                            Agent(s) can run the <code>Task</code>. Those
                            qualifications are as follows:
                    </p>
                    <ul>
                        <li>Any active Agent</li>
                        <li>Any active Agent with tags as
                                                specified in the Task
                                                definition</li>
                        <li>All active Agents</li>
                        <li>All active Agents with tags as
                                                specified in the Task
                                                definition</li>
                        <li>A specific Agent</li>
                    </ul>
                    <p>Tags are user defined and must be
                            formatted in key value pairs, such
                            as <code>Linux=True</code>. <code>Task</code> Tags can be
                            defined using the SaaSGlue web
                            application or the SaaSGlue
                            API.
                    </p>
                    <p>If a <code>Task</code> needs to run on a
                            specific agent, use the Job Designer
                            in the SaaSGlue web application or
                            the SaaSGlue API to specify which
                            agent should run the <code>Task</code>. It is
                            also possible to dynamically
                            determine the target agent at
                            runtime using runtime variables.
                            Simply set the target agent to
                            <code>@sgg("[runtime variable key]")</code> and
                            the agent id referenced by
                            <code>[runtime variable key]</code>
                            will be used to execute the <code>Task</code>.
                    </p>

                    <h2 class="subtitle pb-2">Step Definition</h2>
                    <p>Steps are contained within a <code>Task</code>
                            and must be run in a set sequence.
                            The <code>Step</code> definition stores its order
                            in the sequence.
                    </p>
                    <p>Each <code>Step</code> can have only one <code>Script</code>
                            object. The <code>Step</code> definition can
                            store arguments or environment
                            variables which are needed to run
                            the script. <code>Step</code> arguments and
                            environment variables can be set
                            dynamically at runtime using Runtime
                            Variables.
                    </p>
                    <p>The command attribute can be used
                            to specify the exact interpreter to
                            use to execute the script for Steps
                            created from this <code>StepDef</code>. It can
                            also be used to set arguments that
                            should be passed to that
                            interpreter. For example, to pass a
                            class path to the scala interpreter.
                            If not specified, the default
                            interpreter for the script type will
                            be used to execute the script.
                    </p>
                    <p>For example, if you have a script
                            of type <code>python</code> and the <code>command</code>
                            attribute is not set, then the
                            default python interpreter on the
                            machine where the <code>Step</code> runs will be
                            used to execute the script. If the
                            command attribute is set to
                            <code>/usr/bin/python2.7</code>, then the
                            interpreter in that location on the
                            Agent machine will be used to run
                            the script. The interpreter
                            specified by the command attribute
                            must exist on the machine on which
                            the <code>Step</code> runs.
                    </p>
                    <p>The designer can give the <code>Step</code>
                            definition a name to make it more
                            convenient to work with.
                    </p>

                    <h2 class="subtitle pb-2">Script Definition</h2>
                    <p>The <code>Script</code> object stores the <code>Script</code>
                            code.
                    </p>
                    <p>It also stores useful information
                            about the <code>Script</code> including the
                            <code>Script</code> language, the original author
                            and who last edited it.
                    </p>
                    <p>SaaSGlue can be used to execute any
                            <code>Script</code>. The <code>Script</code> type attribute is
                            added to the <code>Script</code> object to make
                            it easier to work with common
                            scripting languages. For example,
                            the SaaSGlue cloud interface <code>Script</code>
                            editor provides cues based on the
                            script language. To use a script
                            language not defined in SaaSGlue use
                            <code>SH</code> if the <code>Script</code> will run on
                            <code>Linux, Linux based or Mac</code> operating
                            systems and <code>CMD for Windows</code> and
                            then define the <code>Command</code> attribute
                            either in the StepDef or when
                            executing the <code>Script</code> from the
                            Console.
                    </p>
                    <p>The following script types are predefined in SaaSGlue:</p>
                    <ul>
                        <li>0 = PYTHON</li>
                        <li>1 = NODE</li>
                        <li>2 = SH</li>
                        <li>3 = CMD</li>
                        <li>4 = RUBY</li>
                        <li>5 = LUA</li>
                        <li>6 = PERL</li>
                        <li>7 = PHP</li>
                        <li>8 = POWERSHELL</li>
                    </ul>
                    <div class="notification is-info is-light">
                        Scripts can be set to be editable
                        within the team. All Scripts are
                        viewable within the team.
                    </div>
                    <div class="notification is-warning is-light">
                        The author can give the Script a
                        name to make it more convenient to
                        work with. The name must be unique
                        within the team.
                    </div>

                    <h2 class="subtitle pb-2">Script Injection</h2>
                    <p>Scripts defined in SaaSGlue can be
                            injected into other scripts using
                            the following syntax <code>@sgs("[script name]")</code>
                    </p>
                    <p>This line entered in a script will
                            result in the script defined by
                            <code>[script name]</code> being injected into
                            the host script immediately before
                            executing the script.
                    </p>
                    <p>Scripts can be injected recursively
                            meaning that <code>script 1</code> can
                            reference <code>script 2</code> which can
                            reference <code>script 3</code>, etc.
                    </p>
                    <p>However, the <code>[script name]</code> itself
                            cannot be a variable – it must be
                            the name of a script defined in your
                            SaaSGlue team.
                    </p>

                    <h2 class="subtitle pb-2">Runtime Variables</h2>
                    <p>Runtime Variables are <b>key-value</b>
                            pairs. They provide a mechanism for
                            dynamically injecting variable
                            values in <code>Script</code> code, Arguments and
                            Environment Variables of a Task Step
                            when it is executed by a SaaSGlue
                            Agent. Runtime variables can be
                            defined at design time on the Team
                            level and in JobDefs, and when a <code>Job</code>
                            is created and they can also be
                            generated dynamically during <code>Script</code>
                            execution.
                    </p>
                    <h3>How to define</h3>
                    <h4>Team scoped runtime variables</h4>
                    <p>Runtime Variables can be defined on
                            the Team level using the SaaSGlue
                            cloud interface or the SaaSGlue
                            API.
                    </p>
                    <h4>JobDef scoped runtimes variables</h4>
                    <p>Runtime Variables can be defined in
                            JobDefs using the SaaSGlue cloud
                            interface or the SaaSGlue API.
                    </p>
                    <h4>Job scoped runtime variables</h4>
                    <p>Runtime Variables can be defined in
                            a <code>Job</code> when the <code>Job</code> is created. When
                            a <code>Job</code> is created using the SaaSGlue
                            API the runtime variables can be
                            included in the <code>Http POST</code> request.
                            When a <code>Job</code> is created from a <code>JobDef</code>
                            in the SaaSGlue cloud UI the runtime
                            variables can be entered in the <code>Job</code>
                            creation dialog.
                    </p>
                    <h4>Dynamically generated runtime variables</h4>
                    <p>Runtime Variables can be generated
                            dynamically during <code>Script</code> execution
                            by printing a properly formatted
                            string to stdout. The format is
                            <code>@sgo{"[variable name]": "[variable value]"}.</code>
                    </p>
                    <p>For example, the following line of
                            python script code would dynamically
                            create or modify a runtime variable
                            with name <code>myKey</code> and value
                            <code>"myValue"</code> when executed by a
                            SaaSGlue Agent <code>print '@sgg{"myKey": "myValue"}'</code>.
                    </p>
                    <p>The <code>"myKey"</code> runtime variable would
                            now be defined as <code>"myValue"</code> for
                            subsequent Steps in the <code>Task</code> being
                            executed and for subsequent Tasks in
                            the <code>Job</code> workflow.
                    </p>
                    <p>SaaSGlue reserves the key word
                            <code>route</code> to determine route-based
                            pathing between Tasks in a Job
                            workflow. So the following output
                            <code>@sgg{"route": "ok"}</code> would not
                            create a runtime variable named
                            <code>route</code>. Instead it would be used
                            for routing from the executing <code>Task</code>
                            in the <code>Job</code> workflow.
                    </p>
                    <p>If a runtime variable is defined on
                            multiple levels, each successively
                            granular level overrides the
                            previous. For example, if we have a
                            variable named <code>key</code> defined on the
                            Team level with a value of
                            <code>team_value</code> and in a <code>JobDef</code> with a
                            value of <code>jobdef_value</code>, the <code>JobDef</code>
                            value will override the Team value.
                            If the variable is defined in a <code>Job</code>
                            created from the <code>JobDef</code> with a value
                            of <code>job_value</code>, the <code>Job</code> value will
                            override the <code>JobDef</code> value. If within
                            that <code>Job</code> a <code>Script</code> runs which prints
                            the following string to stdout
                            <code>sgo{"key": "script_value"}</code>, the
                            <code>Script</code> value will override the <code>Job</code>
                            value and any subsequent reference
                            to <code>key</code> will have the value
                            <code>script_value</code>. A subsequent <code>Script</code>
                            could override the value again.
                    </p>
                    <h3>How to use</h3>
                    <p>Runtime Variables values can be
                            dynamically injected into the <code>Script</code>
                            code, Arguments and Environment
                            Variables of a <code>Step</code>. Immediately
                            before running a <code>Task Step</code>, the
                            Agent will search the <code>Step Script</code>
                            code Arguments for strings following
                            the pattern <code>sgg("[key]")</code> and will
                            replace them with the current value
                            of the runtime variable with the
                            name <code>[key]</code>. If no runtime variable
                            with the name <code>[key]</code> exists, <code>null</code>
                            will be injected instead.
                    </p>
                    <h4>Step Script code runtime variable injection</h4>
                    <p>For example, if we have a python
                            script with the following line of
                            code
                    </p>
                    <p><code>print('the value of "myKey" is "@sgg("myKey")"')</code></p>
                    <p>and a runtime variable <code>myKey</code> with
                            value <code>myValue</code>, the script will
                            produce the following output
                    </p>
                    <p><code>the value of "myKey" is "myValue"</code>.</p>

                    <h4>Step Arguments runtime variable injection</h4>
                    <p>If we have a Step Argument with
                            value <code>@sgg("myKey") -out myFile.txt"</code>
                            , and the runtime value
                            of <code>myKey</code> is <code>myValue</code> the <code>Script</code>
                            code for the <code>Step</code> will be called
                            with arguments
                            <code>"myValue -out myFile.txt"</code>.
                    </p>

                    <h4>Step Environment Variables runtime variable injection</h4>
                    <p>Runtime Variable injection for Step
                            Environment Variables works slightly
                            differently. Step Environment
                            Variable keys are compared to the
                            current runtime variables for
                            matching keys. If a match is found,
                            the runtime variable value will be
                            used for the environment variable
                            value when running the Script.
                    </p>
                    <p>For example, if we have a Step
                            Environment Variable <code>myKey</code> and a
                            runtime variable <code>myKey</code> with value
                            <code>myValue</code>, then the runtime script
                            execution environment will have an
                            environment variable
                            <code>myKey=myValue</code>.
                    </p>
                    <h4>Design time configuration</h4>
                    <p>A <code>StepDef</code> can be configured so that
                            Steps created from the <code>StepDef</code>
                            utilize runtime variables in
                            arguments and/or environment
                            variables using the SaaSGlue API or
                            the SaaSGlue cloud interface.
                    </p>
                    <div class="notification is-info is-light">
                        Runtime variable injection can also
                        be utilized when running Scripts
                        using the SaaSGlue cloud interface
                        Console.
                    </div>

                    <h4>Dynamically select Task target agent id</h4>
                    <p>Runtime variables can be used to
                            dynamically determine the target
                            agent for Tasks that target a single
                            specific agent at runtime. For
                            example, if you have a runtime
                            variable named <code>agentId</code> and the
                            value is an actual agent id, and the
                            Task target agent id is
                            <code>@sgg("agentId")</code>, the task with the
                            id matching the runtime variable
                            value will be used to run the <code>Task</code>.
                    </p>

                    <h4>Save state with runtime variables</h4>
                    <p>As Scripts are executing the
                            corresponding stdout is monitored in
                            real-time and searched for strings
                            following the <code>@sgo</code> runtime variable
                            generation pattern. When runtime
                            variables are created/modified, the
                            new values are sent to the SaaSGlue
                            cloud. If a <code>Task</code> fails and is
                            restarted, the most recent runtime
                            variable values will be delivered
                            with the <code>Task</code> to the Agent where the
                            <code>Task</code> resumes execution.
                            Consequently, Scripts can be
                            designed to utilize the most recent
                            value of the runtime variable.
                    </p>
                    <p>For example, if a <code>Script</code> is
                            designed to iterate through records
                            in a file, the line number could be
                            printed to stdout with a string like
                            <code>@sgo{"line_num": "10"}</code> which would
                            send the runtime variable <code>line_num</code>
                            with a value of <code>10</code> to the SaaSGlue
                            cloud. If the <code>Task</code> failed on line
                            <code>"11"</code> and the <code>Task</code> is restarted, the
                            <code>Script</code> could resume processing the
                            file on the line after
                            <code>@sgg("line_num")</code> which would now
                            have a value of <code>10</code>.
                    </p>
                    <div class="notification is-info is-light">
                        This behavior does not apply to
                        Tasks that target multiple agents.
                    </div>

                    <h2 class="subtitle pb-2">Job Schedule</h2>
                    <p>Schedules can be created for Job
                            Definitions (JobDefs) to
                            automatically trigger Jobs to run. A
                            <code>JobDef</code> can have more than one
                            Schedule but a Schedule can be
                            linked to only one <code>JobDef</code>.
                    </p>
                    <p>There are three types of schedules.</p>
                    <ul>
                        <li>Date</li>
                        <li>Cron</li>
                        <li>Interval</li>
                    </ul>
                    <h3>RunDate</h3>
                    <p>Date is the simplest schedule. It
                            stores a single date and time for
                            when the job will be triggered to
                            run.
                    </p>
                    <h3>Cron</h3>
                    <p>Cron resembles the <code>Cron</code> utility found
                            in most UNIX-like operating systems.
                            The following fields are available
                            to define a cron schedule.
                    </p>
                    <ul>
                        <li><b>Year</b> 4-digit year</li>
                        <li><b>Month</b> 1-12</li>
                        <li><b>Day</b> day of the month (1-31)</li>
                        <li><b>Week</b> ISO week (1-53)</li>
                        <li><b>Day of Week</b>
                            number or name of day (0-6 or mon, tue, wed, thu, fri, sat, sun)</li>
                        <li><b>Hour</b> 0-23</li>
                        <li><b>Minute</b> 0-59</li>
                        <li><b>Second</b> 0-59</li>
                        <li><b>Start Date</b> earliest possible date/time to trigger the job</li>
                        <li><b>End Date</b> latest possible date/time to trigger the job</li>
                        <li><b>Jitter</b> advance or delay the job execution by jitter seconds</li>
                    </ul>
                    <p>A cron schedule will trigger when
                            current time matches all specified
                            time constraints. Unlike with
                            crontab expressions, you can omit
                            fields that you don’t need.
                    </p>
                    <h3>Interval</h3>
                    <p>Interval specifies a set amount of
                            time that must lapse before a job
                            will be triggered. The following fields are available
                            to define an interval schedule.
                    </p>
                    <ul>
                        <li><b>Weeks</b> integer for the total number of weeks</li>
                        <li><b>Days</b> integer for the total number of days</li>
                        <li><b>Hours </b> integer for the total number of hours</li>
                        <li><b>Seconds</b> integer for the total number of seconds</li>
                        <li><b>Start Date</b> earliest possible date/time to trigger the job</li>
                        <li><b>End Date</b> latest possible date/time to trigger the job</li>
                        <li><b>Jitter</b> advance or delay the job execution by jitter seconds</li>
                    </ul>
                    <p>An interval schedule will trigger a
                            job when the time interval has been
                            reached from the previous trigger
                            time.
                    </p>
                    <p>The <code>Is Active</code> box must be checked
                            to activate the schedule.
                    </p>
                    <p>The designer can give the schedule
                            a name to make it more convenient to
                            work with. The designer displays the
                            last run date and the next run date
                            for active schedules.
                    </p>

                    <h2 class="subtitle pb-2">Service Tasks</h2>
                    <p>Have you written <b>services</b> for
                            Windows? Linux? Mac? Then you know
                            that it can be difficult and that
                            the process works differently in
                            each environment. Occasionally
                            work-arounds are implemented for
                            actual services such as cron or the
                            Windows Task Scheduler. If the
                            machine running the service shuts
                            down, the service is stopped.
                    </p>
                    <p>SaaSGlue makes it easy to create a
                            service and deploy it to any
                            operating system. To run a task as a
                            service, simply set the
                            <code>autoRestart</code> property of the task
                            to <code>true</code> if using the SaaSGlue API.
                            If using the SaaSGlue cloud UI, in
                            the <b>Job Designer -&gt; Task</b> editor
                            view, check the <code>Auto restart</code>
                            checkbox. The task can target <code>any qualified agent</code> or a specific
                            agent. If the agent running an
                            <code>autoRestart</code> task is stopped or is
                            inactive for more than <strong>65 seconds</strong>,
                            the task will automatically be
                            restarted on another qualified
                            agent. If no qualified agent is
                            available, the task status will be
                            set to <code>Failed</code>. The containing job
                            can be configured to send a
                            notification if this occurs. If an
                            agent running an <code>autoRestart</code> task
                            goes offline and then comes back
                            online and the task is still running
                            on that agent and has also been
                            restarted on a new agent, the
                            instance on the agent that went
                            offline will be canceled.
                    </p>
                    <p>Auto restart tasks can have
                            multiple steps. The script for the
                            last step in the task should be
                            coded so that it will not exit
                            unless and until you want the
                            service to be stopped. Auto restart
                            tasks that exit normally or crash
                            are not restarted automatically.
                            However, if an auto restart task is
                            interrupted by <code>CTRL + C</code> or a
                            <code>SIGTERM/SIGKILL</code> signal it will be
                            automatically restarted.
                            Consequently if the machine running
                            an auto restart task is shut down,
                            the task will be automatically
                            restarted.
                    </p>

                    <h2 class="subtitle pb-2">Endpoint / Object Reference</h2>
                    <h2 class="subtitle pb-2">Agent</h2>
                    <p>The SaaSGlue Agent is the vehicle
                            for executing Scripts received from
                            the SaaSGlue cloud. The Agent can be
                            installed on any supported operating
                            system. When an Agent starts up it
                            reports to the SaaSGlue cloud which
                            tracks information about the Agent
                            including the attributes described
                            below. A few of the attributes can
                            be modified by users.
                    </p>
                    <h3>Reference</h3>
                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <code>id</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>_teamId</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>machineId</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>ipAddress</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>createDate</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>tags</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>numActiveTasks</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>lastHeartbeatTime</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>offline</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>sysInfo</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>cron</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>
                                    <code>propertyOverrides</code>
                                </td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Attribute Descriptions</h3>
                    <h4><b>id</b></h4>
                    <p>SaaSGlue automatically
                                    assigns an Agent ID when a
                                    new agent is installed and
                                    calls back to the SaaSGlue
                                    cloud. Users can discover
                                    the ID in the Agent Monitor
                                    or through the API. Tasks
                                    can be routed to a specific
                                    machine using the Agent ID.</p>

                    <h4><b>_teamId</b></h4>
                    <p>The ID of the Org object where the TaskDef is.</p>

                    <h4><b>machineId</b></h4>
                    <p>The hostname of the physical
                                    or virtual machine or
                                    container where the Agent is
                                    running.</p>
                    <p>Every machine connected to a
                                    SaaSGlue account must have a
                                    host name that is unique to
                                    the Org. The machineId will
                                    be reported in every Agent
                                    heartbeat. If the hostname
                                    changes then the Agent will
                                    be assigned a new ID.</p>

                    <h4><b>ipAddress</b></h4>
                    <p>The ipAddress attribute
                                    stores the IP Address of the
                                    machine where the Agent is
                                    installed.</p>
                    <p>The IP Address will be
                                    reported with each
                                    heartbeat. If the IP address
                                    of the machine is changed
                                    the ipAddress attribute will
                                    be updated but the Agent
                                    will not be assigned a new
                                    ID.</p>

                    <h4><b>createDate</b></h4>
                    <p>The date and time an Agent first runs on a machine.</p>

                    <h4><b>name</b></h4>
                    <p>The name attribute defaults
                                    to the machineId (hostname).
                                    However, it can be modified
                                    to create a user-defined
                                    name.</p>

                    <h4><b>tags</b></h4>
                    <p>Tags assigned to an Agent.
                                    Up to ten tags can be
                                    assigned to an Agent.</p>
                    <p>Tags are user defined. They
                                    are used in the Job Designer
                                    and Console for Task
                                    routing.</p>

                    <h4><b>numActiveTasks</b></h4>
                    <p>The number of Tasks
                                    currently being executed by
                                    this Agent.</p>

                    <h4><b>lastHeartbeatTime</b></h4>
                    <p>The last date and time
                                    SaaSGlue received a
                                    heartbeat from the Agent.</p>

                    <h4><b>offline</b></h4>
                    <p>If SaaSGlue has not received
                                    a heartbeat from an Agent
                                    for more than 5 minutes the
                                    offline attribute is set to
                                    "true". If the Agent begins
                                    sending a heartbeat again
                                    the offline attribute will
                                    be reset to “false”.</p>

                    <h4><b>sysInfo</b></h4>
                    <p>System information
                                    pertaining to the machine
                                    where the Agent is
                                    installed. The following
                                    information (if available)
                                    will be reported.</p>
                    <p>
                        Top 10 running processes (ordered by CPU usage):
                        <ul>
                            <li>Installed OS details</li>
                            <li>System date/time</li>
                            <li>CPU current speed</li>
                            <li>CPU temperature</li>
                            <li>Current load information</li>
                            <li>File system information</li>
                            <li>File system performance statistics</li>
                            <li>Installed user accounts</li>
                            <li>Memory capacity/usage information</li>
                            <li>Battery capacity/usage information</li>
                            <li>Network connections</li>
                            <li>Current internet latency</li>
                            <li>Network statistics</li>
                            <li>Disks IO</li>
                        </ul>
                    </p>
                    <p>The Agent will report system
                                    information when it is first
                                    installed. It can be
                                    configured to report updated
                                    information with each
                                    heartbeat.</p>

                    <h4><b>cron</b></h4>
                    <p>Cron jobs that reside on the
                                    machine where the Agent is
                                    installed. These jobs can be
                                    uploaded to SaaSGlue where
                                    they can be centrally
                                    managed and orchestrated.</p>

                    <h4><b>propertyOverrides</b></h4>
                    <p>Agent settings that can be
                                    overridden by users
                                    including the following:</p>
                    <ul>
                        <li><code>maxActiveTasks</code> limits the
                                    number of tasks an Agent can
                                    run in parallel. If more
                                    than <code>maxActiveTasks</code> are
                                    routed to an Agent, Tasks in
                                    excess of <code>maxActiveTasks</code>
                                    will be queued until running
                                    Tasks are completed. If a
                                    Task is queued for more than
                                    the Task TTL, the Task will
                                    be routed as “failed”.</li>
                        <li><code>inactivePeriodWaitTime</code> sets
                                    the max amount of time an
                                    Agent will remain idle
                                    before it runs a specified
                                    Task. This is useful for
                                    some Tasks, such as shutting
                                    down an idle EC2
                                    instance.</li>
                        <li><code>inactiveAgentTask</code> is the
                                    Task that will be run if and
                                    when the <code>inactivePeriodWait</code>
                                    time is exceeded. The Task
                                    must be JSON formatted and
                                    adhere to the Task
                                    specification.</li>
                        <li><code>handleGeneralTasks</code> can
                                    exclude an Agent from
                                    running Tasks that are
                                    marked as "run on any
                                    machine" or "run on all
                                    machines" if this attribute
                                    is set to “false”.</li>
                        <li><code>trackSysInfo</code> reports updated
                                    system information to the
                                    SaaSGlue cloud with each
                                    heartbeat.</li>
                    </ul>

                    <h3>Actions</h3>
                    <h4>download</h4>
                    <p>Download the Agent install from SaaSGlue - <code>agentDownload/agentstub/:platform/:arch</code></p>
                    <p><code>:platform</code>(required) - must be one of: <code>linux, win, macos, alpine, freebsd</code></p>
                    <p><code>:arch</code>(optional) - must be one of: <code>x64, x86, armv6, armv7</code></p>
                    <p>Not all platform/arch combinations are valid.</p>

                    <h3>Sample Code</h3>
                    <h4>Get all Agents objects in the Org</h4>
                    <p>Request</p>
                    <pre>curl --location --request GET 'https://saasglue.com/api/v0/agent' --header 'Content-Type: application/json' --header 'Auth: [auth token]' --header '_teamId: [teamId]' --data-raw ''</pre>
                    <p>Response</p>
                    <pre>
{
    "statusCode":200,
    "data":{
        "numActiveTasks":0,
        "lastHeartbeatTime":1588863480826,
        "offline":false,
        "cron":"",
        "_teamId":"[teamId]",
        "machineId":"[Machine ID]",
        "ipAddress":"[IP Address]",
        "name":"[Agent Name]",
        "propertyOverrides":{
            "trackSysInfo":false,
            "maxActiveTasks":20
        },
        "sysInfo":{},
        "createDate":"[Date]",
        "tags":{},
        "id":"[Agent ID]",
        "version":0,
        "type":"Agent"
    }
}
                    </pre>

                    <h4>Update an Agent property</h4>
                    <p>Request</p>
                    <pre>curl --location --request PUT 'https://saasglue.com/api/v0/agent/properties/[agentId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' \ --data-raw '{ "trackSysInfo": true }'</pre>
                    <p>Response</p>
                    <pre>
{
    "statusCode":200,
    "data":{
        "numActiveTasks":0,
        "lastHeartbeatTime":1588863480826,
        "offline":false,
        "cron":"",
        "_teamId":"[teamId]",
        "machineId":"[Machine ID]",
        "ipAddress":"[IP Address]",
        "name":"[Agent Name]",
        "propertyOverrides":{
            "trackSysInfo":true,
            "maxActiveTasks":20
        },
        "sysInfo":{},
        "createDate":"[Date]]",
        "tags":{},
        "id":"[Agent ID]",
        "version":0,
        "type":"Agent"
    }
}
                    </pre>

                    <h2 class="subtitle pb-2">Artifact</h2>
                    <p>Artifacts are files that can be uploaded to SaaSGlue to be used in the execution of Jobs and Tasks.</p>
                    <p>An <code>Http GET</code> request will return a secure URL which can be used to download an artifact. <code>Http PUT</code> and <code>POST</code> requests will return a secure URL which can be used to upload an artifact.</p>
                    <h3>Reference</h3>
                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>_teamId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>prefix</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Attribute Descriptions</h3>
                    <h4><b>id</b></h4>
                    <p>Unique ID assigned when a new Artifact object is created.</p>

                    <h4><b>_teamId</b></h4>
                    <p>The ID of the Org object where the <code>TaskDef</code> is created.</p>

                    <h4><b>name</b></h4>
                    <p>Artifact Name is the name of the file that is uploaded. The combination of Prefix and Name attributes for an Artifact must be unique within an Org.</p>

                    <h4><b>prefix</b></h4>
                    <p>Prefix is the path name where an artifact is stored in SaaSGlue. The path can include one or more <code>/</code> delimited folder names - e.g. <code>prod/loader/</code>.</p>

                    <h3>Sample code</h3>
                    <h4>Upload an artifact</h4>

                    <p>Request</p>
                    <pre>curl --location --request POST 'https://saasglue.com/api/v0/artifact' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' \ --data-raw '{ "_teamId": "[teamId]]", "prefix": "[prefix]", "name": "[file name]" }'</pre>
                    <p>Response</p>
                    <pre>
{
    "statusCode":201,
    "data":{
        "prefix":"[prefix]",
        "type":"Artifact",
        "url":"[secure url]",
        "_teamId":"[teamId]",
        "name":"[file name]",
        "id":"[Artifact ID]",
        "version":0
    }
}
                    </pre>
                    <p>Now use the <code>url</code> returned from the previous call to upload the file to SaaSGlue</p>
                    <pre>curl -v --upload-file [file name] [url] --header 'Content-Type: multipart/form-data'</pre>

                    <h4>Download an artifact</h4>
                    <p>Request</p>
                    <pre>curl --location --request GET 'https://saasglue.com/api/v0/artifact/[ArtifactID]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --data-raw ''</pre>
                    <p>Now use the “url” returned from the previous call to download the file</p>
                    <pre>curl [url] > [file name]</pre>

                    <h2 class="subtitle pb-2">Job</h2>
                    <p>A <code>Job</code> is the runtime implementation of a <code>JobDef</code>. A <code>Job</code> can be created from an existing <code>JobDef</code> or from a properly formatted JSON document. Jobs are automatically submitted for execution when they are created.</p>
                    <p>Jobs can be created from a <code>JobDef</code> by</p>
                    <ul>
                        <li>scheduling the <code>JobDef</code></li>
                        <li>with the SaaSGlue web application</li>
                        <li>by submitting a POST to the Job API endpoint</li>
                    </ul>
                    <p>Jobs are created from a JSON document by submitting the JSON document to the Job API endpoint.</p>

                    <h3>Reference</h3>
                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>_teamId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>_jobDefId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x1</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>runId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x2</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>createdBy</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>dateCreated</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>dateScheduled</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>dateStarted</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>dateCompleted</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>status</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>error</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>runtimeVars</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>runAsService</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                        </tbody>
                    </table>
                    <ul>
                        <li>1 Required if <code>Job</code> is created from <code>JobDef</code> object</li>
                        <li>2 Required if <code>Job</code> is created from API call</li>
                    </ul>

                    <h3>Attribute Descriptions</h3>
                    <h4><b>id</b></h4>
                    <p>Unique ID assigned when a new Job object is created.</p>

                    <h4><b>_teamId</b></h4>
                    <p>The ID of the Org object where the Job is created.</p>

                    <h4><b>_jobDefId</b></h4>
                    <p>The JobDef ID from which the Job was created. It only applies to Jobs created from a JobDef object.</p>

                    <h4><b>runId</b></h4>
                    <p>JobDefs have a counter that is incremented each time a Job is created from the JobDef object. The runId attribute is the value of that counter when the Job was created. It can be used to order Jobs created from the same JobDef sequentially. For example, if a given Job object is the third one ever created from a JobDef object, it will have a runId attribute of 3.</p>

                    <h4><b>name</b></h4>
                    <p>The Job name. If the Job is created from a JobDef, the Job name is copied from the JobDef name. If the Job is created from JSON, the name must be included in the JSON document.</p>

                    <h4><b>createdBy</b></h4>
                    <p>The id of the user who created the Job. For Jobs created from a JobDef it will be the user who created the JobDef object. For Jobs created from an API call it will be based on the auth token of the user submitting the JSON document.</p>

                    <h4><b>dateCreated</b></h4>
                    <p>The date and time the Job was created.</p>

                    <h4><b>dateScheduled</b></h4>
                    <p>The date and time a Job is scheduled to run. It only applies to Jobs created from JobDef objects with a Schedule.</p>

                    <h4><b>dateStarted</b></h4>
                    <p>The date and time the Job started.</p>

                    <h4><b>dateCompleted</b></h4>
                    <p>The date and time the Job completed.</p>

                    <h4><b>status</b></h4>
                    <p>The current <code>Job</code> status. Here are the possible values.</p>
                    <ul>
                        <li>0 = NOT_STARTED</li>
                        <li>10 = RUNNING</li>
                        <li>14 = INTERRUPTING</li>
                        <li>15 = INTERRUPTED</li>
                        <li>17 = CANCELLING</li>
                        <li>20 = SUCCEEDED</li>
                        <li>21 = CANCELLED</li>
                        <li>22 = FAILED</li>
                        <li>23 = SKIPPED</li>
                    </ul>

                    <h4><b>error</b></h4>
                    <p>The error message if any error occurred running the <code>Job</code>.</p>

                    <h4><b>runtimeVarsx</b></h4>
                    <p>Runtime variables for a <code>Job</code> are set when the <code>Job</code> is created manually (not by a schedule). If the <code>Job</code> is created from a <code>JobDef</code> and any <code>Job</code> runtime variables have the same name as the <code>JobDef</code> runtime variables, the <code>Job</code> values will override the <code>JobDef</code> values.</p>
                    <p><code>{"key1": "value1", "key2": "value2"}</code></p>
                    <p>If <code>true</code> the <code>Job</code> will run as a service.</p>

                    <h4><b>runAsService</b></h4>
                    <p>runAsService Jobs can contain only one <code>Task</code>. The script in the last step of the <code>Task</code> must be written in such a way as to prevent the script from exiting, for example with a <code>while loop</code>. If the script exits (either naturally or by a crash) the <code>Job</code> will not be restarted.</p>
                    <p>If the Agent on which the <code>Job</code> is running fails to send a heartbeat for 30 minutes, the <code>Job</code> will be republished to another qualified Agent. If the original Agent subsequently connects and the <code>Job</code> is still running on that Agent, it will be <code>CANCELLED</code> on that Agent.</p>
                    <p>A runAsService <code>Job</code> will stop if it is in a <code>SUCCEEDED</code>, <code>CANCELLED</code> or <code>FAILED</code> state.</p>

                    <h3>Actions</h3>
                    <h4><b>interrupt</b></h4>
                    <p>Interrupt a <code>job</code>. <code>Job</code> status must be <code>RUNNING</code>.</p>
                    <p><code>jobaction/interrupt/:jobId</code></p>

                    <h4><b>restart</b></h4>
                    <p>Restart a <code>job</code>. <code>Job</code> status must be <code>INTERRUPTED</code> or <code>FAILED</code>.</p>
                    <p><code>jobaction/restart/:jobId</code></p>

                    <h4><b>cancel</b></h4>
                    <p>Cancel a job. Job status must be <code>NOT_STARTED</code>, <code>RUNNING</code>, <code>INTERRUPTING</code> or <code>INTERRUPTED</code>.</p>
                    <p><code>jobaction/cancel/:jobId</code></p>

                    <h3>Sample Code</h3>
                    <h4>Create and run an ad hoc job</h4>
                    <p>Request</p>
                    <pre>curl --location --request POST 'https://saasglue.com/api/v0/job' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' --data '{ "job": { "name": "Job Name", "dateCreated": "[date]", "tasks": [ { "_teamId": "[teamId]", "name": "Task1", "requiredTags": , "requiredTags": {"tag": "value"}, "dependsOn": [], "steps": [ { "name": "Step1", "script": { "scriptType": "SH", "code": "bHMgLWx0cgo=" }, "order": 0, "arguments": "", "variables": "" } ] } ] } }'</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":201,
    "data":{
        "dateCreated":"[date]",
        "runAsService":false,
        "name":"Job Name",
        "_teamId":"[teamId]",
        "createdBy":"[userId]",
        "dateStarted":"[date]",
        "status":10,
        "runtimeVars":{},
        "id":"[Job id]",
        "version":0,
        "type":"Job"
    }
}
                    </pre>

                    <h4>Create and run a job based on a JobDef template</h4>
                    <p>Request</p>
                    <pre>curl --location --request POST 'https://saasglue.com/api/v0/job' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]’ --header '_jobDefId: [jobDefId]' --data-raw ''</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":201,
    "data":{
        "dateCreated":"[date]",
        "runAsService":false,
        "_teamId":"[date]",
        "_jobDefId":"[date]",
        "runId":14,
        "name":"[name]",
        "createdBy":"[userId]",
        "status":0,
        "runtimeVars":{},
        "id":"[jobId]",
        "version":0,
        "type":"Job"
    }
}
                    </pre>

                    <h4>Get a job using the job id</h4>
                    <p>Request</p>
                    <pre>'https://saasglue.com/api/v0/job/[jobId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]'</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":200,
    "data":{
        "dateCreated":"[date]",
        "runAsService":false,
        "name":"Job Name",
        "_teamId":"[teamId]",
        "createdBy":"[userId]",
        "dateStarted":"[date]",
        "status":10,
        "runtimeVars":{},
        "id":"[Job id]",
        "version":0,
        "type":"Job"
    }
}
                    </pre>

                    <h2 class="subtitle pb-2">JobDef</h2>
                    <p>A <code>JobDef</code> object is a template used to create and run a job. Typically a job template is created with the Job Designer and stored in a SaaSGlue account.</p>
                    <p>Jobs can also be created by submitting a <code>JobDef</code> object in JSON format to the API. In this way, ad hoc jobs can be created and executed dynamically.</p>

                    <h3>Reference</h3>
                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>_teamId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>status</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>lastRunId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>maxInstances</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>misfireGraceTime</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>coalesce</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>createdBy</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>dateCreated</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>runtimeVars</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>pauseOnFailedJob</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                        </tbody>
                    </table>

                    <h3>Attribute Descriptions</h3>
                    <h4><b>id</b></h4>
                    <p>Unique ID assigned when a new <code>JobDef</code> object is created.</p>

                    <h4><b>_teamId</b></h4>
                    <p>The ID of the Org object where the <code>JobDef</code> is created.</p>

                    <h4><b>name</b></h4>
                    <p>This attribute stores a user created name for the <code>JobDef</code> object. The name should be descriptive but does not have to be unique.</p>

                    <h4><b>status</b></h4>
                    <p>This attribute records the current status of the <code>JobDef</code> object. Here are the possible statuses.</p>
                    <ul>
                        <li>10 = <code>RUNNING</code> - indicates that new Jobs can be created and run using this <code>JobDef</code>.</li>
                        <li>15 = <code>PAUSED</code> - indicates that new Jobs from this <code>JobDef</code> can be created but will not run until the <code>JobDef</code> status is <code>RUNNING</code>.</li>
                    </ul>

                    <h4><b>lastRunId</b></h4>
                    <p>Set to <code>0</code> for new <code>JobDef</code> objects and is incremented for each <code>Job</code> created from a given <code>JobDef</code>.</p>

                    <h4><b>maxInstances</b></h4>
                    <p>The maximum number of parallel running Jobs created from the <code>JobDef</code>. For instance, if set to <code>1</code>, only one <code>Job</code> will run at a time. Any additional Jobs created will be queued to run when the current <code>Job</code> is finished.</p>

                    <h4><b>misfireGraceTime</b></h4>
                    <p>The amount of time a <code>Job</code> can be queued past the scheduled start time before it is cancelled. This attribute can only be used with scheduled <code>JobDefs</code>. It is useful for situations when time is a critical factor in running a <code>Job</code>.</p>

                    <h4><b>coalesce</b></h4>
                    <p>The coalesce attribute helps job designers determine how to handle situations where a <code>JobDef</code> object has multiple queued Jobs. This could occur if multiple Jobs are created but <code>maxInstances</code> is set to <code>1</code> or if Jobs are created when a <code>JobDef</code> is <code>PAUSED</code>. The next time SaaSGlue is able to run Jobs for the given <code>JobDef</code>, it may not be practical or desirable to run all the queued Jobs. If coalesce is set to <code>TRUE</code>, the first queued <code>Job</code> will run and the rest will be <code>SKIPPED</code> with the error message <code>Job skipped due to coalesce</code>. Otherwise all Jobs will run in parallel.</p>

                    <h4><b>createdBy</b></h4>
                    <p>The ID of the User who created the <code>JobDef</code> object.</p>

                    <h4><b>dateCreated</b></h4>
                    <p>The date/time the JobDef object was created.</p>

                    <h4><b>runtimeVars</b></h4>
                    <p>A list of key/value pairs that can be dynamically injected into Job Scripts, <code>Script</code> arguments or environment variables at runtime.</p>
                    <p><code>{"key1": "value1", "key2": "value2"}</code></p>

                    <h4><b>pauseOnFailedJob</b></h4>
                    <p>This attribute can be used for example for <code>JobDef</code> objects with recurring Job executions that must complete in order. If a <code>Job</code> created from a <code>JobDef</code> is interrupted or fails and the <code>JobDef</code> <code>pauseOnFailedJob</code> attribute is <code>TRUE</code>, the <code>JobDef</code> Status will be updated to <code>PAUSED</code>. This will prevent all future <code>Job</code> executions until the <code>Job</code> is completed with status <code>SUCCEEDED</code>, <code>CANCELLED</code> or <code>SKIPPED</code> and there are no other <code>INTERRUPTED</code> or <code>FAILED</code> Jobs for this <code>JobDef</code>. Users can also manually pause or resume JobDefs.</p>

                    <h3>Sample Code</h3>
                    <h4>Create a JobDef</h4>
                    <p>Request</p>
                    <pre>curl --location --request POST 'http://saasglue.com/api/v0/jobdef' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' \ --data '{ "_teamId" : "[teamId]", "name" : "Job Name" }'</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":201,
    "data":{
        "status":10,
        "lastRunId":0,
        "maxInstances":1,
        "dateCreated":"[date]",
        "pauseOnFailedJob":false,
        "_teamId":"[teamId]",
        "name":"Job Name",
        "createdBy":"[userId]",
        "id":"[id of new JobDef]",
        "version":0,
        "type":"JobDef"
    }
}
                    </pre>

                    <h4>Get a JobDef using the jobDefId</h4>
                    <p>Request</p>
                    <pre>curl --location --request GET 'http://saasglue.com/api/v0/jobdef/[JobDef id]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]'</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":200,
    "data":{
        "status":10,
        "lastRunId":0,
        "maxInstances":1,
        "dateCreated":"[date]",
        "pauseOnFailedJob":false,
        "_teamId":"[teamId]",
        "name":"Job Name",
        "createdBy":"[userId]",
        "id":"[JobDef id]",
        "version":0,
        "type":"JobDef"
    }
}
                    </pre>

                    <h2 class="subtitle pb-2">Schedule</h2>
                    <p>A Schedule defines when a <code>JobDef</code> runs. A <code>JobDef</code> can have multiple Schedules but a Schedule can only be assigned to a single <code>JobDef</code>.</p>

                    <h3>General Schedule Reference</h3>
                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                                <th>DELETE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>id</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>_teamId</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>createdBy</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>lastUpdatedBy</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>lastScheduledRunDate</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>nextScheduledRunDate</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>name</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>isActive</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>TriggerType</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>misfire_grace_time</code></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>coalesce</code></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>max_instances</code></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>RunDate</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x1</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>cron2</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><code>interval3</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <ul>
                        <li>1 Required only for <code>date</code> type Schedules</li>
                        <li>2 Consists of key value pairs defined in the <code>Cron Schedule Reference</code> – required for <code>cron</code> type Schedules</li>
                        <li>3 Consists of key value pairs defined in the <code>Interval Schedule Reference</code> – required for <code>interval</code> type Schedules</li>
                    </ul>

                    <h3>Cron Schedule Reference</h3>
                    <p>This reference is to be used in connection with the General Schedule Reference above.</p>

                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>Year</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Month</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Day</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Week</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Day_Of_Week</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Hour</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Minute</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Second</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Start_Date</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>End_Date</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Jitter</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="notification is-info is-light">At least one attribute is required for a <code>cron</code> type Schedule</div>

                    <h3>Interval Schedule Reference</h3>
                    <p>This reference is to be used in connection with the General Schedule Reference above.</p>

                    <table class="table is-striped is-hoverable is-bordered">
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>GET</th>
                                <th>PUT</th>
                                <th>POST (required)</th>
                                <th>POST (optional)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><code>Weeks</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Days</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Hours</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Minutes</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Seconds</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Start_Date</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>End_Date</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                            <tr>
                                <td><code>Jitter</code></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                                <td></td>
                                <td class="has-text-primary has-background-primary-light">x</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="notification is-info is-light">At least one attribute is required for an <code>interval</code> type Schedule</div>

                    <h3>General Schedule Attribute Descriptions</h3>
                    <h4><b>id</b></h4>
                    <p>Unique ID assigned when a new Schedule object is created.</p>

                    <h4><b>_teamId</b></h4>
                    <p>The ID of the Org object where the <code>TaskDef</code> is created.</p>

                    <h4><b>createdBy</b></h4>
                    <p>The ID of the user that created the Schedule.</p>

                    <h4><b>lastUpdatedBy</b></h4>
                    <p>The ID of the last user to modify the Schedule.</p>

                    <h4><b>lastScheduledRunDate</b></h4>
                    <p>The next date/time when the Schedule will be triggered.</p>

                    <h4><b>nextScheduledRunDate</b></h4>
                    <p>The last date/time when the Schedule was triggered.</p>

                    <h4><b>name</b></h4>
                    <p>The user created name for a Schedule.</p>

                    <h4><b>isActive</b></h4>
                    <p>If the isActive attribute is set to <code>false</code> no events for this Schedule will be triggered. If it is <code>true</code> future events will be triggered according to the Schedule but past skipped events will not be triggered.</p>

                    <h4><b>TriggerType</b></h4>
                    <p>The type of trigger that kicks off a schedule, including <code>date</code>, <code>cron</code> or <code>interval</code>.</p>

                    <h4><b>RunDated</b></h4>
                    <p>This object stores the date and time when a Schedule will execute if it has a <code>date</code> type Trigger.</p>

                    <h3>Cron Schedule Attribute Descriptions</h3>
                    <h4><b>Year</b></h4>
                    <p>The year in a <code>cron</code> TriggerType.</p>

                    <h4><b>Month</b></h4>
                    <p>The month in a <code>cron</code> TriggerType.</p>

                    <h4><b>Day</b></h4>
                    <p>The day in a <code>cron</code> TriggerType.</p>

                    <h4><b>Week</b></h4>
                    <p>The week in a <code>cron</code> TriggerType.</p>

                    <h4><b>Day_Of_Week</b></h4>
                    <p>The day of the week in a <code>cron</code> TriggerType.</p>

                    <h4><b>Hour</b></h4>
                    <p>The hour in a <code>cron</code> TriggerType.</p>

                    <h4><b>Minute</b></h4>
                    <p>The minute in a <code>cron</code> TriggerType.</p>

                    <h4><b>Second</b></h4>
                    <p>The second in a <code>cron</code> TriggerType.</p>

                    <h4><b>Start_Date</b></h4>
                    <p>The earliest date/time a Schedule can be triggered for a <code>cron</code> TriggerType.</p>

                    <h4><b>End_Date</b></h4>
                    <p>The latest date/time a Schedule can be triggered for a <code>cron</code> TriggerType.</p>

                    <h4><b>Jitter</b></h4>
                    <p>Will randomly advance or delay the scheduled start time for an event by jitter seconds for a <code>cron</code> TriggerType.</p>

                    <h3>Interval Schedule Attribute Descriptions</h3>
                    <h4><b>Weeks</b></h4>
                    <p>The weeks in an <code>interval</code> TriggerType.</p>

                    <h4><b>Days</b></h4>
                    <p>The days in an <code>interval</code> TriggerType.</p>

                    <h4><b>Hours</b></h4>
                    <p>The hours in an <code>interval</code> TriggerType.</p>

                    <h4><b>Minutes</b></h4>
                    <p>The minutes in an <code>interval</code> TriggerType.</p>

                    <h4><b>Seconds</b></h4>
                    <p>The seconds in an <code>interval</code> TriggerType.</p>

                    <h4><b>Start_Date</b></h4>
                    <p>The earliest date/time a Schedule can be triggered for an <code>interval</code> TriggerType.</p>

                    <h4><b>End_Date</b></h4>
                    <p>The latest date/time a Schedule can be triggered for an <code>interval</code> TriggerType.</p>

                    <h4><b>Jitter</b></h4>
                    <p>Will randomly advance or delay the scheduled start time for an event by jitter seconds for an <code>interval</code> TriggerType.</p>

                    <h3>Sample Code</h3>
                    <h4>Create a Schedule</h4>
                    <p>Request</p>
                    <pre>curl --location --request POST 'https://saasglue.com/api/v0/schedule' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --header 'Content-Type: text/plain' \ --data-raw '{ "_teamId": "[teamId]]", "_jobDefId": "{jobDefId}", "name": "Schedule_1", "isActive": false, "TriggerType": "interval", "interval": { "Seconds": 5 } }'</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":201,
    "data":{
        "isActive":false,
        "_teamId":"[teamId]",
        "_jobDefId":"[jobDefId]",
        "name":"[Schedule name]",
        "TriggerType":"interval",
        "interval":{
            "Seconds":5
        },
        "createdBy":"[userId]",
        "lastUpdatedBy":"[userId]",
        "cron":{},
        "id":"[Schedule ID]",
        "version":0,
        "type":"Schedule"
    }
}
                    </pre>

                    <h4>Get Schedules for a JobDef</h4>
                    <p>Request</p>
                    <pre>curl --location --request GET 'https://saasglue.com/api/v0/schedule/?filter=_jobDefId%3D%3D[jobDefId]' --header 'Content-Type: application/json' --header 'auth: [auth token]' --header '_teamId: [teamId]' --data-raw ''</pre>

                    <p>Response</p>
                    <pre>
{
    "statusCode":200,
    "data":[
        {
            "isActive":false,
            "_teamId":"[teamId]",
            "_jobDefId":"[jobDefId]",
            "name":"Schedule_1",
            "TriggerType":"interval",
            "interval":{
                "Seconds":5
            },
            "createdBy":"[userId]",
            "lastUpdatedBy":"[userId]",
            "cron":{},
            "id":"[Schedule ID]",
            "version":0,
            "type":"Schedule"
        }
    ],
    "meta":{
        "count":1
    }
}
                    </pre>

                    
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import Menu from './Menu.vue';

    export default defineComponent({
        name: 'Docs',
        components: { Menu }
    });
</script>

<style lang="scss" scoped>
    .subtitle {
        border-bottom: 1px solid #ccc;
    }
</style>
