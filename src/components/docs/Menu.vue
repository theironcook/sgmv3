<template>
    <div class="menu is-size-5 is-size-7-tablet is-size-6-mobile" :class="{open: isMenuOpen}" @click="closeMenu">
        <div class="menu-overlay close-menu"></div>
        <div class="mobile-menu-button" @click="openMenu">
            <img class="mobile-menu" src="@/assets/images/hamburger-menu.svg" />
        </div>
        <aside class="menu-content">
            <ul class="menu-list">
                <li>
                    <a href="/docs#account-management" class="close-menu" :class="{'is-active': $route.hash === '#account-management'}">Account Management</a>
                    <ul>
                        <li><a href="/docs#invite-members" class="close-menu" :class="{'is-active': $route.hash === '#invite-members'}">Invite Team Members</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="menu-list">
                <li>
                    <a href="/docs#product-docs" class="close-menu" :class="{'is-active': $route.hash === '#product-docs'}">Product Documentation</a>
                    <ul>
                        <li><a href="/docs#sg-overview" class="close-menu" :class="{'is-active': $route.hash === '#sg-overview'}">SaaSGlue Framework Overview</a></li>
                        <li><a href="/docs#jobs-structure" class="close-menu" :class="{'is-active': $route.hash === '#jobs-structure'}">The Structure of Jobs</a></li>
                        <li><a href="/docs#job-definition" class="close-menu" :class="{'is-active': $route.hash === '#job-definition'}">Job Definition</a></li>
                        <li><a href="/docs#task-definition" class="close-menu" :class="{'is-active': $route.hash === '#task-definition'}">Task Definition</a></li>
                        <li><a href="/docs#step-definition" class="close-menu" :class="{'is-active': $route.hash === '#step-definition'}">Step Definition</a></li>
                        <li><a href="/docs#script-definition" class="close-menu" :class="{'is-active': $route.hash === '#script-definition'}">Script Definition</a></li>
                        <li><a href="/docs#script-injection" class="close-menu" :class="{'is-active': $route.hash === '#script-injection'}">Script Injection</a></li>
                        <li><a href="/docs#runtime-variables" class="close-menu" :class="{'is-active': $route.hash === '#runtime-variables'}">Runtime Variables</a></li>
                        <li><a href="/docs#job-schedule" class="close-menu" :class="{'is-active': $route.hash === '#job-schedule'}">Job Schedule</a></li>
                        <li><a href="/docs#service-tasks" class="close-menu" :class="{'is-active': $route.hash === '#service-tasks'}">Service Tasks</a></li>
                    </ul>
                </li>
            </ul>

            <ul class="menu-list">
                <li>
                    <a href="/docs#endpoint" class="close-menu" :class="{'is-active': $route.hash === '#endpoint'}">Endpoint / Object Reference</a>
                    <ul>
                        <li><a href="/docs#agent" class="close-menu" :class="{'is-active': $route.hash === '#agent'}">Agent</a></li>
                        <li><a href="/docs#artifact" class="close-menu" :class="{'is-active': $route.hash === '#artifact'}">Artifact</a></li>
                        <li><a href="/docs#job" class="close-menu" :class="{'is-active': $route.hash === '#job'}">Job</a></li>
                        <li><a href="/docs#jobdef" class="close-menu" :class="{'is-active': $route.hash === '#jobdef'}">JobDef</a></li>
                        <li><a href="/docs#schedule" class="close-menu" :class="{'is-active': $route.hash === '#schedule'}">Schedule</a></li>
                        <li><a href="/docs#script" class="close-menu" :class="{'is-active': $route.hash === '#script'}">Script</a></li>
                        <li><a href="/docs#step" class="close-menu" :class="{'is-active': $route.hash === '#step'}">Step</a></li>
                        <li><a href="/docs#stepdef" class="close-menu" :class="{'is-active': $route.hash === '#stepdef'}">StepDef</a></li>
                        <li><a href="/docs#stepoutcome" class="close-menu" :class="{'is-active': $route.hash === '#stepoutcome'}">StepOutcome</a></li>
                        <li><a href="/docs#task" class="close-menu" :class="{'is-active': $route.hash === '#task'}">Task</a></li>
                        <li><a href="/docs#taskdef" class="close-menu" :class="{'is-active': $route.hash === '#taskdef'}">TaskDef</a></li>
                        <li><a href="/docs#taskoutcome" class="close-menu" :class="{'is-active': $route.hash === '#taskoutcome'}">TaskOutcome</a></li>
                        <li><a href="/docs#teamvariable" class="close-menu" :class="{'is-active': $route.hash === '#teamvariable'}">TeamVariable</a></li>
                    </ul>
                </li>
            </ul>
        </aside>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Menu',

        data (): { isMenuOpen: boolean } {
            return {
                isMenuOpen: false
            };
        },

        methods: {
            closeMenu (e: MouseEvent): void {
                const el = e.target as HTMLElement;

                if (el.classList.contains('close-menu')) {
                    document.documentElement.classList.remove('noscroll');
                    this.isMenuOpen = false;
                }
            },

            openMenu (): void {
                this.isMenuOpen = true;
                document.documentElement.classList.add('noscroll');
            }
        }
    });
</script>

<style scoped lang="scss">
    @import 'bulma/sass/utilities/mixins';

    .menu {
        height: calc(100vh - 7.5rem);
        top: 7.5rem;
        overflow: auto;
        position: sticky;
    }

    .mobile-menu-button,
    .menu-overlay {
        display: none;
    }

    @include mobile {
        .menu {
            position: fixed;
            z-index: 100;
            top: 0;
            right: 0;
            width: 0;
            height: 100%;
            overflow: unset;

            .mobile-menu-button {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 50px;
                height: 50px;
                border: 1px solid #ccc;
                background: #ccc;
                border-radius: 30%;
                position: fixed;
                right: 0;
                bottom: 20%;
                z-index: 101;
                border-top-right-radius: 0;
                border-bottom-right-radius: 0;
                text-align: center;
            }

            .menu-content {
                position: fixed;
                z-index: 101;
                padding-left: 1rem;
                overflow: auto;
                top: 0;
                right: 0;
                width: 60%;
                height: 100%;
                background: #fff;
                transform: translateX(100%);
                transition: transform .5s ease;
            }

            &.open {
                width: 100%;

                .menu-content {
                    transform: translateX(0);
                }

                .menu-overlay {
                    display: block;
                    position: fixed;
                    z-index: 99;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, .6);
                }
            }
        }
    }
</style>
