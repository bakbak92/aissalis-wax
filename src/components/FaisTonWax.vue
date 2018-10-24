<template>
    <v-container>
        <v-layout row>
            <v-flex md4 class="bleu">
                <v-card>
                    <v-toolbar color="teal" dark>
                    <v-toolbar-side-icon></v-toolbar-side-icon>

                    <v-toolbar-title>Manage</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                        <v-icon>more_vert</v-icon>
                    </v-btn>
                    </v-toolbar>

                    <v-list>
                    <template v-for="(item, index) in items">
                        <v-list-tile
                        v-if="item.action"
                        :key="item.title"
                        >
                        <v-list-tile-action>
                            <v-icon>{{ item.action }}</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                        </v-list-tile-content>
                        </v-list-tile>

                        <v-divider
                        v-else-if="item.divider"
                        :key="index"
                        ></v-divider>

                        <v-subheader
                        v-else-if="item.header"
                        :key="item.header"
                        >
                        {{ item.header }}
                        </v-subheader>
                    </template>
                    </v-list>
                </v-card>
            </v-flex>
            <v-flex md8 class="vert">
                 <v-stepper v-model="e1">
                    <v-stepper-header>
                        <v-stepper-step :complete="e1 > 1" step="1">Name of step 1</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step :complete="e1 > 2" step="2">Name of step 2</v-stepper-step>

                        <v-divider></v-divider>

                        <v-stepper-step step="3">Name of step 3</v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                        <v-stepper-content step="1">
                            <v-card
                            class="mb-5"
                            color="grey lighten-1"
                            height="200px"
                            ></v-card>

                            <v-btn
                            color="primary"
                            @click="e1 = 2"
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="2">
                            <v-card
                            class="mb-5"
                            color="grey lighten-1"
                            height="200px"
                            ></v-card>

                            <v-btn
                            color="primary"
                            @click="e1 = 3"
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-content step="3">
                            <v-card
                            class="mb-5"
                            color="grey lighten-1"
                            height="200px"
                            ></v-card>

                            <v-btn
                            color="primary"
                            @click="e1 = 1"
                            >
                            Continue
                            </v-btn>

                            <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return {
            items: [
                {
                    action: 'move_to_inbox',
                    title: 'Inbox'
                },
                {
                    action: 'send',
                    title: 'Sent'
                },
                {
                    action: 'delete',
                    title: 'Trash'
                },
                {
                    action: 'report',
                    title: 'Spam'
                },
                { divider: true },
                { header: 'Labels' },
                {
                    action: 'label',
                    title: 'Family'
                },
                {
                    action: 'label',
                    title: 'Friends'
                },
                {
                    action: 'label',
                    title: 'Work'
                }
            ],
            e1: 0
        }
    }
}
</script>

<style lang="scss">

</style>
