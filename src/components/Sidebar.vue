<template>
  <aside class="sidebar min-vh-100 d-flex" :class="[state.sidebar, store.isDark ? '' : 'sidebar-light']">
    <div class="position-relative h-100 d-flex flex-column">
      <div
        class="toggle mt-3 rounded-circle position-absolute text-light d-flex justify-content-center align-items-center"
        @click="openSideBar" role="button">
        <Icon :icon="state.toggle ? 'angles-left' : 'angles-right'" />
      </div>

      <div class="d-flex align-items-center justify-content-center mt-5">
        <div class="d-flex flex-column">
          <!-- <img src="@/assets/images/robot_logo.png" width="50" alt="" /> -->
        </div>
      </div>

      <div class="sidebar-menu h-100">
        <ul class="mt-4 p-0">
          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center" :to="{ name: 'Home' }">
              <Icon icon="home" class="ms-3 fa-lg" />
              <span class="text ms-3">Dashboard</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center"
              :to="{ name: 'LiveWorship' }">
              <Icon icon="laptop-house" class="ms-3 fa-lg" />
              <span class="text ms-3">Culto ao vivo</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center"
              :to="{ name: 'Community' }">
              <Icon icon="user" class="ms-3 fa-lg" />
              <span class="text ms-3">Comunidade</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center"
              :to="{ name: 'ClassLearning' }">
              <Icon icon="chalkboard-user" class="ms-3 fa-lg" />
              <span class="text ms-3">Classes</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center" :to="{ name: 'Offers' }">
              <Icon icon="money-check-dollar" class="ms-3 fa-lg" />
              <span class="text ms-3">Oferta</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center"
              :to="{ name: 'Settings' }">
              <Icon icon="gear" class="ms-3 fa-lg" />
              <span class="text ms-3">Configurações</span>
            </RouterLink>
          </li>
        </ul>

        <ul class="p-3">
          <li class="d-flex mt-3 rounded-2" @click="logout">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center" :to="{ name: 'Login' }">
              <Icon icon="right-from-bracket" class="ms-3 fa-lg" />
              <span class="text ms-3">Sair</span>
            </RouterLink>
          </li>

          <li class="mode d-flex rounded-2 mt-3 align-items-center  position-relative">
            <div class="w-25 d-flex align-items-center justify-content-center fa-lg" v-if="state.toggle">
              <Icon :icon="store.isDark ? 'moon' : 'sun'" />
            </div>

            <span class="mode-text text me-4">
              {{ store.isDark ? 'Escuro' : 'Claro' }}
            </span>

            <div class="d-flex align-items-center justify-content-center">
              <Icon @click="store.isDark = !store.isDark" role="button" class="fa-xl"
                :icon="store.isDark ? 'toggle-off' : 'toggle-on'" />
            </div>
          </li>
        </ul>
      </div>

    </div>
  </aside>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { darkModeStore } from "../store/darkStore"

const store = darkModeStore()
const state = reactive({
  sidebar: "",
  toggle: true,
  modeText: ""
});

function logout() {
  localStorage.removeItem('csrftoken')
}

function openSideBar() {
  if (state.sidebar) state.sidebar = "";
  else state.sidebar = "close";

  state.toggle = !state.toggle;
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px !important;
  z-index: 39;
  background-color: #19191b;

  &-menu {
    overflow-y: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .toggle {
    right: -12px;
    height: 25px;
    width: 25px;
    background-color: #9466ff;
  }

  li {
    height: 50px;
    width: 180px;
    background-color: #2b2b2b;
    color: #b6b6b6;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:hover .icon {
      transform: translateX(4px);
    }

    .router-link-exact-active {
      background-color: #9466ff;
      color: #f2f2f2 !important;
    }

    a {
      color: #b6b6b6;
    }
  }
}

// sidebar close
@import "../assets/scss/sidebar-close.scss";

// media queries
@import "../assets/scss/sidebar-media.scss";
</style>