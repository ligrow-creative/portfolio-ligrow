<script setup lang="ts">
const props = defineProps<{
  titleEn: string;
  titleJa?: string;
  num?: number;
  priority?: 2 | 3 | 4 | 5 | 6;
  addClass?: string;
  direction: 'v' | 'p';
  circle: boolean;
}>();
</script>

<template>
  <div class="hdg-sec" :class="addClass">
    <h2
      class="hdg-sec__main"
      :style="{
        'writing-mode':
          props.direction === 'v' ? 'vertical-rl' : 'horizontal-tb',
      }"
    >
      <span class="hdg-sec__main-up">{{ titleEn }}</span>
      <span class="hdg-sec__main-down">{{ titleEn }}</span>
    </h2>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.hdg-sec {
  position: relative;
  font-family: var.$ff-sans;
}

.hdg-sec__main {
  display: inline-block;
  letter-spacing: -0.08em;
  position: relative;
  font-weight: var.$fw-r;
  @include mixin.mq-pc {
    font-size: func.cv-vw(110, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(66);
  }
}

.hdg-sec__main-down {
  position: absolute;
  left: 0;
  transform: scale(1, -1);
  transform-origin: center bottom;
  opacity: 0.2;
  @include mixin.mq-pc {
    bottom: func.cv-vw(58, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    bottom: func.cv-rem(33);
  }
}
</style>
