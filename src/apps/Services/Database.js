import {InMemoryCache, ApolloClient} from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://chief-grouper-86.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "nXbxKHk3rRDp8tirnDrhcn9pSUEryQ5pWd8lRuLKxxaKeWIQG3fk6xLBbRsF1N7S",
  },
});
