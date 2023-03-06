import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Beers from './components/Beers/Beers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import getApiData from './apiCalls';
// import PropTypes from 'prop-types'; 
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
    // this.updateFavoritesState = this.updateFavoritesState.bind(this);
    console.log('favorites = ', this.state.favorites)
  }

  updateFavoritesState = (newState) => {
    this.setState({ favorites: [...this.state.favorites, newState]});
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
          <Route exact path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route exact path='/:id' render={({ match }) => <SingleBeer beerid={match.params.id} updateFavoritesState={this.updateFavoritesState} /> }/>
          <Route path="*"><ErrorPage /></Route>
        </Switch>
      </main>
    )
  }
}


export default App  
