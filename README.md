# portfolio-ligrow

**Ligrow Creative のポートフォリオサイト フロントエンドコードです。**  
本リポジトリはポートフォリオ目的で **閲覧専用** に公開しています。  
**無断での使用・転載・複製・商用利用はご遠慮ください。**

## 🔗 サイトURL

https://www.ligrow-creative.com

## 📦 使用技術・構成

### フレームワーク・ビルド環境

- [TypeScript](https://www.typescriptlang.org/) 
- [Vue.js](https://ja.vuejs.org/)  
- [SCSS (Sass)](https://sass-lang.com/)  
- [GSAP](https://gsap.com/)  
- [Vite](https://ja.vite.dev/)  


### 開発環境

- Node.js: `v22.8.0`
- パッケージマネージャ: `npm`

## 🗂 ディレクトリ構成

```bash
portfolio-ligrow/
├── husky/       
├── .vscode/                
├── certs/                
├── public/
│   └── assets/             
│       └── images/
├── src/
│   ├── components/  
│       ├── foundation/
│       ├── object/
│       └── pages/
│   ├── constans/           
│   ├── icons/   
│   ├── router/     
│   ├── scripts/ 
│       ├── constants/
│       ├── helper/
│       ├── modules/
│       ├── utilities/
│       └── index.ts
│   ├── styles/           
│       ├── foundation/
│       ├── layout/
│       ├── object/
│       ├── setting/
│       ├── tool/
│       └── app.scss
│   ├── svg-sprite/
│   ├── types         
│   ├── App.vue           
│   ├── env.d.ts       
│   ├── main.ts    
│   └── shims-vue.d.ts
├── .editorconfig 
├── .eslintignore
├── .eslintrc.cjs     
├── .gitignore
├── .prettierignore
├── .prettierrc
├── .stylelintrc.cjs
├── env.d.ts         
├── index.html          
├── package-lock.json
├── package.json
├── README.md
├── postcss.config.cjs
├── project.config.mjs
├── README.md
├── tsconfig.app.json         
├── tsconfig.json 
├── tsconfig.node.json         
├── tsconfig.json         
└── vite.config.mjs      
```

## 🛠 開発環境のセットアップ

### 1.ローカル環境用の証明書発行

ローカル用SSL証明書の発行（初回のみ）

```bash
# 証明書ディレクトリへ移動
cd certs

# mkcertをインストール（未インストール時のみ）
brew install mkcert 

# ルートCAをインストール（初回のみ必要、作成済ならスキップされます）
mkcert -install 

# localhost 用の証明書を生成
mkcert -cert-file ./localhost.crt.pem -key-file ./localhost.key.pem localhost
```

### 2.node modules のインストール

プロジェクトルートにて、
下記コマンドを実行して、必要なパッケージ群をインストールしてください。

```npm
npm i
```

### 3.フロントエンドビルド環境の起動

```npm
npm run dev
```

## 📌 コマンドについて

```bash
| Command                | Action                                  |
| :--------------------- | :---------------------------------------|
| `npm run dev`          | start local dev server                  |
| `npm run build`        | production build for delivery           |
```
