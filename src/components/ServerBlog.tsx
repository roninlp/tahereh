import { PostQuery } from "@/../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
}

export default function Blog({ data }: Props) {
  return (
    <article className="prose font-vazir">
      <Image
        alt="hero"
        width={300}
        height={200}
        src={`/uploads/${data.post.heroImage}`}
      />
      <TinaMarkdown content={data.post.body} />
    </article>
  );
}
