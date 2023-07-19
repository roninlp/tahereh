import Image from "next/image";
import Link from "next/link";
import client from "../../tina/__generated__/client";

const BlogList = async () => {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges?.map((post) => {
    return {
      slug: post?.node?._sys.filename,
      image: post?.node?.heroImage,
      title: post?.node?.title,
    };
  });
  return (
    <>
      {posts?.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="group p-4">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              alt={post.title || ""}
              src={post.image || ""}
              width={250}
              height={250}
              className="drop-shadow-hard transition-all duration-300 ease-in-out group-hover:drop-shadow-zero"
            />
            <h4 className="font-vazir text-2xl underline-offset-8 group-hover:underline">
              {post.title}
            </h4>
          </div>
        </Link>
      ))}
    </>
  );
};
export default BlogList;
