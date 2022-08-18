<template>
    <div class="d-flex" :class="store.isLoading ? 'loader-active' : ''">
        <Sidebar class="ts-4" />
        <div class="w-100 bg-default">
            <div class="mt-4 mx-4 d-flex flex-column">
                <RouterView v-slot="{ Component, route }">
                    <Transition name="fade" mode="out-in" :appear="false" :persisted="false">
                        <div :key="String(route.name)">
                            <component :is="Component" />
                        </div>
                    </Transition>
                </RouterView>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import { stateStore } from "../store/stateStore"

const store = stateStore()
</script>

<style lang="scss" scoped>
.ts-4 {
    transition: all 0.5s;
}

.bg-default {
    background-color: #f0f0f0;
}

.loader-active {
    opacity: 0.4;
    background-color: #f7fafc;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>