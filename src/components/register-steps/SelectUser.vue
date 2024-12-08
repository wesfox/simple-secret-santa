<script setup lang="ts">
import { computed, ref } from 'vue'
import { Draw, getPeople } from "../../draws";

const drawUsers = ref<string[]>([]);
window.addEventListener("DOMContentLoaded", async () => {
    drawUsers.value = await getPeople()
})
const emit = defineEmits(["current-user"]);

function handleSelectCurrentUser(currentUser: string): void {
    emit("current-user", currentUser)
}
</script>

<template>
    <section>
        <p class="bold large">Bienvenue !</p>
        <p class="bold large">Qui es-tu ?</p>
        <p class="large">Attention, ne ment pas sinon ça annulera le tirage !</p>
        <div class="user-list">
            <span class="user-select" v-for="user in drawUsers" @click="handleSelectCurrentUser(user)">
                {{ user }}
            </span>
        </div>
    </section>
</template>

<style>
.user-select {
    display: inline-block;
    padding: 1em;
    margin: 1em;
    background-color: white;
    font-size: 1.3em;
    color: black;
    border-radius: 3px;
}

.user-select:hover {
    cursor: pointer;
    background-color: #DDD;
}
</style>