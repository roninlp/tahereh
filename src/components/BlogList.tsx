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
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          <Image
            alt={post.title || ""}
            src={post.image || ""}
            width={250}
            height={250}
          />
          <h4 className="font-vazir text-3xl">{post.title}</h4>
        </Link>
      ))}
    </>
  );
};
export default BlogList;
