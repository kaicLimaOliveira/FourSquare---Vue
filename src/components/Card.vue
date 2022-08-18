<template>
    <div class="m-2">
        <div class="card-body">
            <img :src="`src/assets/imgs/${props.image}`" role="button" height="300">

            <div class="card-title">{{ props.title }}</div>
            <p class="card-text">
                <small class="text-muted">{{ props.date }}</small>
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    title: String,
    image: String,
    date: String,
})
</script>

<style lang="scss" scoped>
img {
    width: 100%;

    &:hover {
        transform: scale(1.01)
    }
}
</style>