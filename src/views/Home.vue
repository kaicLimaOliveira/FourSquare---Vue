<template>
    <h3 class="ms-3 text-white-50">Ultima semana</h3>
    <div class="d-flex flex-column">
        <Carousel ref="carouselLastWeek" :items-to-show="2.5" :wrap-around="true">
            <Slide v-for="card, idx in state.cardLastWeek" :key="idx">
                <div class="carousel__item">
                    <Card :title="card.title" :date="card.date" :image="card.image" :height="300" :margin="false" />
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>

        <div class="d-flex justify-content-around mt-3">
            <button class="btn btn-left px-5 color-default" @click="carouselLastWeek.prev()">
                <Icon icon="angle-left" />
            </button>

            <button class="btn btn-right px-5 color-default" @click="carouselLastWeek.next()">
                <Icon icon="angle-right" />
            </button>
        </div>
    </div>

    <h3 class="ms-3 text-white-50">Eventos</h3>
    <div class="d-flex flex-column">
        <Carousel ref="carouselEvent" class="w-100 mt-5" :itemsToShow="3.95" :wrapAround="true">
            <Slide v-for="card, idx in state.cards" :key="idx">
                <div class="carousel__item">
                    <Card :title="card.title" :date="card.date" :image="card.image" :height="350" :effect="true"
                        :margin="false" />
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>

        <div class="d-flex justify-content-around mt-3">
            <button class="btn btn-left px-5 color-default" @click="carouselEvent.prev()">
                <Icon icon="angle-left" />
            </button>

            <button class="btn btn-right px-5 color-default" @click="carouselEvent.next()">
                <Icon icon="angle-right" />
            </button>
        </div>

    </div>

</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import Card from "../components/Card.vue"
import { Carousel, Pagination, Slide } from 'vue3-carousel';

interface ICarousel {
    next: Function;
    prev: Function;
}

const carouselLastWeek: ICarousel = ref(null)
const carouselEvent: ICarousel = ref(null)
const state = reactive({
    currentSlide: 1,
    cards: [
        {
            title: "God's Plan",
            date: "21 - 15 de outubro, 2022",
            image: "is_stopping_you.svg",
        },
        {
            title: "One Life",
            date: "14 Novembro, 2021",
            image: "you_re_gonna_die.svg",
        },
        {
            title: "Leave a Legacy!",
            date: "14 Novembro 2022",
            image: "leave_a_legacy.svg",
        },
        {
            title: "Speak Your Truth",
            date: "31 Dezembro 2021",
            image: "put_in_the_work.svg",
        },
        {
            title: "Speak Your Truth",
            date: "31 Dezembro 2021",
            image: "stop_watching.svg",
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
.color-default {
    background-color: #9466ff;
    transition: all 0.2s ease;
}

.btn-left:hover {
    transform: translateX(-5px);
}

.btn-right:hover {
    transform: translateX(5px);
}


.carousel__prev--in-active,
.carousel__next--in-active {
    display: none;
}

.carousel__slide>.carousel__item {
    transform: scale(1);
    opacity: 0.5;
    transition: 0.5s;
}

.carousel__slide--visible>.carousel__item {
    opacity: 1;
    transform: rotateY(0);
}

.carousel__slide--next>.carousel__item {
    transform: scale(0.9) translate(-50px);
}

.carousel__slide--prev>.carousel__item {
    transform: scale(0.9) translate(50px);
}

.carousel__slide--active>.carousel__item {
    transform: scale(1.1);
}
</style>