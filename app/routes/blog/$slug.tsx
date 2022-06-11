import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import type { LoaderData } from "~/types";
import { getPost } from "~/models/blog.server";

interface PostLoaderData extends LoaderData<typeof getPost> {
  html: string;
};

export const loader: LoaderFunction = async ({ params }) => {
  const data = await getPost(params.slug as string);
  const html = marked(data.body_markdown);

  return json({
    data,
    html
  });
};

export default function PostSlug() {
  const { data, html } = useLoaderData<PostLoaderData>();

  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">
        {data.title}
      </h1>
      <h2 className="my-6 border-b-2 text-center text-3xl">
        {data.tags}
      </h2>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
