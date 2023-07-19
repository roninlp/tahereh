import { PostQuery } from "@/../tina/__generated__/types";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface Props {
  data: PostQuery;
}

interface ImgProps {
  url: string;
  caption?: string;
  alt?: string;
}

function img(props?: ImgProps) {
  return (
    <>
      <img
        className="mx-auto rounded-2xl"
        src={props?.url}
        alt={props?.alt || ""}
      />
    </>
  );
}

export default function Blog({ data }: Props) {
  const { title, body, categories, heroImage } = data.post;
  return (
    <article
      dir="rtl"
      className="flex flex-col items-center justify-center pt-40 font-vazir"
    >
      <h1 className="pb-4 text-4xl font-bold">{title}</h1>
      <div className="flex w-8/12 items-center justify-between">
        <p className="font-semibold text-weirdGray">نویسنده: طاهره محزون</p>
        <div className="flex items-center gap-2">
          <p>دسته بندی: </p>
          <div className="flex items-center justify-end gap-4">
            {categories?.map((item) => (
              <p
                key={item?.tag?.id}
                className="rounded-md bg-blueGreen px-2 py-1 text-white"
              >
                #{item?.tag?.title}
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="my-8">
        {heroImage && (
          <Image
            className="rounded-2xl"
            alt="hero"
            width={800}
            height={0}
            src={heroImage}
          />
        )}
      </div>
      <div className="prose max-w-3xl">
        <TinaMarkdown components={{ img }} content={body} />
      </div>
    </article>
  );
}
