"use client";

import { PostQuery } from "@/../tina/__generated__/types";
import { useTina } from "tinacms/dist/react";
import PageServer from "./PageServer";

interface Props {
  data: PostQuery;
  variables: object;
  query: string;
}

export default function PageClient(props: Props) {
  const { data } = useTina(props);

  return (
    <>
      <div className="m-6 inline-block bg-red-100 p-6 uppercase text-slate-900">
        This is rendered on the Client
      </div>
      <PageServer data={data} />
    </>
  );
}
