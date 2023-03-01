import React, { Component } from 'react';
import getApiData from './apiCalls';
import { Route, Switch } from 'react-router-dom'
import Beers from './components/Beers/Beers'
import cleanBeerData from './utilities';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.sate = {
      beers: []
    }
  }

ComponentDidMount(){
  getApiData(beers)
  .then( data => {
    const cleanBeersData = data.map(beer => cleanBeerData(beer))
    this.setState({beers: cleanBeersData})
  })
}

  render(){
    return (
      <main className="App">
        <Switch>
          <Route> exact path='/beers' render={() => <Beers beers={this.state.beers}/>}</Route>
        </Switch>
      </main>
    )
  }
}

export default App;
