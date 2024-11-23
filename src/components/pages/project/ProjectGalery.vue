<script setup lang="ts">
import { getEntry } from 'astro:content';
import { ref, onMounted, onUnmounted } from 'vue';

const { id } = defineProps<{
  id: string
}>();

const entry = await getEntry('project', id);

const isOpen = ref(false);
const selectedImage = ref<string | null>(null);

// Función para abrir el modal
function open(image: string) {
  selectedImage.value = image;
  isOpen.value = true;
  const body = document.querySelector('body');
  body?.classList.add('overflow-y-hidden')
}

// Función para cerrar el modal
function close() {
  isOpen.value = false;
  selectedImage.value = null;
  const body = document.querySelector('body');
  body?.classList.remove('overflow-y-hidden')
}

// Listener para el evento de la tecla 'Esc'
function handleEsc(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    close();
  }
}

// Montar y desmontar el listener para la tecla 'Esc'
onMounted(() => {
  window.addEventListener('keydown', handleEsc);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEsc);
});

</script>

<template>
  <div>
    <h2 class="text-3xl text-center mb-4">Galería de imagenes </h2>
    <div class="columns-2 md:columns-3 gap-2 space-y-2">
      <a
        v-for="image in entry?.data.images"
        :key="image"
        @click.prevent="open(image)"
        href="#"
        class="block" 
        aria-label="Ver imagen del proyecto"
      >
        <img
          :src="image"
          :alt="'Imagen de ' + id"
          class="w-full cursor-pointer"
        />
      </a>
    </div>
  </div>

  <!-- Modal -->
  <Transition>
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      @click.self="close"
    >
      <div class="relative">
        <!-- Botón de cierre -->
        <button
          class="absolute top-2 right-2 text-white bg-black bg-opacity-60 rounded-full h-8 w-8 hover:bg-opacity-90 z-10"
          @click="close"
        >
          ✕
        </button>
        
        <!-- Imagen seleccionada -->
        <img
          v-if="selectedImage"
          :src="selectedImage"
          :alt="'Imagen seleccionada de ' + id"
          class="max-h-screen max-w-screen object-contain"
        />
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.v-enter-active > div,
.v-leave-active > div {
  transition: transform 0.2s ease-in-out;
}

.v-enter-from > div,
.v-leave-to > div {
  transform: scale(1.2);
}
</style>
