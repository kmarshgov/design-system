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

<script>
import SvgBcLogo from '../SvgBcLogo/SvgBcLogo.vue'

export default {
  name: 'Header',
  components: {
    SvgBcLogo
  },
  props: {
    /**
     * Link element that surrounds the logo. Use what's appropriate for your
     * router. Defaults to a generic HTML link element.
     */
    logoLinkElement: {
      type: [String, Object],
      default: undefined
    },
    /**
     * Array of link elements that are not visible until they are focused. Used
     * for accessibility for keyboard users, to let them easily skip to main
     * content, navigation, etc.
     */
    skipLinks: {
      type: Array,
      default: undefined
    },
    /**
     * Header title text that appears to the right of the logo.
     */
    title: {
      type: String,
      default: ""
    },
    /**
     * Desired element that renders the `title` string. Defaults to `<span>`.
     */
    titleElement: {
      type: String,
      default: "span",
      validator: (value) => ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p"].includes(value)
    }
  }
}
</script>

<style scoped>
@import './Header.css';
</style>