<template>
  <RouterView />
</template>

<style lang="scss">
@import "./assets/scss/carousel-settings.scss";
@import "./assets/scss/light-mode.scss";
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

* {
  font-family: Poppins;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #b6b6b6;
}
</style>