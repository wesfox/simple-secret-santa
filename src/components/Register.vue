<script setup lang="ts">
import GetCode from "./register-steps/GetCode.vue"
import SelectUser from "./register-steps/SelectUser.vue"

import { ref, computed } from "vue";

const currentUser = ref("")
function handleEmitCurrentUser(_currentUser: string) {
    currentUser.value = _currentUser
    console.log(_currentUser)
}

const shouldDisplayGetCode = computed(() =>
    currentUser.value
)

const shouldDisplaySelectUser = computed(() =>
    !currentUser.value
)
</script>

<template>
    <GetCode v-if='shouldDisplayGetCode' :currentUser='currentUser' />
    <SelectUser v-if='shouldDisplaySelectUser' v-on:current-user='handleEmitCurrentUser' />
</template>
