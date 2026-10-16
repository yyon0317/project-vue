<template>
  <header class="app-header">
    <a class="app-header__logo" href="./">
      Vue UI Style
    </a>

    <span class="app-header__description">
      UI 컴포넌트 가이드
    </span>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-2) var(--space-4);

  min-height: 64px;
  padding: var(--space-3) var(--space-6);
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-background);

  &__logo {
    color: var(--color-text);
    font-size: var(--font-size-lg);
    font-weight: 700;
    text-decoration: none;
  }

  &__description {
    color: var(--color-text-muted);
    font-size: var(--font-size-sm);
  }
}
</style>