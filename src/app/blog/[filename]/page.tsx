import client from "../../../../tina/__generated__/client";
import ClientBlog from "@/components/ClientBlog";
import ServerBlog from "@/components/ServerBlog";
import { draftMode } from "next/headers";

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

  return <>{isEnabled ? <ClientBlog {...res} /> : <ServerBlog {...res} />}</>;
}
