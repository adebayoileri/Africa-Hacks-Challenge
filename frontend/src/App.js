import React from 'react';
import logo from './spacex.png';
import './App.css';
import {ApolloClient} from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: "http://localhost:4200/graphql"
});

const client = new ApolloClient({
  cache,
  link
});

// const client = new ApolloClient({
//   uri:'http://localhost:4200/graphql'
// })


function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
    <div className="container">
    <img src={logo} alt="Space X" style={{ width:250, display:'block', margin: 'auto', height:180  }}/>
    <Route exact path="/" component={Launches} />
    <Route exact path="/launch/:flight_number" component={Launch} />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
