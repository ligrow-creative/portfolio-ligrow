<script setup lang="ts">
import txtLigrowPc from '@/icons/txtLigrowPc.vue';
import txtLigrowSp from '@/icons/txtLigrowSp.vue';
import { RouterLink } from 'vue-router';
import MediaQueryList from '@/scripts/constants/media-query-list';
import { SnsIcon } from '@/constants/navigation';

const scrolltop = () => {
  window.scrollTo({
    top: 0,
  });
};

const onClickLink = () => {
  scrolltop();
};

const mediaQuery = MediaQueryList;
</script>

<template>
  <footer class="footer js-footer">
    <ul class="footer__sns">
      <li
        v-for="(item, index) in SnsIcon"
        :key="index"
        class="footer__sns-item"
      >
        <a :href="item.link" target="_blank">
          {{ item.title_en.toUpperCase() }}
        </a>
      </li>
    </ul>

    <div class="footer__inner">
      <div class="footer__copy">
        <p class="footer__copy-text">
          © LiGrow Creative. All Rights Reserved.
        </p>
      </div>
      <div class="footer__ligrow">
        <RouterLink to="/" @click="onClickLink">
          <template v-if="mediaQuery.Pc.matches">
            <txtLigrowPc />
          </template>
          <template v-else>
            <txtLigrowSp />
          </template>
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.footer {
  font-family: var.$ff-sans;
  padding: func.cv-rem(15);
  background-color: var(--gray);
  color: var(--beige);
  border-top: 1px solid var(--beige);
  position: relative;
  overflow: hidden;
  @include mixin.mq-pc {
    height: func.cv-vw(500, var.$w-base-pc);
  }
  @include mixin.mq-sp {
    height: func.cv-rem(200);
  }

  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    left: 38%;
    top: 0;
    width: func.cv-rem(1);
    background-color: var(--beige);
    @include mixin.mq-pc {
      height: func.cv-rem(57);
    }
    @include mixin.mq-sp {
      height: func.cv-rem(45);
    }
  }
}
.footer__inner {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.footer__sns {
  position: absolute;
  top: 0;
  left: 38%;
  @include mixin.mq-pc {
    padding: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(10);
  }
}
.footer__sns-item {
  @include mixin.mq-pc {
    padding-top: func.cv-rem(5);
    padding-bottom: func.cv-rem(5);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
    padding-top: func.cv-rem(5);
    padding-bottom: func.cv-rem(2);
  }
}

.footer__copy {
  text-align: right;
  @include mixin.mq-pc {
    font-size: func.cv-rem(12);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(10);
    letter-spacing: -0.03em;
    padding-left: 38%;
    margin-top: auto;
    padding-bottom: func.cv-rem(10);
  }
}

.footer__ligrow {
  width: 100%;
  height: auto;
  transform-origin: center center;
  @include mixin.mq-pc {
    margin-bottom: func.cv-rem(-30);
    transform: scale(1.07);
    margin-left: func.cv-rem(-3);
  }
  @include mixin.mq-sp {
    margin-bottom: func.cv-rem(-20);
    margin-left: func.cv-rem(-1);
    transform: scale(1.1);
  }
  @include mixin.mq-hover {
    &:hover {
      svg {
        transition-duration: 0.4s;
        transition-property: fill;
        transition-timing-function: var(--cubic);
        fill: var(--green);
      }
    }
  }
  svg {
    width: 100%;
    height: auto;
    fill: var(--beige);
  }
}
</style>
