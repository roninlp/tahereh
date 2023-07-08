import { isUserAuthorized } from "@tinacms/auth";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = {
    token: request.nextUrl.searchParams.get("token"),
    slug: request.nextUrl.searchParams.get("slug"),
  };
  const slug = searchParams.slug;
  const isLocal = process.env.NODE_ENV == "development";

  const token = searchParams.token;

  const isAuthorizedRes = await isUserAuthorized({
    token: `Bearer ${token}`,
    clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "",
  });

  if (!isAuthorizedRes && !isLocal) {
    return new Response(null, { status: 401 });
  }
  draftMode().enable();
  return new Response(null, {
    status: 307,
    headers: {
      location: slug ?? "",
    },
  });
}
