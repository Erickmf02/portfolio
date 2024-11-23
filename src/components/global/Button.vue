<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  variant?: 'principal' | 'principal-outlined',
}
const emit = defineEmits(['on-click']);

const {
  variant = 'principal'
} = defineProps<Props>()
const style = computed(()=>{
  const base = 'px-8 py-2 rounded-full flex gap-4 items-center justify-center transition active:scale-95'
  switch(variant){
    case 'principal':
      return base + ' text-white bg-blue-500 hover:bg-blue-600'
    case 'principal-outlined':
      return base + ' text-blue-500 ring ring-1 ring-blue-500 hover:bg-blue-500 hover:bg-opacity-10'
  }
})
</script>
<template>
  <button :class="style" @click="()=> emit('on-click')">
    <slot></slot>
  </button>
</template>
