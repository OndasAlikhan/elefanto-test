<script lang="ts" setup>
import { Teleport } from "vue";
import SuccessIcon from "@/components/icons/SuccessIcon.vue";
import FailedIcon from "@/components/icons/FailedIcon.vue";
import Button from "./Button.vue";
defineProps({
    successful: {
        type: Boolean,
        default: false,
    },
    open: {
        type: Boolean,
        default: false,
    },
});
defineEmits(["nextClick"]);
</script>
<template>
    <Teleport to="body">
        <div v-if="open" class="background">
            <div class="modal">
                <div v-if="successful" class="container">
                    <SuccessIcon />
                    <div class="text">
                        You answered correctly! Continue to next question?
                    </div>
                </div>
                <div v-if="!successful" class="container">
                    <FailedIcon />
                    <div class="text">
                        You answered incorrectly! Continue to next question?
                    </div>
                </div>
                <Button
                    class="next-button"
                    type="accept"
                    @click="$emit('nextClick')"
                >
                    Next
                </Button>
            </div>
        </div>
    </Teleport>
</template>
<style scoped>
.background {
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100%;
    background: rgba(119, 119, 119, 0.7);
}
.modal {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translateX(-50%);

    padding: 24px;
    width: 320px;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #21bc1e;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.text {
    margin-top: 20px;
    text-align: center;
}
.next-button {
    margin-top: 32px;
}
</style>
