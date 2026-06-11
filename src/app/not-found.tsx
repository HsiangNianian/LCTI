import Link from "next/link";

export default function NotFound() {
  return (
    <html>
      <body className="bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <p className="text-6xl font-black text-neutral-300 dark:text-neutral-700">404</p>
          <h1 className="mt-4 text-2xl font-bold">Page Not Found</h1>
          <div className="mt-6 flex gap-4 text-sm">
            <Link href="/zh" className="underline underline-offset-2 hover:opacity-70">中文</Link>
            <Link href="/en" className="underline underline-offset-2 hover:opacity-70">English</Link>
            <Link href="/ja" className="underline underline-offset-2 hover:opacity-70">日本語</Link>
          </div>
        </main>
      </body>
    </html>
  );
}
