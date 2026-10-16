<script setup lang="ts">
import ComponentExample from '../components/guide/ComponentExample.vue'
import UiButton from '../components/ui/button/UiButton.vue'

const basicCode = `<UiButton label="저장" />
<UiButton label="취소" variant="secondary" />`

const sizeCode = `<UiButton label="작은 버튼" size="sm" />
<UiButton label="기본 버튼" size="md" />`

const disabledCode = `<UiButton label="저장" disabled />
<UiButton label="취소" variant="secondary" disabled />`
</script>

<template>
  <div class="button-guide">
    <h1 class="button-guide__title">Button</h1>

    <p class="button-guide__description">
      저장, 취소 등 사용자의 동작을 실행하는 버튼 컴포넌트입니다.
    </p>

    <section
      class="button-guide__section"
      aria-labelledby="button-basic"
    >
      <h2 id="button-basic">기본 사용법</h2>
      <p>
        주요 동작에는 primary, 보조 동작에는 secondary를 사용합니다.
      </p>

       <ComponentExample
          id="button-variants"
          title="버튼 종류"
          description="주요 동작과 보조 동작에 맞는 버튼을 사용합니다."
          :code="basicCode">
          <UiButton label="저장" />
          <UiButton label="취소" variant="secondary" />
        </ComponentExample>
    </section>

    <section
      class="button-guide__section"
      aria-labelledby="button-size"
    >
      <h2 id="button-size">크기</h2>
      <p>배치할 영역에 따라 sm 또는 md 크기를 선택합니다.</p>

      <ComponentExample
        id="button-sizes"
        title="버튼 크기"
        description="sm과 md 크기를 비교합니다."
        :code="sizeCode"
      >
        <UiButton label="작은 버튼" size="sm" />
        <UiButton label="기본 버튼" size="md" />
      </ComponentExample>
    </section>

    <section
      class="button-guide__section"
      aria-labelledby="button-disabled"
    >
      <h2 id="button-disabled">비활성 상태</h2>
      <p>현재 실행할 수 없는 동작에 사용합니다.</p>

      <ComponentExample
        id="button-disabled-example"
        title="비활성 버튼"
        description="disabled 상태에서는 버튼을 실행할 수 없습니다."
        :code="disabledCode"
      >
        <UiButton label="저장" disabled />
        <UiButton label="취소" variant="secondary" disabled />
      </ComponentExample>
    </section>

    <section
      class="button-guide__section"
      aria-labelledby="button-accessibility"
    >
      <h2 id="button-accessibility">접근성</h2>

      <ul class="button-guide__notes">
        <li>버튼 문구는 실행할 동작을 명확하게 표현합니다.</li>
        <li>활성 버튼은 Tab 키로 이동하고 Enter 또는 Space 키로 실행합니다.</li>
        <li>키보드 포커스가 표시되는지 확인합니다.</li>
        <li>기본 disabled 버튼은 Tab 이동 순서에서 제외됩니다.</li>
      </ul>
    </section>
  </div>
</template>

<style scoped lang="scss">
.button-guide {
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
      margin: 0 0 var(--space-4);
    }
  }

  &__preview {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-6);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
  }

  &__code {
    max-width: 100%;
    margin: var(--space-4) 0 0;
    padding: var(--space-4);
    overflow-x: auto;
    border-radius: var(--radius-md);
    background-color: var(--color-surface);
    font-size: var(--font-size-sm);
    line-height: 1.6;

    code {
      font-family: monospace;
    }
  }

  &__notes {
    margin: 0;
    padding-left: var(--space-6);

    li + li {
      margin-top: var(--space-2);
    }
  }
}
</style>