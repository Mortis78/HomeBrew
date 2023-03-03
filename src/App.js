import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header'
import Beers from './components/Beers/Beers'
import SingleBeer from './components/SingleBeer/SingleBeer'
import getApiData from './apiCalls';
import PropTypes from 'prop-types'; 
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

  componentDidUpdate(prevProps, prevState){
    if(this.state.singleBeer !== prevState.singleBeer){
      this.setState({data: this.props.data})
    }
  }

  // handleChange(){
  //   this.setState({singleBeer: })
  // }

  render(){
    return (
      <main className="App">
        <div>< Header /></div>
        
          <Route path='/beers' render={() => <Beers beers={this.state.beers}/>}></Route>
          <Route path='/beers/:id' render={({ match }) => <SingleBeer beer={match.params.id} /> }/>
          <Route path="*"><ErrorPage /></Route>
        
      </main>
    )
  }
}

export default App
