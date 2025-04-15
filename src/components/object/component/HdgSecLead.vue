<script setup lang="ts">
defineProps<{
  title: string;
  num?: number;
  addClass?: string;
}>();
</script>

<template>
  <div class="hdg-sec-lead" :class="addClass">
    <p class="hdg-sec-lead__sub">
      {{ title }}
    </p>
    <p class="hdg-sec-lead__num">(LiGrow)</p>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.hdg-sec-lead {
  font-family: var.$ff-sans;
  font-weight: var.$fw-semi;
  display: flex;
  align-items: baseline;
  width: 100%;
  @include mixin.mq-pc {
    font-size: func.cv-rem(14);
    padding-left: func.cv-rem(15);
    padding-right: func.cv-rem(15);
    padding-top: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(10);
    justify-content: space-between;
  }
}
.hdg-sec-lead__num {
  font-weight: var.$fw-semi;
}
</style>
