<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string
    variant?: 'primary' | 'secondary'
    size?: 'sm' | 'md'
    disabled?: boolean
  }>(),
  {
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
)
</script>

<template>
  <button
    type="button"
    class="ui-button"
    :class="[`ui-button--${variant}`, `ui-button--${size}`]"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<style scoped lang="scss">
.ui-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  max-width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 600;
  line-height: 1.5;
  overflow-wrap: anywhere;
  cursor: pointer;

  &--sm {
    min-height: 32px;
    padding: 6px 12px;
    font-size: 14px;
  }

  &--md {
    min-height: 44px;
    padding: 10px 20px;
    font-size: 16px;
  }

  &--primary {
    background: #4338ca;
    color: #fff;

    &:hover:not(:disabled) {
      background: #3730a3;
    }
  }

  &--secondary {
    border-color: #cbd5e1;
    background: #fff;
    color: #334155;

    &:hover:not(:disabled) {
      background: #f1f5f9;
    }
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 3px;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
}
</style>