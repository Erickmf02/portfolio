<script setup lang="ts">
import { computed } from 'vue';

interface Props {
  href: string,
  variant?: 'principal' | 'principal-outlined',
  target?: '_blank' | '_self' | '_top' | '_parent'
}

const {
  href,
  target = '_self',
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
  <a :target="target" :href="href" :class="style">
    <slot></slot>
  </a>
</template>
