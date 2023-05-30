import { createClient, groq } from "next-sanity";
import { client } from "./client";

export async function getPosts(): Promise<Post[]> {
  const query = groq`
    *[_type=='post']{
      ...,
      author->,
      categories[]->
    } | order(_createdAt desc)[0..3]
  `;

  return client.fetch(query);
}
