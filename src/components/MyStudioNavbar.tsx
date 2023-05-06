import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const MyStudioNavbar = (props: any) => {
  return (
    <div>
      <div className="flex items-center justify-between bg-black p-5 ">
        <Link
          href="/"
          className="group flex items-center rounded-lg px-4 py-2 text-white hover:bg-slate-400 hover:text-black"
        >
          <ArrowUturnLeftIcon className="h6 mr-2 w-6 text-white group-hover:text-black" />
          Go To Website
        </Link>
      </div>
      <>{props.renderDefault(props)}</>
    </div>
  );
};

export default MyStudioNavbar;
