import React from 'react'
import styled from 'styled-components'

const ModeWrapper = styled.span`
  margin-right:5%;
  display:flex;
  align-items:center;
  cursor:pointer;
`

const MoonTittle = styled.p`
  margin-left: 10px;
`


class Mode extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          lightMode:true
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        if(this.state.lightMode){
            this.setState({
                lightMode:false
            })
            this.props.handleMode(false)
        } else {
            this.setState({
                lightMode:true
            })
            this.props.handleMode(true)
        }
    }
    render() {
        let moon =""
        let moonColor={color:"black"}
        if(this.state.lightMode){
            moon = "far fa-moon"
            moonColor={color:"black"}
        } else {
            moon = "fas fa-moon"
            moonColor={color:"white"}
        }
        return (
            <ModeWrapper onClick={this.clickHandler}>
                <i class={moon} style={moonColor}></i>
                <MoonTittle style={moonColor}>Dark Mode</MoonTittle>
            </ModeWrapper>
        )
    }
}

export default Mode