import type { WorksCard } from '@/types/worksCard';

// plan
// 1: LIGHT
// 2: BASIC
// 3: ADVANCE

const worksCard: WorksCard[] = [
  {
    title: 'LOTUSat-1',
    id: 1,
    year: 2024,
    role: 'Design',
    service: ['Figma'],
    plan: null,
    url: null,
    summary: '大手通信企業のプロジェクトチーム向けに、チームTシャツのロゴデザイン制作をお手伝いしました。Tの文字部分には、プロジェクトで使用されている衛星の実機を2Dイラストで再現しています。',
  },
  {
    title: 'Pensée Hair Design',
    id: 2,
    year: 2024,
    role: 'Planning / Web design / Development',
    service: ['HTML5', 'CSS3/SCSS', 'Typescript', 'ejs', 'Vite'],
    plan: 1,
    url: 'https://pensee-hairdesign.com',
    summary: '縮毛矯正特化型美容室の新規Webサイト制作を担当しました。実際に店舗を訪れ、店内の柔らかい雰囲気をサイトデザインに反映させました。',
  },
  {
    title: 'LiGrow Creative',
    id: 3,
    year: 2024,
    role: 'Planning / Web design / Development',
    service: ['HTML5', 'CSS3/SCSS', 'Typescript', 'Vue.js', 'Vite'],
    plan: 2,
    url: 'https://ligrow-creative.com',
    summary: 'リグロウクリエイティブのWebサイトを制作しました。GSAPを多用し、スクロールに応じた動きを取り入れ、Vue.jsを使用してサービスセクションのカスタマイズ機能をスムーズに実装しています。',
  },
  {
    title: 'LOTUSat-1',
    id: 1,
    year: 2024,
    role: 'Design',
    service: ['Figma'],
    plan: null,
    url: null,
    summary: '大手通信企業のプロジェクトチーム向けに、チームTシャツのロゴデザイン制作をお手伝いしました。Tの文字部分には、プロジェクトで使用されている衛星の実機を2Dイラストで再現しています。',
  },
  {
    title: 'Pensee Hair Design',
    id: 2,
    year: 2024,
    role: 'Planning / Web design / Development',
    service: ['HTML5', 'CSS3/SCSS', 'Typescript', 'ejs', 'Vite'],
    plan:1,
    url: 'https://pensee-hairdesign.com',
    summary: '縮毛矯正特化型美容室の新規Webサイト制作を担当しました。実際に店舗を訪れ、店内の柔らかい雰囲気をサイトデザインに反映させました。',
  },
  {
    title: 'LiGrow Creative',
    id: 3,
    year: 2024,
    role: 'Planning / Web design / Development',
    service: ['HTML5', 'CSS3/SCSS', 'Typescript', 'Vue.js', 'Vite'],
    plan: null,
    url: 'https://ligrow-creative.com',
    summary: 'リグロウクリエイティブのWebサイトを制作しました。GSAPを多用し、スクロールに応じた動きを取り入れ、Vue.jsを使用してサービスセクションのカスタマイズ機能をスムーズに実装しています。',
  },
];

export default worksCard;
