import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: 1,
    dimension: "collaboration",
    text: "你开源了一个很棒的库，有人 fork 之后改了闭源商用，你怎么想？",
    leftLabel: "「必须开源衍生代码」",
    rightLabel: "「随便用，开心就好」",
    leftDesc: "Copyleft 倾向 — 你希望代码自由的传统延续下去",
    rightDesc: "Permissive 倾向 — 使用方式不该由你来规定",
  },
  {
    id: 2,
    dimension: "trust",
    text: "有人用了你的代码，但没在任何地方提到你的名字，你介意吗？",
    leftLabel: "「起码要署名吧」",
    rightLabel: "「不差这个名气」",
    leftDesc: "显式归属 — 尊重是用你代码的基本礼仪",
    rightDesc: "无需署名 — 代码有用比你的名字重要",
  },
  {
    id: 3,
    dimension: "liability",
    text: "如果有人因为用了你的代码导致生产事故，你觉得你应该承担多大责任？",
    leftLabel: "「与我无关，已写免责」",
    rightLabel: "「用了就有风险」",
    leftDesc: "强免责 — 法律上把锅甩得越干净越好",
    rightDesc: "最小责任 — 大家都知道用代码有风险，不必过度保护",
  },
  {
    id: 4,
    dimension: "propagation",
    text: "你希望你的代码生态如何发展？",
    leftLabel: "「保持同样的自由」",
    rightLabel: "「商业也是好事」",
    leftDesc: "同协议传染 — 衍生品必须保持相同的开放精神",
    rightDesc: "允许闭源商用 — 利润能反哺开源生态",
  },
];
