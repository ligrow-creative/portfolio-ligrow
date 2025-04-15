<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HdgSec from '../component/HdgSec.vue';
import HdgSecLead from '../component/HdgSecLead.vue';
import MediaQueryList from '@/scripts/constants/media-query-list';
import FooterSec from '@/components/foundation/FooterSec.vue';
import iconLogo from '@/icons/iconLogo.vue';

gsap.registerPlugin(ScrollTrigger);

interface Skill {
  name: string;
  level: number;
}

const skillLists = ref<Skill[]>([
  { name: 'HTML5', level: 9 },
  { name: 'CSS3', level: 9 },
  { name: 'SCSS', level: 9 },
  { name: 'JavaScript', level: 7 },
  { name: 'TypeScript', level: 6 },
  { name: 'Vue.js', level: 6 },
  { name: 'React', level: 4 },
  { name: 'GSAP', level: 5 },
  { name: 'jQuery', level: 5 },
  { name: 'EJS', level: 5 },
  { name: 'Pug', level: 4 },
  { name: 'Astro', level: 4 },
  { name: 'Vite', level: 6 },
  { name: 'PHP', level: 2 },
  { name: 'MySQL', level: 2 },
  { name: 'WordPress', level: 3 },
  { name: 'GitHub', level: 6 },
]);

onMounted(() => {
  const textLines = gsap.utils.toArray(
    '.about__text span, .js-title, .about__text li:not(.about__skill-item)'
  );
  if (!textLines) return;

  textLines.forEach((line: any) => {
    gsap.fromTo(
      line,
      { x: 100, y: -30, opacity: 0 },
      {
        x: 0,
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: line,
          start: MediaQueryList.Pc.matches ? 'top 60%' : 'top 90%',
          end: MediaQueryList.Pc.matches ? 'bottom 50%' : 'bottom 60%',
          scrub: 1,
        },
      }
    );
  });

  const skillBox = document.querySelector('.js-tools');
  const skillItems = gsap.utils.toArray('.about__skill-item');

  if (skillBox && skillItems.length > 0) {
    gsap.to(skillItems, { width: '0%' });
  }

  if (skillBox && skillItems.length > 0) {
    ScrollTrigger.create({
      trigger: skillBox,
      start: 'top 50%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          skillItems,
          { width: '0%' },
          {
            width: (index) => `${skillLists.value[index].level * 10}%`,
            duration: 2,
            ease: 'power3.out',
            stagger: 0.08,
          }
        );
      },
    });
  }
});
</script>

<template>
  <section id="about" class="about">
    <div class="about__inner">
      <div class="about__stick">
        <HdgSecLead
          title="プロフィール"
          :num="2"
          add-class="about__lead l-inner l-inner__sp"
        />
        <HdgSec
          title-en="ABOUT"
          title-ja="プロフィール"
          :priority="2"
          :num="1"
          add-class="about__hdg l-inner__sp"
          direction="p"
          :circle="true"
        />
      </div>
      <div class="about__detail">
        <div class="about__box about__skills-box">
          <h3 class="about__title js-title l-inner__sp">
            <span class="about__title-en">ME</span>
            <span class="about__title-ja">わたしについて</span>
          </h3>
          <div class="about__box-text l-inner__sp">
            <p class="about__text">
              <span>1995年生まれ、<br />大阪府出身。</span><br />
              <span
                >大学を卒業後は<br />市役所で３年間地方公務員として働く。</span
              ><br />
              <span
                >その後、キャリアチェンジを経て、<br />大阪の広告会社にてWeb業界でのキャリアを開始。</span
              ><br />
              <span
                >その後も東京の制作会社にて<br />フロントエンドエンジニアとして働く。</span
              ><br />
              <span>現在はフリーランスとして活動しています。</span>
            </p>
          </div>
        </div>

        <div class="about__box about__skills-box">
          <h3 class="about__title js-title l-inner__sp">
            <span class="about__title-en">LIGROW</span>
            <span class="about__title-ja">リグロウ</span>
          </h3>
          <div class="about__box-text l-inner__sp">
            <p class="about__text">
              <span>LiGrow(リグロウ)とは、</span><br />
              <span>人生や生活を意味する「Life」と、</span>
              <span>成長や発展を意味する「Grow」を</span>
              <span>組み合わせた造語です。</span><br />
              <span>LiGrowのロゴは卵型をモチーフに、</span>
              <span>LiGrowの「L」と「G」の文字が隠れています。</span><br />
              <span>卵とひよこを一体化させることで、</span>
              <span>卵からひよこへと,</span>
              <span>「成長」「発展」していく様子も表現しています。</span>
            </p>
          </div>
          <div class="about__logo">
            <iconLogo />
          </div>
        </div>
        <div class="about__skills-box js-tools">
          <h3 class="about__title l-inner__sp">
            <span class="about__title-en">SKILLS</span>
            <span class="about__title-ja">スキル</span>
          </h3>
          <div class="about__box-text">
            <ul class="about__skill-lists l-inner__sp">
              <li
                v-for="(skill, index) in skillLists"
                :key="index"
                class="about__skill-item"
              >
                <p class="about__skill-name">{{ skill.name }}</p>
                <div class="about__skill-bar-wrapper">
                  <span class="about__skill-bar"></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  <FooterSec />
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.about {
  position: relative;
  @include mixin.mq-pc {
    padding-bottom: func.cv-rem(200);
    background-color: var(--beige);
    padding-top: 50px;
  }
  @include mixin.mq-sp {
    margin-left: func.cv-rem(15);
    border-left: 1px solid var(--gray);
  }
}

.about__hdg {
  flex-shrink: 0;
  @include mixin.mq-pc {
    position: sticky;
    top: 0;
    left: 0;
    padding-left: func.cv-rem(20);
    padding-top: func.cv-rem(30);
    padding-bottom: func.cv-rem(60);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(75);
    padding-bottom: func.cv-rem(120);
  }
}

.about__lead {
  position: absolute;
  justify-content: space-between;
  @include mixin.mq-pc {
    top: func.cv-rem(-15);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(4);
    top: func.cv-rem(50);
  }
}

.about__inner {
  position: relative;
  @include mixin.mq-pc {
    display: flex;
    align-items: flex-start;
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(100);
  }
}

.about__detail {
  overflow: hidden;
  flex-grow: 0;
  @include mixin.mq-pc {
    border-left: 1px solid var(--gray);
    padding-bottom: func.cv-vw(150, var.$w-base-pc);
    width: calc(62% - func.cv-rem(1));
  }
}

.about__stick {
  z-index: var.$z-positive;
  top: func.cv-rem(70);
  background-color: var(--beige);
  @include mixin.mq-pc {
    width: calc(38% - func.cv-rem(1));
    top: func.cv-rem(70);
  }
  @include mixin.mq-sp {
    top: func.cv-rem(0);
  }
  .about__title {
    padding-bottom: func.cv-rem(20);
  }
}

.about__title {
  font-family: var.$ff-sans;
  font-weight: var.$fw-semi;
  padding-bottom: func.cv-rem(60);
  position: relative;
  display: flex;
  align-items: center;
  @include mixin.mq-pc {
    gap: func.cv-rem(10);
    font-size: func.cv-rem(32);
  }

  @include mixin.mq-sp {
    flex-direction: column;
    align-items: baseline;
    font-size: func.cv-rem(26);
  }
}

.about__tool {
  border-top: 1px solid var(--gray);
}

.about__title-en {
  position: relative;
  letter-spacing: -0.01em;
}

.about__title-ja {
  display: block;
  line-height: 1;
  font-weight: var.$fw-semi;
  padding-left: func.cv-rem(3);
  @include mixin.mq-pc {
    font-size: func.cv-rem(11);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(10);
  }
}

.about__skills-box {
  border-top: 1px solid var(--gray);
  @include mixin.mq-pc {
    margin-top: func.cv-rem(50);
    padding-top: func.cv-rem(20);
    padding-left: func.cv-rem(20);
    padding-right: func.cv-rem(20);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(60);
    padding-top: func.cv-rem(15);
  }

  &:first-child {
    margin-top: 0;
    border-top: none;
  }
}

.about__box {
  position: relative;
}

.about__box-text {
  overflow: hidden;
  color: var(--gray);
  opacity: 0.6;
  @include mixin.mq-pc {
    font-size: func.cv-rem(13);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}

.about__text {
  line-height: 1.9;
  span {
    display: block;
  }
}
.about__num {
  font-size: func.cv-rem(10);
  display: inline;
}

.about__logo {
  height: auto;
  position: absolute;
  opacity: 0.05;

  @include mixin.mq-pc {
    width: func.cv-rem(250);
    left: 50%;
    top: 65%;
    transform: translate3d(-50%, -50%, 0);
  }
  @include mixin.mq-sp {
    width: func.cv-rem(200);
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }

  svg {
    width: 100%;
    height: auto;
    fill: var(--gray);
  }
}

.about__skill-item {
  color: var(--beige);
  position: relative;
  display: flex;
  align-items: center;
  gap: func.cv-rem(10);
  margin-bottom: func.cv-rem(10);
}

.about__skill-name {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  color: var(--gray);
  letter-spacing: 0.01em;
  @include mixin.mq-pc {
    padding-left: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    padding-left: func.cv-rem(5);
  }
}

.about__skill-bar-wrapper {
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
  display: inline-block;
  @include mixin.mq-pc {
    height: func.cv-rem(25);
  }
  @include mixin.mq-sp {
    height: func.cv-rem(20);
  }
}

.about__skill-bar {
  display: inline-block;
  height: 100%;
  width: 100%;
  background-color: rgba(#fff, 0.3);
  @include mixin.mq-pc {
    border-radius: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    border-radius: func.cv-rem(10);
  }
}
</style>
