<script setup lang="ts">
import { PropType } from "vue";

defineProps({
    type: {
        type: String as PropType<"reject" | "accept">,
        default: "accept",
    },
});
</script>
<template>
    <button :class="['btn', type]">
        <slot />
    </button>
</template>
<style scoped lang="scss">
.btn {
    width: 170px;
    height: 56px;
    color: #fff;
    border-radius: 20px;
    font-weight: 700;
    &.accept {
        background-color: #21bc1e;
    }
    &.reject {
        background-color: #eb1f1f;
    }
}
</style>
