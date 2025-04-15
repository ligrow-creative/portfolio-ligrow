<script setup lang="ts">
import { onMounted, ref, inject } from 'vue';
import { RouterLink } from 'vue-router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import IconLogo from '@/icons/iconLogo.vue';
import Counter from './Counter.vue';
import MediaQueryList from '@/scripts/constants/media-query-list';
import StateClasses from '@/constants/state-classes';

gsap.registerPlugin(ScrollTrigger);

const IMG_PATH = inject<string>('IMG_PATH');
const menuLinks = ref<HTMLElement[]>([]);

const menus = [
  { num: '1', txt_en: 'ABOUT', txt_ja: 'リグロウについて', link: '/about' },
  { num: '2', txt_en: 'SERVICE', txt_ja: 'サービス', link: '/service' },
  { num: '3', txt_en: 'WORKS', txt_ja: '制作実績', link: '/works' },
  { num: '4', txt_en: 'CONTACT', txt_ja: 'お問い合わせ', link: '/contact' },
];

onMounted(() => {
  // 2回目以降は kvTimeLine をスキップし、必要ならフェードイン要素だけ表示
  const splashShown = sessionStorage.getItem('splashShown') === 'true';
  if (splashShown) {
    document.body.classList.remove(StateClasses.KvAnimation.Close);
    document.body.classList.add(StateClasses.KvAnimation.Close);

    const fadeinLists = document.querySelectorAll('.js-fadein');
    fadeinLists.forEach((e) => e.classList.add('is-show'));

    return;
  }

  // ↓以下は初回表示時だけ実行される ==================
  menuLinks.value = Array.from(
    document.querySelectorAll('.kv-menu__link') as NodeListOf<HTMLElement>
  );
  const kvTitleSans = document.querySelectorAll(
    '.kv-title__char'
  ) as NodeListOf<HTMLElement>;
  const kvLogo = document.querySelector('.kv-logo') as HTMLElement;
  const kvTxt1 = document.querySelector('.kv-txt__line-first') as HTMLElement;
  const kvTxt2 = document.querySelector('.kv-txt__line-second') as HTMLElement;
  const fadeinLists = document.querySelectorAll('.js-fadein');

  // タイムラインを作成
  const kvTimeLine = gsap.timeline();
  document.body.classList.remove(StateClasses.KvAnimation.Close);
  document.body.classList.add(StateClasses.KvAnimation.Start);

  // アニメーションの開始時間を設定
  const initialDelay = splashShown ? 0 : 4;

  // LiGrow Creativeの文字をフェードイン
  kvTimeLine.from(kvTitleSans, {
    delay: initialDelay, // spalshの合計時間
    opacity: 0,
    y: -40 + 'px',
    duration: 0.4,
    stagger: 0.06,
  });

  // テキストアニメーション
  kvTimeLine.fromTo(
    kvTxt1,
    { opacity: 0, y: -30, delay: -1 },
    { opacity: 1, y: 0, duration: 0.3 }
  );
  kvTimeLine.fromTo(
    kvTxt2,
    { opacity: 0, y: -30 },
    { opacity: 1, y: 0, duration: 0.3 }
  );

  // kv-logo アニメーション
  kvTimeLine.fromTo(
    kvLogo,
    {
      y: MediaQueryList.Pc.matches ? '-150%' : '-250%',
      rotation: 300,
    },
    {
      y: '0',
      delay: 0,
      rotation: 20,
      ease: 'bounce.out',
      duration: 4.5,
      onComplete: () => {
        // kvLogoのアニメーション後にbodyにクラスを追加
        document.body.classList.remove(StateClasses.KvAnimation.Start);
        document.body.classList.add(StateClasses.KvAnimation.Close);
        gsap.to(kvLogo, {
          y: MediaQueryList.Pc.matches ? '-55vh' : '-55svh',
          scrollTrigger: {
            trigger: '.kv',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      },
    }
  );

  kvTimeLine.to('.js-fadein', {
    opacity: 1,
    duration: 0.3,
    onComplete: () => {
      fadeinLists.forEach((e) => e.classList.add('is-show'));
    },
  });
});
</script>

<template>
  <section class="kv">
    <div class="kv-inner">
      <h1 class="kv-title">
        <p class="kv-title__inner">
          <span class="kv-title__char">L</span>
          <span class="kv-title__char">I</span>
          <span class="kv-title__char">G</span>
          <span class="kv-title__char">R</span>
          <span class="kv-title__char">O</span>
          <span class="kv-title__char">W</span>
          <span class="kv-title__char u-dsp-pc">C</span>
          <span class="kv-title__char u-dsp-pc">R</span>
          <span class="kv-title__char u-dsp-pc">E</span>
          <span class="kv-title__char u-dsp-pc">A</span>
          <span class="kv-title__char u-dsp-pc">T</span>
          <span class="kv-title__char u-dsp-pc">I</span>
          <span class="kv-title__char u-dsp-pc">V</span>
          <span class="kv-title__char u-dsp-pc">E</span>
          <span class="kv-title__char u-dsp-pc">.</span>
        </p>
        <p class="kv-title__cursive u-dsp-sp">
          <span class="kv-title__char">C</span>
          <span class="kv-title__char">R</span>
          <span class="kv-title__char">E</span>
          <span class="kv-title__char">A</span>
          <span class="kv-title__char">T</span>
          <span class="kv-title__char">I</span>
          <span class="kv-title__char">V</span>
          <span class="kv-title__char">E</span>
          <span class="kv-title__char">.</span>
        </p>
      </h1>
      <div class="kv-txt">
        <p class="kv-txt__line">
          <span class="kv-txt__line-first">I'm a freelance web creator</span>
        </p>
        <p class="kv-txt__line">
          <span class="kv-txt__line-second"> based in Japan.</span>
        </p>
      </div>
      <ul class="kv-links js-fadein">
        <li class="kv-links__item">
          <a
            href="https://github.com/ligrow-creative"
            target="_blank"
            class="kv-links__link"
          >
            <span class="kv-links__img">
              <img
                :src="IMG_PATH + '/common/icon_git.svg'"
                alt=""
                width="20"
                height="20
                0"
              />
            </span>
            <span class="kv-links__name">ligrow-creative</span>
          </a>
        </li>
        <li class="kv-links__item">
          <a
            href="https://page.line.me/ligrow"
            target="_blank"
            class="kv-links__link"
          >
            <span class="kv-links__img">
              <img
                :src="IMG_PATH + '/common/icon_line.svg'"
                alt=""
                width="19"
                height="19"
              />
            </span>
            <span class="kv-links__name">ligrow</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="kv-logo">
      <span>
        <IconLogo />
      </span>
    </div>
    <div class="kv-counter">
      <Counter />
    </div>
    <div class="kv-menu js-fadein">
      <nav class="kv-menu__nav">
        <ul class="kv-menu__lists">
          <li v-for="item in menus" :key="item.num" class="kv-menu__item">
            <RouterLink class="kv-menu__link js-menu-link" :to="item.link">
              <div class="kv-menu__item-txts">
                <p class="kv-menu__item-en">{{ item.txt_en }}</p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.kv {
  font-family: var.$ff-sans;
  position: relative;
  overflow: hidden;
  @include mixin.mq-pc {
    min-height: 100svh;
  }
  @include mixin.mq-sp {
    height: 100svh;
  }
}

.kv-inner {
  position: relative;
  height: 100%;
  padding-right: func.cv-rem(10);
}

.kv-txt {
  font-weight: 370;
  position: relative;
  line-height: 1.2;
  @include mixin.mq-pc {
    margin-top: func.cv-vw(-50, var.$w-base-pc);
    font-size: func.cv-vw(30, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-vw(-20, var.$w-base-pc);
    font-size: func.cv-rem(15);
  }
}

.kv-title {
  margin-top: func.cv-rem(10);
  font-weight: 550;
  color: var(--gray);
  line-height: 1;
  letter-spacing: -0.07em;
  @include mixin.mq-pc {
    font-size: min(func.cv-vw(120, var.$w-base-pc), 120px);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(60);
  }
}

.kv-title__cursive {
  text-align: right;
}

.kv-title__inner {
  position: relative;
  overflow: hidden;
  @include mixin.mq-pc {
    height: func.cv-vw(160, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    height: func.cv-rem(54);
  }
}

.kv-title__char {
  display: inline-block;
  font-family: var.$ff-sans;
}

.kv-logo {
  position: absolute;
  height: auto;
  z-index: var.$z-negative;
  transform: rotate(20deg);

  @include mixin.mq-pc {
    bottom: func.cv-vw(-400, var.$w-base-pc);
    right: func.cv-vw(50, var.$w-base-pc);
    width: min(func.cv-vw(900, var.$w-base-pc), 900px);
  }
  @include mixin.mq-sp {
    bottom: func.cv-vw(-100, var.$w-base-sp);
    left: func.cv-rem(20);
    width: func.cv-rem(350);
  }

  span {
    display: block;
    width: 100%;
    height: auto;

    svg {
      width: 100%;
      height: 100%;
      fill: rgba(#fff, 0.2);
    }
  }
}

.kv-menu {
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  font-weight: 370;
  width: 100%;
  @include mixin.mq-pc {
    padding-left: calc(38%);
  }
  &.is-show {
    opacity: 1;
  }
}

.kv-menu__item {
  letter-spacing: -0.05em;
  font-weight: 500;
  @include mixin.mq-pc {
    font-size: min(func.cv-rem(20), 18px);
    padding-top: func.cv-rem(10);
    padding-bottom: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    font-size: min(func.cv-vw(16), 22px);
    padding-top: func.cv-rem(7);
    padding-bottom: min(func.cv-vw(7), 7px);
  }
}

.kv-menu__lists {
  @include mixin.mq-pc {
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(10);
    display: flex;
    justify-content: space-between;
  }
}

.kv-scroll {
  transition-duration: 0.4s;
  transition-property: opacity;
  transition-timing-function: var(--cubic);
  position: absolute;
  left: func.cv-rem(10);
  z-index: var.$z-positive;
  @include mixin.mq-pc {
    bottom: 38%;
    font-size: func.cv-rem(12);
  }
  @include mixin.mq-sp {
    top: 38%;
    font-size: 12px;
  }

  .is-kvanimation-start & {
    opacity: 0;
  }

  .is-kvanimation-close & {
    opacity: 1;
  }
}

.kv-txt__line {
  overflow: hidden;
  letter-spacing: -0.01em;
  @include mixin.mq-pc {
    padding-left: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    padding-left: func.cv-rem(100);
  }
}

.kv-txt__line-first {
  display: block;
}

.kv-txt__line-second {
  display: block;
}
.kv-links {
  opacity: 0;
  display: flex;
  gap: func.cv-rem(5);
  &.is-show {
    opacity: 1;
  }
  @include mixin.mq-pc {
    padding-top: func.cv-vw(10, var.$w-base-pc);
    padding-left: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(8);
    padding-left: func.cv-rem(100);
  }
}
.kv-links__item {
  display: inline-block;
  background-color: rgba(#fff, 0.2);
  border-radius: 5px;
  @include mixin.mq-pc {
    padding: 7px;
  }
  @include mixin.mq-sp {
    padding: 6px;
  }
}

.kv-links__link {
  img {
    fill: var(--gray);
  }
}

.kv-links__link {
  font-family: var.$ff-sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  font-size: func.cv-rem(12);
  @include mixin.mq-pc {
    gap: func.cv-rem(5);
  }
  @include mixin.mq-sp {
    gap: func.cv-rem(3);
  }
}

.kv-links__name {
  display: inline-block;
  font-family: var.$ff-sans;
  letter-spacing: 0.01em;
  padding-top: 3px;

  @include mixin.mq-pc {
    font-size: 15px;
  }
  @include mixin.mq-sp {
    font-size: min(func.cv-rem(16), 16px);
  }
}

.kv-counter {
  position: absolute;
  left: func.cv-rem(10);
  transition-duration: 0.4s;
  transition-property: transform;
  transition-timing-function: var(--cubic);
  color: var(--green);
  @include mixin.mq-pc {
    top: 60%;
    transform: translate3d(0, -60px, 0);
  }
  @include mixin.mq-sp {
    bottom: 20%;
    left: func.cv-rem(100);
  }
}
</style>
