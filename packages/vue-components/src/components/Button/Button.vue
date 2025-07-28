<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
    @focus="handleFocus"
    @blur="handleBlur"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  variant: "primary",
  danger: false,
  isIconButton: false,
  disabled: false,
})

const emit = defineEmits<{
  click: [event: MouseEvent]
  focus: [event: FocusEvent]
  blur: [event: FocusEvent]
}>()

const isHovered = ref(false)
const isFocused = ref(false)

const buttonClasses = computed(() => [
  'bcds-vue-Button',
  props.size,
  props.variant,
  {
    'danger': props.danger,
    'icon': props.isIconButton,
    'hovered': isHovered.value,
    'focused': isFocused.value,
    'disabled': props.disabled,
  }
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emit('click', event)
  }
}

const handleFocus = (event: FocusEvent) => {
  isFocused.value = true
  emit('focus', event)
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  emit('blur', event)
}

const handleMouseEnter = () => {
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
}
</script>

<style scoped>
.bcds-vue-Button {
  border: none;
  border-radius: var(--layout-border-radius-medium);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: var(--layout-padding-small);
  font: var(--typography-regular-body);
  padding-left: 16px;
  padding-right: 16px;
}

.bcds-vue-Button.disabled {
  cursor: not-allowed;
}

.bcds-vue-Button.focused {
  outline: 2px solid var(--surface-color-border-active);
}

/* Icon button */
.bcds-vue-Button.icon {
  align-items: center;
  justify-content: space-around;
}

/* Sizes */
.bcds-vue-Button.small {
  min-height: 32px;
}

.bcds-vue-Button.small.icon {
  padding: unset;
  height: 32px;
  width: 32px;
  min-width: 32px;
}

.bcds-vue-Button.medium {
  min-height: 40px;
}

.bcds-vue-Button.medium.icon {
  padding: unset;
  height: 40px;
  width: 40px;
  min-width: 40px;
}

/* Variant - Primary */
.bcds-vue-Button.primary {
  background: var(--surface-color-primary-button-default);
  color: var(--icons-color-primary-invert);
}

.bcds-vue-Button.primary.danger {
  background-color: var(--surface-color-primary-danger-button-default);
}

.bcds-vue-Button.primary.disabled {
  background-color: var(--surface-color-primary-danger-button-disabled);
  color: var(--typography-color-disabled);
}

.bcds-vue-Button.primary.hovered {
  background-color: var(--surface-color-primary-button-hover);
}

.bcds-vue-Button.primary.danger.hovered {
  background-color: var(--surface-color-primary-danger-button-hover);
}

/* Variant - Secondary */
.bcds-vue-Button.secondary {
  background-color: var(--surface-color-secondary-button-default);
  border: 1px solid var(--surface-color-border-dark);
  color: var(--typography-color-primary);
}

.bcds-vue-Button.secondary.danger {
  border-color: var(--support-border-color-danger);
  color: var(--surface-color-primary-danger-button-default);
}

.bcds-vue-Button.secondary.disabled {
  background-color: var(--surface-color-secondary-button-disabled);
  border-color: var(--surface-color-border-default);
  color: var(--typography-color-disabled);
}

.bcds-vue-Button.secondary.hovered {
  background-color: var(--surface-color-secondary-button-hover);
}

.bcds-vue-Button.secondary.danger.hovered {
  background-color: var(--support-surface-color-danger);
}

/* Variant - Tertiary */
.bcds-vue-Button.tertiary {
  background-color: var(--surface-color-tertiary-button-default);
  color: var(--typography-color-primary);
}

.bcds-vue-Button.tertiary.danger {
  color: var(--surface-color-primary-danger-button-default);
}

.bcds-vue-Button.tertiary.disabled {
  background-color: var(--surface-color-tertiary-button-default);
  color: var(--typography-color-disabled);
}

.bcds-vue-Button.tertiary.hovered {
  background-color: var(--surface-color-tertiary-button-hover);
}

.bcds-vue-Button.tertiary.danger.hovered {
  background-color: var(--support-surface-color-danger);
}

/* Variant - Link */
.bcds-vue-Button.link {
  background-color: var(--surface-color-tertiary-button-default);
  color: var(--typography-color-link);
  text-decoration: underline;
  text-underline-offset: 0.3em;
}

.bcds-vue-Button.link.danger {
  color: var(--surface-color-primary-danger-button-default);
}

.bcds-vue-Button.link.disabled {
  color: var(--typography-color-disabled);
}
</style>