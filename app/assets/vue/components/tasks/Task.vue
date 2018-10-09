<template>
    <v-list two-line>
        <template v-for="(item, index) in tasks">
            <v-list-tile :key="item.id">
                <v-list-tile-action>
                    <v-checkbox v-model="item.completed"></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title :class="{'task-completed': item.completed}">{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ item.description }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action v-if="false">
                    <v-btn icon>
                        <v-icon small color="grey">edit</v-icon>
                    </v-btn>
                </v-list-tile-action>
                <v-list-tile-action>
                    <v-btn icon>
                        <v-icon small color="red">delete</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < tasks.length" :key="`divider-${index}`"></v-divider>
        </template>
    </v-list>
</template>

<script>
export default {
    props: ['tasks']
}
</script>
