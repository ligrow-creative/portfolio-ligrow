<script setup lang="ts">
import { onMounted } from 'vue';
import ServiceCard from '../component/ServiceCard.vue';
import PointCardData from '@/constants/pointCard';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HdgSecLead from '../component/HdgSecLead.vue';
import FooterSec from '@/components/foundation/FooterSec.vue';
import PriceProject from './PriceProject.vue';
import FaqProject from './FaqProject.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const bgFirstElm = document.querySelector(
    '.service__bg-first'
  ) as HTMLElement;
  const bgSecondElm = document.querySelector(
    '.service__bg-second'
  ) as HTMLElement;
  if (!bgFirstElm || !bgSecondElm) return;

  gsap.fromTo(
    bgFirstElm,
    { x: -100 + '%' },
    {
      x: 0 + '%',
      scrollTrigger: {
        trigger: '.service',
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
      },
    }
  );

  gsap.fromTo(
    bgSecondElm,
    { x: 100 + '%' },
    {
      x: 0 + '%',
      scrollTrigger: {
        trigger: '.service',
        start: 'top bottom',
        end: 'top 50%',
        scrub: 1,
        toggleActions: 'play reverse play reverse',
      },
    }
  );
});
</script>

<template>
  <section id="points" class="service">
    <div class="service__inner">
      <HdgSecLead
        title="サービス"
        :num="1"
        add-class="service__lead l-inner__sp"
      />
      <h2 class="service__hdg">
        <div class="service__bg">
          <p class="service__bg-first">SERVICE</p>
          <p class="service__bg-second">SERVICE</p>
        </div>
      </h2>
      <div class="service__container">
        <ul class="service__lists">
          <li
            v-for="(item, index) in PointCardData"
            :key="index"
            class="service__item"
          >
            <ServiceCard
              :num="item.num"
              :title-en="item.title_en"
              :title-ja="item.title_ja"
              :text="item.text"
            />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <PriceProject />
  <FaqProject />
  <FooterSec />
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service {
  position: relative;
  background-color: var(--gray);
  @include mixin.mq-pc {
    padding-top: func.cv-rem(50);
    padding-bottom: func.cv-rem(150);
  }
  @include mixin.mq-sp {
    padding-bottom: 70px;
    padding-top: 50px;
  }
}
.service__inner {
  z-index: var.$z-positive;
  position: relative;
  color: var(--beige);
}
.service__bg {
  font-weight: 380;
  letter-spacing: -0.1em;
  white-space: nowrap;
  text-overflow: clip;
  font-size: func.cv-vw(390, var.$w-base-pc);
}

.service__bg-second {
  transform: scale(1, -1);
  opacity: 0.2;
  color: var(--beige);
  @include mixin.mq-pc {
    margin-top: func.cv-vw(-200, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-vw(-195, var.$w-base-pc);
  }
}

.service__hdg {
  font-family: var.$ff-sans;
  overflow: hidden;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(20);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(10);
  }
}

.service__lead {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  @include mixin.mq-pc {
    padding-left: 38%;
  }
}
.service__txt {
  font-weight: 520;
  @include mixin.mq-pc {
    margin-left: 38%;
    padding-bottom: func.cv-rem(40);
    font-size: func.cv-vw(20, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(20);
    padding-left: func.cv-rem(10);
    font-size: func.cv-rem(13);
  }
}
.service__container {
  @include mixin.mq-pc {
    margin-left: 38%;
    margin-top: func.cv-rem(100);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-rem(60);
  }
}

.service__lists {
  width: 100%;
}

.service__item {
  width: 100%;
}
</style>
