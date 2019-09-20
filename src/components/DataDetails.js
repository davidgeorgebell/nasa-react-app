import React, { Component } from 'react'
import styled from 'styled-components';

const API_KEY = process.env.REACT_APP_NASA_API;


export default class DataDetails extends Component {
    constructor(){
        super()

       this.state = {
            nasaData: {},
            date: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
handleSubmit(e) {
    e.preventDefault()
    let dateFromInput = e.target[0].value;
    this.setState({
        date: dateFromInput
    });
    this.dataFromInput(dateFromInput);
}
handleChange(e){
    this.setState ({
          date: e.target.value
 })
}   

    async componentDidMount() {
        try {
          const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
          const data = await res.json();
          this.setState({
            nasaData: data
          }) 
        } catch(e) {
          console.log(e)
        }
     }

     dataFromInput = date => {
        fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
              .then(response => response.json())
              .then(pictureData => this.setState({ nasaData: pictureData }));
      }

    render() {
        let info = this.state.nasaData
        return (
            <>
            <DetailWrapper>
            <InputForm className='form' onSubmit={this.handleSubmit}>
            
                <TextInput 
                type='text'
                id='date'
                placeholder='YYYY-MM-DD'
                value={this.state.date}
                onChange={this.handleChange}
                />
                <InputButton
                type='submit'
                disabled={!this.state.date}
                >
                Submit
                </InputButton>
                
            </InputForm>
                <PhotoTitle>{info.title}</PhotoTitle>
                <Photo src={info.url} alt={info.title} />
                <Explanation>{info.explanation}</Explanation>
            </DetailWrapper>
            </>  
                )
            }
        }

                

const Explanation = styled.p`
    margin: 2rem;
    max-width: 80vw;
    border-radius: 5px;
    font-weight: 500;
    line-height: 1.5rem;
    padding-bottom: 20px;
`;
                
const PhotoTitle = styled.h1`
     padding: 1rem;
`;

const DetailWrapper = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
`;

const Photo = styled.img`
     max-width: 90vw ;
     max-height: 80vh;
     min-height: 25vh;
     margin-bottom: 20px;
     border-radius: 5px;
     box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);

     @media(max-width: 400) {
         width: 100%;
     }
`;

const InputForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`

const InputButton = styled.button`
  background-color: purple;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 10px 32px;
  text-align: center;
  font-size: 16px;
  margin: 15px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
  max-width: 50vw;

  &:hover {
         opacity: 1;
     }
`;

const TextInput = styled.input`
     margin-top: 5px;
     border: 2px solid purple;
     border-radius: 4px;
     opacity: 0.6;
     padding: 5px;
     
  

`;
     