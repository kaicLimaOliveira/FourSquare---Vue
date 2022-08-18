<template>
    <h3 class="ms-3">Ultima semana</h3>
    <div class="d-flex justify-content-center flex-wrap">
        <Card v-for="card, idx in state.cardLastWeek" :title="card.title" :date="card.date" :image="card.image"
            :key="idx" />
    </div>

</template>

<script setup lang="ts">
import { reactive } from "vue";
import Card from "../components/Card.vue"

const state = reactive({
    cards: [
        {
            name: "God's Plan",
            date: "21 - 15 de outubro, 2022",
            image: "is_stopping_you",
        },
        {
            name: "One Life",
            date: "14 Novembro, 2021",
            image: "you_re_gonna_die",
        },
        {
            name: "Leave a Legacy!",
            date: "14 Novembro 2022",
            image: "leave_a_legacy",
        },
        {
            name: "Speak Your Truth",
            date: "31 Dezembro 2021",
            image: "put_in_the_work",
        },
        {
            name: "Speak Your Truth",
            date: "31 Dezembro 2021",
            image: "stop_watching",
        },
    ],
    cardLastWeek: [
        {
            title: "Culto das 19 horas",
            date: "21 de outubro 2022",
            image: "img1.jpg",
        },
        {
            title: "Louvor das 10 Horas",
            date: "10 de outubro 2022",
            image: "img2.jpg",
        },
        {
            title: "Louvor das 10 Horas",
            date: "10 de outubro 2022",
            image: "img3.jpg",
        }, {
            title: "Louvor das 10 Horas",
            date: "10 de outubro 2022",
            image: "img3.jpg",
        },

    ],
})
</script>

<style lang="scss" scoped>
</style>