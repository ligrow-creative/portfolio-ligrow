// 0: ルールを無効にする（off）
// 1: ルールを警告として有効にする（警告が表示されるが、コードは実行可能）
// 2: ルールをエラーとして有効にする（エラーが表示され、コードは実行不可能になる可能性あり）

module.exports = {
  // このファイルがルートであり、これ以上検索しない
  root: true,
  // ソースコードをどの環境下で実行するか
  env: {
    browser: true,
    es2022: true,
    node: true, // module.exportsの書き方はnode.jsの記述方法。これを許可する
  },
  // 解析対象から除外するファイル
  ignorePatterns: ['node_modules/**/*', 'dist/*', '.*rc.js', 'vite.config.ts'],
  // 既存のESLint設定を継承して利用(43項目)。"prettier"…ESLintのフォーマット関連のルールを無効に
  extends: ['eslint:recommended', 'prettier', 'plugin:storybook/recommended'],
  // 追加の設定情報
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'], // 拡張子を省略可能に
    'import/resolver': {
      vite: {
        config: './vite.config.ts', // viteの設定ファイルのパス
      },
    },
  },
  parserOptions: {
    ecmaVersion: 2022, // 使用するECMASScrptのバージョン
    sourceType: 'module', // モジュールを使用
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname, // 設定ファイルのルートディレクトリ
  },
  // 個別対応の設定
  rules: {
    'no-duplicate-imports': 2, // 重複したインポートの検出
    'no-console': 'off', // コンソールの消し忘れ警告
    'func-names': [2, 'never'], // 関数式に名前をつけることを禁止
    'prefer-destructuring': [
      // 分割代入の推奨と要求
      2,
      {
        object: true,
        array: false,
      },
    ],
    'import/no-extraneous-dependencies': [
      // プロジェクトの依存関係に不要なモジュールのインポートの検出
      'error',
      {
      // プロジェクトの開発に関連する依存関係のファイルやディレクトリの指定
        devDependencies: [
          '**/*.test.ts',
          '**/*.spec.ts',
          '**/__tests__/**',
          './vite.config.ts',
          'postcss.config.cjs',
        ],
        optionalDependencies: false,
      },
    ],
    'unicorn/prefer-node-protocol': 'error', // Node.jsのコアモジュールimport時にnode:**のプレフィックスがないと検出
  },

  overrides: [
    // Module config ==============
    {
      files: ['*.mjs'], // 対象ファイルの指定
      parserOptions: {
        ecmaVersion: 'latest', // 最新のECMAScript仕様を使用
        sourceType: 'module', // モジュール構文をサポートする
      },
      settings: {
        'import/resolver': {
          vite: {
            config: '../vite.config.ts', // viteの設定ファイルのパス
          },
        },
      },
    },

    // TypeScript config ==============
    {
      files: ['src/**/*.ts', 'src/**/*.tsx'], // 対象ファイルの指定
      extends: ['plugin:@typescript-eslint/recommended', 'prettier'], // 推奨される設定の拡張
      parser: '@typescript-eslint/parser', // eslintに使用する解析器設定
      plugins: ['@typescript-eslint', 'import', 'unicorn'], // typescript固有のルール機能をサポート
      parserOptions: {
        project: 'tsconfig.json', // TypeScriptの設定ファイルを指定
        tsconfigRootDir: __dirname, // 設定ファイルのルートディレクトリ
      },
      settings: {
        'import/resolver': {
          typescript: {}, // typescriptのパス解決方法を使用
          vite: {
            config: './vite.config.ts', // viteの設定ファイルのパス
          },
        },
      },
      rules: {
        quotes: 'off', // シングルクォートを強制
        '@typescript-eslint/no-explicit-any': 'off',  // `any`型の使用を許可
        '@typescript-eslint/lines-between-class-members': 'off', // クラスメンバー間の空行を無効化
        'prefer-const': [
          'error',
          {
            destructuring: 'all',
            ignoreReadBeforeAssign: true,
          },
        ],
      },
    },

    // Vue config ================
    {
      files: ['src/**/*.vue'],
      parser: 'vue-eslint-parser', // Vueファイルを解析するためのパーサー
      plugins: ['vue'], // Vue用のプラグインを使用
      extends: [
        'airbnb-typescript/base', // AirbnbのTypeScriptスタイルガイドを拡張
        'plugin:vue/vue3-recommended', // Vue.js向けの推奨設定を拡張
        '@vue/typescript/recommended', // Vue.js TypeScript向けの推奨設定を拡張
        '@vue/prettier', // Vue.js用のPrettier設定を拡張
      ],
      parserOptions: {
        ecmaVersion: '2020', // 最新のECMAScriptバージョンを使用
        parser: '@typescript-eslint/parser', // TypeScriptコードを解析するためのパーサー
        project: 'tsconfig.json', // TypeScriptの設定ファイルを指定
        tsconfigRootDir: __dirname, // 設定ファイルのルートディレクトリ
      },
      settings: {
        'import/resolver': 'typescript', // TypeScriptの解決プラグインを使用
        'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.vue'], // サポートするファイル拡張子を指定
      },
      rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          js: 'never',
          jsx: 'never',
          vue: 'never'
        }
      ],
      'vue/no-v-html': 'off',  // v-htmlの警告を無効にする
      'vue/multi-word-component-names': 0,
        '@typescript-eslint/no-explicit-any': 0, // anyの使用を許可
        // 'vue/html-self-closing': [ // HTML要素の自己クローズを強制
        //   2,
        //   {
        //     html: {z
        //       void: 'always',
        //     },
        //   },
        // ],
      },
    },
  ],
};
