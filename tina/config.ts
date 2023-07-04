import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";
export default defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? "", // Get this from tina.io
  token: process.env.NEXT_PUBLIC_TINA_TOKEN_ID ?? "", // Get this from tina.io

  admin: {
    auth: {
      onLogin: async ({ token }) => {
        location.href =
          `/api/preview/enter?token=${token.id_token}&slug=` + location;
      },
      onLogout: async () => {
        location.href = `/api/preview/exit?slug=` + location;
      },
    },
  },

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
      },
    ],
  },
});
