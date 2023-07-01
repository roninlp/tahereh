import { PostQuery } from "@/../tina/__generated__/types";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
  variables: object;
  query: string;
}

export default function Blog({ data }: Props) {
  return (
    <>
      <TinaMarkdown content={data.post.body} />
    </>
  );
}