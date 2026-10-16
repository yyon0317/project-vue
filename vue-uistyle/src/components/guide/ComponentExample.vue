<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  id: string
  title: string
  description?: string
  code: string
}>()

type Tab = 'preview' | 'code'

const activeTab = ref<Tab>('preview')

const previewTab = ref<HTMLButtonElement | null>(null)
const codeTab = ref<HTMLButtonElement | null>(null)

function selectTab(tab: Tab) {
  activeTab.value = tab

  if (tab === 'preview') {
    previewTab.value?.focus()
  } else {
    codeTab.value?.focus()
  }
}

function handleTabKeydown(event: KeyboardEvent) {
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowRight':
      event.preventDefault()
      selectTab(activeTab.value === 'preview' ? 'code' : 'preview')
      break

    case 'Home':
      event.preventDefault()
      selectTab('preview')
      break

    case 'End':
      event.preventDefault()
      selectTab('code')
      break
  }
}
</script>

<template>
  <section
    class="component-example"
    :aria-labelledby="`${props.id}-title`"
  >
    <header class="component-example__header">
      <h3
        :id="`${props.id}-title`"
        class="component-example__title"
      >
        {{ props.title }}
      </h3>

      <p
        v-if="props.description"
        class="component-example__description"
      >
        {{ props.description }}
      </p>
    </header>

    <div
      class="component-example__tabs"
      role="tablist"
      :aria-label="`${props.title} 보기 방식`"
      @keydown="handleTabKeydown"
    >
      <button
        :id="`${props.id}-preview-tab`"
        ref="previewTab"
        class="component-example__tab"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'preview'"
        :aria-controls="`${props.id}-preview-panel`"
        :tabindex="activeTab === 'preview' ? 0 : -1"
        @click="activeTab = 'preview'"
      >
        Preview
      </button>

      <button
        :id="`${props.id}-code-tab`"
        ref="codeTab"
        class="component-example__tab"
        type="button"
        role="tab"
        :aria-selected="activeTab === 'code'"
        :aria-controls="`${props.id}-code-panel`"
        :tabindex="activeTab === 'code' ? 0 : -1"
        @click="activeTab = 'code'"
      >
        Code
      </button>
    </div>

    <div
      :id="`${props.id}-preview-panel`"
      class="component-example__preview"
      role="tabpanel"
      :aria-labelledby="`${props.id}-preview-tab`"
      :hidden="activeTab !== 'preview'"
      tabindex="0"
    >
      <slot />
    </div>

    <div
      :id="`${props.id}-code-panel`"
      class="component-example__code"
      role="tabpanel"
      :aria-labelledby="`${props.id}-code-tab`"
      :hidden="activeTab !== 'code'"
      tabindex="0"
    >
      <pre><code>{{ props.code }}</code></pre>
    </div>
  </section>
</template>

<style scoped lang="scss">
.component-example {
  min-width: 0;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  background-color: var(--color-background);

  &__header {
    padding: var(--space-4);
  }

  &__title {
    margin: 0;
    font-size: var(--font-size-sm);
    font-weight: 700;
  }

  &__description {
    margin: var(--space-2) 0 0;
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }

  &__tabs {
    display: flex;
    gap: var(--space-4);
    padding: 0 var(--space-4);
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  &__tab {
    min-height: 44px;
    padding: var(--space-2) var(--space-1);
    border: 0;
    border-bottom: 2px solid transparent;
    background: transparent;
    color: var(--color-text-muted);
    cursor: pointer;

    &[aria-selected='true'] {
      border-bottom-color: var(--color-primary);
      color: var(--color-primary);
      font-weight: 700;
    }

    &:hover {
      color: var(--color-primary);
    }
  }

  &__preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-6);
  }

  &__code {
    padding: var(--space-4);
    overflow-x: auto;
    border-radius: 0 0 var(--radius-md) var(--radius-md);
    background-color: var(--color-surface);

    pre {
      margin: 0;
      font-size: var(--font-size-sm);
      line-height: 1.6;
    }

    code {
      font-family: monospace;
    }
  }
}
</style>