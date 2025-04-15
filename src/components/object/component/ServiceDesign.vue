<script setup lang="ts">
import ServiceFrame from './ServiceFrame.vue';
import ServiceLineFrame from './ServiceLineFrame.vue';
import serviceDesignData from '@/constants/serviceDesignData';
</script>

<template>
  <div class="service-design">
    <ServiceFrame
      title="Webデザイン制作"
      :include-lists="true"
      detail="ロゴ制作、名刺制作をお考えの方はこちら。リニューアルをお考えの場合も同料金にて承ります。"
      type="design"
      :otehr-infomation="true"
    >
      <div class="service-design__inner l-inner l-inner__sp">
        <ServiceLineFrame
          v-for="(item, index) in serviceDesignData"
          :key="index"
          :title-en="item.title_en"
          :title="item.title"
          :note="item.note"
          :price="item.price"
        >
        </ServiceLineFrame>
      </div>
    </ServiceFrame>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service-design__inner {
  padding-top: func.cv-rem(60);
  padding-bottom: func.cv-rem(50);
}
</style>
