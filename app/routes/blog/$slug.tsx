import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";

import { getPost } from "~/models/blog.server";

type LoaderData = {
  post: Awaited<ReturnType<typeof getPost>>;
  html: string;
};


export const loader = async ({ params }: { params: { slug: string }}) => {
    const post = await getPost(params.slug);

  const html = marked(post.body_markdown);

  return json<LoaderData>({
    post,
    html
  });
};

export default function PostSlug() {
  const { post,html } = useLoaderData();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {post.title}
      </h1>
      <h2 className="my-6 border-b-2 text-center text-3xl">
        {post.tags}
      </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
