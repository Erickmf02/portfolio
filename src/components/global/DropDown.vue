<script setup lang="ts">
import 'tippy.js/animations/shift-away.css';
import tippy, { type Instance, type Props } from 'tippy.js';
import { onMounted, ref, useTemplateRef } from 'vue';

const button = useTemplateRef('button')
const menu = useTemplateRef('menu')
const overlay = ref<Instance<Props>>();
onMounted(() => {
  overlay.value = tippy(button.value as HTMLElement, {
    content: (menu.value as HTMLElement).innerHTML,
    trigger: 'click',
    allowHTML: true,
    animation: 'shift-away',
    interactive: true,
    placement: 'bottom',
  });
});

</script>

<template>
  <div ref="menu" style="display: none;">
    <slot></slot>
  </div>
  <button ref="button" class="bg-blue-500 p-4 rounded-lg text-white">Boton</button>
</template>