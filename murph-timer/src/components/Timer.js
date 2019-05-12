import React, { Component } from 'react'

export default class Timer extends Component {
  render() {
    return (
        <div className="col-sd-12" style={wrapperstyle}>
        <p>Seconds: {Math.floor(this.props.seconds)}</p>
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
  