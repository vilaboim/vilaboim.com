import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { getPosts } from "~/models/blog.server";

type LoaderData = {
  posts: Awaited<ReturnType<typeof getPosts>>;
};

export const loader = async () => {
  return json<LoaderData>({
    posts: await getPosts(),
  });
};

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Outlet />
    </>
  );
}
