<script setup>
// 1. Importar el composable para la navegación
const router = useRouter()
const { getColorVariant } = useCustomColorVariants()

const irAlInicio = () => {
  // Navegación programática a la ruta raíz
  router.push('/')
}
const irAlModoOscuro = () => {
  // Navegación programática a la ruta raíz
  router.push('prueba')
}
</script>




<template>
  <div class="flex flex-col gap-6 p-8 my-4">
    
    <!-- Botones estándar de Nuxt UI -->
    <div>
      <h3 class="text-lg font-bold mb-4">Colores estándar de Nuxt UI</h3>
      <div class="flex flex-wrap items-center gap-4">
        <UButton 
          icon="i-lucide-sun" 
          variant="soft" 
          color="warning"
          label="Warning Soft"
        />
        <UButton 
          icon="i-lucide-sun" 
          variant="outline" 
          color="warning"
          label="Warning Outline"
        />
        <UButton 
          icon="i-lucide-sun" 
          variant="ghost" 
          color="warning"
          label="Warning Ghost"
        />
        <UButton 
          icon="i-lucide-sun" 
          variant="link" 
          color="warning"
          label="Warning Link"
        />
        <UButton 
          icon="i-lucide-sun" 
          variant="subtle" 
          color="warning"
          label="Warning Subtle"
        />
      </div>
    </div>

    <!-- Botones Sakura con todas las variantes -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-sakura-600">Sakura - Todas las variantes</h3>
      <div class="flex flex-wrap items-center gap-4">
        <UButton 
          icon="i-lucide-flower" 
          label="Solid"
          :ui="getColorVariant('sakura', 'solid')"
        />
        <UButton 
          icon="i-lucide-flower" 
          label="Soft"
          variant="soft"
          :ui="getColorVariant('sakura', 'soft')"
        />
        <UButton 
          icon="i-lucide-flower" 
          label="Outline"
          variant="outline"
          :ui="getColorVariant('sakura', 'outline')"
        />
        <UButton 
          icon="i-lucide-flower" 
          label="Ghost"
          variant="ghost"
          :ui="getColorVariant('sakura', 'ghost')"
        />
        <UButton 
          icon="i-lucide-flower" 
          label="Link"
          variant="link"
          :ui="getColorVariant('sakura', 'link')"
        />
        <UButton 
          icon="i-lucide-flower" 
          label="Subtle"
          variant="subtle"
          :ui="getColorVariant('sakura', 'subtle')"
        />
      </div>
    </div>

    <!-- Botones Forest con todas las variantes -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-forest-600">Forest - Todas las variantes</h3>
      <div class="flex flex-wrap items-center gap-4">
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Solid"
          variant="solid"
          :ui="getColorVariant('forest', 'solid')"
        />
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Soft"
          variant="soft"
          :ui="getColorVariant('forest', 'soft')"
        />
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Outline"
          variant="outline"
          :ui="getColorVariant('forest', 'outline')"
        />
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Ghost"
          variant="ghost"
          :ui="getColorVariant('forest', 'ghost')"
        />
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Link"
          variant="link"
          :ui="getColorVariant('forest', 'link')"
        />
        <UButton 
          icon="i-lucide-tree-pine" 
          label="Subtle"
          variant="subtle"
          :ui="getColorVariant('forest', 'subtle')"
        />
      </div>
    </div>

    <!-- Botones Ocean con todas las variantes -->
    <div>
      <h3 class="text-lg font-bold mb-4 text-ocean-600">Ocean - Todas las variantes</h3>
      <div class="flex flex-wrap items-center gap-4">
        <UButton 
          icon="i-lucide-waves" 
          label="Solid"
          variant="solid"
          :ui="getColorVariant('ocean', 'solid')"
        />
        <UButton 
          icon="i-lucide-waves" 
          label="Soft"
          variant="soft"
          :ui="getColorVariant('ocean', 'soft')"
        />
        <UButton 
          icon="i-lucide-waves" 
          label="Outline"
          variant="outline"
          :ui="getColorVariant('ocean', 'outline')"
        />
        <UButton 
          icon="i-lucide-waves" 
          label="Ghost"
          :ui="getColorVariant('ocean', 'ghost')"
        />
        <UButton 
          icon="i-lucide-waves" 
          label="Link"
          variant="link"
          :ui="getColorVariant('ocean', 'link')"
        />
        <UButton 
          icon="i-lucide-waves" 
          label="Subtle"
          variant="subtle"
          :ui="getColorVariant('ocean', 'subtle')"
        />
      </div>
    </div>

    <!-- Ejemplo de uso dinámico -->
    <div>
      <h3 class="text-lg font-bold mb-4">Uso simplificado</h3>
      <div class="flex flex-wrap items-center gap-4">
        <UButton 
          icon="i-lucide-citrus" 
          label="Frut"
          variant="outline"
          :ui="getColorVariant('sakura', 'outline')"
        />
        <UButton 
          icon="i-lucide-bug" 
          label="Bugs"
          variant="ghost"
          :ui="getColorVariant('forest', 'ghost')"
        />
        <UButton 
          icon="i-lucide-wallpaper" 
          label="Image"
          variant="solid"
          :ui="getColorVariant('ocean', 'solid')"
        />
      </div>
    </div>

  </div> 
  <UContainer class="py-10">
    <UCard>
      <template #header>
        <h1 class="text-3xl font-extrabold text-blue-600 flex items-center gap-3">
          <UIcon name="i-lucide-mail" class="w-7 h-7" /> 
          Contacto
        </h1>
      </template>

      <div class="space-y-6">
        <p class="text-lg text-gray-700 dark:text-gray-300">
          Aquí puedes encontrar las formas de contactarme y algunos enlaces útiles.
        </p>

        <div class="rounded-lg bg-gray-50 dark:bg-gray-800 p-6 shadow-md">
          <ul class="space-y-3 font-semibold text-gray-900 dark:text-gray-100">
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-at-sign" class="size-5 text-primary-500" />
              Email: <a href="mailto:test@nuxt.com" class="text-blue-500 hover:underline">test@nuxt.com</a>
            </li>
            <li class="flex items-center gap-2">
              <UIcon name="i-lucide-github" class="size-5 text-primary-500" />
              Github: <a href="https://github.com/tu_usuario" target="_blank" class="text-blue-500 hover:underline">@tu_usuario</a>
            </li>
          </ul>
        </div>
        
        <h2 class="text-xl font-semibold mt-8 border-b pb-2">Componentes Destacados</h2>
        
        <div class="flex flex-wrap items-center gap-4">
          
            <UButton 
              icon="i-lucide-sun" 
              variant="soft" 
              color="warning"
              label="Modo Día"
            />

            <UButton 
              icon="i-lucide-plus" 
              variant="soft"
              color="secondary"
              label="Nuevo Item"
              trailing-icon="i-lucide-arrow-right"
            />

            <UButton 
              icon="i-lucide-citrus" 
              variant="soft" 
              label="Frut"
            />

            <UButton 
              icon="i-lucide-bug" 
              variant="outline"
              ui="forest"
              label="Bugs"
              
            />
            <UButton 
              icon="i-lucide-wallpaper" 
              
              :ui="{base: 'bg-ocean-600 text-ocean-50 hover:bg-ocean-700'}"
              label="Image"
              
            />
          

            
    
          <!-- Prueba con la prop ui directamente -->
          <UButton 
            icon="i-lucide-citrus" 
            variant="soft" 
            color="sakura"
            label="Sakura con config"
            :ui="{ 
              base: 'bg-sakura-100 text-sakura-600 hover:bg-sakura-200'
            }"
          />
          
          <UButton 
            icon="i-lucide-citrus" 
            variant="soft" 
            color="sakura"
            label="Sakura normal"
          />

                  <!-- Prueba directa con clases de Tailwind -->
          <div class="bg-sakura-500 text-white p-4 mb-4 rounded hover:bg-sakura-600">
            ¿Ves este fondo rosa sakura?
            
          </div>
          
          <div class="bg-forest-500 text-white p-4 mb-4">
            ¿Ves este fondo verde forest?
          </div>



          <div class="flex items-center gap-1 text-gray-500">
            <UIcon name="i-lucide-lightbulb" class="size-6 text-yellow-500" />
            <span class="text-sm">¡Una idea brillante!</span>
          </div>

        </div>

      </div>

      <template #footer>
        <div class="flex gap-2">
          <UButton 
          @click="irAlInicio" 
          icon="i-lucide-arrow-left" 
          variant="ghost" 
          class="cursor-pointer"
          color="neutral"
        >
          Volver al Home
        </UButton>
        <UButton 
          @click="irAlModoOscuro" 
          icon="i-lucide-moon" 
          variant="link" 
          class="cursor-pointer"
          color="primary"
        >
          Probar  Modo Oscuro
        </UButton>
        </div>


      </template>
    </UCard>


    <div class="flex flex-col gap-4">
    <!-- Botones con colores estándar de Nuxt UI -->
    <div class="flex flex-wrap items-center gap-4">
      <UButton 
        icon="i-lucide-sun" 
        variant="soft" 
        color="warning"
        label="Modo Día"
      />

      <UButton 
        icon="i-lucide-plus" 
        variant="soft"
        color="secondary"
        label="Nuevo Item"
        trailing-icon="i-lucide-arrow-right"
      />
    </div>

    <!-- Botones con colores personalizados - Configuración manual -->
    <div class="flex flex-wrap items-center gap-4">
      <UButton 
        icon="i-lucide-citrus" 
        label="Frut Sakura"
        :ui="{ 
          base: 'bg-sakura-100 text-sakura-600 hover:bg-sakura-200 transition-colors'
        }"
      />

      <UButton 
        icon="i-lucide-bug" 
        label="Bugs Forest"
        :ui="{ 
          base: 'bg-forest-100 text-forest-600 hover:bg-forest-200 transition-colors'
        }"
      />
      
      <UButton 
        icon="i-lucide-wallpaper" 
        label="Image Ocean"
        :ui="{ 
          base: 'bg-ocean-100 text-ocean-600 hover:bg-ocean-200 transition-colors'
        }"
      />
    </div>

    <!-- Divs con colores personalizados -->
    <div class="flex flex-wrap items-center gap-4">
      <div class="bg-sakura-500 text-white p-4 rounded hover:bg-sakura-600 cursor-pointer transition-colors">
        Fondo rosa sakura
      </div>
      
      <div class="bg-forest-500 text-white p-4 rounded hover:bg-forest-600 cursor-pointer transition-colors">
        Fondo verde forest
      </div>

      <div class="bg-ocean-500 text-white p-4 rounded hover:bg-ocean-600 cursor-pointer transition-colors">
        Fondo cyan ocean
      </div>
    </div>

    <!-- Otros elementos con colores personalizados -->
    <div class="flex flex-wrap items-center gap-4">
      <div class="border-2 border-sakura-500 text-sakura-600 p-4 rounded">
        Border sakura
      </div>
      
      <p class="text-forest-600 font-bold">Texto verde forest</p>
      
      <span class="bg-ocean-100 text-ocean-800 px-3 py-1 rounded-full text-sm">
        Badge ocean
      </span>
    </div>
  </div>

  <div class="p-4 rounded border m-4 space-y-4">
    <!-- Botones -->
<UButton 
  label="Mi botón"
  :ui="{ base: 'bg-sakura-100 text-sakura-600 hover:bg-sakura-200' }"
/>

<!-- Cards -->
<UCard :ui="{ body: 'bg-forest-50' }">
  <p class="text-forest-700">Contenido del card</p>
</UCard>

<!-- Badges -->
<UBadge :ui="{ base: 'bg-ocean-100 text-ocean-700' }">
  Nuevo
</UBadge>

<!-- Alerts -->
<UAlert :ui="{ base: 'bg-sakura-50 border-sakura-200 hover:bg-sakura-500' }" variant="outline" :close="true">
  <template #title>
    <span class="text-sakura-700">Alerta personalizada</span>
  </template>
</UAlert>

<!-- Cualquier elemento HTML -->
<div class="bg-sakura-500 text-white p-4">
  Div personalizado
</div>

<h2 class="text-forest-600 text-2xl font-bold">
  Título verde
</h2>

<input class="border-ocean-500 focus:ring-ocean-500" />
  </div>


  </UContainer>
</template>