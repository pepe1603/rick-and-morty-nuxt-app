<script setup>
const { getColorVariant } = useCustomColorVariants()
const colorMode = useColorMode()
</script>

<template>
  <UContainer class="min-h-screen p-8 transition-colors">
    
    <!-- Toggle de modo oscuro -->
    <div class="mb-8">
      <UButton 
        :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
        @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
        variant="soft"
        color="neutral"
      >
        {{ colorMode.value === 'dark' ? 'Modo Claro' : 'Modo Oscuro' }}
      </UButton>
      
    </div>

    <!-- Sakura -->
    <div class="mb-8">
      <h3 class="text-lg font-bold mb-4 text-sakura-600 dark:text-sakura-400">
        Sakura - Modo {{ colorMode.value }}
      </h3>
      <div class="flex flex-wrap gap-4">
        <UButton label="Solid" variant="solid" :ui="getColorVariant('sakura', 'solid')" />
        <UButton label="Soft" variant="soft" :ui="getColorVariant('sakura', 'soft')" />
        <UButton label="Outline" variant="outline" :ui="getColorVariant('sakura', 'outline')" />
        <UButton label="Ghost" variant="ghost" :ui="getColorVariant('sakura', 'ghost')" />
        <UButton label="Link" variant="link" :ui="getColorVariant('sakura', 'link')" />
        <UButton label="Subtle" variant="subtle" :ui="getColorVariant('sakura', 'subtle')" />
      </div>
    </div>

    <!-- Forest -->
    <div class="mb-8">
      <h3 class="text-lg font-bold mb-4 text-forest-600 dark:text-forest-400">
        Forest - Modo {{ colorMode.value }}
      </h3>
      <div class="flex flex-wrap gap-4">
        <UButton label="Solid" variant="solid" :ui="getColorVariant('forest', 'solid')" />
        <UButton label="Soft" variant="soft" :ui="getColorVariant('forest', 'soft')" />
        <UButton label="Outline" variant="outline" :ui="getColorVariant('forest', 'outline')" />
        <UButton label="Ghost" variant="ghost" :ui="getColorVariant('forest', 'ghost')" />
        <UButton label="Link" variant="link" :ui="getColorVariant('forest', 'link')" />
        <UButton label="Subtle" variant="subtle" :ui="getColorVariant('forest', 'subtle')" />
      </div>
    </div>

    <!-- Ocean -->
    <div class="mb-8">
      <h3 class="text-lg font-bold mb-4 text-ocean-600 dark:text-ocean-400">
        Ocean - Modo {{ colorMode.value }}
      </h3>
      <div class="flex flex-wrap gap-4">
        <UButton label="Solid" variant="solid" :ui="getColorVariant('ocean', 'solid')" />
        <UButton label="Soft" variant="soft" :ui="getColorVariant('ocean', 'soft')" />
        <UButton label="Outline" variant="outline" :ui="getColorVariant('ocean', 'outline')" />
        <UButton label="Ghost" variant="ghost" :ui="getColorVariant('ocean', 'ghost')" />
        <UButton label="Link" variant="link" :ui="getColorVariant('ocean', 'link')" />
        <UButton label="Subtle" variant="subtle" :ui="getColorVariant('ocean', 'subtle')" />
      </div>
    </div>

    <!-- Divs de prueba -->
    <div class="flex flex-wrap gap-4">
      <div class="bg-sakura-500 dark:bg-sakura-600 text-white p-4 rounded">
        Sakura background
      </div>
      <div class="bg-forest-500 dark:bg-forest-600 text-white p-4 rounded">
        Forest background
      </div>
      <div class="bg-ocean-500 dark:bg-ocean-600 text-white p-4 rounded">
        Ocean background
      </div>
    </div>

  </UContainer>
</template>
