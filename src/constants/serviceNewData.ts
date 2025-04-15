import type { ServiceNewBtn, TypeBtn, ServiceNewPlan } from "@/types/serviceNewData";

const serviceNewPlan:ServiceNewPlan[] = [
  {
    title: 'LIGHT',
    price: 170000,
    detail: 'トップのみ1ページ、または<br class="u-dsp-sp">LP(ランディングページ)',
    target: '名刺代わりのシンプルなWebサイトをご希望の方<br>キャンペーンやイベント専用のサイトを作成したい方',
    feature: ['制作期間：約1.5ヶ月'],
    tag: false,
  },
  {
    title: 'BASIC',
    price: 340000,
    detail: 'トップページ+最大4ページ',
    target: '4ページまでのベーシックなwebサイトをご希望の方',
    feature: ['制作期間：約3ヶ月'],
    tag: true,
  },
  {
    title: 'ADVANCE',
    price: 420000,
    detail: 'トップページ+5ページ以上',
    target: '5ページ以上の本格的なWebサイトをご希望の方',
    feature: ['制作期間：約4ヶ月〜'],
    tag: false,
  },
];


const serviceNewPage:TypeBtn = {
  title: 'ページ数',
  btn_txt1: '1ページ/LP',
  btn_txt2: '2ページ以上',
  price: 20000,
  note: 'トップページを含めた合計ページ数を入力してください。',
};

const serviceNewBtns:ServiceNewBtn = {
  animation: {
    title: 'アニメーションの追加',
    btn_txt1: '追加する',
    btn_txt2: '基本でOK',
    price: 50000,
    note: 'プランには基本アニメーション（モーダル、アコーディオン、フェード、スライダー）が含まれます。<br>スクロール連動やオープニングアニメーションなど、より印象的な動きを加えたい場合は「追加する」をお選びください。',
  },
  logo: {
    title: 'ロゴ制作',
    btn_txt1: '必要',
    btn_txt2: '不要',
    price: 30000,
    note: '制作後はAI・PNG等のデータを納品いたします。<br>納品後は、名刺やSNSアイコンなどにも自由にご利用いただけます。',
  },
  photo: {
    title: '写真撮影',
    btn_txt1: '必要',
    btn_txt2: '不要',
    price: 50000,
    note: 'Webサイト用に店舗や商品などの写真を撮影いたします。<br>お手持ちの素材をご利用いただく場合は追加費用不要です。<br>必要に応じて有料素材のご提案も可能です。<br>※関東圏・関西圏以外での撮影には、別途追加費用を頂戴する場合がございます。',
  },
  hurry: {
    title: '特急対応',
    btn_txt1: '希望する',
    btn_txt2: '通常納期でOK',
    price: 80000,
    note: '通常の制作スケジュールよりも早く納品したい方はご選択ください。<br>内容や時期により対応可否が異なるため、事前にご相談の上、調整させていただきます。',
  },
  update: {
    title: '更新作業レクチャー',
    btn_txt1: '必要',
    btn_txt2: '不要',
    price: 15000,
    note: '納品後、「お知らせ」等の簡易更新をご自身で行いたい方へ、ビデオチャットで操作方法をレクチャーいたします。<br>更新にはパソコン環境が必要です。<br>更新可能な項目には制限があるため、事前にご相談ください。',
  },
}

export { serviceNewBtns, serviceNewPage, serviceNewPlan };
