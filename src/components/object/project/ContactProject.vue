<script setup lang="ts">
import HdgSec from '../component/HdgSec.vue';
import iconArrow from '@/icons/iconArrow.vue';
import router from '@/router';
import { onMounted, ref, inject } from 'vue';
import FooterSec from '@/components/foundation/FooterSec.vue';

// 画像パスを読み込み
const IMG_PATH = inject<string>('IMG_PATH');

const checkboxLabels = [
  'ホームページ制作/LP制作',
  'ホームページ更新/運用',
  'ロゴ制作/名刺デザイン',
  '制作パートナーについて',
  'その他',
];

const submitted = ref<boolean>(false);

const addClass = 'is-active';

const onClickCheckbox = (e: Event) => {
  const checkboxLabel = e.currentTarget as HTMLLabelElement;
  checkboxLabel.classList.toggle(addClass);
};

const handleFormSubmit = (e: Event) => {
  const honeypotElm = document.querySelector(
    'input[name="honeypot"]'
  ) as HTMLInputElement;

  //  // honeypotフィールドに値が入っていた場合、フォーム送信を防止
  if (honeypotElm && honeypotElm.value) {
    e.preventDefault(); // フォームのデフォルト送信を防止
    honeypotElm.disabled = true; // 送信ボタンを無効化
    return;
  }

  // フォーム送信処理をここで行う
  submitted.value = true;
};

const handleIframeLoad = () => {
  if (submitted.value) {
    router.push('/thanks');
  }
};

onMounted(() => {
  // ページが読み込まれた時に滑らかにスクロールしてトップに移動
  window.scrollTo({
    top: 0,
  });
});
</script>

<template>
  <section class="contact js-contact">
    <div class="contact__inner">
      <div class="contact__title">
        <HdgSec
          title-en="CONTACT"
          title-ja="ご相談・お問い合わせ"
          :priority="2"
          :num="1"
          add-class="contact__hdg l-inner l-inner__sp"
          direction="p"
          :circle="true"
        />
      </div>
      <div class="contact__form">
        <h3 class="contact__form-title l-inner l-inner__sp">
          ご相談・お問い合わせ
        </h3>
        <p class="contact__form-text l-inner l-inner__sp">
          無料見積もりなどもお気軽にお問い合わせください。<br />ご入力いただいたメールアドレス宛にご返信させていただきます。
        </p>
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeTieSWuHRI4OcqxXeNpa2o3PDaoUMb3jq_ghKn1_3lzHNbrQ/formResponse?embedded=true"
          method="post"
          target="hidden_iframe"
          @submit="handleFormSubmit"
        >
          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <p class="contact__box-ttl">お問い合わせの種類</p>
              <ul class="contact__box-checkbox">
                <li v-for="(label, index) in checkboxLabels" :key="index">
                  <label :for="'checkbox_' + index" class="contact__label">
                    <input
                      :id="'checkbox_' + index"
                      type="checkbox"
                      name="entry.2070563581"
                      class="contact__input-checkbox"
                      :value="label"
                      @click="onClickCheckbox"
                    />
                    <span>{{ label }} </span>
                  </label>
                </li>
              </ul>
            </div>
            <p class="contact__box-note">※複数回答可</p>
          </div>
          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="company-name" class="contact__label">
                会社名・屋号
              </label>
              <input
                id="company-name"
                type="text"
                name="entry.608165114"
                placeholder="リグロウクリエイティブ"
                maxlength="30"
                class="contact__input-text"
              />
            </div>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="full-name" class="contact__label is-required"
                >氏名</label
              >
              <input
                id="full-name"
                type="text"
                name="entry.2038457247"
                placeholder="山田 太郎"
                maxlength="20"
                class="contact__input-text"
                required
              />
            </div>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="furigana-name" class="contact__label is-required"
                >氏名(ふりがな)</label
              >
              <input
                id="furigana-name"
                type="text"
                name="entry.157015438"
                placeholder="やまだ たろう"
                class="contact__input-text"
                maxlength="20"
                required
              />
            </div>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="email" class="contact__label is-required"
                >メールアドレス</label
              >
              <input
                id="email"
                type="email"
                name="entry.944850883"
                placeholder="ligrow@gmail.com"
                class="contact__input-text"
                maxlength="40"
                required
              />
            </div>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="phone" class="contact__label">電話番号</label>
              <input
                id="phone"
                type="tel"
                name="entry.1756280335"
                placeholder="0901112222"
                pattern="^\d{9,11}$"
                maxlength="11"
                class="contact__input-text"
              />
            </div>
            <p class="contact__box-note">※ハイフンなし</p>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="inquiry" class="contact__label is-required"
                >お問い合わせ内容</label
              >
              <textarea
                id="inquiry"
                name="entry.1322182013"
                rows="10"
                placeholder="お問い合わせ内容をご入力ください。"
                maxlength="250"
                class="contact__input-text"
                required
              />
            </div>
          </div>

          <div class="contact__box l-inner l-inner__sp">
            <div class="contact__box-inner">
              <label for="robot" class="contact__label is-required"
                >ロボットではありませんか？</label
              >
              <input
                id="robot"
                type="text"
                name="entry.830003161"
                placeholder="画像のテキストを入力してください。"
                pattern="PADTC"
                maxlength="5"
                class="contact__input-text"
                required
              />
            </div>
            <div class="contact__box-captcha">
              <img
                :src="IMG_PATH + '/contact/captcha_0' + 2 + '.jpg'"
                alt=""
                width="620"
                height="620"
                class="contact__img"
              />
            </div>
          </div>

          <input
            type="text"
            name="honeypot"
            maxlength="20"
            class="contact__honeypot"
          />

          <div class="contact__submit">
            <input type="submit" value="送信する" />
            <iconArrow class="contact__arrow" />
          </div>
        </form>

        <iframe
          id="hidden_iframe"
          name="hidden_iframe"
          style="display: none"
          @load="handleIframeLoad"
        ></iframe>
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

.contact {
  @include mixin.mq-sp {
    padding-left: func.cv-rem(15);
  }
}

.contact__title {
  @include mixin.mq-sp {
    border-top: 1px solid var(--gray);
  }
}

.contact__inner {
  @include mixin.mq-pc {
    display: grid;
    grid-template-columns: 38% 62%;
    padding-top: func.cv-rem(60);
  }
  @include mixin.mq-sp {
    padding-top: 50px;
    border-left: 1px solid var(--gray);
    padding-bottom: func.cv-rem(15);
  }
}
.contact__lead {
  justify-content: space-between;
}
.contact__hdg {
  padding-top: func.cv-rem(15);
}
.contact__form {
  @include mixin.mq-pc {
    border-left: 1px solid var(--gray);
    padding-top: func.cv-vw(200, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(80);
  }
}
.contact__form-title {
  padding-bottom: func.cv-rem(15);
  @include mixin.mq-pc {
    font-size: func.cv-rem(20);
  }

  @include mixin.mq-sp {
    font-size: func.cv-rem(16);
  }
}
.contact__form-text {
  font-size: func.cv-rem(13);
  opacity: 0.5;
  padding-bottom: func.cv-rem(30);
}
.contact__box {
  position: relative;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(25);
    padding-bottom: func.cv-rem(25);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(20);
    padding-bottom: func.cv-rem(20);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: func.cv-rem(1);
    background-color: var(--gray);
    opacity: 0.15;
  }
}
.contact__box-inner {
  @include mixin.mq-over-laptop {
    align-items: center;
    display: flex;
  }
  @include mixin.mq-tab {
    display: block;
  }
  @include mixin.mq-sp {
    flex-direction: column;
    display: flex;
  }
}

.contact__box-captcha {
  padding-top: func.cv-rem(20);
  @include mixin.mq-over-laptop {
    padding-left: func.cv-rem(300);
  }

  img {
    display: block;
    width: 100%;
    height: auto;
    @include mixin.mq-over-laptop {
      max-width: func.cv-rem(300);
    }
  }
}

.contact__box-note {
  display: block;
  opacity: 0.5;
  font-size: func.cv-rem(11);
  padding-top: func.cv-rem(5);
  @include mixin.mq-over-laptop {
    padding-left: func.cv-rem(300);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(10);
  }
}

.contact__box-ttl {
  min-width: func.cv-rem(300);
  &.is-required {
    position: relative;
    &::after {
      color: var.$c-gray;
      content: '必須';
      display: inline-block;
      background-color: var(--green);
      font-size: func.cv-rem(11);
      padding: func.cv-rem(1) func.cv-rem(3);
      margin-left: func.cv-rem(8);
    }
  }
}

.contact__box-checkbox {
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    align-items: center;
    gap: func.cv-rem(10);
    padding-top: func.cv-rem(8);
    padding-bottom: func.cv-rem(8);
  }
}

.contact__input-checkbox {
  display: inline-block;
  width: func.cv-rem(20);
  height: func.cv-rem(20);
  background-color: var.$c-white;
  position: relative;
  border-radius: func.cv-rem(3);

  &.is-active {
    &::after {
      content: '';
      z-index: var.$z-positive;
      border-radius: func.cv-rem(3);
      display: inline-block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      background-color: var.$c-black;
      width: func.cv-rem(10);
      height: func.cv-rem(10);
    }
  }
}

.contact__label {
  min-width: func.cv-rem(300);

  &.is-required {
    position: relative;
    &::after {
      color: var.$c-gray;
      content: '必須';
      display: inline-block;
      background-color: var(--green);
      font-size: func.cv-rem(11);
      padding: func.cv-rem(1) func.cv-rem(3);
      margin-left: func.cv-rem(8);
    }
  }
}

.contact__input-text {
  background-color: rgba(var.$c-white, 0.8);
  border-radius: func.cv-rem(3);
  width: 100%;
  color: var.$c-black;
  font-size: func.cv-rem(15);
  &::placeholder {
    opacity: 0.6;
  }
  @include mixin.mq-over-laptop {
    padding: func.cv-rem(10) func.cv-rem(15);
    max-width: func.cv-rem(600);
  }
  @include mixin.mq-tab {
    margin-top: func.cv-rem(8);
    padding: func.cv-rem(8) func.cv-rem(12);
  }
  @include mixin.mq-sp {
    margin-top: func.cv-rem(8);
    padding: func.cv-rem(8) func.cv-rem(12);
  }
}

.contact__submit {
  background-color: var(--green);
  color: var.$c-black;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  @include mixin.mq-pc {
    font-size: func.cv-rem(18);
    margin-top: func.cv-rem(50);
    margin-left: func.cv-rem(15);
    margin-right: func.cv-rem(15);
    margin-bottom: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(16);
    margin-top: func.cv-rem(80);
    margin-left: func.cv-rem(10);
    margin-right: func.cv-rem(10);
  }
  @include mixin.mq-hover {
    transition-duration: 0.4s;
    transition-property: color fill background-color;
    &:hover {
      color: var.$c-white;
      background-color: var(--gray);
      svg {
        fill: var(--green);
      }
    }
  }

  input {
    display: block;
    text-align: left;
    width: 100%;
    height: auto;
    padding: func.cv-rem(15) func.cv-rem(15);
  }

  svg {
    position: absolute;
    top: func.cv-rem(10);
    right: func.cv-rem(10);
    display: block;
    fill: var.$c-white;
    width: func.cv-rem(37);
    height: func.cv-rem(37);
  }
}
</style>
