import { PostQuery } from "@/../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
}

export default function Blog({ data }: Props) {
  return (
    <article className="prose">
      <TinaMarkdown content={data.post.body} />
    </article>
  );
}
