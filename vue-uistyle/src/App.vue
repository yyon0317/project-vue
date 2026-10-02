<script setup lang="ts">
const title = 'Vue UI Style'
</script>

<template>
  <main class="guide">
    <h1 class="guide__title">{{ title }}</h1>
    <p class="guide__description">
      재사용 가능한 Vue 컴포넌트와 스타일 가이드
    </p>
  </main>
</template>

<style scoped lang="scss">
.guide {
  padding: 48px 24px;
  font-family: sans-serif;

  &__title {
    margin: 0 0 16px;
    color: #4338ca;
    font-size: 32px;
  }

  &__description {
    margin: 0;
    color: #475569;
    line-height: 1.6;
  }
}
</style>