<template>
  <nav class="sidebar min-vh-100 d-flex" :class="state.sidebar">
    <div class="position-relative h-100 d-flex flex-column">
      <div
        class="toggle mt-3 rounded-circle position-absolute text-light d-flex justify-content-center align-items-center"
        @click="openSideBar" role="button">
        <Icon :icon="state.toggle ? 'angles-left' : 'angles-right'" />
      </div>

      <div class="d-flex align-items-center justify-content-center mt-5">
        <div class="text d-flex flex-column">
          <!-- <img src="@/assets/images/robot_logo.png" width="50" alt="" /> -->
        </div>
      </div>

      <div class="sidebar-menu h-100">
        <ul class="mt-4 p-0">
          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'Home' }">
              <Icon icon="home" class="icon fa-lg" />
              <span class="text">Dashboard</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'LiveWorship' }">
              <Icon icon="laptop-house" class="icon fa-lg" />
              <span class="text">Culto ao vivo</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'Community' }">
              <Icon icon="user" class="icon fa-lg" />
              <span class="text">Comunidade</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'ClassLearning' }">
              <Icon icon="chalkboard-user" class="icon fa-lg" />
              <span class="text">Classes</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'Offers' }">
              <Icon icon="money-check-dollar" class="icon fa-lg" />
              <span class="text">Oferta</span>
            </RouterLink>
          </li>

          <li class="d-flex m-3 rounded-2">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'Settings' }">
              <Icon icon="gear" class="icon fa-lg" />
              <span class="text">Configurações</span>
            </RouterLink>
          </li>
        </ul>

        <ul class="p-3">
          <li class="d-flex mt-3 rounded-2" @click="logout">
            <RouterLink class="rounded-2 text-decoration-none w-100 d-flex align-items-center fw-bolder"
              :to="{ name: 'Login' }">
              <Icon icon="right-from-bracket" class="icon fa-lg" />
              <span class="text">Sair</span>
            </RouterLink>
          </li>

          <li class="mode d-flex rounded-2 mt-3 align-items-center position-relative">
            <div class="sun-moon d-flex align-items-center justify-content-center fa-lg" v-if="state.toggle">
              <Icon :icon="state.modeSwitch ? 'moon' : 'sun'" />
            </div>

            <span class="mode-text text">
              {{ state.modeSwitch ? 'Dark mode' : 'Light mode' }}
            </span>

            <div class="ms-3 d-flex align-items-center justify-content-center">
              <Icon @click="state.modeSwitch = !state.modeSwitch" role="button" class="fa-xl"
                :icon="state.modeSwitch ? 'toggle-off' : 'toggle-on'" />
            </div>
          </li>
        </ul>
      </div>


    </div>

  </nav>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const state = reactive({
  sidebar: "",
  toggle: true,
  modeSwitch: false,
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
  transition: all 3s;
  height: 100vh;

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
    background-color: #5f76e8;
  }

  li {
    height: 50px;
    width: 180px;
    background-color: #efefef;
    transition: all 0.2s ease-in-out;

    &:hover,
    &:hover .icon {
      transform: translateX(4px);
      color: #222224;
    }

    .router-link-exact-active {
      background-color: #5f76e8;
      color: #fff !important;

      .icon {
        color: #fff;
      }

    }

    a {
      color: #222224;
    }


    .icon {
      min-width: 60px;
      color: #222224;
    }
  }

  .sun-moon {
    width: 45px;
  }
}

// sidebar close
@import "../assets/scss/sidebar-close.scss";

// media queries
@import "../assets/scss/sidebar-media.scss";
</style>