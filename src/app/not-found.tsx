import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-4 text-center">
      <div className="space-y-4">
        <p className="text-6xl font-bold text-muted-foreground/30">404</p>
        <h1 className="text-2xl font-bold">没有这个许可证</h1>
        <p className="text-muted-foreground">
          你找的结果不存在，也许该重新测一次？
        </p>
        <Link href="/">
          <Button>回到首页</Button>
        </Link>
      </div>
    </main>
  );
}
