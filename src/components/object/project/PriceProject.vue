<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import ServiceNew from '../component/ServiceNew.vue';
import ServiceEx from '../component/ServiceEx.vue';
import ServiceDesign from '../component/ServiceDesign.vue';
import ServiceOther from '../component/ServiceOther.vue';
import HdgSecLead from '../component/HdgSecLead.vue';
import HdgSecSingle from '../component/HdgSecSingle.vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const isActive = ref('1'); // 初期アクティブタブを1に設定

const tabs = [
  { id: '1', label: 'Webサイトの新規制作' },
  { id: '2', label: 'Webサイトの更新・運用' },
  { id: '3', label: 'Webデザイン制作' },
  { id: '4', label: '制作パートナーのご依頼' },
];

// タブが切り替わったときにアニメーションを適用
watch(isActive, (newTab) => {
  const articleElm = document.querySelector(
    `.price__article[data-tab="${newTab}"]`
  );
  if (!articleElm) return;
  gsap.fromTo(
    articleElm,
    { opacity: 0, y: 50, transitionTimingFunction: 'linear' }, // 初期位置（下からフェードイン）
    { opacity: 1, y: 0, duration: 0.7, transitionTimingFunction: 'linear' } // フェードインアニメーション
  );
});

// 最初の表示時にフェードイン
onMounted(() => {
  const initialArticleElm = document.querySelector(
    `.price__article[data-tab="1"]`
  );
  if (!initialArticleElm) return;

  gsap.fromTo(
    initialArticleElm,
    { opacity: 0, y: 50, transitionTimingFunction: 'linear' }, // 初期位置（下からフェードイン）
    { opacity: 1, y: 0, duration: 0.7, transitionTimingFunction: 'linear' } // フェードインアニメーション
  );
});
</script>

<template>
  <section class="price">
    <div id="service" class="price__id"></div>
    <HdgSecLead title="料金" :num="4" add-class="price__lead l-inner__sp" />
    <HdgSecSingle
      title="PRICE"
      :priority="4"
      add-class="price__hdg l-inner l-inner__sp"
    />
    <p class="price__txt l-inner l-inner__sp">
      <!-- ご要望に応じて価格は変動するため、記載金額は目安としてご確認ください。<br>ご予算に合わせたご提案も可能です。 -->
    </p>
    <div class="price__inner">
      <div class="price__tabs">
        <ul class="price__tabs-lists">
          <li
            v-for="tab in tabs"
            :key="tab.id"
            class="price__tabs-item"
            :class="{ 'is-active': isActive === tab.id }"
            role="button"
            @click="isActive = tab.id"
          >
            {{ tab.label }}
          </li>
        </ul>
      </div>
      <div class="price__articles">
        <div v-show="isActive === '1'" class="price__article" data-tab="1">
          <ServiceNew />
        </div>
        <div v-show="isActive === '2'" class="price__article" data-tab="2">
          <ServiceEx />
        </div>
        <div v-show="isActive === '3'" class="price__article" data-tab="3">
          <ServiceDesign />
        </div>
        <div v-show="isActive === '4'" class="price__article" data-tab="4">
          <ServiceOther />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.price {
  background-color: var(--beige);
  @include mixin.mq-pc {
    padding-top: func.cv-rem(15);
    border-bottom: 1px solid var(--gray);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(15);
    margin-left: func.cv-rem(15);
    border-left: 1px solid var(--gray);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      display: block;
      height: 1px;
      width: calc(100% + 1.5rem);
      left: -1.5rem;
      top: 0;
      right: 0;
      border-top: 1px solid var(--gray);
    }
  }
}

.price__id {
  position: absolute;
  @include mixin.mq-pc {
    top: func.cv-rem(-60);
  }
  @include mixin.mq-sp {
    top: func.cv-rem(-40);
  }
}

.price__line {
  overflow: hidden;
}
.price__hdg {
  @include mixin.mq-pc {
    font-size: func.cv-vw(120, var.$w-base-pc);
    padding-top: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(66);
    padding-top: func.cv-rem(5);
  }
}

.price__lead {
  padding-bottom: 0;
  @include mixin.mq-pc {
    justify-content: flex-end;
    gap: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    justify-content: space-between;
  }
}

.price__txt {
  line-height: 1.6;
  @include mixin.mq-pc {
    font-size: func.cv-rem(12);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(11);
  }
}

.price__inner {
  @include mixin.mq-pc {
    display: flex;
    padding-top: func.cv-rem(70);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(60);
  }
}

.price__tabs {
  display: flex;
  flex-shrink: 0;
}

.price__tabs-lists {
  @include mixin.mq-pc {
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--gray);
  }
  @include mixin.mq-sp {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    border-top: 1px solid var(--gray);
  }
}

.price__tabs-item {
  color: var(--gray);
  position: relative;
  transition-duration: 0.4s;
  transition-property: background-color, color;
  @include mixin.mq-pc {
    padding: func.cv-rem(30) func.cv-rem(30);
  }
  @include mixin.mq-sp {
    border-bottom: 1px solid var(--gray);
    text-align: center;
    padding: func.cv-rem(10);
    &:nth-of-type(2n-1) {
      border-right: 1px solid var(--gray);
    }
  }

  &.is-active {
    @include mixin.mq-pc {
      color: var(--gray);
    }
    @include mixin.mq-sp {
      color: var.$c-black;
      background-color: var(--green);
    }
    &::after {
      @include mixin.mq-pc {
        content: '';
        position: absolute;
        display: block;
        background-color: var(--green);
        right: func.cv-rem(-3);
        top: 0;
        width: func.cv-rem(7);
        height: 100%;
      }
    }
  }
  &:not(.is-active) {
    opacity: 0.35;
  }
}

.price__articles {
  width: 100%;
}
</style>
