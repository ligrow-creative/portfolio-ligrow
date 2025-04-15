<script setup lang="ts">
import ServiceFrame from './ServiceFrame.vue';
import ServiceLineFrame from './ServiceLineFrame.vue';
import serviceOtherData from '@/constants/serviceOtherData';
</script>

<template>
  <div class="service-other">
    <ServiceFrame
      title="制作パートナーのご依頼"
      detail="制作パートナーのご依頼（コーディング・フロントエンド開発）はこちらから。<br>Webサイトの構築に必要なコーディング全般、動的なUI/UXを実現するフロントエンド開発を承ります。料金は目安となりますが、記載のない技術や要件にも柔軟に対応いたします。まずはお気軽にご相談ください。"
      type="other"
      :include-lists="false"
      :otehr-infomation="true"
    >
      <div class="service-other__inner l-inner l-inner__sp">
        <ServiceLineFrame
          v-for="(item, index) in serviceOtherData"
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

.service-other__inner {
  padding-top: func.cv-rem(60);
  padding-bottom: func.cv-rem(50);
}
</style>
