<script lang="ts" setup>
import Gear from "./icons/GearIcon.vue";
</script>
<template>
    <div class="header">
        <span>Let's joke</span>
        <Gear />
    </div>
</template>
<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
    max-width: 360px;
    margin: 0 auto;
}
</style>
