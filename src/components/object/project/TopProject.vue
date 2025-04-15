<script setup lang="ts">
import KvSec from '../component/KvSec.vue';
import SplashSec from '@/components/object/component/Splash.vue';
import { ref, onMounted } from 'vue';

const showSplash = ref(true);

onMounted(() => {
  // セッションストレージからsplashが表示済みかどうかを確認
  const splashShown = sessionStorage.getItem('splashShown');
  if (splashShown) {
    showSplash.value = false;
  } else {
    // splash表示済みフラグを設定
    setTimeout(() => {
      showSplash.value = false;
      sessionStorage.setItem('splashShown', 'true');
    }, 8000);
  }
});
</script>

<template>
  <div class="top js-top">
    <SplashSec v-if="showSplash" />
    <div class="top-bg"></div>
    <div class="top-container">
      <KvSec />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.top {
  position: relative;
}

.top-bg {
  transition-duration: 0.4s;
  transition-timing-function: var(--cubic);
  transition-property: opacity;
  .is-kvanimation-start & {
    opacity: 0;
  }
  .is-kvanimation-close & {
    opacity: 1;
  }

  @include mixin.mq-pc {
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    z-index: var.$z-negative;
  }
}
</style>
