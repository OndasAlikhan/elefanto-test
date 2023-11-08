<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps({
    seconds: {
        type: Number,
        default: 0,
    },
});
const parseSeconds = (seconds: number): string => {
    if (seconds < 10) return `0${seconds}`;
    else return `${seconds}`;
};
const isRed = computed(() => props.seconds <= 5);
</script>
<template>
    <p :class="{ timer: true, 'timer--red': isRed }">
        0:{{ parseSeconds(seconds || 0) }}
    </p>
</template>
<style scoped lang="scss">
.timer {
    margin-top: 60px;
    font-size: 40px;
    font-weight: 700;

    &--red {
        color: #eb1f1f;
    }
}
</style>
