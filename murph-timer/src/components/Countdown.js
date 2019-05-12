import React, { Component } from 'react'
import Countdown from 'react-countdown-now';


export default class CountdownWrapper extends Component {

state = {
    data: this.props.data
}




  render() {    

    return (
        
        <div className="col-sd-12" style={wrapperstyle} >
        <Countdown date={Date.now() + Math.floor(this.props.data) * 1000}/>
         </div>
    )
  }
}

const wrapperstyle = {
    marginRight: "5%",
    background: "#eee",
    fontFamily: "'Khand', sans-serif",
    color: '#333',
    margin: "1%",
    padding: "1%"
  }
  