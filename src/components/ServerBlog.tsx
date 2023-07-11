import { PostQuery } from "@/../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
}

export default function Blog({ data }: Props) {
  return (
    <article
      dir="rtl"
      className="flex flex-col items-center justify-center pt-28 font-vazir"
    >
      <div className="my-10">
        {data.post.heroImage && (
          <Image
            alt="hero"
            width={800}
            height={0}
            src={data.post.heroImage || ""}
          />
        )}
      </div>
      <div className="prose max-w-3xl">
        <TinaMarkdown content={data.post.body} />
      </div>
    </article>
  );
}
