<template>
    <div :class="{ 'm-2': props.margin }">
        <div class="card-body">
            <img :src="`src/assets/imgs/${props.image}`" :class="{ 'pulsate': props.effect }" role="button"
                :height="props.height">

            <div class="card-title text-white-50">{{ props.title }}</div>
            <p class="card-text">
                <small class="text-muted text-white-50">{{ props.date }}</small>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    image: String,
    date: String,
    height: Number,
    effect: Boolean,
    margin: { type: Boolean, default: true }
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;

    &:hover {
        transform: scale(1.01)
    }
}

.pulsate:hover {
    animation: pulsate 1s ease-in-out;
    transform: scale(1.02);
}

@keyframes pulsate {
    0% {
        box-shadow: 0 0 25px #3d9cb6, 0 0 50px #7f66db;
    }
}
</style>