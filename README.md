# portfolio-ligrow

**Ligrow Creative のポートフォリオサイト フロントエンドコードです。**  
本リポジトリはコード参考用に **閲覧専用で公開**しております。  
**無断での使用・転載・複製・商用利用は固くお断りいたします。**

## 本番環境URL  
https://www.ligrow-creative.com

## 目次
- [システム構成](#システム構成)
- [HOW TO START](#how-to-start)
- [コマンドについて](#コマンドについて)

## システム構成

### 動作環境

Node.js v22.8.0

### 使用技術

- [Vue.js](https://ja.vuejs.org/)  
- Vite  
- SCSS / TypeScript / GSAP / Vue Router


## 開発環境のセットアップ

### 1.ローカル環境用の証明書発行

ローカル用SSL証明書の発行（初回のみ）

```bash
cd certs
brew install mkcert # mkcertが未インストールの場合
mkcert -install # mkcertが未インストールの場合
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

## コマンドについて

```bash
| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm run dev`          | start local dev server                           |
| `npm run build`        | production build for delivery                    |
| `npm run preview`      | production build for preview up                  |
```

