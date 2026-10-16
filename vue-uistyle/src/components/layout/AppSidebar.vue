<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="app-sidebar" aria-label="가이드 메뉴">
    <p class="app-sidebar__title">시작하기</p>

    <ul class="app-sidebar__list">
      <li>
        <RouterLink class="app-sidebar__link" to="/">
          Overview
        </RouterLink>
      </li>
    </ul>

    <p class="app-sidebar__title app-sidebar__title--group">
      컴포넌트
    </p>

    <ul class="app-sidebar__list">
      <li>
        <RouterLink
          class="app-sidebar__link"
          to="/components/button"
        >
          Button
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.app-sidebar {
  padding: var(--space-6) var(--space-4);
  border-bottom: 1px solid var(--color-border);

  &__title {
    margin: 0 0 var(--space-3);
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
    font-weight: 700;
  }

  &__list {
    display: grid;
    gap: var(--space-1);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  &__link {
    display: flex;
    align-items: center;
    min-height: 44px;
    padding: var(--space-2) var(--space-3);
    border-radius: var(--radius-sm);
    color: var(--color-text);
    text-decoration: none;

    &:hover {
      background-color: var(--color-surface);
      text-decoration: underline;
    }
  }
}

.app-sidebar__title--group {
  margin-top: var(--space-8);
}

.app-sidebar__link.router-link-exact-active {
  background-color: var(--color-surface);
  color: var(--color-primary);
  font-weight: 700;
}

@media (min-width: 768px) {
  .app-sidebar {
    border-right: 1px solid var(--color-border);
    border-bottom: 0;
  }
}


</style>