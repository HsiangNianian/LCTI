# LCTI — License Code Type Indicator

> **What's your soul open source license?** 32 soul-searching questions, using pure algorithmic gradient scoring to match your ideal open source persona.

[![Vercel](https://img.shields.io/badge/deployed_on-Vercel-000?logo=vercel)](https://lcti.hydroroll.team)
![Next.js](https://img.shields.io/badge/Next.js_16-000?logo=next.js)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000?logo=shadcnui)

**English** · [中文](README.zh.md) · [日本語](README.ja.md)

---

## What Is This

LCTI is an **open source license personality test** inspired by MBTI. Through 32 progressive multiple-choice questions, it determines your tendencies across 4 opposing dimensions, ultimately mapping you to one of 16 classic open source licenses.

### 4-Dimension Personality Model

| Dimension      | Abbr | Left (0)                                     | Right (1)                                      |
| -------------- | ---- | -------------------------------------------- | ---------------------------------------------- |
| Collaboration  | COL  | Lone Wolf — Copyleft-leaning                 | Evangelist — Permissive-leaning                |
| Trust          | TRU  | Auditor — Requires explicit attribution      | Donor — No attribution required                |
| Liability      | LIA  | Shield Bearer — Strong disclaimer            | Adventurer — Minimal liability restriction     |
| Propagation    | PRO  | Missionary — Requires same-license sharing   | Pragmatist — Allows closed-source commercial use |

### 32-Question Scoring

- 8 questions per dimension, 32 questions total
- Each question uses 5 gradient options, scored internally as `0 / 0.25 / 0.5 / 0.75 / 1`
- The system calculates the average score for each of the 4 dimensions
- An average score below `0.5` maps to the left personality; `0.5` or above maps to the right personality
- The 4-dimension combination maps to 16 license personalities

### 16 Personality Mapping

| Binary | License      | Badge                                                                                                            | Persona                             |
| ------ | ------------ | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `0000` | GPLv3        | ![GPLv3](https://lcti.hydroroll.team/badge/gpl-3.0.svg)                                                          | Code Communist                      |
| `0001` | GPLv2        | ![GPLv2](https://lcti.hydroroll.team/badge/gpl-2.0.svg)                                                          | Principled Veteran                  |
| `0010` | LGPLv3       | ![LGPLv3](https://lcti.hydroroll.team/badge/lgpl-3.0.svg)                                                        | Gentle but Firm Liberal             |
| `0011` | AGPLv3       | ![AGPLv3](https://lcti.hydroroll.team/badge/agpl-3.0.svg)                                                        | Gatekeeper of Cyberspace            |
| `0100` | EUPL 1.2     | ![EUPL 1.2](https://lcti.hydroroll.team/badge/eupl-1.2.svg)                                                      | Diplomat from Brussels              |
| `0101` | WTFPL        | ![WTFPL](https://lcti.hydroroll.team/badge/wtfpl.svg)                                                            | Andrew W.K. of Open Source          |
| `0110` | CC0          | ![CC0](https://lcti.hydroroll.team/badge/cc0.svg)                                                                | Knowledge Without Borders Warrior   |
| `0111` | Unlicense    | ![Unlicense](https://lcti.hydroroll.team/badge/unlicense.svg)                                                    | Anarchist Doer                      |
| `1000` | OSL 3.0      | ![OSL 3.0](https://lcti.hydroroll.team/badge/osl-3.0.svg)                                                        | Corporate Counsel of Open Source    |
| `1001` | MPL 2.0      | ![MPL 2.0](https://lcti.hydroroll.team/badge/mpl-2.0.svg)                                                        | Having It Both Ways                 |
| `1010` | zlib         | ![zlib](https://lcti.hydroroll.team/badge/zlib.svg)                                                              | Minimalist Godfather                |
| `1011` | ISC          | ![ISC](https://lcti.hydroroll.team/badge/isc.svg)                                                                | Unsung Hero Behind npm              |
| `1100` | BSD 3-Clause | ![BSD 3-Clause](https://lcti.hydroroll.team/badge/bsd-3-clause.svg)                                              | Brand Protection Association President |
| `1101` | BSD 2-Clause | ![BSD 2-Clause](https://lcti.hydroroll.team/badge/bsd-2-clause.svg)                                              | Silent Majority                     |
| `1110` | Apache 2.0   | ![Apache 2.0](https://lcti.hydroroll.team/badge/apache-2.0.svg)                                                  | Mature and Steady Tech Lead         |
| `1111` | MIT          | ![MIT](https://lcti.hydroroll.team/badge/mit.svg)                                                                | First Citizen of Open Source        |

---

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Lint
pnpm lint
```

Visit `http://localhost:3000` to preview.

---

## Deploy

```bash
pnpm add -g vercel
vercel
```

Or import the GitHub repo directly on [Vercel](https://vercel.com) for zero-config deployment.

---

## License

[![MIT](https://img.shields.io/badge/license-MIT-65a30d)](LICENSE)

This project itself uses the MIT license — after all, we're an open source license personality test, not choosing MIT would be a crime)
