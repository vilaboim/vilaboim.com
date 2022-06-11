import { callQuery } from '~/hooks'
import { pinnedItems } from "./queries";
import type { PinnedReposResponse, PinnedReposVariables } from './types';

function parseResponse (response: PinnedReposResponse) {
    return response?.data?.user?.pinnedItems?.edges?.map((result) => ({
      name: result.node.name,
      url: result.node.url,
    }))
}

export function getPinnedRepos() {
  return callQuery<PinnedReposResponse, PinnedReposVariables>({
    url: `${process.env.GITHUB_URL}`,
    query: pinnedItems,
    variables: {
      login: 'vilaboim'
    },
    auth: `token ${process.env.GITHUB_API_TOKEN}`
  })
  .then(parseResponse)
}
