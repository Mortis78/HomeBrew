import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Favorites from './components/Favorites/Favorites'
import Beers from './components/Beers/Beers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import getApiData from './apiCalls';
import ErrorPage from './components/ErrorPage';
import cleanBeerData from './utilities';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      favorites: []
    }
  }

  // left console.log to show that favorites update. click (add to favorites) twice to see data display in favorits array 
  updateFavoritesState = (newState) => {
    this.setState({ favorites: [...this.state.favorites, newState]})
      console.log('favorites array = ', this.state.favorites)
  }
  
  componentDidMount = () =>{
    getApiData('beers')
    .then( data => {
      const cleanData = data.map(beer => cleanBeerData(beer))
      this.setState({beers: cleanData })
    })
  }

  render(){
    return (
      <main className="App">
        <div>< Header /></div>
        <Switch>
          <Route path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route path='/Favorites' render={() => <Favorites favorites={this.state.favorites}/>}></Route>
          <Route path='/:id' render={({ match }) => <SingleBeer beerid={match.params.id} updateFavoritesState={this.updateFavoritesState} /> }/>
          <Route path="*"><ErrorPage /></Route>
        </Switch>
      </main>
    )
  }
}

export default App  
