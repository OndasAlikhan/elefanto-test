<script lang="ts" setup>
defineProps({
    text: {
        type: String,
        default: "",
    },
});
</script>
<template>
    <div class="joke">
        {{ text }}
    </div>
</template>
<style scoped>
.joke {
    padding: 20px 40px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 20px;
    border: 2px solid #29aae1;
    min-height: 40px;
    max-width: 360px;
    margin: 0 auto;
}
</style>
