"use client";

import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const toggleNavbar = () => {
    if (window.scrollY > 50) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleNavbar);

    return () => {
      window.removeEventListener("scroll", toggleNavbar);
    };
  }, []);

  return (
    <header
      className={clsx(
        "fixed z-10 flex h-28 w-full items-center justify-between border-b-2 border-black bg-white transition-transform duration-300 ease-in-out",
        showNavbar ? "-translate-y-14" : "",
      )}
    >
      <div className="relative h-full w-2/5 border-r-2 border-black text-black">
        <div className="flex h-1/2 items-center justify-center gap-2 py-3 ">
          <Link href="https://virgool.io/@tahere.mahzoon">
            <Image
              className="drop-shadow-sm grayscale transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md hover:grayscale-0"
              src="/virgool.png"
              width={32}
              height={32}
              alt="virgool"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/tahereh-mahzoon/">
            <Image
              className="drop-shadow-sm grayscale transition-all duration-300 hover:-translate-y-1 hover:drop-shadow-md hover:grayscale-0"
              src="/linkedin.png"
              width={32}
              height={32}
              alt="linkedin"
            />
          </Link>
        </div>
        <div
          className={clsx(
            "flex h-1/2 items-center justify-center gap-x-4 py-3 font-vazir text-sm transition-all md:gap-x-8 md:text-lg",
            !showNavbar && "border-t-2 border-black",
          )}
        >
          <Link
            href="/contact"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            تماس با من
          </Link>
          <Link
            href="/portfolio"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="inline-block transition-colors duration-300 hover:text-weirdGray"
          >
            مشاوره
          </Link>
        </div>
      </div>
      <Link
        href="/"
        className={clsx(
          "w-1/5 transition-transform duration-300 ease-in-out",
          showNavbar ? "translate-y-7 md:scale-50 " : "translate-y-0",
        )}
      >
        <Image
          src="/headerTitle.png"
          height={91}
          width={256}
          alt="Tahereh Mahzoon"
          className="mx-auto"
        />
      </Link>
      <div className="h-full w-2/5 border-l-2 border-black text-black">
        <div className="flex h-1/2 items-center justify-center py-3 ">
          search
        </div>
        <div
          className={clsx(
            "flex h-1/2 items-center justify-center gap-x-4 py-3 font-vazir text-sm transition-all md:gap-x-8 md:text-lg",
            !showNavbar && "border-t-2 border-black",
          )}
        >
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
