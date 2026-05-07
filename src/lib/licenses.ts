import type { License } from "./types";

export const licenses: License[] = [
  {
    slug: "gpl-3.0",
    name: "GPLv3",
    fullName: "GNU General Public License v3.0",
    binary: [0, 0, 0, 0],
    hex: 0,
    title: "代码共产主义者",
    personality: "你的代码是人民的代码。你信仰分配正义，坚信私有化是万恶之源。",
    description:
      "你是开源界的硬核左派，RMS 是你的精神导师。任何使用你代码的人，都必须以同样的许可证发布衍生作品——没有例外，没有退路。你愿意为了理念牺牲采用率，因为对你来说，自由比流行更重要。你是那个在技术群里坚持所有 PR 都要公开讨论的人。RMS 会为你骄傲的，真的。",
    catchphrase: "「代码不是商品，是公共资源」",
    color: "#dc2626",
  },
  {
    slug: "gpl-2.0",
    name: "GPLv2",
    fullName: "GNU General Public License v2.0",
    binary: [0, 0, 0, 1],
    hex: 1,
    title: "原则性极强的老炮儿",
    personality: "你有底线，但你也知道怎么在现实世界里办事。老派，但不老顽固。",
    description:
      "你选了 GPLv2 因为 v3 太啰嗦了，什么专利条款、反 TiVo 化——累不累啊。你的态度很简单：代码得自由，但不需要写一本宪法来解释什么叫自由。Linus Torvalds 也是这么想的（对，内核还在用 v2）。老哥，稳。",
    catchphrase: "「自由很简单，别搞那么复杂」",
    color: "#ea580c",
  },
  {
    slug: "lgpl-3.0",
    name: "LGPLv3",
    fullName: "GNU Lesser General Public License v3.0",
    binary: [0, 0, 1, 0],
    hex: 2,
    title: "温柔而坚定的自由主义者",
    personality: "你相信自由，但也理解孩子总要出门闯荡。你的 copyleft 像一碗热汤——暖，但不烫嘴。",
    description:
      "你不是原教旨主义者。LGPL 就是你妥协的艺术品——库可以自由链接到闭源项目，但库本身必须保持开源。你就像一个开明家长：给孩子自由，但底线不能丢。你在 Twitter 上关注了 RMS 但也关注了 Linus，你觉得他们都没错。你是一个真正的中间派——这年头，中间派最稀缺。",
    catchphrase: "「自由要坚守，但不是以隔绝世界为代价」",
    color: "#d97706",
  },
  {
    slug: "agpl-3.0",
    name: "AGPLv3",
    fullName: "GNU Affero General Public License v3.0",
    binary: [0, 0, 1, 1],
    hex: 3,
    title: "网络空间的守门人",
    personality: "你比 GPL 还严格——连通过网络使用你的代码都必须开源。你是开源世界的极端天气预警。",
    description:
      "你敏锐地注意到了 GPL 的漏洞：SaaS 公司用了你的代码但不分发，他们就不用开源。这让你睡不着觉。AGPL 弥补了这个漏洞——在网络层面筑起了围墙。你不是坏人，你只是觉得如果 AWS 要用你的代码赚钱，至少得把改动的代码还回来。你跟人辩论的时候会说「自由是有边界的」，然后对方默默改用了 MIT。",
    catchphrase: "「SaaS 不是避风港，代码没有漏洞可钻」",
    color: "#b91c1c",
  },
  {
    slug: "eupl-1.2",
    name: "EUPL 1.2",
    fullName: "European Union Public License 1.2",
    binary: [0, 1, 0, 0],
    hex: 4,
    title: "布鲁塞尔来的外交官",
    personality: "你相信自由软件，但你也相信规则、兼容性和法律文书。你可能是欧盟某委员的表弟。",
    description:
      "你是开源世界的外交官。EUPL 是唯一一个由官方机构（欧盟委员会）维护的 copyleft 许可证，明确兼容 GPL、OSL 等多个主流许可证。你关心的不仅是代码的自由，还有法律体系的互操作性。你在 Twitter 上关注了欧盟 Digital Single Market 的更新。别人聊许可证的时候你说「要考虑生态系统的兼容性」，然后全场沉默。",
    catchphrase: "「自由需要兼容，理念需要桥梁」",
    color: "#1d4ed8",
  },
  {
    slug: "wtfpl",
    name: "WTFPL",
    fullName: "Do What The Fuck You Want To Public License",
    binary: [0, 1, 0, 1],
    hex: 5,
    title: "开源界的 Andrew W.K.",
    personality: "你不在乎许可证。你在乎的是做事。条条框框是给 lawyers 准备的，不是给你的。你的代码哲学就是一首摇滚乐。",
    description:
      "你看到 LICENSE 文件就烦。WTFPL——你想干嘛就干嘛——完美契合你的态度。你觉得「版权所有」是一种 outdated 的概念，就像 fax machine 一样。你写的 README 里可能没有许可证章节，但如果有人问，你会说「do what you want」。你是开源世界里的嬉皮士、朋克、自由战士——你是那种在技术大会上穿皮衣的人。",
    catchphrase: "「Do what the fuck you want to. 我说真的。」",
    color: "#7c3aed",
  },
  {
    slug: "cc0",
    name: "CC0",
    fullName: "Creative Commons Zero v1.0 Universal",
    binary: [0, 1, 1, 0],
    hex: 6,
    title: "知识无国界战士",
    personality: "你认为知识属于全人类。版权制度是历史的一个阶段——你在加速它的终结。",
    description:
      "CC0 不是许可证——它是一份法律声明，说「我不想要任何权利」。你跟别人介绍的时候会热情洋溢地说「知识共享是人类文明的未来」，然后对方默默地打开了 LinkedIn。你不是懒，你是真的有信仰。你在 GitHub 上很活跃，但你的 commit message 永远只有一个词：「updates」。",
    catchphrase: "「知识属于全人类，我的名字真的不重要」",
    color: "#0891b2",
  },
  {
    slug: "unlicense",
    name: "Unlicense",
    fullName: "The Unlicense",
    binary: [0, 1, 1, 1],
    hex: 7,
    title: "无政府主义实干家",
    personality: "你对版权的反感已经到了专门写一个宣言的程度。你的代码就是你的政治声明。",
    description:
      "你比 CC0 更进一步——Unlicense 不仅放弃了所有权利，还包含了 public domain 的承诺和免责声明。你是一个纯粹的、不折不扣的自由人。你反感「我的」「你的」这种所有权概念，就像反感「996 是福报」一样。如果开源有光谱，你在最左边还要再往左走两步。你的代码就是你的旗帜。",
    catchphrase: "「解放应当是彻底的，没有任何附加条款」",
    color: "#0d9488",
  },
  {
    slug: "osl-3.0",
    name: "OSL 3.0",
    fullName: "Open Software License 3.0",
    binary: [1, 0, 0, 0],
    hex: 8,
    title: "开源世界的公司法务",
    personality: "你对开源的法律细节有着学者般的热情——不，比学者还热情，因为学者周末不加班。",
    description:
      "OSL 3.0 是由真正的律师起草的 copyleft 许可证。它明确涵盖了专利授权和终止条款，像一份婚前协议一样滴水不漏。你是个注意细节的人，写 PR 描述比写情书还认真。你的朋友跟你吐槽工作的时候，你也会忍不住说「这个情况你最好写个免责声明」。你是那种会让开源变得 boring 但 safe 的人。",
    catchphrase: "「好的许可证比好的 excuse 更有用」",
    color: "#4338ca",
  },
  {
    slug: "mpl-2.0",
    name: "MPL 2.0",
    fullName: "Mozilla Public License 2.0",
    binary: [1, 0, 0, 1],
    hex: 9,
    title: "鱼和熊掌我都要",
    personality: "你拒绝二选一。你既想让代码自由，又不想阻碍商业。你是矛盾统一体——而且是自洽的那种。",
    description:
      "你是一个务实的理想主义者。MPL 2.0 就是你的写照——修改过的文件必须开源，但可以链接闭源代码。你不想站队，你想解决问题。当别人争论「GPL vs MIT」的时候，你在旁边喝着咖啡想「为什么不能都要？」。Firefox 在用 MPL，Mozilla 在用你这样的人。",
    catchphrase: "「开源和商业不是对手，是队友」",
    color: "#2563eb",
  },
  {
    slug: "zlib",
    name: "zlib",
    fullName: "zlib/libpng License",
    binary: [1, 0, 1, 0],
    hex: 10,
    title: "极简主义教父",
    personality: "超过 50 个字的文件你都不想看。你的代码、你的许可证、你的人生态度——一切从简。",
    description:
      "zlib 许可证可能是所有许可证里最短的——真正的 less is more。你写代码不写多余的注释，不开不必要的会，不在 PR 里闲聊。你的代码库干净到让人嫉妒。你可能是那种用 i3wm 或者 dwm 的人。你不理解为什么有人会用一个 100 行的配置文件。zlib 就是你的精神信条：好的设计是尽可能少的设计。",
    catchphrase: "「All the best things are tiny」",
    color: "#059669",
  },
  {
    slug: "isc",
    name: "ISC",
    fullName: "ISC License",
    binary: [1, 0, 1, 1],
    hex: 11,
    title: "npm 背后的无名英雄",
    personality: "你只管写代码，不爱讲废话。你在 GitHub 上 2000+ stars，但你本人的 Twitter 只有 3 个粉丝。",
    description:
      "ISC 本质上和 MIT 一样，但更短——它砍掉了 MIT 里那句啰嗦的「在以上条件下」。你的代码也是这样：没有废话，只有质量。你不写博客、不做宣传、不设头像。你只是默默地写高质量的包，让几亿人依赖，然后继续写下一个。我们不知道你是谁，但你的代码撑起了半个互联网。致敬。",
    catchphrase: "「Good code speaks for itself. Literally.」",
    color: "#16a34a",
  },
  {
    slug: "bsd-3-clause",
    name: "BSD 3-Clause",
    fullName: "BSD 3-Clause License",
    binary: [1, 1, 0, 0],
    hex: 12,
    title: "品牌保护协会会长",
    personality: "你可以用我的代码，但不能蹭我的名字。分享是美德，但蹭热度不是。",
    description:
      "BSD 3-Clause 比 MIT 多了一条：禁止用作者名义推广衍生品。翻译成人话就是——你可以用我的代码造火箭，但是你不能说「这火箭是 XXX 推荐的」。你是个大度但有底线的人。你愿意分享一切，但不愿意被人当背书。你是那种会借你车给你、但会说「别撞」的人。",
    catchphrase: "「拿代码可以，拿我名字不行」",
    color: "#ca8a04",
  },
  {
    slug: "bsd-2-clause",
    name: "BSD 2-Clause",
    fullName: "BSD 2-Clause License",
    binary: [1, 1, 0, 1],
    hex: 13,
    title: "沉默的大多数",
    personality: "你愿意分享一切，但不想惹麻烦。你的代码是圣诞老人——默默送礼物，不需要回信。",
    description:
      "BSD 2-Clause 就像一个更加简洁的 MIT——保留版权声明和免责条款，其余的不多管。你的态度是：代码我给出来了，你们随便用，烂摊子别找我。你是那个在开源社区里安静地提 PR、不争不吵、review 代码只说「LGTM」的程序员。低调，可靠，像你的代码一样。",
    catchphrase: "「Code is a gift, not an obligation」",
    color: "#a16207",
  },
  {
    slug: "apache-2.0",
    name: "Apache 2.0",
    fullName: "Apache License 2.0",
    binary: [1, 1, 1, 0],
    hex: 14,
    title: "成熟稳重的技术负责人",
    personality: "你做事靠谱、严谨、有章法。你选 Apache 不是因为喜欢——而是因为公司的法务部 review 过了。",
    description:
      "Apache 2.0 是 permissive 许可证中最专业的。它不仅有版权声明，还明确了专利授权，且包含完整免责。你是那种会在 README 里写「Apache 2.0 是开源许可证中最完善的之一」的人。你大概是公司的 tech lead，每次选型的时候你会说「我们评估一下法律风险」。Google 和 Android 都用 Apache 2.0。你的品味已经被 FAANG 认证了。",
    catchphrase: "「Open but not reckless」",
    color: "#b45309",
  },
  {
    slug: "mit",
    name: "MIT",
    fullName: "MIT License",
    binary: [1, 1, 1, 1],
    hex: 15,
    title: "开源第一公民",
    personality: "你不设限，你的代码属于所有人——也正因为如此，它成就了所有人。你是开源世界的空气：无处不在，没人注意，但没你不行。",
    description:
      "MIT 许可证，全宇宙最流行的许可证。简单、宽容、几乎不限制任何使用方式。你选 MIT，意味着你相信代码的最大价值是被人使用——不管是被 FAANG 用来造产品，还是被一个大一新生 fork 了做作业。你不在意别人怎么用你的代码，你在意的是代码有没有在跑。你的务实让人敬佩。npm、React、jQuery、Node.js……这些改变世界的项目都用 MIT。你跟他们站在一起。",
    catchphrase: "「The more you give, the more you become」",
    color: "#65a30d",
  },
];

export function getLicenseByBinary(
  d1: number,
  d2: number,
  d3: number,
  d4: number,
): License {
  const bin: [number, number, number, number] = [
    d1 as 0 | 1,
    d2 as 0 | 1,
    d3 as 0 | 1,
    d4 as 0 | 1,
  ];
  return (
    licenses.find(
      (l) => l.binary[0] === bin[0] && l.binary[1] === bin[1] && l.binary[2] === bin[2] && l.binary[3] === bin[3],
    ) ?? licenses[0]
  );
}

export function getLicenseBySlug(slug: string): License | undefined {
  return licenses.find((l) => l.slug === slug);
}
