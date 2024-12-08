<script setup lang="ts">
import { ref } from "vue";
import { router } from "../../router";

const props = defineProps({
    currentUser: {
        type: String,
        required: true,
    },
});

const email = ref("")

const apiHost = import.meta.env.VITE_API_HOST

function handleSendCode() {
    const url = `${apiHost}?name=${props.currentUser}&mail=${email.value}`
    const response = fetch(url);
    router.push('/code')
}
</script>

<template>
    <section>
        <p>Est-ce que tu es bien {{ props.currentUser }} ?</p>
        <p>Ton email : <input v-model="email" /></p>
        <p><button @click="handleSendCode()">Recevoir le code</button></p>
    </section>
</template>

<style>
section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0px;
}

p {
    font-size: 2em;
    margin: 0;
}
input {
    font-size: 1em;
    min-width: 4cm;
    margin: 1%;
    padding: .7rem;
    width: 90vw;
    max-width: calc(12cm + 7vw);
}

input.inverted {
    background: #363958;
    border-radius: 4px;
    border-width: 0;
    box-shadow: 0px 2px 4px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3),
        inset 0px -3px 0px #d6d6e7;
    color: #fcfcfc;
}

input.inverted:hover {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3),
        inset 0px -3px 0px #d6d6e7;
}

input.inverted:focus {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
        0px 7px 13px -5px rgba(45, 35, 66, 0.3),
        inset 0px -5px 0px #d6d6e7;
}

button {
    min-width: 4cm;
    font-size: 1em;
    margin: 1%;
    padding: .7rem;
    width: 90vw;
    max-width: calc(12cm + 7vw);
    cursor: pointer;
}

button.inverted {
    background: #363958;
    border-radius: 4px;
    border-width: 0;
    box-shadow: 0px 2px 4px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3),
        inset 0px -3px 0px #d6d6e7;
    color: #fcfcfc;
}

button.inverted:hover {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
        0px 7px 13px -3px rgba(45, 35, 66, 0.3),
        inset 0px -3px 0px #d6d6e7;
}

button.inverted:focus {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
        0px 7px 13px -5px rgba(45, 35, 66, 0.3),
        inset 0px -5px 0px #d6d6e7;
}
</style>