import { PostQuery } from "@/../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
}

export default function Blog({ data }: Props) {
  console.log(data.post.heroImage);
  return (
    <article className="prose font-vazir">
      {data.post.heroImage && (
        <Image
          alt="hero"
          width={300}
          height={200}
          src={data.post.heroImage || ""}
        />
      )}
      <TinaMarkdown content={data.post.body} />
    </article>
  );
}
