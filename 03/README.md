# Node.js講座 3日目

## Expressとは
Node.js上で動作するWebアプリのフレームワーク


## expressのインストール

```
$ npm install -g express
```

このままでは、「express」コマンドが使えないため、次のコマンドを実行する。

```
$ npm install -g express-generator
```

これでインストールする環境が整いました。

## expressコマンドを使ってプロジェクトの作成の仕方

```
$ express プロジェクト名
```

## 作成したプロジェクトのフォルダ構成
前節でexressコマンドで生成したアプリケーションのテンプレートの構造を見ていきます。

```
生成したアプリケーションのディレクトリ名
├── app.js
├── bin
│   └── www
├── package.json
├── public
│   ├── images
│   ├── javascripts
│   └── stylesheets
│       └── style.css
├── routes
│   ├── index.js
│   └── users.js
└── views
    ├── error.jade
    ├── index.jade
    └── layout.jade

```

各ファイル / ディレクトリの概要は以下になります。

| ファイル / ディレクトリ名 | 概要                                       |
|---------------------------|--------------------------------------------|
| app.js                    | アプリケーションのメインとなる処理を記述   |
| bin/www                   | サーバーを起動する内容を記述し、app.jsを起動している |
| routes                    | ルーティーングを格納                       |
| views                     | ビューファイルを格納                       |
| package.json              | 各モジュールのバージョンなどの管理ファイル |