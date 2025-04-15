<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import MediaQueryList from '@/scripts/constants/media-query-list';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

defineProps<{
  num: number;
  titleEn: string;
  titleJa: string;
  text: string;
}>();

onMounted(() => {
  const textNums = gsap.utils.toArray('.js-service-card-num');
  if (!textNums) return;

  textNums.forEach((line: any) => {
    gsap.fromTo(
      line,
      { scale: 0.3, x: MediaQueryList.Pc.matches ? '200px' : '-100px' },
      {
        scale: 1,
        x: 0,
        scrollTrigger: {
          trigger: line,
          start: MediaQueryList.Pc.matches ? 'top 80%' : 'top 80%',
          end: MediaQueryList.Pc.matches ? 'bottom 60%' : 'bottom 60%',
          scrub: 1,
        },
      }
    );
  });
});
</script>

<template>
  <dl class="service-card l-inner__sp">
    <dt>
      <p class="service-card__ttl-en">{{ titleEn }}</p>
      <p class="service-card__ttl-ja" v-html="titleJa"></p>
      <span class="service-card__num js-service-card-num">{{ num }}</span>
    </dt>
    <dd class="service-card__txt" v-html="text"></dd>
  </dl>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service-card {
  position: relative;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(30);
    padding-bottom: func.cv-rem(100);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(100);
    padding-bottom: func.cv-rem(20);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: inline;
    width: 100%;
    height: func.cv-rem(1);
    background-color: var(--beige);
    opacity: 0.2;
  }
}

.service-card__ttl-en {
  font-family: var.$ff-sans;
  @include mixin.mq-pc {
    font-size: func.cv-rem(40);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(30);
  }
}

.service-card__ttl-ja {
  font-weight: 520;
  @include mixin.mq-pc {
    padding-bottom: func.cv-rem(5);
    font-size: func.cv-vw(18, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(5);
    font-size: func.cv-rem(12);
  }
}

.service-card__txt {
  color: var(--beige);
  line-height: 1.7;
  font-size: func.cv-rem(13);
  opacity: 0.7;
  @include mixin.mq-pc {
    width: 62%;
    padding-top: func.cv-rem(60);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(60);
  }
}

.service-card__num {
  font-family: var.$ff-sans;
  position: absolute;
  color: var(--green);
  @include mixin.mq-pc {
    font-weight: var.$fw-r;
    font-size: func.cv-vw(180, 1440);
    top: func.cv-rem(20);
    right: func.cv-rem(30);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(90);
    top: func.cv-rem(10);
    left: func.cv-rem(10);
    font-weight: 380;
  }
}
</style>
