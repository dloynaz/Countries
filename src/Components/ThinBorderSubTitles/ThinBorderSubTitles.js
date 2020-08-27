import React from 'react'

import styled from 'styled-components'

import { Link } from 'react-router-dom'

const ThinBorderSubTitlesWrapper = styled.span`
transition: 500ms ease-in-out;
font-size:0.8rem;
flex:1;
margin:0px;
padding:0px;
&:hover {
  transform:scale(1.1)
}
`


class ThinBorderSubTitles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }

  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.setState({ data: this.props.data })
    }
  }



  render() {
    let borderName = [
      { name: 'none' }
    ]
    let borderWithRegex = ""
    if (this.props.border && this.state.data) {
      borderName = this.state.data.filter(country => {
        return country.alpha3Code === this.props.border
      })
      borderWithRegex = borderName[0].name.match(/[a-z0-9]+(\s+[a-z0-9]+)?/i)
    }

    let linkStyle = { 
      transition: "500ms ease-in-out",
      textDecoration: 'none', 
      color: "black", 
      marginTop:"20px",
      height:"fit-content",
      minWidth:"fit-content",
      maxWidth: "fit-content",
      padding:"10px",
      border: "solid thin grey",
      flex:"1",
      borderRadius: "0.4rem",
      fontSize:"0.8rem",
      display:"fled",
      justifyContent:"center",
      alignItems:"center",
      "&:hover": {
        transform:"scale(1.1)"
      }}

  if(this.props.letterColor==="white"){
      linkStyle = { 
        transition: "500ms ease-in-out",
        textDecoration: 'none', 
        color: "white", 
        marginTop:"20px",
        height:"fit-content",
        minWidth:"fit-content",
        maxWidth: "fit-content",
        padding:"10px",
        border: "solid thin white",
        flex:"1",
        borderRadius: "0.4rem",
        fontSize:"0.8rem",
        display:"fled",
        justifyContent:"center",
        alignItems:"center",
        "&:hover": {
          transform:"scale(1.1)"
        }}
  }

    return (

        <Link class="linkBorder" to={`/${borderName[0].name}`} key={borderName[0].name} style={linkStyle}>
          <ThinBorderSubTitlesWrapper>{borderWithRegex[0]}</ThinBorderSubTitlesWrapper>
        </Link>

    )
  }
}

export default ThinBorderSubTitles