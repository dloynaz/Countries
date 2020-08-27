import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {SmallInfo} from '../index'



const CountriesListExternalWrapper = styled.ul`
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  list-style-type: none;
  gap: 10%;
  margin: 0px;
  padding: 0px;
  list-style: none;
  margin-left:50px;
  margin-right:50px;
  min-height: 100vh;
  padding-bottom:50px;
`





class CountriesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    }

  }


  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data })
    }
  }




  render() {
    return (
      <div>
        <CountriesListExternalWrapper >
          {
            this.state.data.map(country =>
              (
                <li style={{ height: "250px", width: "210px", marginTop: '5%' }}>
                  <Link to={`/${country.name}`} style={{ height: "250px", width: "210px", textDecoration: 'none', color: "inherent" }}>
                    <SmallInfo 
                    flag={country.flag} 
                    name={country.name} 
                    population={country.population} 
                    region={country.region} 
                    capital={country.capital}
                    handleSelection={this.props.handleSelection}
                    letterColor={this.props.letterColor}
                    headerColor={this.props.headerColor}/>
                  </Link>
                </li>
              )

            )
          }
        </CountriesListExternalWrapper>
      </div>
    )
  }
}

export default CountriesList