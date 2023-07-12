"use client";

import { PostQuery } from "@/../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import ServerBlog from "./ServerBlog";

interface Props {
  data: PostQuery;
  variables: object;
  query: string;
}

export default function Blog(props: Props) {
  const { data: tinaData } = useTina(props);

  return (
    <>
      <div className="relative">
        <ServerBlog data={tinaData} />
        <div className="sticky bottom-5 m-6 inline-block bg-red-100 p-6 uppercase text-slate-900">
          This is rendered on the Client
        </div>
      </div>
    </>
  );
}
