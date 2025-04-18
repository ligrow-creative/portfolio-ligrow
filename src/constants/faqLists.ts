import type { FaqLists } from '@/types/faqLists';

const faqListsProduction: FaqLists[] = [
  {
    question: '見積もり依頼や事前打ち合わせに費用は発生しますか？',
    answer: 'お見積の作成や、契約前の打ち合わせにつきましては、一切費用は発生いたしません。<br>どうぞお気軽にお問合せください。なお、正式なご依頼をいただいた後、制作に着手したタイミングを「契約」としております。',
  },
  {
    question: '打ち合わせは全国で対応していますか？',
    answer: ' はい、全国どこでもオンライン（Google Meet）で対応可能です。お気軽にご相談ください。',
  },
  {
    question: '納品後の修正は可能ですか？',
    answer: '納品後14日以内であれば、テキスト修正や画像差し替えは無料で対応いたします。<br>それ以降の変更や修正につきましては、内容に応じて別途お見積書を作成いたします。<br><a href="#service" class="link">こちら</a>の金額をご参考ください。',
  },
  {
    question: 'Webサイト制作を依頼した場合、完成までの納期目安を教えてください。',
    answer: 'プランによって異なりますが、目安として以下の通りです。<br>LIGHTプラン：約1.5ヶ月<br>BADICプラン：約3ヶ月<br>ADVANCEプラン：約4ヶ月~<br><br>お急ぎの場合は、追加料金で特急対応も可能ですので、ご相談ください。',
  },
  {
    question: '完成イメージに近いサイトがあるのですが、同じように作ってもらえますか？',
    answer: 'もちろん可能です。ご希望のイメージサイトのリンクをご記載の上、ご連絡ください。',
  },
  {
    question: '予算内でできる範囲でWebサイトを作成してもらえますか？',
    answer: '基本的にはプラン料金に沿ってご案内しておりますが、ご予算に応じて機能やページ構成を調整し、最適なご提案をさせていただきます。<br>まずはお気軽にご相談ください。'
  },
  {
    question: '以前に他社で制作してもらったWebサイトの一部を更新して欲しいです。',
    answer: 'もちろん対応可能です。<br>現在公開されているサイトのURLをご記載いただき、お気軽にご相談ください。',
  },
  {
    question: '開発環境やGithub上のコードももらえますか？',
    answer: '納品はHTMLファイル、CSSファイル等サーバー上にアップロードを行うデータのみとなります。<br>開発環境に関してはお渡ししておおりませんのでご了承ください。<br>また、既に開発環境をお持ちの場合は、条件に応じてご指定の環境にて対応が可能です。',
  },
  {
    question: '支払いのタイミングはいつですか？',
    answer: '納品後（新規制作の場合は、サイトを公開後）、２週間以内に指定の銀行口座までお振り込みをお願いしております。<br>お手数ですが振り込み手数料につきましては御社ご負担にてお願いいたします。',
  },
];

const faqListsPartner: FaqLists[] = [
  {
    question: '見積もり依頼や事前打ち合わせに費用は発生しますか？',
    answer: 'お見積の作成や、契約前の打ち合わせにつきましては、一切費用は発生いたしません。<br>どうぞお気軽にお問合せください。なお、正式なご依頼をいただいた後、制作に着手したタイミングを「契約」としております。',
  },
  {
    question: '打ち合わせは全国で対応していますか？',
    answer: ' はい、全国どこでもオンライン（Google Meet）で対応可能です。お気軽にご相談ください。',
  },
  {
    question: 'どのような制作依頼に対応していますか？',
    answer: 'HTML/CSS/JavaScriptを用いたコーディングから、Vue・Reactなどのフロントエンド開発、既存サイトの改修対応まで承っております。また、AstroやPugなどのテンプレートエンジン・静的サイトジェネレーター（SSG）を使用した構築や、開発環境の初期構築（Vite 等）からの対応も可能です。既存のGitHubリポジトリ上での作業やPull Requestベースの開発フローにも柔軟に対応いたします。',
  },
  {
    question: 'コーディングの品質やルールについて教えてください',
    answer: 'BEMやFLOCSSなどのCSS設計に対応しており、読みやすく保守性の高いコードを心がけています。ガイドラインがある場合はそれに沿って実装可能です。',
  },
  {
    question: 'Gitやチームでの開発にも対応できますか？',
    answer: 'はい、Gitによるバージョン管理や、チーム開発、Pull Requestベースでの作業も可能です。GitHub / GitLab 等に対応しています。',
  },
  {
    question: 'どれぐらいの作業工数の確保が可能ですか？',
    answer: 'ご依頼内容や時期によって変動いたしますが、スケジュールを確認のうえ、対応可能な範囲で調整させていただきます。'
  },
  {
    question: '対応ブラウザやデバイスはどこまで保証されていますか？',
    answer: '動作検証は、以下の主要な最新ブラウザおよびデバイス環境を対象としています。<br>・PC：Chrome、Safari（macOS）、Microsoft Edge（Chromium版）<br>・スマートフォン：iOS Safari、Android Chrome<br>・タブレット：iPadOS Safari、Android Chrome（一部端末）<br>なお、Internet Explorerは2022年にサポートが終了しているため、動作保証の対象外となります。<br>特定の旧ブラウザや業務用端末などへの対応が必要な場合は、事前にご相談ください。'
  },
  {
    question: '秘密保持契約（NDA）は可能ですか？',
    answer: 'はい、NDAの締結にも対応しております。ご希望の場合はご依頼時にお知らせください。',
  },
  {
    question: '納品ファイルの形式について教えてください',
    answer: ' HTML/CSS/JSのソース一式、SCSSやTypeScriptでの納品も可能です。Gitでの共有、ZIP納品、サーバーへの直接アップロードなど、ご希望に応じて対応します。',
  },
  {
    question: '途中でキャンセルした場合の料金はどうなりますか？',
    answer: '作業着手後のキャンセルは、進捗に応じて作業分の費用をご請求いたします。ご発注確定後のキャンセルは基本的にお受けできませんので、ご了承ください。',
  },
  {
    question: '支払いのタイミングはいつですか？',
    answer: '納品後、２週間以内に指定の銀行口座までお振り込みをお願いしております。<br>お手数ですが振り込み手数料につきましては御社ご負担にてお願いいたします。',
  },
];


export {faqListsProduction, faqListsPartner};
