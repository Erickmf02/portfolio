<script setup lang="ts">
import 'tippy.js/animations/shift-away.css';
import tippy, { type Instance, type Props } from 'tippy.js';
import { onMounted, ref, useTemplateRef } from 'vue';
import Button from './Button.vue';

const {variant = "principal" } = defineProps<{
  variant?: 'principal' |'principal-outlined'
}>()

const button = useTemplateRef('button')
const menu = useTemplateRef('menu')
const overlay = ref<Instance<Props>>();
onMounted(() => {
  overlay.value = tippy(button.value!.$el, {
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
    <slot name="menu"></slot>
  </div>
  <Button ref="button" :variant="variant">
    <slot></slot>
  </Button>
</template>