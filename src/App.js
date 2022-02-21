import React from 'react'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'
import {createUploadLink} from 'apollo-upload-client'
import UploadForm from './UploadForm'

const client = new ApolloClient({
  link: createUploadLink({
    uri:'http://127.0.0.1:3000/graphql',
    headers: {
      Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC91YXQtaWRlbnRpdHktc2VydmljZVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NDQyMzM4MjcsImV4cCI6MTY0NDI2MjYyNywibmJmIjoxNjQ0MjMzODI3LCJqdGkiOiJhaTZpclNBU3dncGdublVuIiwic3ViIjoyLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3IiwidXNlciI6eyJpZCI6Miwia21pdGxfaWQiOiIyNTI4QjA0MTQiLCJ1c2VybmFtZSI6InNyaW51YWwubmEiLCJsZGFwX2d1aWQiOm51bGwsImVtYWlsIjoic3JpbnVhbC5uYUBrbWl0bC5hYy50aCIsInByZWZpeF90aCI6Ilx1MGUxOVx1MGUzMlx1MGUwN1x1MGUyYVx1MGUzMlx1MGUyNyIsImZpcnN0X25hbWVfdGgiOiJcdTBlMjhcdTBlMjNcdTBlMzVcdTBlMTlcdTBlMjdcdTBlMjUiLCJtaWRkbGVfbmFtZV90aCI6IiIsImxhc3RfbmFtZV90aCI6Ilx1MGUxOVx1MGUyNVx1MGUzNFx1MGUxOVx1MGUxN1x1MGUzNFx1MGUxZVx1MGUyMlx1MGUyN1x1MGUwN1x1MGUyOFx1MGU0YyIsInByZWZpeF9lbiI6IiIsImZpcnN0X25hbWVfZW4iOiJTUklOVUFMIiwibWlkZGxlX25hbWVfZW4iOiIwIiwibGFzdF9uYW1lX2VuIjoiTkFMSU5USVBQQVlBV09ORyIsImFjYWRlbWljX3N0YW5kaW5nIjoiIn19.e8ZYfW0U2f3x5UfYa7LluZkWYOnq0WKdYYWyvc6XqS0"
    }
  }),
  cache: new InMemoryCache(),
})

function App() {
  return (
    <ApolloProvider client={client}>
      <UploadForm />
    </ApolloProvider>
  );
}

export default App;
