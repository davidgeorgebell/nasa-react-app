import React, { Component } from 'react'

const API_KEY = process.env.REACT_APP_NASA_API;

export default class DataDetails extends Component {
    constructor(){
        super()

       this.state = {
            nasaData: '',
            date: '',
        }
    }

    async componentDidMount() {
        try {
          const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
          const data = await res.json();
          this.setState({
            nasaData: data
          }) 
        //   console.log(data)
        } catch(e) {
          console.log(e)
        }
     }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
