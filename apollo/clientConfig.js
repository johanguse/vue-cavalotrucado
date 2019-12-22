import { InMemoryCache } from "apollo-cache-inmemory";
export default function(ctx){
  return {
    httpLinkOptions: {
      uri: 'https://api-cavalotrucado.herokuapp.com/v1/graphql',
      //credentials: 'same-origin'
    },
    cache: new InMemoryCache(),
    wsEndpoint: 'ws://api-cavalotrucado.herokuapp.com/v1/graphql',
  }
}

/*
import { onError } from 'apollo-link-error'

export default function(ctx) {
  const errorLink = onError(({ graphQLErrors, networkError }) => {

  })
  return {
    link: errorLink,

    // required
    httpEndpoint: ctx.app.$env.GRAPHQL_URL,

    httpLinkOptions: {
      credentials: 'same-origin'
    },
  }
}*/
