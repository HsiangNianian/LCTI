import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const dimensions = [
  { label: "协作态度", left: "独行侠", right: "布道者" },
  { label: "信任模式", left: "审计员", right: "乐捐者" },
  { label: "责任边界", left: "盾牌手", right: "冒险家" },
  { label: "传播执念", left: "传教士", right: "实用派" },
];

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-16 md:py-24 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              你的灵魂开源许可证是什么？
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto">
              4 道题，4 个维度，精准定位你的人格与最契合的开源许可证。
              <br />
              没有 AI，没有玄学——只有代码世界的性格真相。
            </p>
          </div>

          <Link href="/test">
            <Button size="lg" className="text-lg px-8 py-6 h-auto">
              开始测试
            </Button>
          </Link>

          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-sm">四维人格模型</CardTitle>
              <CardDescription>
                每个问题对应一个维度，你的选择将决定最终结果
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {dimensions.map((d) => (
                  <div
                    key={d.label}
                    className="flex items-center justify-between gap-2 rounded-lg border p-3"
                  >
                    <span className="font-medium">{d.left}</span>
                    <span className="text-xs text-muted-foreground">
                      {d.label}
                    </span>
                    <span className="font-medium">{d.right}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t py-6 text-center text-sm text-muted-foreground space-y-1">
        <p>灵感来自 MBTI 人格模型 · 纯算法结果 · 仅供娱乐</p>
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
