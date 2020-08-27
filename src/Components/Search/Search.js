import React from 'react'
import styled from 'styled-components'
import Glass from '../../assets/search.png'
import "./Search.css"

const SearchWrapper = styled.form`
  margin-top:50px;
  margin-left:7%;
  background-color:white;
  display:flex;
  align-content:center;
  padding-left:20px;
  border-radius:0.5rem;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
`



const ImgIcon = styled.img`
  margin:auto;
  height:20px;
`


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSearch(this.state.value).catch(error => {
      alert("Maybe you have a spelling mistake")
  })
  }


  render() {
    return (
     
        <SearchWrapper onSubmit={this.handleSubmit}>

            <ImgIcon src={Glass} alt="searchIcon"></ImgIcon>
            <input type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search for a country..."></input>

          <input type="submit" value="Submit" style={{display:"none"}}/>
        </SearchWrapper>
     
    )
  }
}

export default Search