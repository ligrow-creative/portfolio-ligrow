<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import Events from '@/constants/events';
import { useRouter } from 'vue-router';

const router = useRouter();

const reactionSelectors = [
  'a',
  'button',
  'div[role="button"]',
  'li[role="button"]',
  'label',
  'input',
  'textarea',
].join(',');

const cursorX = ref<number>(0);
const cursorY = ref<number>(0);

const followerX = ref<number>(0);
const followerY = ref<number>(0);

const stalker = ref<HTMLElement>();
const stalkerContainer = ref<HTMLElement>();
const isEnter = ref<boolean>(false);

onMounted(() => {
  const init = () => {
    const handleLinkEnter = (e: MouseEvent) => {
      e.preventDefault();

      // Ensure e.target is an HTMLElement and has the matches method
      const target = e.target as HTMLElement;
      if (target instanceof HTMLElement && target.matches(reactionSelectors)) {
        isEnter.value = true;
      }
    };

    const handleLinkLeave = (e: MouseEvent) => {
      e.preventDefault();

      // Ensure e.target is an HTMLElement and has the matches method
      const target = e.target as HTMLElement;
      if (target instanceof HTMLElement && target.matches(reactionSelectors)) {
        isEnter.value = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.value = e.clientX;
      cursorY.value = e.clientY;
    };

    const handleMouseStalker = () => {
      followerX.value += (cursorX.value - followerX.value) * 0.1;
      followerY.value += (cursorY.value - followerY.value) * 0.1;

      requestAnimationFrame(handleMouseStalker);
    };

    document.addEventListener(Events.MoEnter, handleLinkEnter, true);
    document.addEventListener(Events.MoLeave, handleLinkLeave, true);

    requestAnimationFrame(handleMouseStalker);

    document.addEventListener(Events.MoMove, handleMouseMove);
  };

  // ページ遷移後に isEnterをリセット
  router.afterEach(() => {
    isEnter.value = false;
  });

  if (stalker.value) {
    init();
  }
});
</script>

<template>
  <div ref="stalker" class="mouse-stalker">
    <div
      ref="stalkerContainer"
      class="mouse-stalker__container"
      :class="{ 'is-link-enter': isEnter }"
      :style="{ top: followerY + 'px', left: followerX + 'px' }"
    >
      <div class="mouse-stalker__ring"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.mouse-stalker {
  display: none;
  position: fixed;
  top: func.cv-rem(-10);
  left: func.cv-rem(-10);
  z-index: 100;
  pointer-events: none;

  @include mixin.mq-hover {
    display: block;
  }
}

.mouse-stalker__container {
  position: absolute;
  font-size: 0;
  transition: transform 0.2s ease; /* 大きさのトランジション */
}

.mouse-stalker__ring {
  position: absolute;
  width: 10px;
  height: 10px;
  top: 0;
  left: 0;
  opacity: 1;
  z-index: var.$z-negative;
  border-radius: 50%;
  background-color: var(--green);
  transition-property: width height background-color opacity;
  transition-duration: 0.6s;

  .is-link-enter & {
    width: 75px;
    height: 75px;
    opacity: 0.2;
    transform: translate3d(-35px, -35px, 0);
  }
}
</style>
