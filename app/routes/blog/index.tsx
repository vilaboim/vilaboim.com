import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import type { LoaderData } from "~/types";
import { getPosts } from "~/models/blog.server";

export const loader: LoaderFunction = async () => {
  return json({
    data: await getPosts(),
  });
};

export default function Posts() {
  const { data } = useLoaderData<LoaderData<typeof getPosts>>();

  return (
    <main>
      <h1>Blog</h1>

      <ul>
        {data.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
