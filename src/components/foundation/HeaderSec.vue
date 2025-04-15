<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MediaQueryList from '@/scripts/constants/media-query-list';
import iconArrow from '@/icons/iconArrow.vue';

defineProps<{
  addClass: string;
}>();

gsap.registerPlugin(ScrollTrigger);

const isActive = ref(false);
const currentDate = ref({ year: '', monthDate: '' });

onMounted(() => {
  const today = new Date();
  currentDate.value.year = today.getFullYear().toString();
  currentDate.value.monthDate = `${String(today.getMonth() + 1).padStart(2, '0')}.${String(today.getDate()).padStart(2, '0')}`;

  const kvElm = document.querySelector('.kv') as HTMLElement;
  const switchElm = document.querySelector('.header-switch') as HTMLElement;
  if (!kvElm || !switchElm) return;

  gsap.set(switchElm, { y: 0, duration: 0.4 });

  ScrollTrigger.create({
    trigger: kvElm,
    start: 'top top',
    end: 'bottom top',
    onEnter: () => {
      gsap.to(switchElm, { y: 0, duration: 0.4 });
    },
    onLeaveBack: () => {
      gsap.to(switchElm, {
        y: MediaQueryList.Pc.matches ? -105 : -100,
        duration: 0.4,
      });
    },
  });
});

const toggleActive = () => {
  isActive.value = !isActive.value;

  const headerColorChangeBtn = document.querySelector(
    '.js-header-color-btn'
  ) as HTMLElement;
  if (!headerColorChangeBtn) return;

  // 新しい色を定義
  const changedBgColor = isActive.value ? '#0A0A0B' : '#BBBDB3';
  const changedTextColor = isActive.value ? '#e6ddd2' : '#000';
  const changedCardColor1 = isActive.value ? '#000' : '#eee7e0';
  const changedCardColor2 = isActive.value ? '#000' : '#dbd2c8';

  // Update CSS variables
  document.documentElement.style.setProperty('--beige', changedBgColor);
  document.documentElement.style.setProperty('--gray', changedTextColor);
  document.documentElement.style.setProperty('--card-bg-1', changedCardColor1);
  document.documentElement.style.setProperty('--card-bg-2', changedCardColor2);

  if (isActive.value) {
    const targetX = MediaQueryList.Pc.matches ? 33 : 28;
    gsap.to(headerColorChangeBtn, { x: targetX, duration: 0.1 });
    document.body.classList.add('is-color-changed');
  } else {
    gsap.to(headerColorChangeBtn, { x: 0, duration: 0.1 });
    document.body.classList.remove('is-color-changed');
  }
};
</script>
<template>
  <header class="header" :class="[addClass ? addClass : '']">
    <div class="header-inner">
      <div class="header-link">
        <router-link to="/">
          <iconArrow />
        </router-link>
      </div>
      <div class="header-color" role="button">
        <div class="header-color__inner" @click="toggleActive">
          <button
            class="header-color__btn js-header-color-btn"
            :class="{ 'is-active': isActive }"
          ></button>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.header {
  position: fixed;
  overflow: hidden;
  z-index: var.$z-header;
  top: 0;
  left: 0;
  width: 100%;
  transition-duration: 0.4s;
  transition-timing-function: var(--cubic);
  transition-property: translate;
  @include mixin.mq-pc {
    height: func.cv-rem(50);
    padding-left: func.cv-rem(15);
    padding-right: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    height: 50px;
  }

  .is-menu-open & {
    border-bottom: 1px solid rgba(var(--beige), 0.2);
    background-color: transparent;
    color: var(--beige);
    transition-delay: 0s;
  }
}

.header-link {
  transform: rotate(-90deg);
  @include mixin.mq-pc {
    width: 30px;
    height: 30px;
  }
  @include mixin.mq-sp {
    width: 21px;
    height: 21px;
  }

  svg {
    fill: var(--green);
    width: 100%;
    height: auto;
  }
}

.header-inner {
  position: absolute;
  right: 10px;
  height: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
}

.header-switch {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateY(-105);
  @include mixin.mq-pc {
    padding-top: func.cv-rem(25);
  }
  @include mixin.mq-sp {
    padding-top: 33px;
  }
}

.header-logo {
  padding-top: func.cv-rem(10);
  @include mixin.mq-pc {
    width: func.cv-rem(95);
  }
  @include mixin.mq-sp {
    width: 85px;
    padding-top: 5px;
  }

  svg {
    width: 100%;
    height: auto;
  }
}

.header-color {
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-content: flex-end;
  font-weight: var.$fw-semi;
  @include mixin.mq-pc {
    width: 74px;
  }
  @include mixin.mq-sp {
    width: 60px;
    height: func.cv-rem(30);
  }
}

.header-color__inner {
  padding: func.cv-rem(5);
  background-color: var(--gray);
  border: 1px solid var(--beige);
  border-radius: func.cv-rem(50);
  position: relative;
  @include mixin.mq-hover {
    &:hover {
      cursor: pointer;
    }
  }
  @include mixin.mq-pc {
    width: 64px;
    height: 32px;
  }
  @include mixin.mq-sp {
    width: 52px;
    height: 25px;
  }
}

.header-color__btn {
  background-color: var(--beige);
  display: inline-block;
  position: absolute;
  border-radius: 50%;
  @include mixin.mq-pc {
    width: 19px;
    height: 19px;
    top: func.cv-rem(5);
    left: func.cv-rem(5);
  }
  @include mixin.mq-sp {
    width: 13px;
    height: 13px;
    top: 5px;
    left: 5px;
  }
}
</style>
