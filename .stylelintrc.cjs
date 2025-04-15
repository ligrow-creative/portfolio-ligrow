module.exports = {
  syntax: 'scss',
  // プラグインの組み込み
  plugins: [
    'stylelint-selector-bem-pattern', // BEMに基づいたセレクターの命名規則を検証
    'stylelint-scss', // scssファイルの記述規則に従っているかを検証
    'stylelint-prettier', // stylelintにprettierの設定を読み込む
    'stylelint-declaration-block-no-ignored-properties', // displayの値によって無視されるプロパティを見つける
  ],

  // 既存のルールセットを継承
  extends: [
    'stylelint-config-standard', // stylelintのデフォルトの設定
    'stylelint-config-standard-scss', // stylelintのscssのデフォルトの設定
    'stylelint-config-recommended-vue', //  stylelintのvueの推奨設定
    'stylelint-config-recess-order', // プロパティの並び順を制御する
  ],

  // 対象外ファイルの設定
  ignoreFiles: [
    './dist/**/*',
    './*.md,',
    'node_modules/*',
    './src/icons/**/*.css',
    './src/stories/*.css',
  ],

  // 個別設定の追記
  rules: {
    'plugin/declaration-block-no-ignored-properties': true, // display値によって無視されるプロパティを見つける
    'font-family-no-missing-generic-family-keyword': true, // font-familyの総称ファミリを末尾につける
    'property-no-unknown': true, // 存在しないプロパティの検知
    'no-empty-source': null, // 空のスタイルシートを許可
    'block-no-empty': null, // 空のcssブロックを許可
    'scss/at-rule-no-unknown': true,
    'at-rule-no-unknown': [
      // 標準的でない@規則を指定許可
      true,
      {
        ignoreAtRules: [
          'use', // @use
        ],
      },
    ],
    'number-leading-zero': 'always', // 小数点以下の0を記載
    // 'selector-combinator-space-before': 'never', // セレクタの前にスペースを入れる
    'alpha-value-notation': 'number', // アルファ値の表記方法を数値に
    'rule-empty-line-before': [
      // ルールの前に常に空行を入れる。ただし、単一行コメントの後や最初のネストされたルールの前には除外
      'always',
      {
        except: ['after-single-line-comment', 'first-nested'],
        ignore: ['after-comment'],
      },
    ],
    // ケバブケースを強制を無効化
    'selector-class-pattern': null,
  },
};
