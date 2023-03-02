import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'; 
import getApiData from './apiCalls';
import Beers from './components/Beers/Beers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import Header from './components/Header/Header'
import ErrorPage from './components/ErrorPage';
import cleanBeerData from './utilities';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      beers: [],
      singleBeer:[]
    }
  }

  componentDidMount(){
    getApiData('beers')
    .then( data => {
      const cleanData = data.map(beer => cleanBeerData(beer))
      this.setState({beers: cleanData})
    })
  }

  SingleBeer= (id) => {
    const findBeer = this.state.beers.find(beer => beer.id === id)
    getApiData(`beers/${findBeer.id}`)
    .then((data) => {
      this.setState({
          singleBeer: data.beer,
          isClicked: true
      })
      console.log("Fetch Single Beer:", data)
    })
  }


  render(){
    return (
      <main className="App">
        <div>< Header /></div>
        <Switch>
          <Route path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route exact path='/beers/:id' render={({match})=> <SingleBeer beerId={match.params.id} />} 
            ></Route>
          <Route path="*"><ErrorPage/></Route>
        </Switch>
      </main>
    )
  }
}

export default App
