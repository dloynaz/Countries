import React from 'react'
import styled from 'styled-components'

import { CountriesList, Filter, Search } from '../../Components'

const CountriesPageWrapper = styled.div`
  transition: 1000ms linear;
  background-color:${props => props.bodyColor};
`

const InputsWrapper = styled.div`
  display: flex;
  justify-items: auto;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

class CountriesPage extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        data:this.props.data
      }
    }

    componentDidUpdate(prevProps){
      if(this.props.data !== prevProps.data){
        this.setState({data:this.props.data})
      }
    }


    
    render() {
        return (
            <CountriesPageWrapper bodyColor={this.props.bodyColor}>
                <InputsWrapper>
                    <Search handleSearch={this.props.handleSearch}/>
                    <Filter handleFilter={this.props.handleFilter}/>
                </InputsWrapper>

                <CountriesList  headerColor={this.props.headerColor} data={this.state.data} handleSelection={this.props.handleSelection} letterColor={this.props.letterColor}/>
            </CountriesPageWrapper>
        )
    }
}

export default CountriesPage