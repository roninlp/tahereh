import { Button } from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-white pt-28">
      <div className="mx-20 w-full flex-col items-center justify-center md:flex md:flex-row md:justify-around">
        <div className="relative flex h-full items-center justify-center">
          <div className="absolute left-1/2 h-52 w-[2px] border border-black"></div>
          <div className="flex w-full flex-col gap-y-5">
            <Button size="lg">
              <Link href="/">!بلاگت رو بساز</Link>
            </Button>
            <Button size="lg">
              <Link href="/">!با کارهای من آشنا شو</Link>
            </Button>
          </div>
        </div>
        <h1 className="text-right font-vazir text-7xl font-bold leading-relaxed">
          نویسنده و <br />
          استراتژیست محتوا
        </h1>
      </div>
    </main>
  );
}
