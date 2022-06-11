import callFetch from "./callFetch";

export default async function callQuery <T, V>({
  url,
  query,
  variables,
  auth
}: {
  url: string;
  query: string;
  variables: V;
  auth: string;
}) {
  return await callFetch<T>({
    url,
    auth,
    body: JSON.stringify({
      query,
      variables
    }),
    method: 'POST'
  })
}
