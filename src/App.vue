<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from "vue";
import Button from "./components/Button.vue";
import ChuckNorris from "./components/ChuckNorris.vue";
import Header from "./components/Header.vue";
import Joke from "./components/Joke.vue";
import Timer from "./components/Timer.vue";
import chuckNorrisService from "@/services/chuckNorris.service";
import Modal from "./components/Modal.vue";

const jokeText = ref<string>();
const secondsLeft = ref(15);
const jokeAnswer = ref(false);
const modalOpen = ref(false);
const isSuccessful = ref(false);
let interval: any;

const fetchJoke = async () => {
    const result = await chuckNorrisService.getJoke();
    jokeText.value = result.data.value;
    jokeAnswer.value = result.data.value.length % 2 === 0;
};
const startTimer = () => {
    interval = setInterval(
        () => (secondsLeft.value = secondsLeft.value - 1),
        1000,
    );
};
const handleClick = (val: boolean) => {
    modalOpen.value = true;
    isSuccessful.value = jokeAnswer.value === val;
    clearInterval(interval);
};
const handleNextClick = () => {
    modalOpen.value = false;
    isSuccessful.value = false;
    startGame();
};
const startGame = async () => {
    if (interval) clearInterval(interval);
    secondsLeft.value = 15;
    await fetchJoke();
    startTimer();
};

watch(secondsLeft, async () => {
    if (secondsLeft.value === 0) {
        await startGame();
    }
});

onMounted(async () => {
    startGame();
});
onBeforeUnmount(() => {
    clearInterval(interval);
});
</script>

<template>
    <div class="app">
        <Header />
        <Timer :seconds="secondsLeft" />
        <ChuckNorris />
        <Joke :text="jokeText" />
        <div class="action-btns">
            <Button type="reject" @click="handleClick(false)">False</Button>
            <Button type="accept" @click="handleClick(true)">True</Button>
        </div>

        <Modal
            :open="modalOpen"
            :successful="isSuccessful"
            @next-click="handleNextClick"
        ></Modal>
    </div>
</template>

<style scoped>
.app {
    max-width: 1280px;
    margin: 0 auto;
    padding: 14px 16px;
    text-align: center;
}
.action-btns {
    /* position: fixed;
    bottom: 70px;
    left: 50%; */
    /* transform: translateX(-50%); */
    margin-top: 120px;
    display: flex;
    justify-content: center;
    gap: 8px;
}
</style>
