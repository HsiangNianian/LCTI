import type { Dimension, License, Question } from "@/lib/types";

export const dimensions: Record<string, Dimension> = {
  collaboration: {
    key: "collaboration",
    label: "協調態度",
    labelEn: "Collaboration",
    abbr: "COL",
    left: "孤狼型",
    right: "布道者",
    leftDesc: "自由な継承とオープンソースの継続を重視",
    rightDesc: "オープンな利用と幅広い採用を重視",
  },
  trust: {
    key: "trust",
    label: "信頼モデル",
    labelEn: "Trust",
    abbr: "TRU",
    left: "監査人",
    right: "寄付者",
    leftDesc: "クレジット表示、トレーサビリティ、境界の明示を重視",
    rightDesc: "流通効率と低ハードルでの再利用を重視",
  },
  liability: {
    key: "liability",
    label: "責任の境界",
    labelEn: "Liability",
    abbr: "LIA",
    left: "盾持ち",
    right: "冒険家",
    leftDesc: "免責条項、リスクの隔離、責任の明確化を重視",
    rightDesc: "制約が少なく実践重視のリリース方法を許容",
  },
  propagation: {
    key: "propagation",
    label: "伝播へのこだわり",
    labelEn: "Propagation",
    abbr: "PRO",
    left: "伝道者",
    right: "実用派",
    leftDesc: "改変が継続的に還元され、同じオープン性が保たれることを期待",
    rightDesc: "クローズドソースや商用エコシステムとの自由な混在を許容",
  },
};

export const questions: Question[] = [
  { id: 1, dimension: "collaboration", text: "あなたのコアライブラリがフォークされてクローズドなSaaSに改造されました。フォーク元はどうすべき？", leftAnswer: "改造部分もオープンソースにすべき", rightAnswer: "クローズドでも構わない" },
  { id: 2, dimension: "collaboration", text: "誰かがあなたのプロジェクトを大幅に改造して再公開しました。あなたの希望は？", leftAnswer: "改造をコミュニティに還元してほしい", rightAnswer: "好きにすればいい" },
  { id: 3, dimension: "collaboration", text: "あなたのコードが商用デスクトップソフトに組み込まれました。改造の公開についてどう思う？", leftAnswer: "改造したら公開すべき", rightAnswer: "公開しなくていい" },
  { id: 4, dimension: "collaboration", text: "あなたのプロジェクトはどんな存在でありたい？", leftAnswer: "公共インフラ、自由に受け継がれる", rightAnswer: "汎用ブロック、誰でも使える" },
  { id: 5, dimension: "collaboration", text: "コミュニティの誰かがあなたのプロジェクト基に大規模な二次開発をしました。どうしてほしい？", leftAnswer: "成果をコミュニティに還元してほしい", rightAnswer: "自分で持っていてもいい" },
  { id: 6, dimension: "collaboration", text: "誰かがあなたのコードを使ったが、一切の改変を還元していない。どう思う？", leftAnswer: "多少は還元してほしい", rightAnswer: "使ってくれればそれでいい" },
  { id: 7, dimension: "collaboration", text: "あなたのツールが企業のプライベートシステムに統合されました。あなたの考えは？", leftAnswer: "企業は改造分をオープンソースにすべき", rightAnswer: "内部利用ならオープンにしなくていい" },
  { id: 8, dimension: "collaboration", text: "理想のオープンソースエコシステムはどちらに近い？", leftAnswer: "すべての派生がオープンであり続ける", rightAnswer: "コードが広く使われることが何より大事" },
  { id: 9, dimension: "trust", text: "誰かがあなたのコードを使ったが、READMEにあなたの名前が一切ない。あなたの反応は？", leftAnswer: "せめて名前くらい書いてほしい", rightAnswer: "コードが役に立っていればいい" },
  { id: 10, dimension: "trust", text: "プロジェクトがあちこちに転載されるとき、何が残ってほしい？", leftAnswer: "作者情報は絶対に消さないで", rightAnswer: "みんなが使えればそれでいい" },
  { id: 11, dimension: "trust", text: "誰かがあなたのコードから作者情報をすべて削除したが、コード自体は残している。どんな気持ち？", leftAnswer: "名前を消すのはリスペクトに欠ける", rightAnswer: "コードが使われ続けていればいい" },
  { id: 12, dimension: "trust", text: "どちらの言葉に共感する？", leftAnswer: "クレジット表示はクリエイターへの基本的な敬意", rightAnswer: "ハードルを下げることのほうがクレジットより大事" },
  { id: 13, dimension: "trust", text: "第三者があなたのコードを再配布するとき、元の著作権表示はどうあるべき？", leftAnswer: "必ず一緒に添付すべき", rightAnswer: "あってもなくてもいい" },
  { id: 14, dimension: "trust", text: "あなたのプロジェクトが教材やコースで使われている。どのようにしてほしい？", leftAnswer: "コードの出典を明記してほしい", rightAnswer: "わざわざ明記しなくていい" },
  { id: 15, dimension: "trust", text: "あなたのリポジトリが引用されていて、出典が「インターネットより」とだけ書いてある。どう思う？", leftAnswer: "名前を書くのはそんなに難しい？", rightAnswer: "重要じゃない、使われてればいい" },
  { id: 16, dimension: "trust", text: "著作権保護と流通効率の間で、あなたはどちらを重視する？", leftAnswer: "著作権表示を残す", rightAnswer: "まずは流通の速さを確保する" },
  { id: 17, dimension: "liability", text: "あなたのライブラリが本番環境で使われて事故が起きた。ライセンスには何を期待する？", leftAnswer: "免責条項を明確に書いておく", rightAnswer: "使うなら自己責任" },
  { id: 18, dimension: "liability", text: "「免責文が厳しすぎない？」と聞かれたらどう答える？", leftAnswer: "念には念を、はっきり書かないと不安", rightAnswer: "意図は伝われば十分、堅苦しくなくていい" },
  { id: 19, dimension: "liability", text: "誰かがあなたのコードを誤用して損害が出た。ライセンスで最も強調すべきことは？", leftAnswer: "作者が責任を追及されないこと", rightAnswer: "リスクは各自で負うのが当然" },
  { id: 20, dimension: "liability", text: "どちらの責任のあり方が好み？", leftAnswer: "リスクの境界をはっきり決める", rightAnswer: "コードを使うことにはリスクが伴う、各自の判断" },
  { id: 21, dimension: "liability", text: "「LICENSEの免責文が長すぎる」と言われたらどう返す？", leftAnswer: "長くても安心、説明不足が怖い", rightAnswer: "確かにそこまで書かなくていいかも" },
  { id: 22, dimension: "liability", text: "「ライセンスは短ければ短いほどいい」という意見に対するあなたの立場は？", leftAnswer: "免責は省略できない、短くても書くべき", rightAnswer: "全体として短いほうがいい、免責も同じ" },
  { id: 23, dimension: "liability", text: "あなたのプロジェクトに特許やコンプライアンス上のリスクがある場合、どうしたい？", leftAnswer: "ライセンスに特許条項を明確に書いてほしい", rightAnswer: "複雑にしないでほしい" },
  { id: 24, dimension: "liability", text: "法的なスタイルとして、ライセンスをどのように書きたい？", leftAnswer: "厳密で網羅的な法律文書", rightAnswer: "シンプルでわかりやすい宣言" },
  { id: 25, dimension: "propagation", text: "誰かがあなたのコードを改造した後、どのライセンスで公開すべき？", leftAnswer: "同じオープンライセンスでなければならない", rightAnswer: "何を使ってもいい、自分で決めればいい" },
  { id: 26, dimension: "propagation", text: "あなたのプロジェクトがクローズドな製品に統合された。あなたの気持ちは？", leftAnswer: "クローズドにするのは理念に反する", rightAnswer: "統合されるのは価値がある証拠" },
  { id: 27, dimension: "propagation", text: "改造版がネット上だけで動作していて、配布されていない。どうあるべき？", leftAnswer: "ネットサービスも改造を公開すべき", rightAnswer: "配布しなければ公開しなくていい" },
  { id: 28, dimension: "propagation", text: "「派生作品はオープンであり続けるべき」という主張についてどう思う？", leftAnswer: "確かにオープンであり続けるべき", rightAnswer: "強制する必要はない" },
  { id: 29, dimension: "propagation", text: "オープンソースエコシステムの未来としてどちらを望む？", leftAnswer: "改変が還元され、オープンな連鎖が維持される", rightAnswer: "商用採用に制限がなく、まずは繁栄" },
  { id: 30, dimension: "propagation", text: "あなたのコードが大規模なクローズドシステムにリンクされている。ライセンスに何を望む？", leftAnswer: "リンクの場合もオープンにすべき", rightAnswer: "リンクはクローズドで構わない" },
  { id: 31, dimension: "propagation", text: "「自由の伝染力」と「互換性」の間でどちらを重視する？", leftAnswer: "自由は伝染すべき", rightAnswer: "現実のエコシステムとの互換性のほうが大事" },
  { id: 32, dimension: "propagation", text: "再配布者が同じオープン性を維持すべきかどうかについて、あなたの全体的な考えは？", leftAnswer: "同じ条件を維持すべき", rightAnswer: "柔軟に対応、ケースバイケース" },
];

export const answerOptions = [
  { value: 0, label: "非常に左寄り", description: "左側の立場に強く同意する" },
  { value: 0.25, label: "やや左寄り", description: "全体的に左側に近い" },
  { value: 0.5, label: "どちらでもない", description: "中間に近い" },
  { value: 0.75, label: "やや右寄り", description: "全体的に右側に近い" },
  { value: 1, label: "非常に右寄り", description: "右側の立場に強く同意する" },
] as const;

export const licenses: License[] = [
  { slug: "gpl-3.0", name: "GPLv3", fullName: "GNU General Public License v3.0", binary: [0, 0, 0, 0], hex: 0, title: "コードの共産主義者", personality: "あなたのコードは人民のもの。分配的正義を信じ、私有化を諸悪の根源と考える。", description: "あなたはオープンソース界のハードコア左派。RMSはあなたの精神的指導者。あなたのコードを使う者は誰でも、同じライセンスで派生作品を公開しなければならない——例外なく、逃げ道なし。理念のために採用率を犠牲にする覚悟がある。自由は人気より重要。技術コミュニティで「すべてのPRは公開で議論されるべき」と主張する人。RMSも誇りに思うだろう。", catchphrase: "「コードは商品ではなく、公共資源である」", color: "#dc2626" },
  { slug: "gpl-2.0", name: "GPLv2", fullName: "GNU General Public License v2.0", binary: [0, 0, 0, 1], hex: 1, title: "筋の通った老練家", personality: "信念はあるが、現実社会での立ち回りも知っている。老練だが、頑固ではない。", description: "GPLv2を選んだのは、v3が冗長すぎるから——特許条項やTiVo化防止、面倒くさい。あなたのスタンスは単純だ：コードは自由であるべきだが、自由の定義を説明するために憲法を書く必要はない。Linus Torvaldsも同じ考えだ（そう、カーネルは今でもv2を使っている）。", catchphrase: "「自由はシンプルに、複雑にするな」", color: "#ea580c" },
  { slug: "lgpl-3.0", name: "LGPLv3", fullName: "GNU Lesser General Public License v3.0", binary: [0, 0, 1, 0], hex: 2, title: "優しくも揺るぎない自由主義者", personality: "自由を信じるが、子どもが外の世界に出ていくことも理解している。あなたのコピーレフトは温かいスープ——優しく、でも熱すぎない。", description: "あなたは原理主義者ではない。LGPLはあなたの妥協の産物——ライブラリはクローズドなプロジェクトに自由にリンクできるが、ライブラリ自体はオープンソースであり続ける。あなたは寛大な親のようなもの：子どもに自由を与えるが、譲れない線はある。RMSもLinusもフォローしていて、どちらも間違っていないと思う。真のミドルグラウンド——今の時代、これが一番希少だ。", catchphrase: "「自由は守るべきだが、世界を遮断する代償を払ってはいけない」", color: "#d97706" },
  { slug: "agpl-3.0", name: "AGPLv3", fullName: "GNU Affero General Public License v3.0", binary: [0, 0, 1, 1], hex: 3, title: "ネット空間の門番", personality: "GPLより厳格——ネットワーク越しにあなたのコードを使うだけでもオープンソース化が必要。あなたはオープンソース界の異常気象警報。", description: "あなたはGPLの抜け穴に気づいていた：SaaS企業がコードを配布しない限り、オープンソース化する必要はない。それがあなたを眠れなくした。AGPLはその穴を塞ぐ——ネットワークの壁を築いた。あなたは悪人ではない。ただ、AWSがあなたのコードで儲けるなら、せめて改変したコードは還元すべきだと考えるだけだ。議論のときに「自由には境界がある」と言うと、相手は黙ってMITに乗り換える。", catchphrase: "「SaaSは逃げ場ではない、コードに抜け穴はない」", color: "#b91c1c" },
  { slug: "eupl-1.2", name: "EUPL 1.2", fullName: "European Union Public License 1.2", binary: [0, 1, 0, 0], hex: 4, title: "ブリュッセル出身の外交官", personality: "フリーソフトウェアを信じるが、ルール、互換性、法的文書も信じる。あなたはEU委員の親戚かもしれない。", description: "あなたはオープンソース界の外交官。EUPLは公的機関（欧州委員会）によってメンテナンスされる唯一のコピーレフトライセンスで、GPLやOSLなど複数の主要ライセンスとの互換性を明確にしている。あなたが気にしているのはコードの自由だけでなく、法体系間の相互運用性だ。TwitterでEUのデジタル単一市場のアップデートをフォローしている。「エコシステムの互換性を考慮すべき」と言うと、その場が静まり返る。", catchphrase: "「自由には互換性が必要、理念には橋渡しが必要」", color: "#1d4ed8" },
  { slug: "wtfpl", name: "WTFPL", fullName: "Do What The Fuck You Want To Public License", binary: [0, 1, 0, 1], hex: 5, title: "オープンソース界のAndrew W.K.", personality: "ライセンスなんて気にしない。大事なのはやるかやらないか。枠組みは弁護士のためのもの、あなたのためではない。あなたのコード哲学はロックンロールそのもの。", description: "LICENSEファイルを見るだけで憂鬱になる。WTFPL——やりたいことをやれ——あなたの態度に完璧に合致する。「All Rights Reserved」は時代遅れの概念だと思う、まるでFAXマシンのように。READMEにライセンスの章がないかもしれないが、誰かに聞かれれば「do what you want」と言う。あなたはオープンソース界のヒッピーであり、パンクであり、自由の戦士——技術カンファレンスにレザージャケットで現れる人。", catchphrase: "「Do what the fuck you want to. 本気で。」", color: "#7c3aed" },
  { slug: "cc0", name: "CC0", fullName: "Creative Commons Zero v1.0 Universal", binary: [0, 1, 1, 0], hex: 6, title: "知識に国境なしの戦士", personality: "知識は全人類のものだと考える。著作権制度は歴史のある一局面——あなたはその終焉を加速している。", description: "CC0はライセンスではない——「私は一切の権利を主張しない」という法的宣言だ。誰かに説明するとき、「知識共有は人類文明の未来です」と熱く語り、相手は黙ってLinkedInを開く。あなたは怠け者なのではない、本当に信念を持っているのだ。GitHubでは活発だが、コミットメッセージはいつも一言「updates」だけ。", catchphrase: "「知識は全人類のもの、私の名前は本当に重要ではない」", color: "#0891b2" },
  { slug: "unlicense", name: "Unlicense", fullName: "The Unlicense", binary: [0, 1, 1, 1], hex: 7, title: "アナーキスト実践家", personality: "著作権に対する反感が、わざわざ宣言書を書かせるまでに至っている。あなたのコードはあなたの政治的声明だ。", description: "CC0をさらに超える——Unlicenseはすべての権利を放棄するだけでなく、パブリックドメインの確約と免責条項も含んでいる。あなたは純粋で、徹底した自由人だ。「私のもの」「あなたのもの」という所有権の概念に反感を覚える。「996は幸せ」という言葉に対するのと同じくらい。オープンソースのスペクトラムがあるとすれば、最も左端にいて、さらに左に二歩進む。あなたのコードはあなたの旗だ。", catchphrase: "「解放は徹底的であるべきだ、付帯条件なしに」", color: "#0d9488" },
  { slug: "osl-3.0", name: "OSL 3.0", fullName: "Open Software License 3.0", binary: [1, 0, 0, 0], hex: 8, title: "オープンソース界の企業法務", personality: "オープンソースの法的詳細に対して、学者のような情熱を持っている——いや、学者以上だ、なぜなら学者は週末に残業しないから。", description: "OSL 3.0は本物の弁護士によって起草されたコピーレフトライセンスだ。特許許諾と終了条項を明確にカバーし、婚前契約書のように抜け目がない。あなたは細部にこだわる人間で、PRの説明文をラブレターより真剣に書く。友達が仕事の愚痴を言うときも「それについては免責事項を書いたほうがいい」と言ってしまう。あなたはオープンソースを退屈だけど安全にするタイプだ。", catchphrase: "「良いライセンスは良い言い訳より役に立つ」", color: "#4338ca" },
  { slug: "mpl-2.0", name: "MPL 2.0", fullName: "Mozilla Public License 2.0", binary: [1, 0, 0, 1], hex: 9, title: "二兎を追う者", personality: "二者択一を拒否する。コードの自由も欲しいし、商業を妨げたくもない。あなたは矛盾の塊だが、自己矛盾なく調和している。", description: "あなたは現実的な理想主義者だ。MPL 2.0はあなたの鏡——変更したファイルはオープンソースにしなければならないが、クローズドなコードとリンクすることはできる。あなたは立場を選びたくない、問題を解決したいのだ。「GPL vs MIT」の議論で、あなたはコーヒーを飲みながら「なぜ両方じゃダメなの？」と思う。FirefoxはMPLを使っている。Mozillaはあなたのような人を雇っている。", catchphrase: "「オープンソースとビジネスは敵じゃない、チームメイトだ」", color: "#2563eb" },
  { slug: "zlib", name: "zlib", fullName: "zlib/libpng License", binary: [1, 0, 1, 0], hex: 10, title: "ミニマリズムの教祖", personality: "50文字以上の文書は見たくない。あなたのコード、ライセンス、人生観——すべてはシンプルに。", description: "zlibライセンスはおそらくすべてのライセンスの中で最も短い——まさにless is more。あなたは不必要なコメントは書かない、無駄な会議は開かない、PRで雑談もしない。コードベースは清潔で、人を嫉妬させる。i3wmやdwmを使っているタイプ。なぜ誰かが100行の設定ファイルを使うのか理解できない。zlibはあなたの信条：良い設計とは可能な限り少ない設計である。", catchphrase: "「All the best things are tiny」", color: "#059669" },
  { slug: "isc", name: "ISC", fullName: "ISC License", binary: [1, 0, 1, 1], hex: 11, title: "npmの影の英雄", personality: "コードを書くだけで余計な話はしない。GitHubで2000以上のスターがあるが、Twitterのフォロワーはたった3人。", description: "ISCは本質的にMITと同じだが、より短い——MITの冗長な「上記の条件のもとで」という部分を削っている。あなたのコードも同じ：無駄がなく、質だけがある。ブログは書かない、宣伝もしない、アイコンも設定しない。ただ黙って高品質なパッケージを書き、何億人が依存し、そして次のパッケージを書き続ける。我々はあなたが誰かを知らないが、あなたのコードがインターネットの半分を支えている。敬意を表する。", catchphrase: "「Good code speaks for itself. Literally.」", color: "#16a34a" },
  { slug: "bsd-3-clause", name: "BSD 3-Clause", fullName: "BSD 3-Clause License", binary: [1, 1, 0, 0], hex: 12, title: "ブランド保護協会会長", personality: "コードを使うのは構わないが、名前を利用するな。共有は美徳だが、便乗は違う。", description: "BSD 3-ClauseはMITより一つ多い：作者の名前を使って派生製品を宣伝することを禁止する。平たく言えば——私のコードでロケットを作るのは構わないが、「このロケットはXXXおすすめ」とは言わせない。あなたは寛大だが、譲れない線がある人だ。全てを共有する用意はあるが、自分の名前を無断で使われるのは嫌だ。車を貸してくれるが、「ぶつけるな」と言うタイプ。", catchphrase: "「コードは持っていけ、名前は持っていくな」", color: "#ca8a04" },
  { slug: "bsd-2-clause", name: "BSD 2-Clause", fullName: "BSD 2-Clause License", binary: [1, 1, 0, 1], hex: 13, title: "沈黙の多数派", personality: "全てを共有する用意はあるが、面倒ごとはごめんだ。あなたのコードはサンタクロース——黙ってプレゼントを届け、返事は求めない。", description: "BSD 2-Clauseはより簡潔なMITのようなもの——著作権表示と免責条項を残し、あとは余計なことは言わない。あなたのスタンスは：コードは公開した、好きに使え、後始末は私に任せるな。オープンソースコミュニティで静かにPRを提出し、争わず、レビューでは「LGTM」だけ言うプログラマー。控えめで、信頼できる、あなたのコードのように。", catchphrase: "「Code is a gift, not an obligation」", color: "#a16207" },
  { slug: "apache-2.0", name: "Apache 2.0", fullName: "Apache License 2.0", binary: [1, 1, 1, 0], hex: 14, title: "成熟した技術責任者", personality: "仕事は確実で、慎重で、筋が通っている。Apacheを選んだのは好きだからではなく——会社の法務部がレビュー済みだからだ。", description: "Apache 2.0はパーミッシブライセンスの中で最もプロフェッショナルだ。著作権表示だけでなく、特許許諾も明確にし、完全な免責条項を含む。READMEに「Apache 2.0はオープンソースライセンスの中でも最も充実したものの一つです」と書くタイプ。おそらく会社のテックリードで、技術選定のたびに「法的リスクを評価しましょう」と言う。GoogleとAndroidはApache 2.0を使っている。あなたのセンスはFAANGに認証済みだ。", catchphrase: "「Open but not reckless」", color: "#b45309" },
  { slug: "mit", name: "MIT", fullName: "MIT License", binary: [1, 1, 1, 1], hex: 15, title: "オープンソース第一市民", personality: "制限を設けない、あなたのコードはすべての人のもの——だからこそ、すべての人を成就させる。あなたはオープンソース界の空気だ：どこにでもあり、誰も気に留めないが、あなたなしでは成り立たない。", description: "MITライセンス、全宇宙で最もポピュラーなライセンス。シンプルで、寛容で、ほとんど使用条件を制限しない。MITを選ぶということは、コードの最大の価値は使われることだと信じている——FAANGが製品を作るために使おうが、新入生が宿題のためにフォークしようが関係ない。あなたは誰がどうコードを使うかは気にしない、コードが動いているかどうかを気にする。あなたの実用主義は尊敬に値する。npm、React、jQuery、Node.js——世界を変えたこれらのプロジェクトはすべてMITを使っている。あなたは彼らと共に立っている。", catchphrase: "「The more you give, the more you become」", color: "#65a30d" },
];

export function getLicenseByBinary(d1: number, d2: number, d3: number, d4: number): License {
  const bin: [number, number, number, number] = [d1 as 0 | 1, d2 as 0 | 1, d3 as 0 | 1, d4 as 0 | 1];
  return licenses.find((l) => l.binary[0] === bin[0] && l.binary[1] === bin[1] && l.binary[2] === bin[2] && l.binary[3] === bin[3]) ?? licenses[0];
}

export function getLicenseBySlug(slug: string): License | undefined {
  return licenses.find((l) => l.slug === slug);
}
