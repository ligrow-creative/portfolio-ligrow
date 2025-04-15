<script setup lang="ts">
defineProps<{
  titleEn: string;
  title: string;
  note: string;
  price: number;
}>();

const formatPrice = (price: number | undefined): string => {
  if (price === undefined || price === null) {
    return '0';
  }
  // 数値をカンマ区切りでフォーマット
  return price.toLocaleString();
};
</script>

<template>
  <div class="service-line-frame">
    <dl class="service-line-frame__list">
      <dt class="service-line-frame__title">
        <p v-html="title"></p>
        <p class="service-line-frame__note" v-html="note"></p>
      </dt>
      <dd class="service-line-frame__detail">
        <!-- 円 -->
        <p v-if="titleEn === 'hurry'" class="service-line-frame__price">
          ＋{{ formatPrice(price)
          }}<span class="service-line-frame__unit">％</span>
        </p>
        <!-- % -->
        <p v-else class="service-line-frame__price">
          {{ formatPrice(price)
          }}<span class="service-line-frame__unit">円~</span
          ><span class="service-line-frame__tax">(税込)</span>
        </p>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service-line-frame {
  position: relative;
  min-height: func.cv-rem(90);
  display: flex;
  align-items: center;
  padding-top: func.cv-rem(25);
  padding-bottom: func.cv-rem(25);
  line-height: 1.2;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(25);
    padding-bottom: func.cv-rem(25);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(15);
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    top: 0;
    width: 100%;
    height: func.cv-rem(1);
    empty-cells: 0;
    background-color: var(--gray);
    opacity: 0.2;
  }
}

.service-line-frame__list {
  width: 100%;
  display: flex;
  @include mixin.mq-pc {
    gap: func.cv-rem(100);
    align-items: flex-start;
    justify-content: space-between;
  }
  @include mixin.mq-sp {
    gap: func.cv-rem(10);
    flex-direction: column;
  }
}

.service-line-frame__title {
  font-size: func.cv-rem(16);
}

.service-line-frame__price {
  text-align: right;

  @include mixin.mq-pc {
    font-size: func.cv-rem(16);
    width: func.cv-rem(100);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(15);
  }
}

.service-line-frame__tax {
  display: block;
  font-size: func.cv-rem(11);
}

.service-line-frame__unit {
  font-size: func.cv-rem(13);
  padding-left: func.cv-rem(2);
}

.service-line-frame__note {
  opacity: 0.5;
  font-size: func.cv-rem(12);
  color: var(--gray);
  @include mixin.mq-pc {
    padding-top: func.cv-rem(6);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(10);
  }
}
</style>
