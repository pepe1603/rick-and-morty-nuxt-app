<template>
  <UContainer class="py-10">
    <UCard>
      <template #header>
        <div class="flex justify-between items-center">
          <h1 class="text-xl font-bold text-primary-500 flex items-center gap-2">
            <UIcon name="i-lucide-rocket" class="w-6 h-6 text-pink-500" />
            Página de Inicio (Nuxt UI)
          </h1>
          <UBadge color="green" variant="subtle">Nuxt 4 Activo</UBadge>
        </div>
      </template>

      <div class="space-y-4">
        <p class="text-gray-600 dark:text-gray-300">
          Bienvenido. Ahora estamos usando componentes profesionales.
        </p>

        <div class="flex items-center gap-4">
          <UInput 
            v-model="nombre" 
            icon="i-heroicons-user" 
            placeholder="Escribe tu nombre..." 
          />
          
          <UButton 
            icon="i-lucide-heart"
            @click="contador++"
          >
            Likes: {{ contador }}
          </UButton>
        </div>

        <p v-if="nombre" class="text-sm mt-2">
          ¡Hola, <strong>{{ nombre }}</strong>!
        </p>
      </div>

      <template #footer>
        <UButton to="/contacto" variant="ghost" color="neutral">
          Ir a Contacto &rarr;
        </UButton>

        <UButton label="Ir a Toast" variant="outline" color="success" to="/toast-examples"/>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
const contador = ref(0)
const nombre = ref('')
</script>