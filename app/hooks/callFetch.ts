export default function callFetch<T> ({
  url,
  auth,
  body,
  method = 'GET'
}: {
  url: string;
  auth: string;
  body?: string;
  method?: string;
}): Promise<T> {
  return fetch(url, {
      body,
      headers: {
        Authorization: auth,
        "Content-Type": "application/json",
      },
      method
    }
  ).then((response) => response.json());
}
