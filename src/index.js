import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import css from './index.css'; // eslint-disable-line no-unused-vars
import registerServiceWorker from './registerServiceWorker';

const apiUrl = process.env.NODE_ENV === "development"
  ? 'http://localhost:3002/graphql'
  : 'https://unscripted-cagematch-prod.herokuapp.com/graphql';

const networkInterface = createNetworkInterface({ uri: apiUrl });

const client = new ApolloClient({
  dataIdFromObject: (result) => {
    const id = result && result.__typename && `${result.__typename.toLowerCase()}Id`;
    if (id && result[id]) {
      return result[id];
    }
    return null;
  },
  networkInterface
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
