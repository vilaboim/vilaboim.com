export interface PinnedReposResponse {
  data: {
    user: {
      pinnedItems: {
        edges: {
          node: {
            name: string;
            url: string;
          }
        }[]
      }
    }
  }
}

export interface PinnedReposVariables {
  login: string;
}
