<script setup lang="ts">
import { inject } from 'vue';
import { SnsIcon } from '@/constants/navigation';

// 画像パスを読み込み
const IMG_PATH = inject<string>('IMG_PATH');
</script>

<template>
  <ul class="sns-icons">
    <li v-for="(item, index) in SnsIcon" :key="index" class="sns-icons__item">
      <span>
        <img
          :src="IMG_PATH + '/common/icon_' + item.title_en + '.svg'"
          alt=""
          width="36"
          height="36"
        />
      </span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.sns-icons {
  display: flex;
  gap: func.cv-rem(10);
  padding-left: func.cv-rem(40);
  padding-top: func.cv-rem(15);
  padding-bottom: func.cv-rem(40);
}

.sns-icons__item {
  width: func.cv-rem(32);
  height: func.cv-rem(32);

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
