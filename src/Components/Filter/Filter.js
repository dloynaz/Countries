import React from 'react'
import styled from 'styled-components'

import "./Filter.css"

const FilterWrapper = styled.div`
  margin-top:50px;
  margin-right:7%;
  @media (max-width: 768px) {
    display:none;
  }
`


class Filter extends React.Component {
  constructor(props){
    super(props)
    this.selectAfrica = this.selectAfrica.bind(this)
    this.selectAmericas = this.selectAmericas.bind(this)
    this.selectAsia = this.selectAsia.bind(this)
    this.selectEurope = this.selectEurope.bind(this)
    this.selectOceania = this.selectOceania.bind(this)
  }

  selectAfrica(){
    this.props.handleFilter("Africa")
  }
  selectAmericas(){
    this.props.handleFilter("Americas")
  }
  selectAsia(){
    this.props.handleFilter("Asia")
  }
  selectEurope(){
    this.props.handleFilter("Europe")
  }
  selectOceania(){
    this.props.handleFilter("Oceania")
  }

  render() {
    return (
      <FilterWrapper>
        <div class="dropdown">
          <button class="dropbtn">Filter by Region</button>
          <div class="dropdown-content">
            <a onClick={this.selectAfrica}>Africa</a>
            <a onClick={this.selectAmericas}>Americas</a>
            <a onClick={this.selectAsia}>Asia</a>
            <a onClick={this.selectEurope}>Europe</a>
            <a onClick={this.selectOceania}>Oceania</a>
          </div>
        </div>
      </FilterWrapper>
    )
  }
}

export default Filter