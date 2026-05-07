import type { License } from "./types";

export const licenses: License[] = [
  {
    slug: "gpl-3.0",
    name: "GPLv3",
    fullName: "GNU General Public License v3.0",
    binary: [0, 0, 0, 0],
    hex: 0,
    title: "代码共产主义者",
    personality: "你是个理想主义者，坚信软件自由是基本权利。你的代码不是商品，而是公共资源。",
    description:
      "你信仰最彻底的软件自由。任何使用你代码的人，都必须以同样的许可证发布衍生作品——没有例外，没有退路。你愿意为了理念牺牲采用率，因为对你来说，自由比流行更重要。RMS 会为你骄傲。",
    catchphrase: "「代码不是商品，是公共资源」",
    color: "#dc2626",
  },
  {
    slug: "gpl-2.0",
    name: "GPLv2",
    fullName: "GNU General Public License v2.0",
    binary: [0, 0, 0, 1],
    hex: 1,
    title: "务实斗士",
    personality: "你坚持 Copyleft 原则，但懂得在现实中灵活变通。你是不可动摇的，但也不教条。",
    description:
      "你和 GPLv3 的人一样相信 copyleft 的力量，但你更喜欢精简。没有冗长的条款，没有「or later」的暧昧——你说什么就是什么。你觉得开源世界里非黑即白的事太少，但你的底线很清楚：我的代码，必须保持自由。",
    catchphrase: "「原则不能妥协，但方式可以灵活」",
    color: "#ea580c",
  },
  {
    slug: "lgpl-3.0",
    name: "LGPLv3",
    fullName: "GNU Lesser General Public License v3.0",
    binary: [0, 0, 1, 0],
    hex: 2,
    title: "实用关怀者",
    personality: "你关心代码自由，但也理解现实世界的商业需求。你愿意退一步，让别人站在你的肩膀上。",
    description:
      "你相信自由的理念，但不是原教旨主义者。LGPL 就是你妥协的艺术品——库可以自由链接到闭源项目，但库本身必须保持开源。你就像一个开明家长：让孩子出去闯，但根不能丢。你平衡了理想与现实。",
    catchphrase: "「自由要坚守，但不是以隔绝世界为代价」",
    color: "#d97706",
  },
  {
    slug: "agpl-3.0",
    name: "AGPLv3",
    fullName: "GNU Affero General Public License v3.0",
    binary: [0, 0, 1, 1],
    hex: 3,
    title: "网络哨兵",
    personality: "你比 GPL 还严格——连通过网络使用你的代码都必须开源。你是开源世界里最坚定的守卫者。",
    description:
      "你注意到了 GPL 的漏洞：如果 SaaS 公司用了你的代码但不分发，他们就不需要开源。你受不了这种钻空子。AGPL 弥补了这一点——你在网络层面筑起了围墙。有些人不喜欢你的强硬，但你知道，真正的自由需要边界来保护。",
    catchphrase: "「SaaS 不是避风港，自由没有漏洞可钻」",
    color: "#b91c1c",
  },
  {
    slug: "eupl-1.2",
    name: "EUPL 1.2",
    fullName: "European Union Public License 1.2",
    binary: [0, 1, 0, 0],
    hex: 4,
    title: "外交自由卫士",
    personality: "你相信自由软件，但你也相信规则和兼容性。你有一种国际化的格局视野。",
    description:
      "你是开源世界的外交官。EUPL 是唯一一个由官方机构（欧盟）维护的 copyleft 许可证，明确承认并兼容 GPL、OSL 等多个主流许可证。你关注的不仅是代码的自由，还有法律体系的互操作性。你谈论开源的时候会用「生态系统」这个词。",
    catchphrase: "「自由需要兼容，理念需要桥梁」",
    color: "#1d4ed8",
  },
  {
    slug: "wtfpl",
    name: "WTFPL",
    fullName: "Do What The Fuck You Want To Public License",
    binary: [0, 1, 0, 1],
    hex: 5,
    title: " anarchist 极客",
    personality: "你不在乎许可证，你在乎的是做事。条条框框是给 lawyers 准备的，不是给你的。",
    description:
      "你看到许可证条款就头疼。WTFPL——你想干嘛就干嘛——完美契合你的态度。你不理解为什么有人要在 README 里塞半页法律条文。你的代码哲学只有一句话：拿去用，别烦我。你是开源世界里的嬉皮士，自由就是你唯一的规则。",
    catchphrase: "「Do what the fuck you want to. 真的，我认真的」",
    color: "#7c3aed",
  },
  {
    slug: "cc0",
    name: "CC0",
    fullName: "Creative Commons Zero v1.0 Universal",
    binary: [0, 1, 1, 0],
    hex: 6,
    title: "知识共享布道者",
    personality: "你认为知识属于全人类。版权制度只是历史的一个阶段，而你在加速它的终结。",
    description:
      "CC0 是最接近「放弃所有权利」的法律工具。你用它来表明一个立场：知识不应该有主人。你不是懒——你在 GitHub 上也很活跃——但你认为署名要求也是不必要的负担。如果知识能帮助到任何人，那就够了。你的名字不重要，重要的是想法在传播。",
    catchphrase: "「知识属于全人类，我的名字不重要」",
    color: "#0891b2",
  },
  {
    slug: "unlicense",
    name: "Unlicense",
    fullName: "The Unlicense",
    binary: [0, 1, 1, 1],
    hex: 7,
    title: "彻底解放者",
    personality: "你对公共领域的信念如此坚定，以至于你专门用一个许可证来宣示它。",
    description:
      "你比 CC0 更进一步——Unlicense 不仅放弃了权利，还包含了来自公共领域的承诺和免责声明。你是一个纯粹主义者：如果你认为知识应该自由，那就彻底自由，不带任何附加条件。你对版权制度有着一种哲学上的反感，你的代码就是你的政治宣言。",
    catchphrase: "「解放应当是彻底的，不附带任何条件」",
    color: "#0d9488",
  },
  {
    slug: "osl-3.0",
    name: "OSL 3.0",
    fullName: "Open Software License 3.0",
    binary: [1, 0, 0, 0],
    hex: 8,
    title: "开源法学家",
    personality: "你对开源的法律细节有着学者般的热情。细节决定成败，条款决定命运。",
    description:
      "OSL 3.0 是由律师起草的 copyleft 许可证，但它和 GPL 不同——它明确涵盖了专利授权和终止条款。你是个细心的人，喜欢把事情写清楚。你不知道为什么有人会用「随便」当许可证。你的代码附带的不仅是指令，还有合同级别的法律保护。",
    catchphrase: "「好的许可证就是一个好的契约」",
    color: "#4338ca",
  },
  {
    slug: "mpl-2.0",
    name: "MPL 2.0",
    fullName: "Mozilla Public License 2.0",
    binary: [1, 0, 0, 1],
    hex: 9,
    title: "务实混搭者",
    personality: "你相信平衡的艺术——既保护开源部分，又允许商业使用。你是个在灰色地带游刃有余的人。",
    description:
      "你想两全其美：既让代码保持开源，又允许别人用它赚钱。MPL 2.0 就是你的武器——文件级别的 copyleft：修改过的文件必须开源，但可以链接闭源代码。你是个务实的人，不喜欢站队，你喜欢让事情变得可能。Firefox 就是用这个许可证，这很酷。",
    catchphrase: "「开源和商业不是对立面，是合作伙伴」",
    color: "#2563eb",
  },
  {
    slug: "zlib",
    name: "zlib",
    fullName: "zlib/libpng License",
    binary: [1, 0, 1, 0],
    hex: 10,
    title: "极简主义者",
    personality: "你是少即是多的信徒。你的代码、你的许可证、你的人生态度都追求精简。",
    description:
      "zlib 许可证大概是所有许可证里最短的之一——但它是有效的。你崇尚简洁，不写多余的注释，不用多余的类型，不开不必要的会。你的代码让人赏心悦目，不是因为它花哨，而是因为它干净。zlib 的态度就是你的态度：把事情做简单，然后让别人轻松地用起来。",
    catchphrase: "「好的设计就是尽可能少的 design」",
    color: "#059669",
  },
  {
    slug: "isc",
    name: "ISC",
    fullName: "ISC License",
    binary: [1, 0, 1, 1],
    hex: 11,
    title: "沉默贡献者",
    personality: "你只管写代码，不爱讲废话。你觉得最好的开源就是让别人甚至注意不到许可证的存在。",
    description:
      "ISC 本质上和 MIT 差不多，但更短——它删掉了 MIT 里那句「在以上条件下……」的啰嗦话。你大概就是这种人：不写博客、不做宣传、不搞社交媒体。你只是默默地写一些高质量的包，让几万人依赖，然后深藏功与名。npm 生态就是建立在你这样的人之上的。",
    catchphrase: "「好代码自己会说话」",
    color: "#16a34a",
  },
  {
    slug: "bsd-3-clause",
    name: "BSD 3-Clause",
    fullName: "BSD 3-Clause License",
    binary: [1, 1, 0, 0],
    hex: 12,
    title: "品牌守护者",
    personality: "你允许别人用你的代码，但你不允许别人借你的名头招摇撞骗。知识产权对你很重要。",
    description:
      "BSD 3-Clause 比 MIT 多了「禁止用作者名义推广衍生品」的条款。这意味着你很大方——随便用你的代码，但不准打着你的旗号。你相信声誉是需要保护的，不管是一段代码还是一篇文章。你是那种会让别人用你的成果、但也要别人尊重你署名权的人。",
    catchphrase: "「你可以用我的代码，但不能消费我的名字」",
    color: "#ca8a04",
  },
  {
    slug: "bsd-2-clause",
    name: "BSD 2-Clause",
    fullName: "BSD 2-Clause License",
    binary: [1, 1, 0, 1],
    hex: 13,
    title: "安静奉献者",
    personality: "你愿意分享一切，但不想惹麻烦。你的代码是一种礼物，而不是一种主张。",
    description:
      "BSD 2-Clause 就像一个更加简洁的 MIT——保留版权声明和免责条款，其余的不多管。你用这种许可证表明态度：代码是礼物不是义务。你不在意别人怎么用，但也不想为他们的麻烦负责。你是那个在社区里安静提交 PR、不争不吵的开发者。低调，但可靠。",
    catchphrase: "「我贡献代码，仅此而已」",
    color: "#a16207",
  },
  {
    slug: "apache-2.0",
    name: "Apache 2.0",
    fullName: "Apache License 2.0",
    binary: [1, 1, 1, 0],
    hex: 14,
    title: "法务严谨者",
    personality: "你做事靠谱、严谨、有章法。你希望别人用你的代码，但希望他们知道法律边界在哪里。",
    description:
      "Apache 2.0 是 permissive 许可证中最全面的。它不仅允许使用，还明确授予了专利许可，且包含了完整免责条款。你大概是公司里的技术负责人——你清楚代码不仅是技术问题，也是法律问题。你的选择透露着一种成熟：开放但不马虎，自由但不混乱。Google 和 Android 都用这个，你的品味不错。",
    catchphrase: "「开放的前提是清晰的规则」",
    color: "#b45309",
  },
  {
    slug: "mit",
    name: "MIT",
    fullName: "MIT License",
    binary: [1, 1, 1, 1],
    hex: 15,
    title: "终极自由主义者",
    personality: "你不给任何人设限，也不给自己设限。你的代码属于所有人——也正因为如此，它属于你。",
    description:
      "MIT 是开源世界的第一公民。简单、宽容、几乎不对使用者做任何限制。你选择 MIT，意味着你相信代码的最大价值在于被使用——不管是被创业公司、FAANG 还是爱好者的个人项目。你不在意别人怎么用你的代码，你只在意它有没有用。你是务实派中的务实派。",
    catchphrase: "「代码的价值在于被使用，别无其他」",
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
