<script setup lang="ts">
import HdgSecSingle from '../component/HdgSecSingle.vue';
import router from '@/router';
import type { WorksCard } from '@/types/worksCard';
import { onMounted, ref, inject, watch } from 'vue';
import { useRoute } from 'vue-router';
import worksCard from '@/constants/worksCard';
import FooterSec from '@/components/foundation/FooterSec.vue';
const IMG_PATH = inject<string>('IMG_PATH');

const route = useRoute();

// 現在のページ番号に対応するデータを取得
const currentWorkData = ref<WorksCard>();

// worksCardの最大インデックスを設定
const maxIndex = worksCard.length / 2;

const planName = ref<string>();

// PLANの番号をテキストに変換する関数
const convertPlanNumberToText = () => {
  if (currentWorkData.value?.plan === 1) {
    planName.value = 'LIGHT';
  } else if (currentWorkData.value?.plan === 2) {
    planName.value = 'BASIC';
  } else if (currentWorkData.value?.plan === 3) {
    planName.value = 'ADVANCE';
  } else {
    planName.value = ''; // PLANが不正な場合
  }
};

// ページが読み込まれた時に滑らかにスクロールしてトップに移動
const scrolltop = () => {
  window.scrollTo({
    top: 0,
  });
};

const onClickPrev = (id: number) => {
  const prevNum = id === 1 ? maxIndex : id - 1;
  router.push('/works/' + prevNum);
  scrolltop();
};

const onClickNext = (id: number) => {
  const nextNum = id === maxIndex ? 1 : id + 1;
  router.push('/works/' + nextNum);
  scrolltop();
};

onMounted(() => {
  scrolltop();

  const path = window.location.pathname;
  const match = path.match(/\/works\/(\d+)/);

  if (match) {
    const workId = Number(match[1]) - 1;
    currentWorkData.value = worksCard[workId]; // もしデータがない場合は空のオブジェクトを設定
  } else {
    currentWorkData.value = worksCard[0]; // URLが正しくない場合も空のデータを設定
  }

  // ページが初期化された際にPLANのテキストを変換
  convertPlanNumberToText();
});

// `route` を監視して URL パラメータの変更を検出
watch(
  () => route.params.id,
  (newId) => {
    const workId = Number(newId) - 1;
    currentWorkData.value = worksCard[workId] || worksCard[0]; // 対応するデータをセット
  }
);

// `currentWorkData` を監視して、内容が更新されるたびにPLANのテキストを変換
watch(currentWorkData, () => {
  convertPlanNumberToText();
});
</script>

<template>
  <section v-if="currentWorkData" class="works-detail">
    <div class="works-detail__inner">
      <HdgSecSingle
        title="WORKS"
        :priority="2"
        add-class="works-detail__hdg l-inner"
      />

      <div class="works-detail__container js-works-detail-container">
        <div class="works-detail__info">
          <h3 class="works-detail__info-list">
            <p>{{ currentWorkData.title }}</p>
            <p class="works-detail__info-id">0{{ currentWorkData.id }}</p>
          </h3>
          <dl class="works-detail__info-list">
            <dt class="works-detail__info-dt">YEAR</dt>
            <dd class="works-detail__info-dd">{{ currentWorkData.year }}</dd>
          </dl>
          <dl class="works-detail__info-list">
            <dt class="works-detail__info-dt">ROLE</dt>
            <dd class="works-detail__info-dd">{{ currentWorkData.role }}</dd>
          </dl>
          <dl class="works-detail__info-list">
            <dt class="works-detail__info-dt">SERVICE</dt>
            <dd class="works-detail__info-dd">
              <ul>
                <li
                  v-for="(item, index) in currentWorkData.service"
                  :key="index"
                  class="works-detail__li"
                >
                  {{ item }}
                </li>
              </ul>
            </dd>
          </dl>
          <dl
            v-if="currentWorkData.plan !== null"
            class="works-detail__info-list"
          >
            <dt class="works-detail__info-dt">PLAN</dt>
            <dd class="works-detail__info-dd">
              {{ planName }}
            </dd>
          </dl>
          <dl
            v-if="currentWorkData.url !== null"
            class="works-detail__info-list"
          >
            <dt class="works-detail__info-dt">URL</dt>
            <dd class="works-detail__info-dd">
              <a :href="currentWorkData.url" target="_blank">
                {{ currentWorkData.url }}
              </a>
            </dd>
          </dl>
          <dl class="works-detail__info-list">
            <dt class="works-detail__info-dt">SUMMARY</dt>
            <dd
              class="works-detail__info-dd"
              v-html="currentWorkData.summary"
            ></dd>
          </dl>
        </div>
        <div class="works-detail__gallery">
          <div class="works-detail__pic">
            <img
              :src="IMG_PATH + '/works/work_0' + currentWorkData.id + '_1.png'"
              width="400"
              height="400"
              class="works-detail__img"
            />
          </div>
          <div class="works-detail__pic">
            <img
              :src="IMG_PATH + '/works/work_0' + currentWorkData.id + '_2.png'"
              width="400"
              height="400"
              class="works-detail__img"
            />
          </div>
        </div>
      </div>

      <div class="works-detail__btns">
        <button
          class="works-detail__prev"
          @click="onClickPrev(currentWorkData.id)"
        >
          PREV
        </button>
        <button
          class="works-detail__next"
          @click="onClickNext(currentWorkData.id)"
        >
          NEXT
        </button>
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

.works-detail {
  @include mixin.mq-sp {
    padding-left: func.cv-rem(15);
  }
}

.works-detail__inner {
  @include mixin.mq-pc {
    padding-top: func.cv-rem(70);
  }
  @include mixin.mq-sp {
    padding-top: 60px;
    border-left: 1px solid var(--gray);
    position: relative;
    overflow: hidden;
  }
}

.works-detail__container {
  @include mixin.mq-pc {
    display: grid;
    grid-template-columns: 38% 62%;
    padding-top: func.cv-rem(150);
    position: relative;
  }
  @include mixin.mq-sp {
  }
}

.works-detail__gallery {
  @include mixin.mq-pc {
    border-left: 1px solid var(--gray);
  }
  @include mixin.mq-sp {
    border-top: 1px solid var(--gray);
    margin-top: func.cv-rem(50);
  }
}

.works-detail__pic {
  border-bottom: 1px solid var(--gray);
  display: flex;
  justify-content: center;
  &:nth-child(2n-1) {
    background-color: rgba(var.$c-white, 0.2);
  }
  &:nth-child(2n) {
    background-color: rgba(var.$c-white, 0.1);
  }
  @include mixin.mq-pc {
    &:last-child {
      border-bottom: none;
    }
  }
}

.works-detail__info {
  align-self: baseline;
  @include mixin.mq-pc {
    position: sticky;
    top: 0;
    left: 0;
    padding-top: func.cv-rem(70);
    margin-top: func.cv-rem(-70);
  }
}
.works-detail__info-id {
  opacity: 0.5;
  position: absolute;
  right: func.cv-rem(15);
  @include mixin.mq-pc {
    font-size: func.cv-vw(20, var.$w-base-pc);
    top: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(13);
    top: func.cv-rem(0);
  }
}

.works-detail__info-list {
  position: relative;

  @include mixin.mq-pc {
    padding: func.cv-rem(20) func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(15) func.cv-rem(10) func.cv-rem(10);
  }

  &::after {
    content: '';
    display: block;
    height: func.cv-rem(1);
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: var(--gray);
    opacity: 0.2;
  }

  &:first-child {
    font-family: var.$ff-sans;
    letter-spacing: -0.02em;

    @include mixin.mq-pc {
      padding-bottom: func.cv-rem(80);
      padding-top: func.cv-rem(15);
      font-size: func.cv-rem(34);
    }
    @include mixin.mq-sp {
      margin-top: func.cv-rem(50);
      padding-bottom: func.cv-rem(5);
      font-size: func.cv-rem(28);
    }
  }
  &:last-child::after {
    @include mixin.mq-sp {
      content: none;
    }
  }
}

.works-detail__info-dt {
  font-family: var.$ff-sans;
  letter-spacing: -0.02em;
  opacity: 0.55;
  @include mixin.mq-pc {
    font-size: func.cv-rem(13);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}

.works-detail__info-dd {
  @include mixin.mq-pc {
    padding-top: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(6);
  }
}
.works-detail__hdg {
  justify-content: flex-start;
  @include mixin.mq-pc {
    font-size: func.cv-vw(120, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(74);
    transform: scale(1.15);
    transform-origin: left top;
  }
}

.works-detail__btns {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-family: var.$ff-sans;
  letter-spacing: -0.02em;
  @include mixin.mq-pc {
    font-size: func.cv-rem(24);
    border-top: 1px solid var(--gray);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(20);
    position: sticky;
    bottom: 0;
    right: 0;
  }
}

.works-detail__next {
  border-left: 1px solid var(--gray);
  background-color: var(--gray);
  color: var(--beige);
  @include mixin.mq-pc {
    padding: func.cv-rem(22) func.cv-rem(15) func.cv-rem(15) func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(15) func.cv-rem(10) func.cv-rem(10) func.cv-rem(10);
    border-top: 1px solid var(--gray);
  }
}

.works-detail__prev {
  border-right: 1px solid var(--gray);
  background-color: var(--gray);
  color: var(--beige);
  @include mixin.mq-pc {
    padding: func.cv-rem(22) func.cv-rem(15) func.cv-rem(15) func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(15) func.cv-rem(10) func.cv-rem(10) func.cv-rem(10);
    border-top: 1px solid var(--gray);
  }
}
</style>
