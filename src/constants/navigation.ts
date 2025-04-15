export const NavMenu = [
  { title_ja: 'トップ', title_en: 'top', link: `` },
  { title_ja: 'お知らせ', title_en: 'news', link: `` },
  { title_ja: 'リグロウクリエイティブについて', title_en: 'about', link: `` },
  { title_ja: '制作実績', title_en: 'works', link: `` },
  { title_ja: 'サービス', title_en: 'service', link: `` },
  { title_ja: 'お問い合わせ', title_en: 'contact', link: `` }
] as const satisfies {
  title_ja: string;
  title_en: string;
  link: string;
}[];

export const SnsIcon = [
  { title_ja: 'LINE', title_en: 'line', link: `https://page.line.me/ligrow` },
  { title_ja: 'INSTAGRAM', title_en: 'instagram', link: `https://www.instagram.com/ligrow.creative/` },
] as const satisfies {
  title_ja: string;
  title_en: string;
  link: string;
}[];
