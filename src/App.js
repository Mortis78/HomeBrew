import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'; 
import getApiData from './apiCalls';
import Beers from './components/Beers/Beers'
import Header from './components/Header/Header'
import ErrorPage from './components/ErrorPage';
import cleanBeerData from './utilities';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.sate = {
      beers: []
    }
  }

  componentDidMount(){
    getApiData('beers')
    .then( data => {
      const cleanData = data.map(beer => cleanBeerData(beer))
      this.setState({beers: cleanData})
    })
  }


  render(){
    return (
      <main className="App">
        <div>< Header /></div>
        <Switch>
          <Route path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </main>
    )
  }
}

export default App
