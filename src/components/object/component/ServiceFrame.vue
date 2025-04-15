<script setup lang="ts">
import iconCheck from '@/icons/iconCheck.vue';

const includeInfo = {
  new: [
    'ビデオ通話によるヒアリング・打ち合わせ',
    'ご要望に基づくオリジナルデザインのご提案（修正は2回まで無料）',
    '画像加工（トリミング・色調補正・サイズ最適化）',
    '原稿リライティング（ご提供いただいた原稿をWeb掲載用に整える簡易リライティングを行います）',
    'スマートフォン対応（レスポンシブデザイン）',
    'SNS連携（Instagram、X（旧Twitter）など）※API連携などは別途お見積りとなります',
    '動画（YouTube等）やGoogleマップの埋め込み',
    '外部ECサイト・ホームページ等へのリンク設置',
    'セキュリティ対策（SSL化対応）',
    'アクセス解析設置（Google Analytics・Search Console）',
    '基本的なSEO対策（検索エンジンに適した構造・記述）※検索上位表示を保証するものではありません',
    '基本的なJavaScriptアニメーション（フェード、スライダー等）',
    'サーバー契約・ドメイン取得に関するサポート（代行は含まれません）',
    '納品後2週間以内のテキスト修正および画像差し替え（軽微な範囲）',
  ],
  ex: [
    'ビデオ通話によるヒアリング・打ち合わせ',
    '対象箇所の動作検証（更新・修正後の簡易チェック）',
    'ご提供データの調整（画像のリサイズ・軽微な最適化など）',
  ],
  design: [
    'ビデオ通話によるヒアリング・打ち合わせ',
    'ご要望に基づくオリジナルデザインのご提案（修正対応含む）',
    '納品データ（.ai形式 または .fig形式）',
    '初回ご提案後のデザイン修正は、2回まで無料で対応いたします。',
  ],
  other: [
    'ビデオ通話によるヒアリング・打ち合わせ',
    '基本的なレスポンシブ対応（PC/SP）',
    '納品ファイルのZipパッケージ化、またはGit納品（希望に応じて）',
  ],
};

const otherInfo = {
  new: [
    'ホームページの運用には、レンタルサーバー料金および独自ドメイン使用料が別途必要となります（目安：約13,000円／年）。',
    '修正対応は初回デザイン案に対して2回まで無料で承ります。それ以降は別途お見積もりとなります。',
    'サポート対象の範囲は、制作物納品後2週間以内の軽微な修正（文言変更・画像差し替え）に限ります。大幅な構成変更や機能追加は新規対応として別途料金が発生いたします。',
    'サーバー・ドメイン契約はお客様名義でのご契約をお願いしております（ご希望があれば取得方法はサポートいたします）。',
    'ご希望内容によっては、プラン内での対応が難しい場合がございます。その際は事前にご説明の上、最適な方法をご提案いたします。',
    '制作開始後のキャンセルは原則としてお受けできませんので、内容にご同意のうえご依頼をお願いいたします。',
  ],
  ex: [
    '記載の料金はすべて1箇所あたりの基本料金の目安となります。ご依頼の内容やボリューム、難易度に応じて正式なお見積もりをご提示いたします。',
    '以前にリグロウでホームページ制作をご依頼いただいたお客様については、上記の料金にてそのまま対応可能です。',
    '他社制作またはご自身で作成されたWebサイトに関しては、初回のみ環境確認費用として11,000円（税込）を別途申し受けます。この費用には、サーバー接続確認、コード構成の把握、検証環境の調整などの事前準備作業が含まれます',
    'CMS（WordPress等）をご利用の場合や、外部サービスと連携されたサイトについては、作業前にシステム構成を確認させていただき、別途ご相談の上対応いたします。',
    'Webサイトの構造や技術的制約により、ご希望の修正が対応不可または大幅な工数を要する場合がございます。その場合は事前にご説明し、最適な代替案をご提案させていただきます。',
    '対応内容により、作業日数・納期は異なります。お急ぎ対応をご希望の場合は、可能な範囲で調整いたしますので、あらかじめご相談ください。',
  ],
  design: [
    '.ai形式 .fig形式ともに、アウトライン化された状態での納品となります。',
    '納品後のフォント編集や文字変更はできかねますので、あらかじめご了承ください。',
    '別途印刷をご希望の方には、ご注文時に料金表をお渡しいたします。',
  ],
  other: [
    '表示価格はあくまで**参考価格（下限）**です。ページ構成・アニメーション・スクリプトの複雑さ等によって価格は前後します。',
    'コーディング対象のデザインが明らかに不完全／修正前提の場合、着手前にフィードバック・調整をお願いすることがあります。',
  ],
};

const props = defineProps<{
  type: 'new' | 'ex' | 'design' | 'other';
  title: string;
  detail: string;
  includeLists: boolean;
  otehrInfomation: boolean;
}>();
</script>

<template>
  <div class="service-frame">
    <h3 class="service-frame__title l-inner l-inner__sp">{{ title }}</h3>
    <p class="service-frame__detail l-inner l-inner__sp" v-html="detail"></p>
    <slot />

    <div class="service-frame__container">
      <!-- 含まれる内容 -->
      <div v-if="includeLists" class="service-frame__note">
        <p class="service-frame__note-title">
          <span class="service-frame__note-en">Inclusions</span>
          <span class="service-frame__note-ja">プラン料金に含まれる内容</span>
        </p>
        <ul class="service-frame__lists">
          <!-- includeInfoのtypeに基づいてリストを表示 -->
          <li
            v-for="(item, index) in includeInfo[props.type]"
            :key="index"
            class="service-frame__lists-item"
          >
            <iconCheck class="service-frame__lists-icon" />
            {{ item }}
          </li>
        </ul>
      </div>

      <!-- その他の費用 -->
      <dl v-if="otehrInfomation" class="service-frame__others">
        <p class="service-frame__others-title">
          <span class="service-frame__note-en">Others</span>
          <span class="service-frame__note-ja">その他の確認事項</span>
        </p>
        <ul class="service-frame__others-text">
          <!-- otherInfoのtypeに基づいてリストを表示 -->
          <li
            v-for="(item, index) in otherInfo[props.type]"
            :key="index"
            class="service-frame__others-list"
          >
            {{ item }}
          </li>
        </ul>
      </dl>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use 'sass:math';
@use '@/styles/setting/variable' as var;
@use '@/styles/tool/function' as func;
@use '@/styles/tool/mixin' as mixin;

.service-frame {
  width: 100%;
  @include mixin.mq-pc {
    padding-top: func.cv-rem(20);
  }
  @include mixin.mq-sp {
    padding-top: func.cv-rem(30);
  }
}

.service-frame__title {
  font-weight: var.$fw-semi;
  @include mixin.mq-pc {
    font-size: func.cv-rem(23);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(20);
  }
}

.service-frame__detail {
  color: var(--gray);
  opacity: 0.75;
  line-height: 1.6;
  @include mixin.mq-pc {
    font-size: func.cv-rem(13);
    padding-top: func.cv-rem(20);
    padding-bottom: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
    padding-top: func.cv-rem(15);
    padding-bottom: func.cv-rem(15);
  }
}

.service-frame__note {
  @include mixin.mq-pc {
    border-right: 1px solid var(--gray);
    padding: func.cv-rem(15) func.cv-rem(15) func.cv-rem(100);
  }
  @include mixin.mq-sp {
    border-bottom: 1px solid var(--gray);
    padding: func.cv-rem(15);
  }
}

.service-frame__note-en {
  font-weight: var.$fw-r;
  font-family: var.$ff-sans;
  line-height: 1;
  letter-spacing: -0.03em;
  @include mixin.mq-pc {
    font-size: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(36);
  }
}

.service-frame__note-ja {
  font-size: func.cv-rem(13);
  display: block;
}

.service-frame__lists {
  color: var(--gray);
}
.service-frame__lists-item {
  position: relative;
  padding-top: func.cv-rem(8);
  line-height: 1.6;
  @include mixin.mq-pc {
    font-size: func.cv-rem(13);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
}

.service-frame__lists-icon {
  opacity: 0.5;
  width: func.cv-rem(10);
  height: auto;
}

.service-frame__note-title {
  @include mixin.mq-pc {
    padding-bottom: func.cv-rem(50);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(20);
  }
}

.service-frame__others {
  @include mixin.mq-pc {
    padding: func.cv-rem(15);
  }
  @include mixin.mq-sp {
    padding: func.cv-rem(15);
  }
}

.service-frame__others-title {
  @include mixin.mq-pc {
    padding-bottom: func.cv-rem(40);
  }
  @include mixin.mq-sp {
    padding-bottom: func.cv-rem(25);
  }
}
.service-frame__others-list {
  color: var(--gray);
  line-height: 1.6;
  margin-top: func.cv-rem(10);
  padding-left: 1em;
  position: relative;
  @include mixin.mq-pc {
    font-size: func.cv-rem(13);
  }
  @include mixin.mq-sp {
    font-size: func.cv-rem(12);
  }
  &::before {
    content: '';
    position: absolute;
    left: func.cv-rem(0);
    top: func.cv-rem(10);
    display: inline-block;
    background-color: var(--gray);
    border-radius: 50%;
    width: 3px;
    height: 3px;
  }
}
.service-frame__container {
  border-top: 1px solid var(--gray);
  @include mixin.mq-pc {
    font-size: func.cv-rem(16);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @include mixin.mq-sp {
    display: flex;
    flex-direction: column;
  }
}
</style>
