import Link from "next/link";
import client from "../../tina/__generated__/client";

const  BlogList = async () => {
  const postsResponse = await client.queries.postConnection();
  const posts = postsResponse.data.postConnection.edges?.map((post) => {
    return { slug: post?.node?._sys.filename };
  });
  return (
    <>
      {posts?.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`}>
          {post.slug}
        </Link>
      ))}
    </>
  );
};
export default BlogList;
