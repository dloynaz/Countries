import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

import { CountriesPage, Country } from './Pages/index'
import { Mode } from './Components/index'

const HeaderWrapper = styled.div`
transition: background-color 1000ms linear;
display: flex;
justify-items: auto;
align-items: center;
justify-content: space-between;
border-bottom-style: solid;
border-width: 2%;
border-color: #E2E2E2;
background-color: ${props => props.headerColor};
`

const Title = styled.h1`
transition: 1000ms linear;
margin-left: 5%;
color:${props => props.letterColor};
`

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data:[],
      selectionData:[],
      letterColor:"black",
      headerColor:"white",
      bodyColor:"#F2F2F2",
      borderColor:"#E2E2E2"
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.fetchData = this.fetchData.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleMode = this.handleMode.bind(this)
  }
  async componentWillMount() {
     this.fetchData().catch(error => {
         alert(error)
     })
    }

  async handleSearch(value){
      const Countries = []
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${value}`);
      const json = await response.json()
      Countries.push(...json)

      this.setState({data: Countries});
    }
  async fetchData() {
      const Countries = []
      const response = await fetch('https://restcountries.eu/rest/v2');
      const json = await response.json()
      Countries.push(...json)

      this.setState({data: Countries});
    }
  async handleFilter(value){
    const Countries = []
    const response = await fetch(`https://restcountries.eu/rest/v2/region/${value}`);
    const json = await response.json()
    Countries.push(...json)
    this.setState({data: Countries});
  }

  async handleSelection(value){
    const Countries = []
    const response = await fetch(`https://restcountries.eu/rest/v2/name/${value}`);
    const json = await response.json()
    Countries.push(...json)
    this.setState({selectionData: Countries});
  }

  handleMode(value){
    if(value){
      this.setState({
        letterColor:"black",
        headerColor:"white",
        bodyColor:"#F2F2F2",
        borderColor:"#E2E2E2"
      })
  } else {
      this.setState({
        letterColor:"white",
        headerColor:"#2F3A4B",
        bodyColor:"#26303F",
        borderColor:"#3D4E66"
      })
  }
  }

  render() {

    return (
      <div className="App">
        <Router>
          <HeaderWrapper className="titleAndMode" headerColor={this.state.headerColor}>
            <Title letterColor={this.state.letterColor}>Where in the world?</Title>
            <Mode handleMode={this.handleMode}/>
          </HeaderWrapper>
          <Switch>
            <Route path='/' exact>
              <CountriesPage 
              data={this.state.data} 
              handleSearch={this.handleSearch} 
              handleFilter={this.handleFilter} 
              handleSelection={this.handleSelection}
              letterColor={this.state.letterColor}
              bodyColor={this.state.bodyColor}
              headerColor={this.state.headerColor}
              borderColor={this.state.borderColor}/>
            </Route>
            <Route path='/:name' render={(props) => <Country {...props} letterColor={this.state.letterColor} bodyColor={this.state.bodyColor}/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
