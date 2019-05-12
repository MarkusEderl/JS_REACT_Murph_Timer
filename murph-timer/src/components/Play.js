import React, { Component } from 'react'
import CountdownWrapper from './Countdown'

export default class Play extends Component {
    state = {
    }

    handleClick = () => {
        this.setState({
            pullups: this.props.data.secondsForPullups
        }
        )
    }

  render() {
    return (
      <div className="col-sd-12" style={wrapperstyle}>
        <button onClick={this.handleClick} style={btnstyle}>Play</button>
        <br></br>
        <div className ="row" style={rowstyle}>
            <CountdownWrapper data={this.state.pullups}></CountdownWrapper>
        </div>
      </div>
    )
  }
}

const btnstyle = {
    margin: "1%",
    backgroundColor: "rgb(238, 238, 238)",
    border: "none",
    color: "rgb(51, 51, 51)",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    cursor: "pointer",
    fontFamily: "Khand, sans-serif"
      
}


const rowstyle = {
    margin: "10px 0",
    width: "100%",
  }

  const wrapperstyle = {
    marginRight: "5%",
    fontFamily: "'Khand', sans-serif",
    color: '#333',
    margin: "1%",
    padding: "1%"
  }
  
  
