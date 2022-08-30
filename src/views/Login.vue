<template>
  <div class="d-flex min-vh-100 justify-content-around bg-default">
    <div class="my-auto d-flex align-items-center flex-column">
      <h3 class="p-2 text-center">Igreja do evangelho quadrangular</h3>
      <img class="p-2" src="../assets/imgs/undraw_authentication.svg" width="300" alt="">
    </div>

    <div class="my-auto">
      <form class="bg-form p-5 rounded-3">
        <section>
          <div class="mb-2 input-group">
            <span class="input-group-text px-3">
              <Icon icon="user" />
            </span>
            <input type="text" class="form-control form-control-lg px-3 divider" placeholder="Email"
              v-model.trim="state.email" />
          </div>

          <div class="input-group mb-2">
            <span class="input-group-text px-3">
              <Icon icon="lock" />
            </span>

            <input :type="state.visible ? 'text' : 'password'" class="form-control form-control-lg px-3 divider"
              placeholder="Senha" v-model.trim="state.password" />

            <span class="input-group-text">
              <Icon @click="state.visible = !state.visible" class="eye-icon" :icon="state.visible ? 'eye' : 'eye-slash'"
                role="button" />
            </span>
          </div>

          <div class="input-group mb-2" v-if="state.registerDisplay == true">
            <span class="input-group-text px-3">
              <Icon icon="lock" />
            </span>

            <input :type="state.visible ? 'text' : 'password'" class="form-control form-control-lg px-3 divider"
              placeholder="Digite novamente a senha" v-model.trim="state.passwordTwo" />
          </div>

          <div class="input-group mb-2" v-if="state.registerDisplay == true">
            <span class="input-group-text px-3">
              <Icon icon="phone" />
            </span>

            <input type="text" class="form-control form-control-lg px-3 divider" placeholder="Telefone"
              v-model.trim="state.phone" v-maska="'(##) ####-####'" />
          </div>
        </section>

        <div class="mb-3">
          <div class="mb-3">
            <!-- <RouterLink :to="{ name: 'NotFound' }">
              Esqueci minha senha
            </RouterLink> -->
          </div>

          <div class="separator d-flex align-items-center my-4 text-secondary">
            Faça login
          </div>

          <button class="btn btn-default w-100"
            @click.prevent="[state.registerDisplay ? registerNewAccess() : loginAccess()]">
            ENTRAR
          </button>
        </div>

        <div v-if="state.registerDisplay == false">
          <span class="text-light">Não tem uma conta?</span>
          <span class="text-primary" @click="state.registerDisplay = true" role="button">
            Registre-se
          </span>
        </div>

        <div v-else-if="state.registerDisplay == true">
          <span class="text-light">Já tem uma conta?</span>
          <span class="text-primary" @click="state.registerDisplay = false" role="button">
            Entrar
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { reactive } from "vue";
import { useRouter } from "vue-router";

import api from "../services/userServices";
import { validateFormLogin, validateFormNewRegister, validatePasswordIsEqual } from "../composables/validateField"

const router = useRouter();
const state = reactive({
  email: "",
  password: "",
  phone: "",
  passwordTwo: "",
  visible: false,
  registerDisplay: false,
});

async function loginAccess() {
  const requestData = {
    email: state.email,
    password: state.password
  }

  try {
    if (validateFormLogin(requestData)) {
      const response = await api.login(requestData)

      const { headers, data } = await response;
      localStorage.setItem("csrftoken", headers["x-csrftoken"]);

      return router.push({ name: "Home" });
    }
  } catch (error) {
    console.log(error)
  }
}

async function registerNewAccess() {
  const form = {
    email: state.email,
    password: state.password,
    passwordConfirmation: state.passwordTwo,
    phone: state.phone
  }

  if (
    validateFormNewRegister(form)
    && validatePasswordIsEqual(form)
  ) {

    const response = api.register(form)
    const res = await response;
    console.log(res);

  }
}
</script>

<style lang="scss" scoped>
.bg-default {
  background-color: #19191b;

  .bg-form {
    background-color: #252529;
  }
}

.btn-default {
  background-color: #7f66db
}

.separator::before,
.separator::after {
  content: "";
  flex: 1;
  height: 1px;
  background-color: #a8a8b3;
  margin: 0 16px;
}
</style>