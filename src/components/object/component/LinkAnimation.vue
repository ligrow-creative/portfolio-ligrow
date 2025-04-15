<script setup lang="ts">
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StateClasses from '@/constants/state-classes';

// GSAPプラグインを登録
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  const linkAnimationTimeLine = gsap.timeline();

  linkAnimationTimeLine.to('.link-animation__first', {
    delay: 0.2,
    duration: 0.65,
    transform: 'translate3d(0, 0, 0)',
    transitionTimingFunction: 'cubic-bezier(.86,0,.07,1);',
  });

  linkAnimationTimeLine.to('.link-animation__first', {
    delay: 0.45,
    duration: 0.75,
    transform: 'translate3d(0, -100svh, 0)',
    transitionTimingFunction: 'cubic-bezier(.86,0,.07,1);',
  });

  linkAnimationTimeLine.to('.link-animation__first', {
    display: 'none',
  });

  linkAnimationTimeLine.set(document.body, {
    className: StateClasses.Splash.Close,
  });
});
</script>

<template>
  <div class="link-animation__first"></div>
  <div class="link-animation__second"></div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.link-animation__first {
  position: fixed;
  inset: 0;
  z-index: var.$z-positive;
  background-color: #353535;
  transform: translate3d(0, 100svh, 0);
}

.link-animation__second {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: var.$z-positive;
  background-color: var(--green);
  transform: translate3d(0, 100svh, 0);
}
</style>
