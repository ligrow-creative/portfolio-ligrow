<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IconLogo from '@/icons/iconLogo.vue';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const splashShown = sessionStorage.getItem('splashShown') === 'true';
  if (splashShown) {
    return;
  }

  const bodyElm = document.body;
  const splashElm = document.querySelector('.js-splash') as HTMLElement;
  const splashBoxElm = splashElm.querySelector('.js-splash-box') as HTMLElement;
  const splashInnerElm = splashElm.querySelector(
    '.js-splash-inner'
  ) as HTMLElement;
  const splashLogoElm = splashElm.querySelector(
    '.js-splash-logo'
  ) as HTMLElement;
  const splashLogoCoverElm = splashElm.querySelector(
    '.js-splash-logo-cover'
  ) as HTMLElement;
  const splashCounterElm = splashElm.querySelector(
    '.js-splash-counter'
  ) as HTMLElement;
  const splashCountUpElm = splashElm.querySelector(
    '.js-splash-count-up'
  ) as HTMLElement;

  if (
    !bodyElm ||
    !splashElm ||
    !splashBoxElm ||
    !splashInnerElm ||
    !splashLogoElm ||
    !splashLogoCoverElm ||
    !splashCounterElm ||
    !splashCountUpElm
  )
    return;

  // スマホでのサイズ取得を安定させる処理
  requestAnimationFrame(() => {
    splashElm.getBoundingClientRect(); // 強制リフローでリサイズ適用
  });

  const splashTimeLine = gsap.timeline();

  // ロゴを拡大しなが表示
  splashTimeLine.fromTo(
    splashInnerElm,
    {
      scale: 0,
    },
    {
      scale: 1,
      duration: 0.4,
      ease: 'power1.out',
      onComplete: () => {
        window.scrollTo(0, 0); // スクロールをトップに戻す
      },
    }
  );

  splashTimeLine.to(bodyElm, {
    overflow: 'hidden',
  });

  splashTimeLine.from(splashCounterElm, {
    textContent: 0,
    duration: 1.1,
    ease: 'easeOut',
    snap: { textContent: 1 },
    onUpdate: () => {
      // カウント値に基づいてロゴカバーの位置を調整
      const percentage = Math.min(
        Number(splashCounterElm.textContent.replace(/,/g, '')),
        100
      ); // 100に制限
      const splashLogoElmHeight = splashLogoElm.clientHeight;

      // ロゴカバーを上にスライドさせ、カウントアップの進行に合わせて動かす
      gsap.to(splashLogoCoverElm, {
        top: `${(percentage / 100) * splashLogoElmHeight}px`, // 進行度に基づいて位置を動かす
        ease: 'easeOut',
        duration: 0.1,
        onComplete: () => {
          gsap.to(splashCountUpElm, {
            display: 'none',
          });
        },
      });
    },
  });

  splashTimeLine.to(splashBoxElm, {
    bottom: '30px',
    ease: 'back.inOut',
    duration: 0.8,
    delay: 0.6,
  });

  splashTimeLine.to(splashElm, {
    duration: 0.5,
    transform: 'translate3d(0, -100%, 0)',
    transitionTimingFunction: 'cubic-bezier(.86,0,.07,1);',
    display: 'none',
  });

  splashTimeLine.to(bodyElm, {
    overflow: 'auto',
  });
});
</script>

<template>
  <div class="splash js-splash">
    <div class="splash__inner js-splash-inner">
      <div class="splash__box js-splash-box">
        <div class="splash__logo js-splash-logo">
          <IconLogo />
        </div>
        <span class="splash__logo-cover js-splash-logo-cover"></span>
      </div>
      <div class="splash__count-up js-splash-count-up">
        <span class="splash__counter js-splash-counter">100</span>
        <span class="splash__count-unit">%</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.splash {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100svh;
  z-index: var.$z-splash;
  background-color: var(--gray);
}

.splash__inner {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.splash__box {
  position: absolute;
  z-index: var.$z-positive;
  left: 50%;
  transform: translate3d(-50%, 50%, 0);
  overflow: hidden;
  max-height: 100svh;
  @include mixin.mq-pc {
    bottom: calc(50% + func.cv-vw(30, var.$w-base-pc));
  }
  @include mixin.mq-sp {
    bottom: calc(50% + func.cv-rem(20));
  }
}

.splash__logo {
  svg {
    fill: var(--beige);
    width: 100%;
    height: 100%;
  }
  @include mixin.mq-pc {
    width: func.cv-vw(140, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    width: func.cv-rem(100);
  }
}

.splash__logo-cover {
  opacity: 0.8;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background-color: var(--gray);
  z-index: var.$z-positive;
  transition: top 0.1s ease;
}

.splash__count-up {
  color: var(--beige);
  font-family: var.$ff-sans;
  z-index: var.$z-positive;
  @include mixin.mq-pc {
    font-size: func.cv-vw(38, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(30);
  }
}

.splash__count-unit {
  font-size: func.cv-rem(26);
}
</style>
