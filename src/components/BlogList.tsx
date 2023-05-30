import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post._id} className="group flex flex-col">
          <div className="relative h-80 w-full drop-shadow-xl transition-transform duration-200 ease-out group-hover:scale-105">
            <Image
              fill
              className="object-cover object-left lg:object-center"
              src={urlForImage(post.mainImage).url()}
              alt={post.author.name}
            />
          </div>
          <h2>{post.title}</h2>
          <p>
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      ))}
    </>
  );
};
export default BlogList;
