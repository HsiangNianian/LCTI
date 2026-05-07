import type { Dimension, License, Question } from "@/lib/types";

export const dimensions: Record<string, Dimension> = {
  collaboration: {
    key: "collaboration",
    label: "Collaboration",
    labelEn: "Collaboration",
    abbr: "COL",
    left: "Lone Wolf",
    right: "Evangelist",
    leftDesc: "Prioritizes free dissemination and open-source continuity",
    rightDesc: "Prioritizes open use and broad adoption",
  },
  trust: {
    key: "trust",
    label: "Trust",
    labelEn: "Trust",
    abbr: "TRU",
    left: "Auditor",
    right: "Donor",
    leftDesc: "Cares about attribution, traceability, and boundary clarity",
    rightDesc: "Cares about流通 efficiency and low-friction reuse",
  },
  liability: {
    key: "liability",
    label: "Liability",
    labelEn: "Liability",
    abbr: "LIA",
    left: "Shield Bearer",
    right: "Adventurer",
    leftDesc: "Values disclaimers, risk isolation, and liability boundaries",
    rightDesc: "Accepts low-restriction, practice-oriented publishing",
  },
  propagation: {
    key: "propagation",
    label: "Propagation",
    labelEn: "Propagation",
    abbr: "PRO",
    left: "Missionary",
    right: "Pragmatist",
    leftDesc: "Wants modifications to flow back and keep the same openness",
    rightDesc: "Accepts free mixing with closed-source and commercial ecosystems",
  },
};

export const questions: Question[] = [
  { id: 1, dimension: "collaboration", text: "Your core library was forked and turned into a closed-source SaaS. How should the fork author act?", leftAnswer: "Must open-source the changes", rightAnswer: "Closed-source is fine" },
  { id: 2, dimension: "collaboration", text: "Someone heavily modified your project and republished it. What do you hope they do?", leftAnswer: "Contribute changes back", rightAnswer: "They can keep their changes" },
  { id: 3, dimension: "collaboration", text: "Someone bundles your code into a commercial desktop app. How do you feel about disclosing modifications?", leftAnswer: "Changes must be disclosed", rightAnswer: "No need to disclose" },
  { id: 4, dimension: "collaboration", text: "How would you like your project to be seen?", leftAnswer: "Public infrastructure, freely inherited", rightAnswer: "Universal building blocks for everyone" },
  { id: 5, dimension: "collaboration", text: "The community built a major derivative of your project. What do you hope they do?", leftAnswer: "Give back to the community", rightAnswer: "They can keep it" },
  { id: 6, dimension: "collaboration", text: "Someone uses your code but never contributes anything back. How do you feel?", leftAnswer: "They should give back something", rightAnswer: "Using it is fine, no need to give back" },
  { id: 7, dimension: "collaboration", text: "Your tool is integrated into a company's private system. What would you prefer?", leftAnswer: "The company must open-source their changes", rightAnswer: "Internal use doesn't need open-sourcing" },
  { id: 8, dimension: "collaboration", text: "Your ideal open-source ecosystem looks more like which picture?", leftAnswer: "All derivatives stay open", rightAnswer: "The broader the usage, the better" },
  { id: 9, dimension: "trust", text: "Someone uses your code without mentioning you in the README. Your first reaction?", leftAnswer: "At least credit me by name", rightAnswer: "As long as the code is useful" },
  { id: 10, dimension: "trust", text: "When your project gets shared and reposted everywhere, what matters most to preserve?", leftAnswer: "Original author info must stay", rightAnswer: "As long as people can use it" },
  { id: 11, dimension: "trust", text: "Someone stripped all author info from your code but kept the code itself. How does that feel?", leftAnswer: "Removing names is disrespectful", rightAnswer: "As long as the code is still used" },
  { id: 12, dimension: "trust", text: "Which statement resonates more with you?", leftAnswer: "Attribution is basic respect for creators", rightAnswer: "Lowering barriers matters more than attribution" },
  { id: 13, dimension: "trust", text: "When a third party redistributes your code, should the original notice be included?", leftAnswer: "Must be included", rightAnswer: "Optional" },
  { id: 14, dimension: "trust", text: "Someone uses your project as teaching material or in a course. What do you hope they do?", leftAnswer: "Credit the code source", rightAnswer: "No need to explicitly credit" },
  { id: 15, dimension: "trust", text: "Someone references your repo but only says 'from the internet.' What goes through your mind?", leftAnswer: "Is it that hard to mention my name?", rightAnswer: "Doesn't matter, as long as it's used" },
  { id: 16, dimension: "trust", text: "Between copyright protection and distribution efficiency, which do you lean toward?", leftAnswer: "Keep the copyright notice", rightAnswer: "Prioritize fast distribution" },
  { id: 17, dimension: "liability", text: "Your library caused an incident in a production environment. What should the license do?", leftAnswer: "Make disclaimer条款 crystal clear", rightAnswer: "If you use it, don't come after me" },
  { id: 18, dimension: "liability", text: "Someone asks why your disclaimer is so hardcore. How do you respond?", leftAnswer: "Better safe than sorry, clarity matters", rightAnswer: "The gist is enough, no need to overdo it" },
  { id: 19, dimension: "liability", text: "If someone misuses your code and suffers losses, what should the license emphasize?", leftAnswer: "Protect the author from liability", rightAnswer: "Everyone assumes their own risk" },
  { id: 20, dimension: "liability", text: "Which liability atmosphere do you prefer?", leftAnswer: "Draw clear risk boundaries", rightAnswer: "Using code means accepting risk" },
  { id: 21, dimension: "liability", text: "Someone complains your LICENSE disclaimer is too long. How do you respond?", leftAnswer: "Longer is safer, afraid of ambiguity", rightAnswer: "It really doesn't need to be that long" },
  { id: 22, dimension: "liability", text: "On 'the shorter the license, the better,' what's your stance on disclaimer clauses?", leftAnswer: "Disclaimers are essential, even in a short license", rightAnswer: "Shorter overall is better, disclaimers included" },
  { id: 23, dimension: "liability", text: "Your project involves patent or compliance risks. What do you expect?", leftAnswer: "The license should spell out patent terms", rightAnswer: "Don't overcomplicate it" },
  { id: 24, dimension: "liability", text: "From a legal style perspective, how would you write your license?", leftAnswer: "Thorough, comprehensive legal document", rightAnswer: "Simple, straightforward statement" },
  { id: 25, dimension: "propagation", text: "After someone modifies your code, what license should they use to publish it?", leftAnswer: "Must use the same open-source license", rightAnswer: "They can decide whatever they want" },
  { id: 26, dimension: "propagation", text: "Your project gets integrated into a closed-source product. How do you feel?", leftAnswer: "Closed-source goes against my理念", rightAnswer: "Being integrated means it's valuable" },
  { id: 27, dimension: "propagation", text: "A modified version only runs as a web service without distribution. Should it require open-sourcing?", leftAnswer: "Network services must open-source changes too", rightAnswer: "No distribution means no need to open-source" },
  { id: 28, dimension: "propagation", text: "On the idea that 'derivative works must remain open,' where do you stand?", leftAnswer: "They really should stay open", rightAnswer: "No need to force it" },
  { id: 29, dimension: "propagation", text: "Which direction do you hope the open-source ecosystem moves toward?", leftAnswer: "Changes flow back, keeping the chain open", rightAnswer: "Zero friction for commercial adoption, let it flourish first" },
  { id: 30, dimension: "propagation", text: "Your code gets linked into a large closed-source system. What should the license say?", leftAnswer: "Linking must also be open", rightAnswer: "Linking can be closed-source, no problem" },
  { id: 31, dimension: "propagation", text: "Between 'freedom must be contagious' and 'compatibility,' which matters more?", leftAnswer: "Freedom must be contagious", rightAnswer: "Compatibility with the real ecosystem matters more" },
  { id: 32, dimension: "propagation", text: "On whether secondary distributors must maintain the same level of openness, your overall stance is:", leftAnswer: "Must stay consistent", rightAnswer: "Be flexible, depends on the situation" },
];

export const answerOptions = [
  { value: 0, label: "Strongly leans left", description: "Strongly agrees with the left-side stance" },
  { value: 0.25, label: "Slightly leans left", description: "Overall closer to the left side" },
  { value: 0.5, label: "Neutral", description: "Leaning toward the middle" },
  { value: 0.75, label: "Slightly leans right", description: "Overall closer to the right side" },
  { value: 1, label: "Strongly leans right", description: "Strongly agrees with the right-side stance" },
] as const;

export const licenses: License[] = [
  { slug: "gpl-3.0", name: "GPLv3", fullName: "GNU General Public License v3.0", binary: [0, 0, 0, 0], hex: 0, title: "Code Communist", personality: "Your code belongs to the people. You believe in distributive justice—privatization is the root of all evil.", description: "You are the hardcore leftist of the open-source world. RMS is your spiritual mentor. Anyone who uses your code must release derivative works under the same license—no exceptions, no retreat. You are willing to sacrifice adoption for your ideals because to you, freedom matters more than popularity. You are the one in the tech group insisting that every PR be publicly discussed. RMS would be proud of you. Really.", catchphrase: '"Code is not a commodity; it is a public resource"', color: "#dc2626" },
  { slug: "gpl-2.0", name: "GPLv2", fullName: "GNU General Public License v2.0", binary: [0, 0, 0, 1], hex: 1, title: "Principled Veteran", personality: "You have principles, but you also know how to get things done in the real world. Old school, but not stubborn.", description: "You chose GPLv2 because v3 is too verbose—patent clauses, anti-Tivoization—what a hassle. Your stance is simple: code must be free, but you don't need a constitution to explain what free means. Linus Torvalds feels the same way (yes, the kernel is still on v2). Solid as a rock.", catchphrase: '"Freedom is simple, don\'t overcomplicate it"', color: "#ea580c" },
  { slug: "lgpl-3.0", name: "LGPLv3", fullName: "GNU Lesser General Public License v3.0", binary: [0, 0, 1, 0], hex: 2, title: "Gentle but Firm Liberal", personality: "You believe in freedom, but you also understand that children eventually leave home. Your copyleft is like a warm bowl of soup—comforting, but not scalding.", description: "You are not a fundamentalist. LGPL is your art of compromise—libraries can be freely linked to closed-source projects, but the library itself must stay open. You are like an enlightened parent: give children freedom, but keep the底线. You follow both RMS and Linus on Twitter and think neither is wrong. You are a true centrist—and these days, centrists are the rarest.", catchphrase: '"Freedom must be upheld, but not at the cost of isolation"', color: "#d97706" },
  { slug: "agpl-3.0", name: "AGPLv3", fullName: "GNU Affero General Public License v3.0", binary: [0, 0, 1, 1], hex: 3, title: "Gatekeeper of Cyberspace", personality: "You are stricter than GPL—even using your code over a network requires open-sourcing. You are the extreme weather warning of the open-source world.", description: "You keenly noticed GPL's loophole: SaaS companies use your code without distributing it, so they don't have to open-source. That keeps you up at night. AGPL plugs that hole—building walls at the network level. You are not a bad person. You just think that if AWS is going to make money off your code, they should at least give back their modifications. You argue that 'freedom has boundaries' and then the other person quietly switches to MIT.", catchphrase: '"SaaS is not a safe harbor; code has no loopholes"', color: "#b91c1c" },
  { slug: "eupl-1.2", name: "EUPL 1.2", fullName: "European Union Public License 1.2", binary: [0, 1, 0, 0], hex: 4, title: "Diplomat from Brussels", personality: "You believe in free software, but you also believe in rules, compatibility, and legal documents. You might be a cousin of some EU commissioner.", description: "You are the diplomat of the open-source world. EUPL is the only copyleft license maintained by an official body (the European Commission), with explicit compatibility to GPL, OSL, and other major licenses. You care not just about code freedom, but also about legal interoperability. You follow EU Digital Single Market updates on Twitter. When others talk about licenses, you say 'we need to consider ecosystem compatibility' and the room goes silent.", catchphrase: '"Freedom needs compatibility; ideals need bridges"', color: "#1d4ed8" },
  { slug: "wtfpl", name: "WTFPL", fullName: "Do What The Fuck You Want To Public License", binary: [0, 1, 0, 1], hex: 5, title: "Andrew W.K. of Open Source", personality: "You don't care about licenses. You care about getting things done. Rules and regulations are for lawyers, not for you. Your code philosophy is a rock anthem.", description: "You get annoyed just looking at a LICENSE file. WTFPL—Do What The Fuck You Want To—is a perfect match for your attitude. You think 'all rights reserved' is an outdated concept, like fax machines. Your README might not even have a license section, but if someone asks, you say 'do what you want.' You are the hippie, the punk, the freedom fighter of open source—the one who shows up to tech conferences in a leather jacket.", catchphrase: '"Do what the fuck you want to. I mean it."', color: "#7c3aed" },
  { slug: "cc0", name: "CC0", fullName: "Creative Commons Zero v1.0 Universal", binary: [0, 1, 1, 0], hex: 6, title: "Knowledge Without Borders Warrior", personality: "You believe knowledge belongs to all of humanity. Copyright is a phase in history—and you are加速 its end.", description: "CC0 is not a license—it is a legal statement saying 'I don't want any rights.' When introducing it, you enthusiastically declare 'open knowledge is the future of civilization' while the other person silently opens LinkedIn. You are not lazy—you genuinely have faith. You are active on GitHub, but every single one of your commit messages is just one word: 'updates.'", catchphrase: '"Knowledge belongs to all humanity. My name really doesn\'t matter."', color: "#0891b2" },
  { slug: "unlicense", name: "Unlicense", fullName: "The Unlicense", binary: [0, 1, 1, 1], hex: 7, title: "Anarchist Doer", personality: "Your distaste for copyright has reached the point of writing a manifesto. Your code is your political statement.", description: "You go one step further than CC0—Unlicense not only waives all rights but also includes a public domain dedication and disclaimer. You are a pure, unadulterated free spirit. You resent the concept of 'mine' and 'yours' the way you resent '996 is a blessing.' If open source is a spectrum, you are at the far left end and then take two more steps left. Your code is your flag.", catchphrase: '"Liberation should be absolute, with no附加条款"', color: "#0d9488" },
  { slug: "osl-3.0", name: "OSL 3.0", fullName: "Open Software License 3.0", binary: [1, 0, 0, 0], hex: 8, title: "Corporate Counsel of Open Source", personality: "You have an academic passion for the legal details of open source—no, more than academic, because academics don't work weekends.", description: "OSL 3.0 is a copyleft license drafted by actual lawyers. It explicitly covers patent grants and termination clauses, as watertight as a prenuptial agreement. You are detail-oriented—you write PR descriptions more carefully than love letters. When your friends complain about work, you can't help saying 'you should probably write a disclaimer for this.' You are the kind of person who makes open source boring but safe.", catchphrase: '"A good license is more useful than a good excuse"', color: "#4338ca" },
  { slug: "mpl-2.0", name: "MPL 2.0", fullName: "Mozilla Public License 2.0", binary: [1, 0, 0, 1], hex: 9, title: "Having It Both Ways", personality: "You refuse to choose. You want code to be free without hindering business. You are a contradiction—but a self-consistent one.", description: "You are a pragmatic idealist. MPL 2.0 is your写照—modified files must be open source, but linking to closed source is fine. You don't want to pick a side; you want to solve problems. When others argue 'GPL vs MIT,' you sip your coffee thinking 'why not both?' Firefox uses MPL. Mozilla uses people like you.", catchphrase: '"Open source and business are not rivals; they are teammates"', color: "#2563eb" },
  { slug: "zlib", name: "zlib", fullName: "zlib/libpng License", binary: [1, 0, 1, 0], hex: 10, title: "Minimalist Godfather", personality: "You don't want to read anything over 50 words. Your code, your license, your attitude toward life—everything is minimal.", description: "The zlib license might be the shortest of all licenses—truly less is more. You write code without extra comments, attend unnecessary meetings, or chit-chat in PRs. Your codebase is so clean it makes people jealous. You are probably someone who uses i3wm or dwm. You don't understand why anyone would use a 100-line config file. zlib is your creed: good design is as little design as possible.", catchphrase: '"All the best things are tiny"', color: "#059669" },
  { slug: "isc", name: "ISC", fullName: "ISC License", binary: [1, 0, 1, 1], hex: 11, title: "Unsung Hero Behind npm", personality: "You just write code. No fluff. You have 2000+ stars on GitHub but only 3 followers on Twitter.", description: "ISC is essentially the same as MIT, but shorter—it cuts out the verbose 'in the above conditions' clause from MIT. Your code is the same: no fluff, only quality. You don't write blogs, do marketing, or set an avatar. You just silently write high-quality packages that millions depend on, then move on to the next one. We don't know who you are, but your code holds up half the internet. Salute.", catchphrase: '"Good code speaks for itself. Literally."', color: "#16a34a" },
  { slug: "bsd-3-clause", name: "BSD 3-Clause", fullName: "BSD 3-Clause License", binary: [1, 1, 0, 0], hex: 12, title: "Brand Protection Association President", personality: "You can use my code, but you can't use my name. Sharing is a virtue, but riding on coattails is not.", description: "BSD 3-Clause adds one more clause than MIT: forbidding the use of the author's name to promote derivatives. In plain English—you can build a rocket with my code, but you can't say 'this rocket is endorsed by XXX.' You are generous but have boundaries. You are willing to share everything, but not to be used as a endorsement. You are the type who would lend someone your car, but say 'don't crash it.'", catchphrase: '"Take the code, but not my name"', color: "#ca8a04" },
  { slug: "bsd-2-clause", name: "BSD 2-Clause", fullName: "BSD 2-Clause License", binary: [1, 1, 0, 1], hex: 13, title: "Silent Majority", personality: "You are willing to share everything, but don't want trouble. Your code is Santa Claus—silently giving gifts, no reply needed.", description: "BSD 2-Clause is like a more concise MIT—just retain the copyright notice and disclaimer, nothing more. Your attitude: here's the code, use it freely, don't come to me with the mess. You are the programmer who quietly submits PRs in the open-source community, doesn't argue, and only says 'LGTM' in code reviews. Low-key, reliable, just like your code.", catchphrase: '"Code is a gift, not an obligation"', color: "#a16207" },
  { slug: "apache-2.0", name: "Apache 2.0", fullName: "Apache License 2.0", binary: [1, 1, 1, 0], hex: 14, title: "Mature and Steady Tech Lead", personality: "You are reliable, meticulous, and methodical. You chose Apache 2.0 not because you love it—but because your company's legal team already reviewed it.", description: "Apache 2.0 is the most professional permissive license. It not only covers copyright but also explicitly addresses patent grants and includes a comprehensive disclaimer. You are the type to write 'Apache 2.0 is one of the most well-rounded open-source licenses' in your README. You are probably a tech lead at your company, and every time you make a tech choice, you say 'let's evaluate the legal risks.' Google and Android both use Apache 2.0. Your taste has been certified by FAANG.", catchphrase: '"Open but not reckless"', color: "#b45309" },
  { slug: "mit", name: "MIT", fullName: "MIT License", binary: [1, 1, 1, 1], hex: 15, title: "First Citizen of Open Source", personality: "You impose no limits. Your code belongs to everyone—and that is precisely why it has empowered everyone. You are the air of the open-source world: everywhere, unnoticed, but indispensable.", description: "MIT license—the most popular license in the universe. Simple, permissive, almost no restrictions on usage. Choosing MIT means you believe the greatest value of code is being used—whether by FAANG to build products or by a freshman forking it for homework. You don't care how people use your code; you care that the code is running. Your pragmatism is admirable. npm, React, jQuery, Node.js—projects that changed the world use MIT. You stand with them.", catchphrase: '"The more you give, the more you become"', color: "#65a30d" },
];

export function getLicenseByBinary(d1: number, d2: number, d3: number, d4: number): License {
  const bin: [number, number, number, number] = [d1 as 0 | 1, d2 as 0 | 1, d3 as 0 | 1, d4 as 0 | 1];
  return licenses.find((l) => l.binary[0] === bin[0] && l.binary[1] === bin[1] && l.binary[2] === bin[2] && l.binary[3] === bin[3]) ?? licenses[0];
}

export function getLicenseBySlug(slug: string): License | undefined {
  return licenses.find((l) => l.slug === slug);
}
