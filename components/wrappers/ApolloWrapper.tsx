import { ApolloClient, ApolloProvider, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { setGraphqlError } from '@redux/errors';
import { useAppDispatch } from '@redux/Store';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react'


interface Props {
    children: ReactNode
}

const ApolloWrapper = ({ children }: Props) => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const httpLink = createHttpLink({
        uri: 'http://10.104.45.78:8000/graphql/',
    });


    const errorLink = onError(({ graphQLErrors, networkError, response }) => {
        let err: any = []

        if (graphQLErrors) {

            graphQLErrors.forEach(({ message, locations, path }) => {
                err.push(`${message}`)
                if (message.includes("not authenticated")) {
                    localStorage.removeItem('token')
                    router.push('/login/user/')
                }
            }
            );

        }

        if (networkError) err.push(`Response not successful`)
        dispatch(setGraphqlError(err))
    });





    const authLink = setContext(async (_, { headers }) => {
        let token: any = await Promise.resolve(localStorage.getItem('token'))
        if (token)
            token = JSON.parse(token)

        return {
            headers: {
                ...headers,
                authorization: token ? `Token ${token}` : "",
            }
        }
    });



    const client = new ApolloClient({
        link: errorLink.concat(authLink.concat(httpLink)),
        cache: new InMemoryCache()
    });


    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    )
}

export default ApolloWrapper
