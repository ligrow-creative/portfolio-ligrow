<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';

const stayTime = ref(0);
let timer: ReturnType<typeof setInterval>;
const emit = defineEmits(['update']);

onMounted(() => {
  // 1秒ごとに滞在時間を増加
  timer = setInterval(() => {
    stayTime.value += 1;
    emit('update', stayTime.value);
  }, 1000);
});

onBeforeUnmount(() => {
  if (timer) {
    clearInterval(timer);
  }
});
</script>

<template>
  <div class="counter">
    <p>({{ stayTime }})</p>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.counter {
  text-align: center;
  padding-bottom: func.cv-rem(5);
  @include mixin.mq-pc {
    font-size: func.cv-rem(12);
  }
  @include mixin.mq-sp {
    font-size: 12px;
  }
}
</style>
