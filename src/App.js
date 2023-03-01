import React, { Component } from 'react';
import Header from './components/Header/Header'
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
  .then(data => {
    const cleanBeersData = data.map(beer => cleanBeerData(beer))
    this.setState({beers: cleanBeersData})
  })
}

  render(){
    return (
      <div className="App">
          < Header />
          < Beers />
      </div>
    )
  }
}

export default App;
