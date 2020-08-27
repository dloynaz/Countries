import React from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'


const BackTitle = styled.span`
font-size:1rem;
margin-left:10px;
margin-right:10px;
`

const ArrowTitle = styled.span`
position:relative;
top:0.95px;
font-size:1.6rem;
margin-left:10px;
`

class BackButton extends React.Component {
    render() {
        let linkStyle = {
            transition: "500ms ease-in-out",
            textDecoration: 'none', 
            color: "black", 
            height:"fit-content",
            minWidth:"fit-contentpx",
            maxWidth: "fit-content",
            padding:"10px",
            border: "solid thin grey",
            flex:"1",
            borderRadius: "0.4rem",
            fontSize:"0.8rem",
            display:"fled",
            justifyContent:"center",
            alignItems:"center",
            position:"relative",
            top:"50px"
        }

        if(this.props.letterColor==="white"){
            linkStyle = {
                transition: "500ms ease-in-out",
                textDecoration: 'none', 
                color: "white", 
                height:"fit-content",
                minWidth:"fit-contentpx",
                maxWidth: "fit-content",
                padding:"10px",
                border: "solid thin white",
                flex:"1",
                borderRadius: "0.4rem",
                fontSize:"0.8rem",
                display:"fled",
                justifyContent:"center",
                alignItems:"center",
                position:"relative",
                top:"50px"
            }
        }
        return (
                
                <Link to="/"  style={linkStyle} class="linkBorder">
                <ArrowTitle>←</ArrowTitle><BackTitle><b>Back</b></BackTitle>
                </Link>



        )
    }
}

export default BackButton