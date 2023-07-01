"use client";

import { TinaMarkdown } from "tinacms/dist/rich-text";
import { PostQuery } from "@/../tina/__generated__/types";

export default function PageServer({ data }: { data: PostQuery }) {
  return (
    <div>
      <TinaMarkdown content={data.post.body} />
      <p>{data.post.title}</p>
    </div>
  );
}
