# LCTI — License Type Indicator

> **你的灵魂开源许可证是什么？** 32 道灵魂拷问，用梯度分值纯算法匹配你最契合的开源人格。

[![Vercel](https://img.shields.io/badge/deployed_on-Vercel-000?logo=vercel)](https://lcti.hydroroll.team)
![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=next.js)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?logo=shadcnui)

---

## 这是什么

LCTI 是一套**开源许可证人格测试**，灵感来自 MBTI。通过 32 道梯度选择题，定位你在 4 个对立维度上的倾向，最终映射到 16 个经典开源许可证之一。

**没有 AI，没有玄学，100% 确定性算法。** 结果可预期、可解释、可分享。

### 四维人格模型

| 维度     | 左端（0）                | 右端（1）                 |
| -------- | ------------------------ | ------------------------- |
| 协作态度 | 独行侠 — Copyleft 倾向  | 布道者 — Permissive 倾向 |
| 信任模式 | 审计员 — 要求显式署名   | 乐捐者 — 无需署名        |
| 责任边界 | 盾牌手 — 强免责声明     | 冒险家 — 最小化责任限制  |
| 传播执念 | 传教士 — 要求同协议传染 | 实用派 — 允许闭源商用    |

### 32 题评分方式

- 每个维度 8 题，共 32 题
- 每题使用 5 档梯度选项，内部按 `0 / 0.25 / 0.5 / 0.75 / 1` 计分
- 系统分别计算 4 个维度的平均分
- 维度均分低于 `0.5` 归为左侧人格，高于或等于 `0.5` 归为右侧人格
- 四个维度组合后，仍然映射到 16 个许可证人格

### 16 种人格映射

| 二进制   | License      | 人格标题               |
| -------- | ------------ | ---------------------- |
| `0000` | GPLv3        | 代码共产主义者         |
| `0001` | GPLv2        | 原则性极强的老炮儿     |
| `0010` | LGPLv3       | 温柔而坚定的自由主义者 |
| `0011` | AGPLv3       | 网络空间的守门人       |
| `0100` | EUPL 1.2     | 布鲁塞尔来的外交官     |
| `0101` | WTFPL        | 开源界的 Andrew W.K.   |
| `0110` | CC0          | 知识无国界战士         |
| `0111` | Unlicense    | 无政府主义实干家       |
| `1000` | OSL 3.0      | 开源世界的公司法务     |
| `1001` | MPL 2.0      | 鱼和熊掌我都要         |
| `1010` | zlib         | 极简主义教父           |
| `1011` | ISC          | npm 背后的无名英雄     |
| `1100` | BSD 3-Clause | 品牌保护协会会长       |
| `1101` | BSD 2-Clause | 沉默的大多数           |
| `1110` | Apache 2.0   | 成熟稳重的技术负责人   |
| `1111` | MIT          | 开源第一公民           |

---

## 技术栈

| 层       | 工具                                                   |
| -------- | ------------------------------------------------------ |
| 框架     | [Next.js 16](https://nextjs.org) (App Router)             |
| 语言     | TypeScript                                             |
| 样式     | [Tailwind CSS v4](https://tailwindcss.com)                |
| 组件库   | [shadcn/ui](https://ui.shadcn.com)                        |
| 图标     | [lucide-react](https://lucide.dev)                        |
| 二维码   | [qrcode](https://github.com/soldair/node-qrcode)          |
| 截图生成 | [html-to-image](https://github.com/bubkoo/html-to-image)  |
| 主题切换 | [next-themes](https://github.com/pacocoursey/next-themes) |
| 部署     | [Vercel](https://vercel.com)                              |

所有页面均为**静态生成**（SSG），零服务端运行时成本，Vercel 免费额度足够。

---

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 代码检查
pnpm lint
```

访问 `http://localhost:3000` 预览。

---

## 项目结构

```
src/
├── app/
│   ├── page.tsx                     # 首页
│   ├── layout.tsx                   # 根布局 (SEO, 主题, 字体)
│   ├── not-found.tsx                # 404 页面
│   ├── icon.svg                     # SVG favicon
│   ├── globals.css                  # Tailwind + shadcn 主题
│   ├── test/page.tsx                # 答题页
│   └── result/[slug]/page.tsx       # 结果页 (16 个静态路径)
│       └── result-content.tsx       # 结果卡片 + 维度可视化 + 截图
├── components/
│   ├── ui/                          # shadcn/ui 组件
│   ├── theme-provider.tsx           # 主题上下文
│   └── theme-toggle.tsx             # 主题切换按钮
└── lib/
    ├── types.ts                     # TypeScript 类型
    ├── licenses.ts                  # 16 个许可证数据 + 四维映射
    ├── questions.ts                 # 32 道题目 + 四维定义
    ├── scoring.ts                   # 梯度评分与 16 型映射
    └── quiz-context.tsx             # 答题状态管理
```

---

## 部署

```bash
pnpm add -g vercel
vercel
```

或直接在 [Vercel](https://vercel.com) 导入 GitHub 仓库，零配置部署。

---

## 许可证

[![MIT](https://img.shields.io/badge/license-MIT-65a30d)](LICENSE)

本项目本身使用 MIT 许可证——毕竟我们是开源许可证人格测试，不选 MIT 说不过去)
