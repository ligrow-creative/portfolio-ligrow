import { fileURLToPath, URL } from 'node:url';
import { readFileSync } from 'fs';
import path from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import imageminPlugin from '@macropygia/vite-plugin-imagemin-cache';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: path.resolve(__dirname, 'public'), // 指定していなかった場合は、上記のroot配下にpublicディレクトリを探しにいく。
  build: {
    outDir: path.resolve(__dirname, 'dist'), // 出力場所の設定
    assetsDir: 'assets', // 非JavaScriptファイル（関連ファイル）の出力ディレクトリ
    assetsInlineLimit: 0, // ファイルサイズが制限を超えた場合にファイルを分割しない
    rollupOptions: {
      input: './index.html',
      output: {
        assetFileNames: (assetInfo) => {
          const name = assetInfo.name ?? ''; // assetInfo.nameの存在チェック

          let extType = name.split('.')[1];
          // Webフォントファイルの振り分け
          if (/ttf|otf|eot|woff|woff2/i.test(extType)) {
            extType = 'fonts';
          }

          // 画像形式の振り分け
          if (/png|jpg|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'images';
          }

          //ビルド時のCSS出力先を指定
          if (extType === 'css') {
            return `assets/css/style.css`;
          }

          return `assets/${extType}/[name][extname]`;
        },
        manualChunks: undefined,
        chunkFileNames: 'assets/js/[name].js',
        entryFileNames: 'assets/js/[name].js',
      },
    },
  },
  plugins: [
    vue(),
    imageminPlugin({
      // 画像圧縮プラグイン
      plugins: {
        pngquant: {
          // PNG形式の画像圧縮
          speed: 1, // 圧縮の速度
          quality: [0.65, 1], // 圧縮品質
        },
        mozjpeg: {
          // JPEG形式の画像圧縮
          quality: 85, // 圧縮品質
        },
        svgo: {
          // VSG形式の画像圧縮
          plugins: [
            {
              name: 'removeDimensions', // 属性のwidthとheightを削除
              active: true,
            },
          ],
        },
      },
    }),
  ],
  resolve: {
    alias: {
      // エイリアスの設定
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // サーバーの設定
    host: '0.0.0.0', // ローカルホストを指定
    open: true, // 自動でブラウザアプリを開く
    https: {
      key: readFileSync(path.resolve(__dirname, './certs/localhost.key.pem')),
      cert: readFileSync(path.resolve(__dirname, './certs/localhost.crt.pem')),
    },
  },
});
