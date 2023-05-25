import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "طاهره محزون",
};

export default function Home() {
  return (
    <>
      <main className=" flex h-screen bg-white bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <div className="mx-20 my-8 flex h-full w-full flex-col-reverse items-center justify-center gap-12 md:flex md:flex-row md:justify-around">
          <div className="relative flex items-center justify-center">
            <div className="absolute left-1/2 h-full w-[2px] border border-black"></div>
            <div className="my-8 flex w-full flex-col gap-y-5">
              <Button size="lg">
                <Link href="/" className="text-lg font-bold md:text-2xl">
                  !بلاگت رو بساز
                </Link>
              </Button>
              <Button size="lg">
                <Link href="/" className="text-lg font-bold md:text-2xl">
                  !با کارهای من آشنا شو
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:items-end md:gap-8">
            <h1 className="text-center font-vazir text-5xl font-bold leading-relaxed md:text-right md:text-7xl">
              نویسنده و <br />
              استراتژیست محتوا
            </h1>
            <p className="pr-8 font-paeez text-3xl md:text-5xl">
              !خود واقعیت رو نشونء بده
            </p>
          </div>
        </div>
      </main>
      <section className="pb-24">
        <div className="flex flex-col items-center justify-center gap-6 bg-darkGreen py-8">
          <h3 className="font-vazir text-2xl text-white">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </h3>
          <div>
            <Button size="lg" className="">
              <p className="font-vazir text-2xl ">لورم ایپسوم</p>
            </Button>
          </div>
        </div>
        <div className="mx-8 flex flex-col items-center justify-center gap-6 pt-14 font-vazir  md:flex md:flex-row-reverse">
          <div className="relative mx-6 w-64 md:w-fit">
            <h4 className="absolute right-0 top-0 -rotate-12 font-paeez text-6xl md:text-9xl">
              !سلام
            </h4>
            <Image src="/picture.png" width={400} height={400} alt="picture" />
          </div>
          <div className="w-full text-center md:w-2/3 md:max-w-3xl md:pr-8 md:text-right">
            <p className="text-2xl font-bold md:text-3xl">
              جایی که استراتژی و داستان‌سرایی به هم می‌رسند
            </p>
            <ul className="pt-6">
              <li>
                <div className="flex flex-col items-center gap-4 md:flex-row-reverse">
                  <div className="grid aspect-square h-16 w-16 place-content-center rounded-full border-2 border-black">
                    <p className="text-5xl">۱</p>
                  </div>
                  لورم ایپسوم متن ساختگی با تولید سادگ ی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                  تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف ب هبود ابزارهای
                  کاربردی می باشد.
                </div>
              </li>
              <li>
                <div className="flex flex-col items-center gap-4 pt-6 md:flex-row-reverse">
                  <div className="grid aspect-square h-16 w-16 place-content-center rounded-full border-2 border-black">
                    <p className="text-5xl">2</p>
                  </div>
                  لورم ایپسوم متن ساختگی با ت ولید سادگی نامفهوم از صنعت چاپ، و
                  با استفاده از طراحان گرافیک است، مورد نیاز، و کاربردهای متنوع
                  با هدف بهبود ابزارهای کاربردی می باشد.
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center gap-8 bg-mid-pattern py-8 font-vazir text-white">
        <h2 dir="rtl" className="z-10 text-center text-7xl font-bold">
          <span className="relative inline-block before:absolute before:-inset-2 before:top-6 before:block before:-skew-y-3 before:bg-darkGreen">
            <span className="relative">
              فلسفه
              {/* <div className="absolute bottom-2 right-0 -z-10 h-1/2 w-full bg-darkGreen"></div> */}
            </span>
          </span>{" "}
          من
        </h2>
        <div>
          <ul className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-20">
            <li className="flex flex-row-reverse items-center gap-4 border-b-4 border-white text-center text-2xl">
              <span className="text-8xl underline underline-offset-8">۱</span>
              !اول استراتژی
              <br />، بعد متن
            </li>
            <li className="flex flex-row-reverse items-center gap-4 border-b-4 border-white text-center text-2xl">
              <span className="text-8xl underline underline-offset-8">۳</span>
              تست قبل از
              <br />
              !هر چیز
            </li>
            <li>
              <li className="flex flex-row-reverse items-center gap-4 border-b-4 border-white text-center text-2xl">
                <span className="text-8xl underline underline-offset-8">۲</span>
                از آزمایش کردن
                <br />
                !نترس
              </li>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
