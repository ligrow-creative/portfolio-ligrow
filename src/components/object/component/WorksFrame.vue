<script setup lang="ts">
import HdgSecSingle from '../component/HdgSecSingle.vue';
import type { WorksCard } from '@/types/worksCard';
import { inject } from 'vue';

const IMG_PATH = inject<string>('IMG_PATH');

defineProps<WorksCard>();
</script>

<template>
  <section class="works-frame">
    <div class="works-frame__inner">
      <div class="works-frame__title">
        <HdgSecSingle
          title="works-frame"
          :priority="2"
          add-class="works-frame__hdg l-inner"
        />
      </div>

      <div class="works-frame__detail">
        <div class="works-frame__pic">
          <img
            :src="IMG_PATH + '/works-frame/card_' + id + '.png'"
            alt=""
            width="620"
            height="620"
            class="works-frame__img"
          />
        </div>
        <h3 class="works-frame__title">
          {{ title }}
        </h3>
        <dl class="works-frame__id">
          <dt class="works-frame__dt">ID</dt>
          <dd class="works-frame__dd">{{ id }}</dd>
        </dl>
        <dl class="works-frame__year">
          <dt class="works-frame__dt">YEAR</dt>
          <dd class="works-frame__dd">{{ year }}</dd>
        </dl>
        <dl class="works-frame__role">
          <dt class="works-frame__dt">ROLE</dt>
          <dd class="works-frame__dd">{{ role }}</dd>
        </dl>
        <dl class="works-frame__service">
          <dt class="works-frame__dt">SERVICE</dt>
          <dd class="works-frame__dd">
            <ul>
              <li
                v-for="(item, index) in service"
                :key="index"
                class="works-frame__li"
              >
                {{ item }}
              </li>
            </ul>
          </dd>
        </dl>
        <dl class="works-frame__summary">
          <dt class="works-frame__dt">SUMMARY</dt>
          <dd class="works-frame__dd">{{ summary }}</dd>
        </dl>
        <dl v-if="url !== undefined" class="works-frame__url">
          <dt class="works-frame__dt">URL</dt>
          <dd class="works-frame__dd">
            <a :href="String(id)" target="_blank">
              {{ url }}
            </a>
          </dd>
        </dl>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.works-frame {
  @include mixin.mq-sp {
    padding-left: func.cv-rem(15);
  }
}

.works-frame__inner {
  @include mixin.mq-pc {
    padding-top: func.cv-rem(70);
  }
  @include mixin.mq-sp {
    padding-top: 50px;
  }
}
.works-frame__hdg {
  justify-content: flex-end;
}
</style>
