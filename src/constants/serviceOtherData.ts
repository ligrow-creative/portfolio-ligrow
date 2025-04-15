import type { ServiceOtherData } from "@/types/serviceOtherData";

const serviceOtherData:ServiceOtherData[] = [
  {
    title_en: 'consultation',
    title: 'お見積もり・打ち合わせ',
    note: 'Webサイト制作、コーディングに関するお見積もり、ご要望のヒアリング、技術的なご相談などを承ります。<br>オンラインでの打ち合わせが可能です。',
    price: 0,
  },
  {
    title_en: 'order',
    title: '継続的なフロントエンド開発パートナー',
    note: '長期的なWebサイトの保守・運用、機能追加、改善などのフロントエンド対応を制作パートナーとして承ります。<br>月額契約、時間単位契約、成果物納品型契約など、柔軟な契約形態に対応可能です。まずはお気軽にお問い合わせください。',
    price: 0,
  },
  {
    title_en: 'top_cording',
    title: `トップページコーディング<br class="u-dsp-sp">（レスポンシブ対応含む）`,
    note: '単位：1ページ(最大8000px)あたり<br>8000pxを超える場合は、4000pxごとに＋¥11,000の追加費用を頂戴いたします。<br>基本はPC/SPの2ブレイクポイント対応です。',
    price: 55000,
  },
  {
    title_en: 'under_cording',
    title: `下層ページコーディング<br class="u-dsp-sp">（レスポンシブ対応含む）`,
    note: '単位：1ページ(最大6000px)につき<br>6000pxを超える場合は、3000pxごとに＋¥5,500の追加費用を頂戴いたします。<br>基本はPC/SPの2ブレイクポイント対応です。',
    price: 33000,
  },
  {
    title_en: 'lp_cording',
    title: `LPコーディング<br class="u-dsp-sp">（レスポンシブ対応含む）`,
    note: '単位：1ページ(最大12000px)につき<br>12000pxを超える場合は、3000pxごとに＋¥11,000の追加費用を頂戴いたします。<br>基本はPC/SPの2ブレイクポイント対応です。',
    price: 99000,
  },
  {
    title_en: 'javascript',
    title: `jQuery/JavaScript/TypeScript実装`,
    note: '記載の料金は最低料金となります。<br>具体的な仕様、機能、アニメーション内容に合わせて個別にお見積もりいたします。<br>事前に詳細な要件定義をご提示ください。',
    price: 33000,
  },
];

export default serviceOtherData;
