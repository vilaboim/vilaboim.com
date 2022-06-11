interface PostResponse {
  slug: string;
  title: string;
  tags: string[];
  body_markdown: string;
};

interface Post extends Omit<PostResponse, 'tags'> {
  tags: string;
};

type PostsResponse = PostResponse[]

function parseFetch<T> (url: string): Promise<T> {
  return fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.DEV_TO_API_TOKEN}`,
      },
    }
  ).then((response) => response.json());
}

export async function getPosts() {
   return await parseFetch<PostsResponse>(
    `${process.env.DEV_TO_URL}?username=vilaboim`
  ).then((response) => response.map((result) => ({
      slug: result.slug,
      title: result.title,
      tags: result.tags,
      body: result.body_markdown
    })));
}

export async function getPost(slug: string): Promise<Post> {
   return await parseFetch<PostResponse>(
    `${process.env.DEV_TO_URL}/vilaboim/${slug}`
  ).then((response) => ({
    ...response,
    tags: response.tags.join(' '),
  }));
}
