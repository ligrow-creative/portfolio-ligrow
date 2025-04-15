<script setup lang="ts">
import HdgSec from '../component/HdgSec.vue';
import { faqListsProduction, faqListsPartner } from '@/constants/faqLists';
import { ref } from 'vue';
import HdgSecLead from '../component/HdgSecLead.vue';

const activeIndex = ref<number | null>(null);
const currentTabNum = ref<number>(1);

const toggleAnswer = (index: number) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const changeTab = (num: number) => {
  currentTabNum.value = num;
  activeIndex.value = null;
};
</script>

<template>
  <section class="faq">
    <div id="faq" class="faq__id"></div>
    <div class="faq__inner">
      <HdgSecLead
        title="よくある質問"
        :num="5"
        add-class="faq__lead l-inner__sp"
      />
      <HdgSec
        title-en="FAQ"
        title-ja="質問"
        :priority="2"
        :num="1"
        add-class="faq__hdg l-inner"
        direction="p"
        :circle="true"
      />
      <div class="faq__info">
        <ul class="faq__tabs">
          <li
            class="faq__tab"
            role="button"
            :class="{ 'is-active': currentTabNum === 1 }"
            @click="changeTab(1)"
          >
            Webサイト制作依頼について
          </li>
          <li
            class="faq__tab"
            role="button"
            :class="{ 'is-active': currentTabNum === 2 }"
            @click="changeTab(2)"
          >
            制作パートナー依頼について
          </li>
        </ul>

        <ul v-if="currentTabNum === 1" class="faq__lists">
          <li
            v-for="(faq, index) in faqListsProduction"
            :key="index"
            :class="[
              'faq__item l-inner__sp js-faq-item',
              { 'is-active': activeIndex === index },
            ]"
            role="button"
            @click="toggleAnswer(index)"
          >
            <dl class="faq__detail">
              <dt class="faq__question">
                {{ faq.question }}
                <div class="faq__toggle-icon">
                  <span></span>
                  <span></span>
                </div>
              </dt>
              <dd
                :class="['faq__answer', { 'is-active': activeIndex === index }]"
                v-html="faq.answer"
              ></dd>
            </dl>
          </li>
        </ul>

        <ul v-if="currentTabNum === 2" class="faq__lists">
          <li
            v-for="(faq, index) in faqListsPartner"
            :key="index"
            :class="[
              'faq__item l-inner__sp js-faq-item',
              { 'is-active': activeIndex === index },
            ]"
            role="button"
            @click="toggleAnswer(index)"
          >
            <dl class="faq__detail">
              <dt class="faq__question">
                {{ faq.question }}
                <div class="faq__toggle-icon">
                  <span></span>
                  <span></span>
                </div>
              </dt>
              <dd
                :class="['faq__answer', { 'is-active': activeIndex === index }]"
                v-html="faq.answer"
              ></dd>
            </dl>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.faq {
  position: relative;
  background-color: var(--beige);
  @include mixin.mq-pc {
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(200);
  }
  @include mixin.mq-sp {
    border-top: 1px solid var(--gray);
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(100);
  }
}

.faq__id {
  position: absolute;
  top: 0;
  left: 0;
  @include mixin.mq-pc {
    margin-top: func.cv-rem(-60);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-rem(-50);
  }
}

.faq__hdg {
  @include mixin.mq-pc {
    padding-top: func.cv-rem(10);
  }
  @include mixin.mq-sp {
    padding-right: func.cv-rem(15);
    text-align: right;
  }
}

.faq__lead {
  justify-content: space-between;
}

.faq__info {
  @include mixin.mq-pc {
    padding-left: 38%;
    padding-top: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(100);
  }
}

.faq__lists {
  @include mixin.mq-sp {
    padding-left: func.cv-rem(15);
    padding-right: func.cv-rem(15);
  }
}

.faq__item {
  position: relative;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(35);
    padding-bottom: func.cv-rem(35);
    padding-right: func.cv-rem(35);
  }
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: func.cv-rem(1);
    background-color: var(--gray);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.2;
  }
}

.faq__question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mixin.mq-sp {
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(15);
    min-height: func.cv-rem(70);
  }
}

.faq__tabs {
  display: flex;
  padding-bottom: func.cv-rem(50);
  @include mixin.mq-pc {
    justify-content: flex-start;
    gap: func.cv-rem(25);
  }
  @include mixin.mq-sp {
    justify-content: space-between;
    gap: func.cv-rem(10);
    font-size: func.cv-rem(11);
    padding-left: func.cv-rem(20);
    padding-right: func.cv-rem(20);
  }
}
.faq__tab {
  position: relative;
  padding: func.cv-rem(6) func.cv-rem(0);
  opacity: 0.5;
  &.is-active {
    opacity: 1;
    border-bottom: 4px solid var(--green);
    &::after {
      content: '';
      display: inline-block;
      background-color: var(--green);
      position: absolute;
      left: 50%;
      bottom: -15px;
      width: 25px;
      height: 15px;
      transform: translate3d(-50%, 0, 0);
      clip-path: polygon(0 0, 50% 100%, 100% 0);
    }
  }
}

.faq__toggle-icon {
  margin-left: func.cv-rem(20);
  position: relative;
  span {
    display: inline-block;
    background-color: var(--gray);
    position: absolute;
    transform-origin: center center;
    top: 50%;
    right: 0;
    @include mixin.mq-pc {
      width: func.cv-rem(14);
      height: func.cv-rem(2);
    }
    @include mixin.mq-sp {
      width: func.cv-rem(13);
      height: func.cv-rem(1);
    }
    &:first-child {
      transform: rotate(90deg);
      transition-duration: 0.4s;
      transition-timing-function: ease-out;

      .is-active & {
        transform: rotate(0);
        transition-duration: 0.4s;
        transition-timing-function: ease-out;
      }
    }
  }
}

.faq__answer {
  color: var(--gray);
  opacity: 0.6;
  overflow: hidden;
  height: 0;
  padding-right: 0 func.cv-rem(35);
  transition-property: height padding;
  transition-duration: 0.4s;
  transition-timing-function: ease-out;

  .is-active & {
    transition-property: height padding;
    height: auto;
    @include mixin.mq-pc {
      padding-top: func.cv-rem(35);
    }
    @include mixin.mq-sp {
      padding-bottom: func.cv-rem(20);
    }
  }
}
</style>
