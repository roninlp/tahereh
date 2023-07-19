import { draftMode } from "next/headers";
import client from "../../../../tina/__generated__/client";
import ClientBlog from "./ClientBlog";
import ServerBlog from "./ServerBlog";

export default async function Page({
  params: { filename },
}: {
  params: { filename: string };
}) {
  const res = await client.queries.post({
    relativePath: `${filename}.md`,
  });
  const { isEnabled } = draftMode();
  // console.log(isEnabled);

  return (
    <>{isEnabled ? <ClientBlog {...res} /> : <ServerBlog data={res.data} />}</>
  );
}
