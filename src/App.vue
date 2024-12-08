<script setup lang="ts">
</script>

<template>
  <div class="global-wrapper">
    <RouterView />
  </div>
</template>

<style>
input {
    align-items: center;
    background: #fcfcfc;
    border-radius: 4px;
    border-width: 0;
    box-shadow: 0px 2px 4px rgba(45, 35, 66, 0.4),
                0px 7px 13px -3px rgba(45, 35, 66, 0.3),
                inset 0px -3px 0px #d6d6e7;
    color: #363958;
    justify-content: center;
    text-align: center;
}

input:hover {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
                0px 7px 13px -3px rgba(45, 35, 66, 0.3),
                inset 0px -3px 0px #d6d6e7;
}

input:focus {
    box-shadow: 0px 6px 12px rgba(45, 35, 66, 0.4),
                0px 7px 13px -5px rgba(45, 35, 66, 0.3),
                inset 0px -5px 0px #d6d6e7;
}

input[type=submit]:focus {
    transform: translateY(.1rem) .3s;
}

.global-wrapper {
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-bottom: 40px;
  height: 100%;
}
section {
  text-align: center;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
}

.bold {
  font-weight: bolder;
}

.huge {
    font-size: min(1rem + 2vw, 3.2rem)
}

.large {
  font-size: min(1rem + 2vw, 2.3rem)
}
</style>
