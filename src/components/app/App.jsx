import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import PokemonList from '../displays/PokemonList'
import PokemonDetails from '../displays/PokemonDetails';

// set up router here
export default function App() {
  return (
    <Router>
      <nav>
        <li><Link to="/home">Home List</Link></li>
        <li><Link to="/details">Details</Link></li>
      </nav>
      <Switch>
        <Route
          exact path="/home"
          render={(routerProps) => <PokemonList {...routerProps} />}
        />
        <Route
          exact path="/details/"
          render={(routerProps) => <PokemonDetails {...routerProps} />}
        />
      </Switch>
    </Router>
  )
}
