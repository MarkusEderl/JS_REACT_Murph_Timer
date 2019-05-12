import React, { Component } from 'react'
import Timer from './Timer'

export default class SelectNum extends Component {

  
  

    createOptions = () => {
        let options = []
        
        for (let i = 1; i < this.props.reps + 1; i++){
            options[i] = i; 
        }

        return options;
    }

    handleSelect = (e) => {
      this.setState({
        Value: e.target.value,
      })
    }

  render() {

    let options = this.createOptions();

    const listItems = options.map(option => <option key={option} value={option}>{option}</option> );
    let timer = "";

    if (this.props.timer == true){
       timer = <Timer name={this.props.name} seconds={this.props.seconds}></Timer>
    }
  

    return (
      <div className="col-sd-4" style={wrapperstyle}>
        <p>Enter {this.props.name}</p>
        <select onChange = {this.props.handleSelect}  name={this.props.name}>
        {listItems}
        </select>
        <br></br>
        <br></br>
        <p>Sets: {this.props.sets}</p>
        {timer}
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

