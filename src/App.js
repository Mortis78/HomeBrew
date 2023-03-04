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
      singleBeer:null
    }
  }

  componentDidMount(){
    getApiData('beers')
    .then( data => {
      const cleanData = data.map(beer => cleanBeerData(beer))
      this.setState({beers: cleanData })
    })
  }

  showSingleBeer = (id) => {
    const findBeer = this.state.beers.find(beer => beer.id === id)
    getApiData(`beers/${findBeer.id}`)
    .then((data) => {
      this.setState({
        singleBeer: data,
        isClicked: true
      })
      console.log("Fetch Single beer:", data)
    })
  }

  render(){
    return (
      <main className="App">
        <div>< Header /></div>
        <Switch>

          <Route exact path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route path='/:id' render={({ match }) => <SingleBeer beerid={match.params.id} /> }/>
          <Route path="*"><ErrorPage /></Route>
        
        </Switch>
      </main>
    )
  }
}

export default App
