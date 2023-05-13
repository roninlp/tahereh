import Image from "next/image";
import Link from "next/link";
import headerTitle from "../../public/Header Title.png";

const Header = () => {
  return (
    <header className="absolute flex w-full items-center justify-between border-b-2 border-black bg-white">
      <div className="w-2/5 border-r-2 border-black text-black">
        <div className="flex justify-center py-3 ">instagram</div>
        <div className="flex justify-center gap-x-20 border-t-2 border-black py-3 font-vazir">
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            تماس با من
          </Link>
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            نمونه کار
          </Link>
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            مشاوره
          </Link>
        </div>
      </div>
      <Link href="/" className="w-1/5">
        <Image
          src={headerTitle}
          height={91}
          width={256}
          alt="Tahereh Mahzoon"
          className="mx-auto"
        />
      </Link>
      <div className="h-full w-2/5 border-l-2 border-black text-black">
        <div className="flex justify-center py-3 ">search</div>
        <div className="flex justify-center gap-x-20 border-t-2 border-black py-3 font-vazir">
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            درباره من
          </Link>
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            وبلاگ
          </Link>
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            صفحه اول
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
