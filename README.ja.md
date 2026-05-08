# LCTI — License Code Type Indicator

> **あなたの魂のオープンソースライセンスは？** 32 の魂の問いかけ、段階的スコアリングの純アルゴリズムであなたに最も適したオープンソース人格を判定します。

[![Vercel](https://img.shields.io/badge/deployed_on-Vercel-000?logo=vercel)](https://lcti.hydroroll.team)
![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=next.js)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?logo=shadcnui)

[English](README.md) · [中文](README.zh.md) · **日本語**

---

## これは何ですか

LCTI は MBTI に着想を得た**オープンソースライセンス人格診断**です。32 の段階的選択問題を通じて、4 つの対立軸におけるあなたの傾向を測定し、最終的に 16 の古典的オープンソースライセンスのいずれかにマッピングします。

### 4次元人格モデル

| 次元         | 略称 | 左（0）                                        | 右（1）                                           |
| ------------ | ---- | ---------------------------------------------- | ------------------------------------------------- |
| 協調態度     | COL  | 孤狼型 — Copyleft志向                          | 布道者 — Permissive志向                           |
| 信頼モデル   | TRU  | 監査人 — 明示的なクレジット表示が必要          | 寄付者 — クレジット表示不要                       |
| 責任の境界   | LIA  | 盾持ち — 強力な免責条項                        | 冒険家 — 最小限の責任制限                         |
| 伝播へのこだわり | PRO | 伝道者 — 同じライセンスの継承を要求       | 実用派 — クローズドソース/商用利用を許可          |

### 32問のスコアリング方法

- 各次元8問、全32問
- 各質問は5段階の選択肢で、内部的に `0 / 0.25 / 0.5 / 0.75 / 1` でスコア化
- システムが4次元それぞれの平均スコアを計算
- 平均スコアが `0.5` 未満は左側の人格、`0.5` 以上は右側の人格に分類
- 4次元の組み合わせにより16のライセンス人格にマッピング

### 16の人格マッピング

| 二進数   | License      | Badge                                                                                                            | 人格タイトル                     |
| -------- | ------------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `0000` | GPLv3        | ![GPLv3](https://lcti.hydroroll.team/badge/gpl-3.0.svg)                                                          | コードの共産主義者               |
| `0001` | GPLv2        | ![GPLv2](https://lcti.hydroroll.team/badge/gpl-2.0.svg)                                                          | 筋の通った老練家                 |
| `0010` | LGPLv3       | ![LGPLv3](https://lcti.hydroroll.team/badge/lgpl-3.0.svg)                                                        | 優しくも揺るぎない自由主義者     |
| `0011` | AGPLv3       | ![AGPLv3](https://lcti.hydroroll.team/badge/agpl-3.0.svg)                                                        | ネット空間の門番                 |
| `0100` | EUPL 1.2     | ![EUPL 1.2](https://lcti.hydroroll.team/badge/eupl-1.2.svg)                                                      | ブリュッセル出身の外交官         |
| `0101` | WTFPL        | ![WTFPL](https://lcti.hydroroll.team/badge/wtfpl.svg)                                                            | オープンソース界のAndrew W.K.    |
| `0110` | CC0          | ![CC0](https://lcti.hydroroll.team/badge/cc0.svg)                                                                | 知識に国境なしの戦士             |
| `0111` | Unlicense    | ![Unlicense](https://lcti.hydroroll.team/badge/unlicense.svg)                                                    | アナーキスト実践家               |
| `1000` | OSL 3.0      | ![OSL 3.0](https://lcti.hydroroll.team/badge/osl-3.0.svg)                                                        | オープンソース界の企業法務       |
| `1001` | MPL 2.0      | ![MPL 2.0](https://lcti.hydroroll.team/badge/mpl-2.0.svg)                                                        | 二兎を追う者                     |
| `1010` | zlib         | ![zlib](https://lcti.hydroroll.team/badge/zlib.svg)                                                              | ミニマリズムの教祖               |
| `1011` | ISC          | ![ISC](https://lcti.hydroroll.team/badge/isc.svg)                                                                | npmの影の英雄                    |
| `1100` | BSD 3-Clause | ![BSD 3-Clause](https://lcti.hydroroll.team/badge/bsd-3-clause.svg)                                              | ブランド保護協会会長             |
| `1101` | BSD 2-Clause | ![BSD 2-Clause](https://lcti.hydroroll.team/badge/bsd-2-clause.svg)                                              | 沈黙の多数派                     |
| `1110` | Apache 2.0   | ![Apache 2.0](https://lcti.hydroroll.team/badge/apache-2.0.svg)                                                  | 成熟した技術責任者               |
| `1111` | MIT          | ![MIT](https://lcti.hydroroll.team/badge/mit.svg)                                                                | オープンソース第一市民           |

---

## クイックスタート

```bash
# 依存関係をインストール
pnpm install

# 開発サーバーを起動
pnpm dev

# プロダクションビルド
pnpm build

# リンター
pnpm lint
```

`http://localhost:3000` にアクセスしてプレビュー。

---

## デプロイ

```bash
pnpm add -g vercel
vercel
```

または [Vercel](https://vercel.com) で GitHub リポジトリを直接インポートすれば、ゼロ設定でデプロイできます。

---

## ライセンス

[![MIT](https://img.shields.io/badge/license-MIT-65a30d)](LICENSE)

このプロジェクト自体は MIT ライセンスを使用しています——何せオープンソースライセンス人格診断ですから、MIT を選ばないわけにはいきませんね)
