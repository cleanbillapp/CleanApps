# Clean Apps 公式サイト

CleanBill / CleanTax / CleanSite / CleanPay の公式入口サイトです。
静的HTML/CSS/JSのみで構成されており、GitHub Pagesでそのまま公開できます。

## ファイル構成

```
clean-apps-site/
├── index.html        トップページ
├── terms.html         利用規約
├── privacy.html        プライバシーポリシー
├── disclaimer.html      免責事項
├── css/
│   └── style.css       全ページ共通のスタイル
├── js/
│   └── main.js         ヘッダー制御・ハンバーガーメニュー
└── assets/
    ├── favicon.svg     ファビコン
    └── ogp.png       SNSシェア用画像
```

## GitHub Pagesでの公開手順

1. GitHubで新しいリポジトリを作成します（例：`CleanApps`）。
2. このフォルダの中身一式（`index.html`や`css`フォルダなど）を、そのリポジトリのルート直下にアップロードします。
3. リポジトリの `Settings` → `Pages` を開きます。
4. 「Source」で `Deploy from a branch` を選び、ブランチを `main`、フォルダを `/(root)` に設定して保存します。
5. 数分後、`https://（あなたのGitHubユーザー名）.github.io/CleanApps/` のようなURLで公開されます。

※ 現在CleanBill・CleanTaxを公開しているアカウント（`cleanbillapp`）と同じアカウント・同じ組織で新しいリポジトリとして公開すると、他の2アプリと管理しやすくなります。

## 公開後のURLについて

サイト内のリンクは以下の既存アプリを直接開く仕様にしてあります（このサイト自体はこれらのアプリのコードには一切手を加えていません）。

- CleanBill: `https://cleanbillapp.github.io/PLOMPT/`
- CleanTax: `https://cleanbillapp.github.io/CleanTax/`
- CleanSite: `https://cleanbillapp.github.io/CleanSite/`
- CleanPay: `https://cleanbillapp.github.io/CleanPay/`

このサイトのリポジトリ名やユーザー名が異なる場合でも、CSSやJS、内部リンク（`terms.html`など）はすべて相対パスで記述しているため、リポジトリ名を変えても問題なく動作します。

`index.html`内の以下の3箇所（`<link rel="canonical">` と OGPの `og:url` / `og:image`）だけは、実際に公開するURLに合わせて書き換えることをおすすめします。

```html
<link rel="canonical" href="https://cleanbillapp.github.io/CleanApps/" />
...
<meta property="og:url" content="https://cleanbillapp.github.io/CleanApps/" />
<meta property="og:image" content="https://cleanbillapp.github.io/CleanApps/assets/ogp.png" />
```

（`terms.html` / `privacy.html` / `disclaimer.html` にある同様の `canonical` も同じ要領で変更してください。）

## 今後の更新方法

| 変更したい内容 | 編集するファイル |
|---|---|
| メインコピー・サブコピー・4つのアプリの説明文 | `index.html`（`<section class="hero">` 付近） |
| 各アプリへのリンク先URL | `index.html`内の `href="https://cleanbillapp.github.io/..."` の部分（4箇所ずつ、計8箇所） |
| 特徴セクションの5項目 | `index.html`（`<section class="section" id="features">` 付近） |
| ブランドストーリー文章 | `index.html`（`<section class="section" id="about">` 付近） |
| 色・余白などデザイン全般 | `css/style.css` 冒頭の `:root` 内の変数（色を変える場合はここだけでOK） |
| 利用規約／プライバシーポリシー／免責事項の文面 | それぞれ `terms.html` / `privacy.html` / `disclaimer.html` |

将来アプリを追加する場合は、`index.html`のファーストビュー内の `.app-grid`、アプリ一覧セクションの `.apps-list` にそれぞれカードを1つ追加する形になります（現在は4つを表示しています。今後の追加も同じ構造で対応できます）。

## 注意事項

- 利用規約・プライバシーポリシー・免責事項は、一般的なWebサービスの構成に沿った参考文面です。公開前に法律の専門家による確認をおすすめします。
- 「サポート」「お問い合わせ」は仕様どおり、ヘッダー・ハンバーガーメニュー・フッターのいずれにも設置していません。
