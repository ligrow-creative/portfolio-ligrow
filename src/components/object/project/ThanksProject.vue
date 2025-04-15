<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import FooterSec from '@/components/foundation/FooterSec.vue';

const router = useRouter();

const updateMarginTop = () => {
  const footerElm = document.querySelector('.js-footer') as HTMLElement;
  const thanksElm = document.querySelector('.js-thanks') as HTMLElement;
  if (!footerElm || !thanksElm) return;

  const footerHeight = footerElm.clientHeight;
  const innerHeight = window.innerHeight - footerHeight;
  thanksElm.style.minHeight = `${innerHeight}px`;
};

const handleResize = () => updateMarginTop();

onMounted(() => {
  updateMarginTop();
  window.addEventListener('resize', handleResize);

  // 4秒後にトップページへ遷移
  setTimeout(() => {
    router.push({ name: 'top' });
  }, 4000);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<template>
  <section class="thanks js-thanks">
    <div class="thanks__inner l-inner l-inner__sp">
      <h2 class="thanks__hdg">Thanks!</h2>
      <p class="thanks__text">
        お問い合わせありがとうございます！<br />近日中にご入力いただきましたメールアドレス宛に<br />ご返信いたします。<br /><br />※自動でトップページへジャンプします。
      </p>
    </div>
  </section>
  <FooterSec />
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.thanks {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.thanks__inner {
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @include mixin.mq-pc {
    padding-top: func.cv-rem(100);
    margin-left: 38%;
    border-left: 1px solid var(--gray);
    padding-bottom: func.cv-rem(100);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(60);
    padding-bottom: func.cv-rem(60);
  }
}

.thanks__hdg {
  height: 100%;
  font-family: var.$ff-sans;
  @include mixin.mq-pc {
    font-size: func.cv-rem(100);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(60);
  }
}
</style>
