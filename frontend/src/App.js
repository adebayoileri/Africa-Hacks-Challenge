import React from 'react';
import logo from './spacex.png';
import './App.css';


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
