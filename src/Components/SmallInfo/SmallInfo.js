import React from 'react'

import styled from 'styled-components'



const CountriesListInternalWrapper = styled.div`
  transition: 500ms ease-in-out;
  height: 250px;
  width: 210px;
  background-color:${props => props.headerColor };
  border-radius:1rem;
  display:flex;
  flex-direction:column;
  overflow: auto;
  &:hover {
    transform:scale(1.1)
  }

`

const ImgStyle = styled.img`
  height: 125px;
  width: 210px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  transform: scale(1.3);
`

const ImgStyleWrapper = styled.div`
  height: 125px;
  width: 210px;
  border-top-left-radius:1rem;
  border-top-right-radius:1rem;
  overflow: hidden;
`

const TextWrapper = styled.div`
  transition: 1000ms linear;
  display: flex;
  flex-direction:column;
  padding:7%;
  gap: 7px;
  color: ${props => props.letterColor};
  margin:0px;
`

const H6Titles = styled.span`
  margin:0px;
  font-size:0.7rem;
`

const H4Title = styled.span`
font-size:0.8rem;
  margin:0px;
`


class SmallInfo extends React.Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
        this.props.handleSelection(this.props.name)
    }

    render() {
        return (
            <CountriesListInternalWrapper onClick={this.handleClick} headerColor={this.props.headerColor}>
                <ImgStyleWrapper>
                    <ImgStyle src={this.props.flag} alt="CountryFlag"></ImgStyle>
                </ImgStyleWrapper>
                <TextWrapper letterColor={this.props.letterColor}>
                    <H4Title><b>{this.props.name}</b></H4Title>
                    <H6Titles><b>Population:</b> {this.props.population}</H6Titles>
                    <H6Titles><b>Region: </b>{this.props.region}</H6Titles>
                    <H6Titles><b>Capital: </b>{this.props.capital}</H6Titles>
                </TextWrapper>
            </CountriesListInternalWrapper>
        )
    }
}

export default SmallInfo