import {json} from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { LoaderData } from "~/types";
import { getPinnedRepos } from "~/models/projects";

export const loader: LoaderFunction = async () => {
  return json({
    data: await getPinnedRepos(),
  });
};

export default function Project() {
  const { data } = useLoaderData<LoaderData<typeof getPinnedRepos>>();

  return (
    <main>
      <h1>Projects</h1>

      <ul>
        {data.map((repo) => (
          <li key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              className="text-blue-600 underline" rel="noreferrer"
            >
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
