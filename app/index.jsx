// Import polyfills
import { polyfill as smoothSrollPolyfill } from 'smoothscroll-polyfill'

// Import libs
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

// Load store
import store from './state'

// Import APIs so they can load their configurations
import GraphQLClient from './API/graphql_api'

// Import router
import CFRouter from './router'
// Import styles
import './styles/application.sass'
import theme from './styles/theme'

// Activate polyfills
smoothSrollPolyfill()

// Inject React app in DOM
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={GraphQLClient}>
      <ThemeProvider theme={theme}>
        <CFRouter />
      </ThemeProvider>
    </ApolloProvider>
  </Provider>,
  document.getElementById('app')
)
