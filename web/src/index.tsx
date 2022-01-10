import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';

const client: any = new ApolloClient({
  uri: "https://countries.trevorblades.com/"
})

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

