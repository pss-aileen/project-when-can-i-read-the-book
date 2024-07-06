# この本いつ読めると？

図書館で本を借りる際、予約状況を入力することでいつごろ受け取れるかを計算するサービスです。

![](https://github.com/pss-aileen/project-when-can-i-read-the-book/assets/140990100/7e3fd4d5-8451-43f2-84b8-2352767eacbd)

## 背景

### ユーザー（自分）の課題

- 本を借りる時、予約している人がいるといつ頃その本を受け取れるかのわからない
- 日本に滞在している期間が限られているので、その期間に受け取れそうなのか確認したい

### 解決方法

- 予約、貸出、返却までにかかる日数を計算する

## サービス内容

- 福岡市総合図書館を利用する方のみを対象
- 図書館の回送・予約割り当てにかかる日数、取り置き日数、貸出日数を独自に調査
- 調査を元に、予約日と予約順序からいつ頃受け取れるか表示

## 使用技術

### フロントエンド

- HTML/CSS
- TypeScript

### CI/CD

- GitHub Actions

## 今後改善したいこと

- アクセシビリティの向上
  - 不十分な点があるので、1つ1つ改善予定

---

## 技術的な学習・こだわり

基本的なことをきちんとこなすことを意識して制作しました。

- セマンティックなマークアップ
- ファビコン、metaタグの設定
- アクセシビリティ
  - 視力が弱い人に向けて文字色、背景色の配慮
  - タブでのフォーム選択
- VS Code 拡張機能でのマークアップ確認
  - W3C Web Validator
  - axe Accessibility Linter

## 参考サイト・使用ツール

### アクセシビリティ

- [デジタル庁デザインシステムβ版](https://design.digital.go.jp/)
- [ウェブアクセシビリティ導入ガイドブック｜デジタル庁](https://www.digital.go.jp/resources/introduction-to-web-accessibility-guidebook)
- [コントラストチェッカー - Colorbase](https://colorbase.app/ja/tools/contrast-checker)

### ツール

- ファビコン作成:
  - [Favicon Generator for perfect icons on all browsers](https://realfavicongenerator.net/)
- Webサイト解析:
  - Lighthouse
