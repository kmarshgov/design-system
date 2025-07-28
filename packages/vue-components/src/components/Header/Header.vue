<template>
  <header class="bcds-header">
    <div class="bcds-header--container">
      <component
        :is="logoLinkElement || 'a'"
        :href="logoLinkElement ? undefined : '/'"
        :title="logoLinkElement ? undefined : 'Government of British Columbia'"
      >
        <slot name="logo">
          <SvgBcLogo id="bcgov-logo-header" />
        </slot>
      </component>
      
      <ul v-if="skipLinks" class="bcds-header--skiplinks">
        <li v-for="(link, index) in skipLinks" :key="`skiplink-${index}`">
          <component :is="link" />
        </li>
      </ul>
      
      <template v-if="title">
        <div class="bcds-header--line" />
        <component :is="titleElement" class="bcds-header--title">
          {{ title }}
        </component>
      </template>
      
      <slot />
    </div>
  </header>
</template>

<script setup lang="ts">
import SvgBcLogo from '../SvgBcLogo/SvgBcLogo.vue'
import type { HeaderProps } from './types'

withDefaults(defineProps<HeaderProps>(), {
  title: "",
  titleElement: "span",
})
</script>

<style scoped>
@import './Header.css';
</style>