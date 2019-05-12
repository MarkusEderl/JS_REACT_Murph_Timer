import React, { Component } from 'react'

export default class SelectNum extends Component {

  state = {
    Value: 0,
  }

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

    return (
      <div style={wrapperstyle}>
        <p>Enter {this.props.name}</p>
        <select onChange = {this.handleSelect}  name={this.props.name}>
        {listItems}
        </select>
      </div>
    )
  }
}

const wrapperstyle = {
  marginRight: "5%"
}