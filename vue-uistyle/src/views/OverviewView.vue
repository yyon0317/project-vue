<template>
  <div class="overview">
    <h1 id="overview" class="overview__title" tabindex="-1">
      컴포넌트 문서
    </h1>

    <p class="overview__description">
      공통 UI 컴포넌트의 사용 방법과 상태별 예제를 안내합니다.
    </p>

    <section
      class="overview__section"
      aria-labelledby="design-principles"
    >
      <h2 id="design-principles" tabindex="-1">디자인 원칙</h2>

      <p>
        공통 색상과 간격을 사용해 일관된 화면을 만들고,
        반복되는 UI는 컴포넌트로 재사용합니다.
      </p>
    </section>

    <section
      class="overview__section"
      aria-labelledby="accessibility"
    >
      <h2 id="accessibility" tabindex="-1">접근성</h2>

      <p>
        의미에 맞는 HTML을 사용하고, 키보드 조작과
        포커스 표시를 고려해 컴포넌트를 구현합니다.
      </p>
    </section>
  </div>
</template>

<style scoped lang="scss">
.overview {
  &__title {
    margin: 0 0 var(--space-4);
    font-size: var(--font-size-xl);
    line-height: 1.3;
  }

  &__description {
    margin: 0;
    color: var(--color-text-muted);
  }

  &__section {
    margin-top: var(--space-12);

    h2 {
      margin: 0 0 var(--space-4);
      padding-bottom: var(--space-3);
      border-bottom: 1px solid var(--color-border);
      font-size: var(--font-size-lg);
    }

    p {
      margin: 0;
    }
  }
}
</style>