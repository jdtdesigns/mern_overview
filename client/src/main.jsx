import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.scss'

import { StoreProvider } from './store.jsx'

import { BrowserRouter as Router } from 'react-router-dom'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <StoreProvider>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </StoreProvider>
    </Router>
  </React.StrictMode>,
)
