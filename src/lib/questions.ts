import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: 1,
    dimension: "collaboration",
    text: "你半夜肝出来的神级库，被 fork 后闭源卖钱了，你：",
    leftLabel: "淦！必须开源衍生代码",
    rightLabel: "随他去吧，代码能帮到人就行",
    leftDesc: "Copyleft 派 — 代码的命也是命，不能变黑盒",
    rightDesc: "Permissive 派 — 格局打开，使用方式不归我管",
  },
  {
    id: 2,
    dimension: "trust",
    text: "有人用了你的代码，README 里提都没提你名字，你：",
    leftLabel: "我那么大个名字看不见？？",
    rightLabel: "害，不提也罢，代码有用就行",
    leftDesc: "审计员模式 — 署名是基本尊重，写在 README 第一行",
    rightDesc: "乐捐者模式 — 代码比我名字重要，低调才是真",
  },
  {
    id: 3,
    dimension: "liability",
    text: "有人拿你的库在生产环境跑出了事故，你觉得：",
    leftLabel: "与我无关，免责声明早写好了",
    rightLabel: "代码写了就有风险，这不怪我",
    leftDesc: "盾牌手 — 法律上把锅甩得比博尔特还快",
    rightDesc: "冒险家 — 敢用就别怕，程序员要有担当（手动狗头）",
  },
  {
    id: 4,
    dimension: "propagation",
    text: "你的代码生态应该怎么发展？",
    leftLabel: "世界和平的前提是自由",
    rightLabel: "商业也是生态的一部分",
    leftDesc: "传教士 — 你的代码必须保持自由，没得商量",
    rightDesc: "实用派 — 只要能让生态繁荣，闭源也能接受",
  },
];
