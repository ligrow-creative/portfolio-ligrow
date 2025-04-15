<script setup lang="ts">
import { ref, onMounted, inject } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WorksCard from '../component/WorksCard.vue';
import worksCardData from '@/constants/worksCard';
import HdgSecLead from '../component/HdgSecLead.vue';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import FooterSec from '@/components/foundation/FooterSec.vue';

const IMG_PATH = inject<string>('IMG_PATH');

gsap.registerPlugin(ScrollTrigger);

const swiperInstance = ref<Swiper | null>(null);

onMounted(() => {
  const swiperElm = document.querySelector('.js-works-swiper') as HTMLElement;
  const hdgElm = document.querySelector('.js-works-hdg') as HTMLElement;
  if (!swiperElm || !hdgElm) return;

  swiperInstance.value = new Swiper(swiperElm, {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 'auto',
    spaceBetween: 0,
    loop: true,
    speed: 1100,
    autoplay: {
      delay: 2500,
    },
    navigation: {
      nextEl: '.works__slider-next',
      prevEl: '.works__slider-prev',
    },
  });
});
</script>

<template>
  <section id="works" ref="works" class="works">
    <div class="works__inner">
      <div class="works__bg"></div>
      <HdgSecLead
        title="制作実績"
        :num="2"
        add-class="works__lead l-inner__sp"
      />
      <h2 class="works__hdg js-works-hdg">
        <span class="works__hdg-first">WORKS</span>
      </h2>
      <dl class="works__dev">
        <dt class="works__dev-title">Github</dt>
        <dd class="works__dev-git">
          <a
            href="https://github.com/ligrow-creative"
            target="_blank"
            class="works__dev-link"
          >
            <span class="works__dev-img">
              <img
                :src="IMG_PATH + '/common/icon_git.svg'"
                alt=""
                width="19"
                height="18
                0"
              />
            </span>
            <span class="works__dev-name">ligrow-creative</span>
          </a>
        </dd>
      </dl>
      <div class="works__container">
        <div class="works__slider">
          <div class="swiper works__swiper js-works-swiper">
            <div class="swiper-wrapper works__swiper-wrapper">
              <WorksCard
                v-for="(item, index) in worksCardData"
                :id="item.id"
                :key="index"
                class="swiper-slide works__card"
                :title="item.title"
                :year="item.year"
                :role="item.role"
                :plan="item.plan"
                :service="item.service"
                :url="item.url"
                :summary="item.summary"
              />
            </div>
          </div>
          <div class="works__slider-btn">
            <button class="works__slider-prev"></button>
            <button class="works__slider-next"></button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterSec />
</template>

<style lang="scss" scoped>
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.works {
  position: relative;
  overflow: hidden;
  background-color: var(--beige);
}

.works__inner {
  background-color: var(--beige);
  overflow: hidden;
  position: relative;
  @include mixin.mq-pc {
    display: flex;
    flex-direction: column;
  }
  @include mixin.mq-sp {
    padding-top: 50px;
    padding-left: func.cv-rem(15);
    box-sizing: border-box;
  }
}

.works__bg {
  position: absolute;
  inset: 0;
  background-color: var(--beige);
  @include mixin.mq-sp {
    margin-left: func.cv-rem(15);
    border-left: 1px solid var(--gray);
  }
}

.works__dev {
  display: flex;
  align-items: baseline;
  position: relative;
  color: var(--gray);
  border-top: 1px solid var(--gray);
  font-family: var.$ff-sans;
  margin-top: func.cv-rem(80);
  @include mixin.mq-pc {
    padding: func.cv-rem(10) func.cv-rem(15);
    gap: func.cv-rem(8);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(10) func.cv-rem(10);
    justify-content: space-between;
    gap: func.cv-rem(8);
    border-right: 1px solid var(--gray);
  }
}

.works__dev-link {
  font-family: var.$ff-sans-serif;
  font-weight: 500;
  display: inline-flex;
  gap: func.cv-rem(3);
  align-items: center;
  background-color: rgba(#fff, 0.2);
  border-radius: func.cv-rem(5);
  padding: func.cv-rem(5) func.cv-rem(8);
  @include mixin.mq-pc {
    font-size: func.cv-rem(16);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}

.works__dev-title {
  letter-spacing: 0.01em;
  @include mixin.mq-pc {
    font-size: func.cv-rem(18);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(16);
  }
}

.works__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  @include mixin.mq-sp {
    height: 100%;
  }
}

.works__slider {
  position: relative;
  @include mixin.mq-sp {
    border-left: 1px solid var(--gray);
    box-sizing: border-box;
  }
}
.works__container {
  display: flex;
  overflow: hidden;
  border-top: 1px solid var(--gray);
}
.works__swiper {
  display: flex;
  overflow: hidden;
}
.works__hdg {
  color: var(--gray);
  font-family: var.$ff-sans;
  font-weight: 380;
  letter-spacing: -0.1em;
  white-space: nowrap;
  text-overflow: clip;
  display: flex;
  align-items: flex-start;
  position: relative;
  z-index: var.$z-positive;
  @include mixin.mq-pc {
    font-size: func.cv-vw(350, var.$w-base-pc);
    padding-top: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(5);
    font-size: func.cv-rem(84);
    padding-left: func.cv-rem(5);
  }
}

.works__lead {
  position: relative;
  z-index: var.$z-positive;
  justify-content: space-between;
  flex-direction: row-reverse;
  color: var(--gray);
  @include mixin.mq-pc {
    padding-left: calc(38% + func.cv-rem(15));
    padding-top: func.cv-rem(70);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(5);
  }
}

.works__card {
  background-color: var(--beige);
  border-top: 1px solid var(--gray);
  border-right: 1px solid var(--gray);
}

.works__scroll {
  text-align: left;
  position: absolute;
  left: func.cv-rem(15);
  top: func.cv-vw(400, var.$w-base-pc);
}
.works__slider-btn {
  position: absolute;
  z-index: var.$z-positive;
  top: 50%;
  width: 100%;
  display: flex;
  transform: translate3d(0, -50%, 0);
  justify-content: space-between;
}

.works__slider-prev {
  background-color: var(--beige);
  display: inline-block;
  border-right: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  border-top: 1px solid var(--gray);
  position: relative;
  @include mixin.mq-pc {
    width: func.cv-rem(50);
    height: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    width: func.cv-rem(40);
    height: func.cv-rem(40);
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate3d(-50%, -50%, 0) rotate(-45deg);
    content: '';
    display: inline-block;
    border-left: 1px solid var(--gray);
    border-top: 1px solid var(--gray);
    @include mixin.mq-pc {
      width: func.cv-rem(20);
      height: func.cv-rem(20);
    }
    @include mixin.mq-sp {
      width: func.cv-rem(15);
      height: func.cv-rem(15);
    }
  }
}

.works__slider-next {
  background-color: var(--beige);
  display: inline-block;
  border-left: 1px solid var(--gray);
  border-bottom: 1px solid var(--gray);
  border-top: 1px solid var(--gray);
  position: relative;
  @include mixin.mq-pc {
    width: func.cv-rem(50);
    height: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    width: func.cv-rem(40);
    height: func.cv-rem(40);
    border-right: 1px solid var(--gray);
  }

  &::before {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translate3d(-50%, -50%, 0) rotate(135deg);
    content: '';
    display: inline-block;
    border-left: 1px solid var(--gray);
    border-top: 1px solid var(--gray);
    @include mixin.mq-pc {
      width: func.cv-rem(20);
      height: func.cv-rem(20);
    }
    @include mixin.mq-sp {
      width: func.cv-rem(15);
      height: func.cv-rem(15);
    }
  }
}
</style>
