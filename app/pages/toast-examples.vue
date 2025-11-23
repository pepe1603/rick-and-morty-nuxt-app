<!-- pages/toast-examples.vue -->
<script setup lang="ts">
const toast = useToast()
const colorMode = useColorMode()

// Ejemplos básicos
function showBasicToast() {
  toast.add({
    title: 'Notificación básica',
    description: 'Este es un toast simple sin configuración adicional.'
  })
}

function showWithIcon() {
  toast.add({
    title: 'Con icono',
    description: 'Este toast tiene un icono personalizado.',
    icon: 'i-lucide-check-circle'
  })
}

// Ejemplos con colores estándar
function showSuccessToast() {
  toast.add({
    title: 'Operación exitosa',
    description: 'Los cambios se guardaron correctamente.',
    icon: 'i-lucide-check-circle-2',
    color: 'success'
  })
}

function showErrorToast() {
  toast.add({
    title: 'Error detectado',
    description: 'No se pudo completar la operación. Por favor intenta de nuevo.',
    icon: 'i-lucide-circle-x',
    color: 'error'
  })
}

function showWarningToast() {
  toast.add({
    title: 'Advertencia',
    description: 'Esta acción puede tener consecuencias. Procede con cuidado.',
    icon: 'i-lucide-alert-triangle',
    color: 'warning'
  })
}

function showInfoToast() {
  toast.add({
    title: 'Información',
    description: 'Hay una nueva actualización disponible.',
    icon: 'i-lucide-info',
    color: 'info'
  })
}

function showPrimaryToast() {
  toast.add({
    title: 'Acción principal',
    description: 'Bienvenido a tu dashboard.',
    icon: 'i-lucide-sparkles',
    color: 'primary'
  })
}

function showSecondaryToast() {
  toast.add({
    title: 'Acción secundaria',
    description: 'Se actualizó tu configuración.',
    icon: 'i-lucide-settings',
    color: 'secondary'
  })
}

function showNeutralToast() {
  toast.add({
    title: 'Notificación neutral',
    description: 'Un mensaje sin énfasis especial.',
    icon: 'i-lucide-message-circle',
    color: 'neutral'
  })
}

// Con acciones
function showWithActions() {
  toast.add({
    title: 'Archivo subido',
    description: 'documento.pdf se subió correctamente.',
    icon: 'i-lucide-upload',
    color: 'success',
    actions: [
      {
        label: 'Ver',
        color: 'primary',
        variant: 'solid',
        onClick: () => {
          console.log('Ver archivo')
        }
      },
      {
        label: 'Descargar',
        color: 'neutral',
        variant: 'outline',
        onClick: () => {
          console.log('Descargar archivo')
        }
      }
    ]
  })
}

function showWithRetry() {
  toast.add({
    title: 'Error de conexión',
    description: 'No se pudo conectar al servidor.',
    icon: 'i-lucide-wifi-off',
    color: 'error',
    actions: [
      {
        icon: 'i-lucide-refresh-cw',
        label: 'Reintentar',
        color: 'neutral',
        variant: 'outline',
        onClick: (e) => {
          e?.stopPropagation()
          console.log('Reintentando...')
        }
      }
    ]
  })
}

// Con Avatar
function showWithAvatar() {
  toast.add({
    title: 'Nuevo seguidor',
    description: 'Juan Pérez comenzó a seguirte.',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/904724?v=4',
      alt: 'Juan Pérez'
    },
    color: 'primary',
    actions: [
      {
        label: 'Ver perfil',
        variant: 'soft',
        color: 'primary'
      }
    ]
  })
}

// Orientación horizontal
function showHorizontal() {
  toast.add({
    title: 'Mensaje corto',
    icon: 'i-lucide-mail',
    orientation: 'horizontal',
    actions: [
      {
        label: 'Ver',
        size: 'xs',
        variant: 'soft'
      }
    ]
  })
}

// Sin progreso
function showWithoutProgress() {
  toast.add({
    title: 'Sin barra de progreso',
    description: 'Este toast no tiene barra de progreso.',
    icon: 'i-lucide-clock',
    progress: false
  })
}

// Con progreso personalizado
function showCustomProgress() {
  toast.add({
    title: 'Descargando...',
    description: 'Tu archivo se está descargando.',
    icon: 'i-lucide-download',
    color: 'info',
    progress: {
      color: 'success'
    }
  })
}

// Sin botón de cerrar
function showWithoutClose() {
  toast.add({
    title: 'No se puede cerrar manualmente',
    description: 'Este toast se cerrará automáticamente.',
    icon: 'i-lucide-timer',
    close: false,
    duration: 3000
  })
}

// Duración personalizada
function showLongDuration() {
  toast.add({
    title: 'Permanece más tiempo',
    description: 'Este toast durará 10 segundos.',
    icon: 'i-lucide-hourglass',
    color: 'warning',
    duration: 10000
  })
}

// Toast persistente (con id para controlar)
let persistentId: string | number
function showPersistentToast() {
  const newToast = toast.add({
    title: 'Toast persistente',
    description: 'Este toast no se cierra automáticamente.',
    icon: 'i-lucide-pin',
    color: 'info',
    duration: Infinity,
    actions: [
      {
        label: 'Cerrar manualmente',
        color: 'neutral',
        variant: 'outline',
        onClick: (e) => {
          e?.stopPropagation()
          if (persistentId) {
            toast.remove(persistentId)
          }
        }
      }
    ]
  })
  persistentId = newToast.id
}

// Actualizar toast existente
let updatableId: string | number
function showUpdatableToast() {
  const newToast = toast.add({
    title: 'Procesando...',
    description: 'Espera un momento.',
    icon: 'i-lucide-loader-circle',
    color: 'info',
    duration: Infinity
  })
  updatableId = newToast.id

  // Simular actualización después de 2 segundos
  setTimeout(() => {
    toast.update(updatableId, {
      title: '¡Completado!',
      description: 'La operación finalizó con éxito.',
      icon: 'i-lucide-check-circle',
      color: 'success',
      duration: 5000
    })
  }, 2000)
}

// Múltiples toasts
function showMultipleToasts() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
      toast.add({
        title: `Toast #${i}`,
        description: `Este es el toast número ${i}`,
        icon: 'i-lucide-bell',
        color: i === 1 ? 'primary' : i === 2 ? 'success' : 'info'
      })
    }, i * 500)
  }
}

// Limpiar todos
function clearAllToasts() {
  toast.clear()
}

// Ejemplo de uso con promesas
async function showLoadingToast() {
  const loadingToast = toast.add({
    title: 'Cargando datos...',
    icon: 'i-lucide-loader-circle',
    color: 'info',
    duration: Infinity
  })

  try {
    // Simular una operación async
    await new Promise((resolve) => setTimeout(resolve, 3000))
    
    toast.update(loadingToast.id, {
      title: 'Datos cargados',
      description: 'Operación completada exitosamente.',
      icon: 'i-lucide-check-circle',
      color: 'success',
      duration: 5000
    })
  } catch (error) {
    toast.update(loadingToast.id, {
      title: 'Error al cargar',
      description: 'No se pudieron cargar los datos.',
      icon: 'i-lucide-circle-x',
      color: 'error',
      duration: 5000
    })
  }
}

// Ejemplo de uso en formularios
function showFormSuccess() {
  toast.add({
    title: 'Formulario enviado',
    description: 'Tus datos se guardaron correctamente.',
    icon: 'i-lucide-send',
    color: 'success',
    actions: [
      {
        label: 'Ver respuesta',
        color: 'primary',
        variant: 'soft'
      }
    ]
  })
}
</script>

<template>
  <div class="min-h-screen p-8 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto space-y-12">
      
      <!-- Header -->
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Toast Examples
          </h1>
          <p class="text-gray-600 dark:text-gray-400">
            Ejemplos completos del componente Toast de Nuxt UI
          </p>
        </div>
        <UButton 
          :icon="colorMode.value === 'dark' ? 'i-lucide-sun' : 'i-lucide-moon'"
          @click="colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'"
          variant="soft"
          color="neutral"
        >
          {{ colorMode.value === 'dark' ? 'Modo Claro' : 'Modo Oscuro' }}
        </UButton>
      </div>

      <!-- Botón para limpiar todos -->
      <div class="flex justify-end">
        <UButton 
          icon="i-lucide-trash-2"
          @click="clearAllToasts"
          variant="outline"
          color="error"
        >
          Limpiar todos los toasts
        </UButton>
      </div>

      <!-- Básicos -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Toasts Básicos
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showBasicToast" variant="outline">
            Toast Básico
          </UButton>
          <UButton @click="showWithIcon" variant="outline" icon="i-lucide-check-circle">
            Con Icono
          </UButton>
        </div>
      </div>

      <!-- Colores estándar -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Colores de Nuxt UI
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <UButton @click="showPrimaryToast" color="primary" icon="i-lucide-sparkles">
            Primary
          </UButton>
          <UButton @click="showSecondaryToast" color="secondary" icon="i-lucide-settings">
            Secondary
          </UButton>
          <UButton @click="showSuccessToast" color="success" icon="i-lucide-check-circle-2">
            Success
          </UButton>
          <UButton @click="showErrorToast" color="error" icon="i-lucide-circle-x">
            Error
          </UButton>
          <UButton @click="showWarningToast" color="warning" icon="i-lucide-alert-triangle">
            Warning
          </UButton>
          <UButton @click="showInfoToast" color="info" icon="i-lucide-info">
            Info
          </UButton>
          <UButton @click="showNeutralToast" color="neutral" icon="i-lucide-message-circle">
            Neutral
          </UButton>
        </div>
      </div>

      <!-- Con acciones -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Toasts con Acciones
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showWithActions" variant="soft" color="success" icon="i-lucide-upload">
            Con Múltiples Acciones
          </UButton>
          <UButton @click="showWithRetry" variant="soft" color="error" icon="i-lucide-wifi-off">
            Con Botón Reintentar
          </UButton>
        </div>
      </div>

      <!-- Con Avatar -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Toast con Avatar
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showWithAvatar" variant="outline" icon="i-lucide-user-plus">
            Nuevo Seguidor
          </UButton>
        </div>
      </div>

      <!-- Orientación y configuración -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Configuración y Orientación
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showHorizontal" variant="outline" icon="i-lucide-columns-2">
            Horizontal
          </UButton>
          <UButton @click="showWithoutProgress" variant="outline" icon="i-lucide-clock">
            Sin Progreso
          </UButton>
          <UButton @click="showCustomProgress" variant="outline" icon="i-lucide-download">
            Progreso Personalizado
          </UButton>
          <UButton @click="showWithoutClose" variant="outline" icon="i-lucide-timer">
            Sin Botón Cerrar
          </UButton>
        </div>
      </div>

      <!-- Duración -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Control de Duración
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showLongDuration" variant="soft" color="warning" icon="i-lucide-hourglass">
            Duración Larga (10s)
          </UButton>
          <UButton @click="showPersistentToast" variant="soft" color="info" icon="i-lucide-pin">
            Persistente (Infinito)
          </UButton>
        </div>
      </div>

      <!-- Control programático -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Control Programático
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showUpdatableToast" variant="outline" icon="i-lucide-refresh-cw">
            Toast Actualizable
          </UButton>
          <UButton @click="showLoadingToast" variant="outline" icon="i-lucide-loader-circle">
            Loading con Promesa
          </UButton>
          <UButton @click="showMultipleToasts" variant="outline" icon="i-lucide-layers">
            Múltiples Toasts
          </UButton>
        </div>
      </div>

      <!-- Casos de uso -->
      <div>
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Casos de Uso Comunes
        </h2>
        <div class="flex flex-wrap gap-4">
          <UButton @click="showFormSuccess" color="success" icon="i-lucide-send">
            Formulario Enviado
          </UButton>
        </div>
      </div>

      <!-- Info adicional -->
      <div class="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 space-y-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
          ℹ️ Información
        </h3>
        <ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <li>• Máximo 5 toasts se muestran a la vez</li>
          <li>• Los toasts se pueden cerrar haciendo clic en ellos (si no tienen acciones)</li>
          <li>• Puedes pausar el timer pasando el mouse sobre los toasts</li>
          <li>• La duración por defecto es de 5000ms (5 segundos)</li>
          <li>• El composable `useToast()` está auto-importado globalmente</li>
        </ul>
      </div>

    </div>
  </div>
</template>
