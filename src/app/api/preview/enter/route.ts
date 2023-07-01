import { isUserAuthorized } from "@tinacms/auth";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get("slug");

  if (process.env.NODE_ENV === "development") {
    console.log("dev");
    draftMode().enable();
  } else {
    const token = searchParams.get("token");
    if (!process.env.NEXT_PUBLIC_TINA_CLIENT_ID) {
      return;
    }
    const isAuthorizedRes = await isUserAuthorized({
      token: `Bearer ${token}`,
      clientID: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    });

    if (isAuthorizedRes) {
      draftMode().enable();
      if (slug) {
        return redirect(slug);
      }
    }
  }
}
