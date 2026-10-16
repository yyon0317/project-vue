<script setup lang="ts">
import { nextTick, ref, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'

import AppHeader from './components/layout/AppHeader.vue'
import AppSidebar from './components/layout/AppSidebar.vue'

const route = useRoute()
const mainElement = ref<HTMLElement | null>(null)

watch(
  () => route.path,
  async () => {
    await nextTick()
    mainElement.value?.focus({ preventScroll: true })
  },
)
</script>

<template>
  <AppHeader />

  <div class="guide-layout">
    <AppSidebar />

    <main
      ref="mainElement"
      class="guide-main"
      tabindex="-1"
    >
      <RouterView />
    </main>
  </div>
</template>

<style scoped lang="scss">
.guide-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
}

.guide-main {
  min-width: 0;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: var(--space-8) var(--space-6);
}

@media (min-width: 768px) {
  .guide-layout {
    grid-template-columns: 240px minmax(0, 1fr);
  }

  .guide-main {
    padding-top: var(--space-12);
    padding-bottom: var(--space-12);
  }
}
</style>