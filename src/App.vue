<script setup lang="ts">
import HeaderSec from '@/components/foundation/HeaderSec.vue';
import MouseStalker from '@/components/object/component/MouseStalker.vue';
import { provide } from 'vue';
import { RouterView } from 'vue-router';

// 画像読み込みの共通パスを定義
provide('IMG_PATH', '/assets/images');
</script>

<template>
  <HeaderSec add-class="top-project__header" />
  <div class="ligrow">
    <main class="app">
      <RouterView />
      <div class="wrapper__stalker">
        <MouseStalker client:only="vue" />
      </div>
    </main>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.app {
  position: relative;
}
</style>
