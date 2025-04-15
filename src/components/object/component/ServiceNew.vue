<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import ServiceFrame from './ServiceFrame.vue';
import {
  serviceNewPage,
  serviceNewBtns,
  serviceNewPlan,
} from '@/constants/serviceNewData';
import type { ServiceNewBtn } from '@/types/serviceNewData';
import iconReset from '@/icons/iconReset.vue';
import { gsap } from 'gsap';

const orderLogo = ref<boolean>(false); // ロゴ選択
const orderPhoto = ref<boolean>(false); // 写真撮影選択
const orderLecture = ref<boolean>(false); // レクチャー選択
const orderAnimation = ref<boolean>(false); // アニメーション選択
const orderHurry = ref<boolean>(false); // アニメーション選択
const pageCount = ref<number>(5); // ユーザーが入力したページ数
const selectedPlan = ref<number | null>(1); // 現在選択されているプランのインデックス

const basePrice = ref<number>(serviceNewPlan[1].price);
const totalPrice = ref<number>(0);
const pagePrice = ref<number>(0);
const logoPrice = ref<number>(0);
const photoPrice = ref<number>(0);
const updatePrice = ref<number>(0);
const hurryPrice = ref<number>(0);
const animationPrice = ref<number>(0);

// 合計金額の計算
const updateTotalPrice = () => {
  // 基本価格の合計
  let total =
    pagePrice.value +
    logoPrice.value +
    photoPrice.value +
    updatePrice.value +
    animationPrice.value +
    basePrice.value;

  // 特急対応が選ばれている場合、合計金額に1.3倍する
  if (orderHurry.value) {
    total = total * 1.3;
  }

  // 最終的な合計金額に税を加算
  totalPrice.value = total * 1.1;
};

// === reset totalPriceのリセット=====
const resetTotalPrice = () => {
  totalPrice.value = 0;
  pagePrice.value = 0;
  logoPrice.value = 0;
  photoPrice.value = 0;
  updatePrice.value = 0;
  hurryPrice.value = 0;
  animationPrice.value = 0;
  pageCount.value = 5;
  orderLogo.value = false;
  orderPhoto.value = false;
  orderLecture.value = false;
  orderHurry.value = false;
  orderAnimation.value = false;

  updateTotalPrice();
};

// ページ数の入力欄が変わった場合の反応
watch(pageCount, () => {
  updateTotalPrice();
});

// プラン選択時の処理
const onSelectPlan = (planIndex: number) => {
  selectedPlan.value = planIndex;
  basePrice.value = serviceNewPlan[planIndex].price; // 選択したプランの価格をbasePriceに設定
  resetTotalPrice(); // プラン変更時に合計金額を更新
};

// アコーディオンの状態
const isAccordionOpen = ref(false);

// 追加オプションのトグル処理
const toggleAccordion = () => {
  isAccordionOpen.value = !isAccordionOpen.value; // 状態を反転させる
};

// ボタンが選択された場合の処理
const onSelect = (type: string, btnIndex: number | null) => {
  let item: any;
  if (type === 'page') {
    item = serviceNewPage; // serviceNewPage の処理
  } else {
    item = serviceNewBtns[type as keyof ServiceNewBtn]; // 他のオプション
  }
  // 価格の加算と選択状態の更新
  if (type === 'page') {
    pagePrice.value = (pageCount.value - 5) * item.price; // ページ数の価格を計算
  } else if (type === 'logo') {
    logoPrice.value = btnIndex === 0 ? item.price : 0; // ロゴ制作の価格を加算
    orderLogo.value = btnIndex === 0; // ロゴ選択状態を更新
  } else if (type === 'photo') {
    photoPrice.value = btnIndex === 0 ? item.price : 0; // 写真撮影の価格を加算
    orderPhoto.value = btnIndex === 0; // 写真撮影選択状態を更新
  } else if (type === 'update') {
    updatePrice.value = btnIndex === 0 ? item.price : 0; // レクチャーの価格を加算
    orderLecture.value = btnIndex === 0; // レクチャー選択状態を更新
  } else if (type === 'animation') {
    animationPrice.value = btnIndex === 0 ? item.price : 0; // アニメーションの価格を加算
    orderAnimation.value = btnIndex === 0;
  } else if (type === 'hurry') {
    // hurryPrice.value = btnIndex === 0 ? item.price : 0; // 特急対応の価格を加算
    orderHurry.value = btnIndex === 0;
  }

  // 最後に合計金額を更新
  updateTotalPrice();
};

const formatPrice = (price: number): string => {
  return price.toLocaleString(); // 数値をカンマ区切りでフォーマット
};

// プラン選択時に自動的にアコーディオンを開く
watch(selectedPlan, (newVal) => {
  if (newVal === 2) {
    isAccordionOpen.value = true;
  } else {
    isAccordionOpen.value = false;
  }
});

// 初期化時に合計金額を更新
onMounted(() => {
  updateTotalPrice(); // ページがマウントされたら初期値を計算

  const serviceNewTotalElm = document.querySelector(
    '.js-service-new-total'
  ) as HTMLElement;
  const serviceNewStickyContainerElm = document.querySelector(
    '.js-service-new-sticky-container'
  ) as HTMLElement;
  if (!serviceNewTotalElm || !serviceNewStickyContainerElm) return;

  gsap.fromTo(
    serviceNewTotalElm,
    { position: 'unset' },
    {
      position: 'sticky',
      duration: 0.5,
      zIndex: 1,
      scrollTrigger: {
        trigger: serviceNewStickyContainerElm,
        start: 'top bottom',
        end: 'bottom bottom',
      },
    }
  );
});
</script>

<template>
  <div class="service-new js-service-new">
    <ServiceFrame
      title="Webサイトの新規制作"
      detail="ベースとなる3つのプランをご用意しています。<br>記載の金額はあくまで目安となり、ご要望の内容や範囲に応じてお見積もりいたします。"
      :include-lists="true"
      :otehr-infomation="true"
      type="new"
      class="service-new__frame"
    >
      <p class="service-new__lead">
        ※必要な項目をご選択いただくと合計金額が計算されます。
      </p>

      <div class="js-service-new-sticky-container">
        <ul class="service-new__plans l-inner l-inner__sp">
          <li
            v-for="(list, index) in serviceNewPlan"
            :key="index"
            class="service-new__card"
            role="button"
            :class="{ 'is-selected': selectedPlan === index }"
            @click="onSelectPlan(index)"
          >
            <p class="service-new__card-selected">選択中</p>
            <dl class="service-new__card-inner">
              <dt class="service-new__card-title">{{ list.title }}</dt>
              <dd class="service-new__card-data">
                <p class="service-new__card-detail" v-html="list.detail"></p>
                <p class="service-new__card-price">
                  {{ formatPrice(list.price * 1.1)
                  }}<span class="service-new__card-unit">円</span>
                  <span class="service-new__card-tax">(税込)~</span>
                </p>
                <ul class="service-new__card-feature">
                  <li
                    v-for="(item, key) in list.feature"
                    :key="key"
                    class="service-new__card-feature-list"
                    v-html="item"
                  ></li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>

        <div
          class="service-new__option-btn l-inner l-inner__sp js-service-new-option"
        >
          <div
            class="service-new__option-btn-inner"
            role="button"
            @click="toggleAccordion"
          >
            <button>
              <span>{{ isAccordionOpen ? '-' : '+' }}</span>
            </button>
            <p>追加オプション</p>
          </div>
        </div>

        <!-- アコーディオンの中身。isAccordionOpenがtrueのときだけ表示される -->
        <div
          v-if="isAccordionOpen"
          class="service-new__option-inner l-inner l-inner__sp"
          :class="{ 'is-open': isAccordionOpen }"
        >
          <!-- ページオプションの選択 ADVANCEプランの場合のみ表示-->
          <dl v-if="selectedPlan === 2" class="service-new__list">
            <dt class="">
              <p class="service-new__title" v-html="serviceNewPage.title"></p>
              <p class="service-new__note" v-html="serviceNewPage.note"></p>
              <p class="service-new__attention">
                ADVANCEプランは合計ページ数に応じて金額が変動します。
              </p>
            </dt>
            <dd class="service-new__selecter">
              <!-- 入力欄と矢印ボタン -->
              <div class="service-new__input">
                <button
                  class="service-new__input-btn"
                  :disabled="pageCount <= 5"
                  @click="
                    pageCount = pageCount - 1;
                    onSelect('page', null);
                  "
                >
                  -
                </button>
                <input v-model="pageCount" min="5" />
                <button
                  class="service-new__input-btn"
                  @click="
                    pageCount = pageCount + 1;
                    onSelect('page', null);
                  "
                >
                  +
                </button>
                <span>ページ</span>
              </div>
            </dd>
          </dl>

          <!-- その他のオプションの選択 -->
          <dl
            v-for="(item, type) in serviceNewBtns"
            :key="type"
            class="service-new__list"
          >
            <dt class="">
              <p class="service-new__title" v-html="item.title"></p>
              <p
                v-if="item.note"
                class="service-new__note"
                v-html="item.note"
              ></p>
            </dt>
            <dd class="service-new__selecter">
              <button
                class="service-new__btn"
                :class="{
                  'is-selected':
                    (type === 'logo' && orderLogo) ||
                    (type === 'photo' && orderPhoto) ||
                    (type === 'update' && orderLecture) ||
                    (type === 'animation' && orderAnimation) ||
                    (type === 'hurry' && orderHurry),
                }"
                @click="onSelect(type, 0)"
              >
                {{ item.btn_txt1 }}
              </button>
              <button
                class="service-new__btn"
                :class="{
                  'is-selected':
                    (type === 'logo' && !orderLogo) ||
                    (type === 'photo' && !orderPhoto) ||
                    (type === 'update' && !orderLecture) ||
                    (type === 'animation' && !orderAnimation) ||
                    (type === 'hurry' && !orderHurry),
                }"
                @click="onSelect(type, 1)"
              >
                {{ item.btn_txt2 }}
              </button>
            </dd>
          </dl>

          <div class="service-new__reset">
            <button class="service-new__reset-btn" @click="resetTotalPrice">
              <span>条件をリセット</span>
              <i class="service-new__reset-icon"><iconReset /></i>
            </button>
          </div>
        </div>

        <!-- 合計金額とリセットボタン -->
        <div class="service-new__total l-inner js-service-new-total">
          <div class="service-new__price">
            <p class="service-new__price-item">
              <span class="service-new__price-text"
                >追加オプション込みの合計
              </span>
              <span class="">￥</span>{{ formatPrice(totalPrice)
              }}<span class="service-new__price-tax">(税込)~</span>
            </p>
          </div>
        </div>
      </div>
    </ServiceFrame>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service-new {
  @include mixin.mq-sp {
    position: relative;
  }
}

.service-new__lead {
  display: inline-block;
  background-color: var(--green);
  color: var.$c-black;
  @include mixin.mq-pc {
    margin-left: func.cv-rem(15);
    margin-bottom: func.cv-rem(90);
    font-size: func.cv-rem(12);
    padding: func.cv-rem(3) func.cv-rem(5);
  }
  @include mixin.mq-sp {
    margin-left: func.cv-rem(15);
    margin-top: func.cv-rem(50);
    margin-bottom: func.cv-rem(20);
    font-size: func.cv-rem(10);
    padding: func.cv-rem(1) func.cv-rem(3);
  }
}

.service-new__option-btn {
  display: flex;
  justify-content: flex-end;
}

.service-new__option-btn-inner {
  display: flex;
  align-items: center;
  gap: func.cv-rem(7);
  @include mixin.mq-pc {
    margin-top: func.cv-rem(30);
    padding: func.cv-rem(20);
    font-size: func.cv-rem(16);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(20);
    padding-bottom: func.cv-rem(20);
  }

  button {
    border-radius: 50%;
    background-color: var(--gray);
    color: var(--beige);
    @include mixin.mq-pc {
      width: func.cv-rem(25);
      height: func.cv-rem(25);
    }
    @include mixin.mq-sp {
      width: func.cv-rem(22);
      height: func.cv-rem(22);
    }
  }
  span {
    font-weight: var.$fw-r;
    line-height: 1;
    @include mixin.mq-pc {
      font-size: func.cv-rem(22);
    }
    @include mixin.mq-sp {
      font-size: func.cv-rem(18);
    }
  }
}

.service-new__option-inner {
  height: 0;
  opacity: 0;
  transition-duration: 0.4s;
  transition-property: height opacity;
  @include mixin.mq-pc {
    padding-bottom: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(15);
  }

  &.is-open {
    height: auto;
    opacity: 1;
  }
}

.service-new__list {
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: func.cv-rem(1);
    background-color: var(--gray);
    opacity: 0.15;
  }

  @include mixin.mq-pc {
    display: flex;
    gap: func.cv-rem(100);
    min-height: func.cv-rem(90);
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(20);
    padding-bottom: func.cv-rem(20);
  }
}

.service-new__title {
  min-width: func.cv-rem(250);
  line-height: 1.2;
  @include mixin.mq-pc {
    font-size: func.cv-rem(16);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(15);
  }
}

.service-new__selecter {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: func.cv-rem(5);
  flex-shrink: 0;
  @include mixin.mq-pc {
    max-width: func.cv-rem(280);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-rem(15);
  }
}

.service-new__attention {
  display: inline-block;
  font-size: func.cv-rem(10);
  background-color: var(--green);
  color: var.$c-black;
  margin-top: func.cv-rem(10);
  padding: func.cv-rem(2) func.cv-rem(5);
}

.service-new__btn {
  border: 1px solid var(--gray);
  border-radius: func.cv-rem(5);
  font-weight: var.$fw-semi;
  padding: func.cv-rem(2) func.cv-rem(16);
  font-size: func.cv-rem(12);
  &.is-selected {
    background-color: var(--gray);
    color: var(--beige);
  }
}

.service-new__note {
  opacity: 0.5;
  padding-top: func.cv-rem(6);
  color: var(--gray);
  flex-shrink: 0;
  @include mixin.mq-pc {
    font-size: func.cv-rem(12);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(11);
  }
}

.service-new__total {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: var(--green);
  border-top: 1px solid var(--gray);
  color: var.$c-gray;

  @include mixin.mq-pc {
    text-align: right;
    padding-top: func.cv-rem(10);
    padding-bottom: func.cv-rem(5);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(11);
    padding-top: func.cv-rem(5);
    padding-bottom: func.cv-rem(5);
  }
}

.service-new__price {
  text-align: right;
  @include mixin.mq-pc {
    font-size: func.cv-rem(30);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(26);
    padding-right: func.cv-rem(15);
  }

  span {
    @include mixin.mq-pc {
      font-size: func.cv-rem(13);
    }
    @include mixin.mq-sp {
      font-size: func.cv-rem(12);
    }
  }
}

.service-new__price-text {
  @include mixin.mq-pc {
    padding-right: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    display: block;
    text-align: left;
    padding-left: func.cv-rem(15);
    padding-top: func.cv-rem(5);
  }
}

.service-new__price-tax {
  font-size: func.cv-rem(11);
}

.service-new__price-item {
  font-weight: var.$fw-semi;
}

.service-new__card-from {
  font-size: func.cv-rem(20);
  padding-left: func.cv-rem(5);
}

.service-new__input {
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    border-bottom: 1px solid var(--gray);
    width: func.cv-rem(80);
    font-size: func.cv-rem(16);
    text-align: center;
  }
  span {
    padding-left: func.cv-rem(10);
  }
}
.service-new__input-btn {
  font-size: func.cv-rem(24);
  &:disabled {
    opacity: 0.2;
  }
}
.service-new__reset {
  text-align: right;
  padding-bottom: func.cv-rem(20);
}

.service-new__reset-btn {
  width: func.cv-rem(130);
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: func.cv-rem(5);
  @include mixin.mq-hover {
    transition-property: opacity;
    transition-duration: 0.3s;
    &:hover {
      opacity: 0.6;
      transition-duration: 0.3s;
    }
  }
}

.service-new__reset-icon {
  display: inline-block;
  width: func.cv-rem(20);
  height: func.cv-rem(20);

  svg {
    width: 100%;
    height: auto;
    fill: var(--gray);
  }
}

.service-new__plans {
  @include mixin.mq-over-laptop {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: func.cv-rem(15);
  }
  @include mixin.mq-tab {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    display: flex;
    flex-direction: column;
    gap: func.cv-rem(15);
    padding-bottom: func.cv-rem(15);
  }
}

.service-new__card {
  position: relative;
  background-color: var.$c-white;
  border-radius: func.cv-rem(10);
  border: func.cv-rem(5) solid var(--beige);
  color: var.$c-black;
  @include mixin.mq-pc {
    padding: func.cv-rem(25) func.cv-rem(20);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(20) func.cv-rem(10);
  }

  &.is-selected {
    border: func.cv-rem(5) solid var(--green);
  }
}
.service-new__card-selected {
  display: none;
  position: absolute;
  background-color: var(--green);
  font-size: func.cv-rem(15);
  .is-selected & {
    display: block;
  }
  @include mixin.mq-pc {
    top: func.cv-rem(-20);
    right: func.cv-rem(20);
    border-radius: func.cv-rem(5);
    padding: func.cv-rem(7) func.cv-rem(25);
  }
  @include mixin.mq-sp {
    top: func.cv-rem(0);
    right: func.cv-rem(10);
    padding: func.cv-rem(5) func.cv-rem(15);
  }
}
.service-new__card-data {
  display: flex;
  flex-direction: column;
}
.service-new__card-title {
  font-family: var.$ff-sans;
  font-weight: var.$fw-semi;
  letter-spacing: -0.01em;
  @include mixin.mq-pc {
    font-size: func.cv-rem(36);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(30);
  }
}
.service-new__card-price {
  letter-spacing: 0.05em;
  font-weight: 800;
  @include mixin.mq-pc {
    font-size: func.cv-rem(28);
    padding-top: func.cv-vw(10, var.$w-base-pc);
    margin-bottom: func.cv-vw(90, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(24);
    padding-top: func.cv-rem(15);
    margin-bottom: func.cv-rem(30);
  }
}
.service-new__card-unit {
  @include mixin.mq-pc {
    font-size: func.cv-rem(16);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}
.service-new__card-tax {
  font-size: func.cv-rem(12);
}
.service-new__card-detail {
  @include mixin.mq-pc {
    min-height: func.cv-rem(40);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}
.service-new__card-target {
  padding-top: func.cv-rem(30);
  font-size: func.cv-rem(13);
}
.service-new__card-feature {
  padding-top: func.cv-rem(15);
  font-size: func.cv-rem(12);
  opacity: 0.6;
  padding-left: 1em;
}

.service-new__card-feature-list {
  position: relative;
  &::before {
    content: '・';
    position: absolute;
    top: 0;
    left: -1em;
    display: inline-block;
  }
}
</style>
