<script setup lang="ts">
import { inject, ref } from 'vue';
import type { WorksCard } from '@/types/worksCard';
import { RouterLink } from 'vue-router';

// 画像パスを読み込み
const IMG_PATH = inject<string>('IMG_PATH');

const props = defineProps<WorksCard>();

const isActive = ref(false);
const isHover = ref(false);

const activeCardId = ref<number>(null);

const toggleActive = (id: number) => {
  isActive.value = !isActive.value;
  activeCardId.value = activeCardId.value === id ? null : id;
};
</script>

<template>
  <li
    class="works-card"
    role="button"
    :class="{ 'is-active': isActive, 'is-hover': isHover }"
    @click="toggleActive(props.id)"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <router-link :to="{ path: `/works/${String(props.id)}` }">
      <div class="works-card__pic">
        <img
          :src="IMG_PATH + '/works/card_0' + String(props.id) + '.png'"
          alt=""
          width="400"
          height="400"
          class="works-card__img"
        />
        <h3 class="works-card__pic-title">
          {{ props.title }}
        </h3>
      </div>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.works-card {
  box-sizing: border-box;
  border-top: 1px solid var(--gray);
  position: relative;
  aspect-ratio: 1 / 1;
  flex-shrink: 0;
  background-color: var(--gray);
  transition-duration: 0.4s;
  transition-property: background-image;
  transition-timing-function: var(--cubic);

  @include mixin.mq-pc {
    width: 38vw;
    border-right: 1px solid var(--gray);
    border-bottom: 1px solid var(--gray);
  }
  @include mixin.mq-sp {
    border-right: 1px solid var(--gray);
  }
}

.works-card__pic {
  position: relative;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition-duration: 0.4s;
    transition-property: scale;
    .is-hover & {
      scale: (1.05);
    }
  }
}

.works-card__pic-title {
  font-family: var.$ff-sans;
  letter-spacing: -0.03em;
  font-weight: var.$fw-r;
  position: absolute;
  padding: func.cv-rem(15);
  top: 0;
  left: 0;
  transform: translateY(func.cv-rem(-55));
  transition-duration: 0.4s;
  transition-property: transform;
  transition-timing-function: var(--cubic);

  .is-hover & {
    transform: translateY(0);
  }

  @include mixin.mq-pc {
    font-size: func.cv-vw(24, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(24);
  }
}

.works-card-detail {
  .is-active & {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: var.$z-positive;
  }
}
</style>
