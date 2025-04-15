module.exports = {
  // 呼び出すプラグインを記述
  plugins: {
    // CSSファイルの先頭にcharset追加
    "postcss-normalize-charset": {},
    // ベンダープレフィックスを自動付与
    autoprefixer: {},
    // メディアクエリをソートして1つにまとめてくれる
    "postcss-sort-media-queries": {},
    // CSSプロパティの順番をソートする
    "css-declaration-sorter": { order: "smacss" },
  },
};
