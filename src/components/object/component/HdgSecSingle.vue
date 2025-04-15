<script setup lang="ts">
const props = defineProps<{
  title: string;
  priority?: 2 | 3 | 4 | 5 | 6;
  addClass?: string;
}>();

const HeadingTag = `h${props.priority}`;
</script>

<template>
  <HeadingTag class="hdg-sec-single" :class="addClass">
    <span class="hdg-sec-single__title">
      {{ title }}
    </span>
  </HeadingTag>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.hdg-sec-single {
  font-family: var.$ff-sans;
  position: relative;
  display: flex;
  gap: func.cv-vw(15, var.$w-base-pc);
  @include mixin.mq-sp {
    justify-content: space-between;
  }
}

.hdg-sec-single__arrow {
  @include mixin.mq-pc {
    width: func.cv-vw(100, var.$w-base-pc);
    padding: func.cv-vw(5, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    width: func.cv-rem(54);
  }
  svg {
    width: 100%;
    height: auto;
    fill: var(--green);
  }
}

.hdg-sec-single__title {
  display: inline-block;
  letter-spacing: -0.08em;
  position: relative;
  font-weight: var.$fw-r;
  @include mixin.mq-pc {
    font-size: func.cv-vw(120, var.$w-base-pc);
  }
}
</style>
