<!--App.vue-->
<template>
  <UApp>
    <NuxtLoadingIndicator />
    <NuxtRouteAnnouncer />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

  </UApp>
</template>

<style>
/* Estilos globales que puedes querer aplicar */
/* Por ejemplo, para un scroll suave */
html {
  scroll-behavior: smooth;
}
</style>