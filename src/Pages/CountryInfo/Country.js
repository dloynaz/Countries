import React from 'react'
import styled from 'styled-components'

import { BackButton, ThinBorderSubTitles } from '../../Components'

const ExternalCountryPageWrappper = styled.div`
 transition: 1000ms linear;
 color:${props => props.letterColor};
 display:flex;
 justify-content:center;
 flex-direction:column;
 height:90vh;
 padding-left:5%;
 padding-right:5%;
 background-color:${props => props.bodyColor};

`


const InternalCountryPageWrappper = styled.div`
 display:flex;
 justify-content:center;
 align-items:flex-start;
 gap:10%;
 flex: 4;
 @media (max-width: 768px) {
    flex-direction: column;
  }
  overflow:hidden;
`



const FlagWrapper = styled.div`
 height:50vh;
 width:70vh;
 overflow:hidden;
 @media (max-width: 768px) {
  }
`

const InfoWrapper = styled.div`
 justify-content:center;
 height:50vh;
 width:70vh;
 display:flex;
 flex-direction:column;
 border-right: solid thin;
 padding-right: 2%;
 @media (max-width: 768px) {

  }
`

const ButtonWrapper = styled.div`
 flex:1;
`

const TitleWrapper = styled.div`
 flex:1;

`

const SubTitlesWrapper = styled.div`
 flex:4;
 justify-content:space-between;
 display:flex;
 @media (max-width: 768px) {
    width:70%;
    height:100%;
}
`

const BorderCountriesWrapper = styled.div`
 width:100%;
 flex:1;
 display:flex;
 align-items:center;
 gap: 3%;
 flex-wrap: wrap;
 @media (max-width: 768px) {
    width:70%;
    height:100%;
    margin-bottom:20px;
}
`

const Title = styled.h1`
 font-size:1.6rem;
 margin:0px;
 padding:0px;
`




const SubTitleContainerA = styled.div`

flex:1;
`

const SubTitleContainerB = styled.div`
justify-content:flex-end;
flex:1;
`


const ThinSubTitles = styled.p`
font-size:0.9rem;
flex:1;
margin:0px;
padding:0px;
margin:7% auto;

`

const BorderSubTitle = styled.span`
min-width:105px;
max-width:120px;
font-size:0.8rem;
flex:3;
margin:0px;
margin-top:3%;
padding:0px;
`
const Flag = styled.img`
height:50vh; 
width:70vh; 
transform:scale(1.4);
@media (max-width: 768px) {
    width:70%;
    height:100%;
}
`




class Country extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data:this.props.data,
            selectionData: [{     }]
        }
        this.fetchData = this.fetchData.bind(this)
      }

      componentWillMount() {
      this.fetchDataSelection()
      }

       async fetchData() {
        const Countries = []
        const response = await fetch('https://restcountries.eu/rest/v2');
        const json = await response.json()
        Countries.push(...json)
  
        this.setState({data: Countries});
      }

      async fetchDataSelection() {
        const Countries = []
        const response = await fetch(`https://restcountries.eu/rest/v2/name/${this.props.match.params.name}`);
        const json = await response.json()
        Countries.push(...json)
        this.fetchData()
        this.setState({selectionData: Countries});
     
      }



      componentDidUpdate(prevProps) {
        if (this.props.match.params.name !== prevProps.match.params.name) {
            this.fetchDataSelection()
        }
      }




    
    

    


    render() {

    let currencies = []
    if(this.state.selectionData[0].currencies){
        currencies = this.state.selectionData[0].currencies.map(currency => {
            return(
                <li>{currency.name} </li>
            )
        })
    }

    let languages = []
    if(this.state.selectionData[0].currencies){
        languages = this.state.selectionData[0].languages.map(language => {
            return(
                <li>{language.name} </li>
            )
        })
    }

    let borders = []
    if(this.state.selectionData[0].borders){
        borders = this.state.selectionData[0].borders.map(border => {
            return(
                <ThinBorderSubTitles data={this.state.data} letterColor={this.props.letterColor} border={border}/>
            )
        })
    }



    


    
        return (
            <ExternalCountryPageWrappper letterColor={this.props.letterColor} bodyColor={this.props.bodyColor}>
                <ButtonWrapper>
                    <BackButton letterColor={this.props.letterColor}/>
                </ButtonWrapper>
                <InternalCountryPageWrappper>
                    <FlagWrapper>
                      <Flag src={this.state.selectionData[0].flag}></Flag>
                    </FlagWrapper>
                    <InfoWrapper>
                        <TitleWrapper>
                            <Title>{this.state.selectionData[0].name}</Title>
                        </TitleWrapper>
                        <SubTitlesWrapper>
                            <SubTitleContainerA>
                                <ThinSubTitles><b>Native Name: </b>{this.state.selectionData[0].nativeName}</ThinSubTitles>
                                <ThinSubTitles><b>Population: </b>{this.state.selectionData[0].population}</ThinSubTitles>
                                <ThinSubTitles><b>Region: </b>{this.state.selectionData[0].region}</ThinSubTitles>
                                <ThinSubTitles><b>Sub Region: </b>{this.state.selectionData[0].subregion}</ThinSubTitles>
                                <ThinSubTitles><b>Capital: </b>{this.state.selectionData[0].capital}</ThinSubTitles>
                            </SubTitleContainerA>
                            <SubTitleContainerB>
                                <ThinSubTitles><b>Top Level Domain: </b>{this.state.selectionData[0].topLevelDomain}</ThinSubTitles>
                                <ThinSubTitles><b>Currencies: </b>{currencies}</ThinSubTitles>
                                <ThinSubTitles><b>Languages: </b>{languages}</ThinSubTitles>
                            </SubTitleContainerB>
                        </SubTitlesWrapper>
                        <BorderCountriesWrapper>
                            {borders.length !== 0? <BorderSubTitle><b>Border Countries:</b></BorderSubTitle>:null}
                            {borders}
                        </BorderCountriesWrapper>
                    </InfoWrapper>
                </InternalCountryPageWrappper>
            </ExternalCountryPageWrappper>
        )
    }
}

export default Country