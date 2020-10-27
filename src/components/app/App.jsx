import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import PokemonDetails from '../../container/PokemonDetails';
import PokemonContainer from '../../container/PokemonContainer';

// set up router here
export default function App() {
  return (
    <>
      <h1>Welcome!</h1>
      <Router>
        <nav>
          <li><Link to="/home">Home List</Link></li>
          <li><Link to="/details">Details</Link></li>
        </nav>
        <Switch>
          <Route
            exact path="/home"
            render={(routerProps) => <PokemonContainer {...routerProps} />}
          />
          <Route
            exact path="/details/:pokemonId"
            render={(routerProps) => <PokemonDetails {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  )
}
