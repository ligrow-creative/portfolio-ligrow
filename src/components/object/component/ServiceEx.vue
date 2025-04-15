<script setup lang="ts">
import ServiceFrame from './ServiceFrame.vue';
import serviceExData from '@/constants/serviceExData';
import ServiceLineFrame from './ServiceLineFrame.vue';
</script>

<template>
  <div class="service-ex">
    <ServiceFrame
      title="Webサイトの更新・運用"
      detail="現在ホームページをお持ちで、更新や修正をご希望の方はこちら。<br>記載の金額はあくまで目安となり、ご要望の内容や範囲に応じてお見積もりいたします。"
      :include-lists="true"
      type="ex"
      :otehr-infomation="true"
    >
      <div class="service-ex__inner l-inner l-inner__sp">
        <ServiceLineFrame
          v-for="(item, index) in serviceExData"
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

.service-ex__inner {
  padding-top: func.cv-rem(60);
  padding-bottom: func.cv-rem(50);
}
</style>
