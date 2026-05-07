import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-28 text-center">
        <div className="max-w-xl mx-auto space-y-10">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-1.5 rounded-full border bg-muted/50 px-3 py-1 text-xs text-muted-foreground">
              LCTI — License Type Indicator
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
              你的灵魂
              <br />
              开源许可证是什么？
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-md mx-auto leading-relaxed">
              32 道渐进式灵魂拷问，<span className="font-semibold text-foreground">零 AI、零玄学</span>，
              <br />
              用 0 到 1 的倾向分值，纯算法归纳你的 16 型开源人格。
              <br />
              测完还能拿去发朋友圈气死你同事(bushi)
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Link href="/test">
              <Button
                size="lg"
                className="text-base px-10 py-7 h-auto rounded-xl font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
              >
                开始测试 →
              </Button>
            </Link>
            <p className="text-xs text-muted-foreground">
              全程约 2 分钟 · 32 道梯度题
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 max-w-sm mx-auto">
            {[
              { en: "COL·Collaboration", left: "独行侠", right: "布道者", cn: "协作态度" },
              { en: "TRU·Trust",         left: "审计员", right: "乐捐者", cn: "信任模式" },
              { en: "LIA·Liability",     left: "盾牌手", right: "冒险家", cn: "责任边界" },
              { en: "PRO·Propagation",   left: "传教士", right: "实用派", cn: "传播执念" },
            ].map(({ en, left, right, cn }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 rounded-lg border px-3 py-2"
              >
                <span className="text-[10px] font-semibold text-muted-foreground tracking-tight">{en}</span>
                <div className="flex items-center justify-between gap-1 text-xs w-full">
                  <span>{left}</span>
                  <span className="text-muted-foreground">↔</span>
                  <span>{right}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t px-4 py-6 text-center text-xs text-muted-foreground space-y-1">
        <p>IANAL — 本测试结果不构成法律建议，仅供娱乐</p>
        <p>
          LCTI &copy;{" "}
          <a
            href="https://github.com/HsiangNianian"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            简律纯
          </a>
          {" · "}
          <a
            href="https://github.com/HsiangNianian/LCTI"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground transition-colors"
          >
            Github
          </a>
        </p>
      </footer>
    </main>
  );
}
