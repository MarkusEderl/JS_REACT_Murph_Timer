import React, { Component } from 'react'
import Timer from './Timer'
import SelectNum from './SelectNum'
import Play from './Play'

export default class MinutesToFinish extends Component {

  state = {
    Minutes: 0,
    Pullups: 0,
    Pushups: 0,
    Squats: 0,
    secondsForPullups: 0,
    secondsForPushups: 0,
    secondsForSquats: 0,
    setspullups: 0,
    setspushups: 0,
    setssquats: 0
  }

    createOptions = () => {
        let options = []
        
        for (let i = 1; i < this.props.reps + 1; i++){
            options[i] = i; 
        }

        return options;
    }

    calculateTime = (data) => {
        let secondsToFinish = data.Minutes * 60

        this.setState({
            secondsForPullups: (secondsToFinish / 3) / (100/data.Pullups),
            secondsForPushups: (secondsToFinish / 3) / (200/data.Pushups),
            secondsForSquats: (secondsToFinish / 3) / (300/data.Squats),
        })
        
    }

    handleSelect = (e) => {
      this.setState({
        Minutes: e.target.value,
      }, () => {
        this.calculateTime(this.state);
      })
    }

    PullupsUpdate = (e) => {
        this.setState({
            Pullups: e.target.value,
            setspullups: Math.ceil(100 / e.target.value)
        }, () => {
            this.calculateTime(this.state);
          })
    }

    PushupsUpdate = (e) => {
        this.setState({
            Pushups: e.target.value,
            setspushups: Math.ceil(200 / e.target.value)
        }, () => {
            this.calculateTime(this.state);
          })
    }

    SquatUpdate = (e) => {
        this.setState({
            Squats: e.target.value,
            setssquats: Math.ceil(300 / e.target.value)

        }, () => {
            this.calculateTime(this.state);
          })
    }



  render() {

    let options = this.createOptions();

    const listItems = options.map(option => <option key={option} value={option}>{option}</option> );
 

    return (
        <React.Fragment>
        <div className = "row" style={rowstyle}>
            <div className="col-xl-12" style={wrapperstyle}>
            <p>Enter {this.props.name}</p>
            <select onChange = {this.handleSelect}  name={this.props.name}>
            {listItems}
            </select>
            </div>
        </div>
        <br></br>
        <div className = "row col-centered" style={rowstyle}>
          <SelectNum  sets={this.state.setspullups} name="Pullups" seconds = {this.state.secondsForPullups} handleSelect = {this.PullupsUpdate} timer = {true} reps = {100}></SelectNum>
          <SelectNum sets={this.state.setspushups}  name="Push-Ups" seconds = {this.state.secondsForPushups} handleSelect = {this.PushupsUpdate} timer = {true} reps = {200} ></SelectNum>
          <SelectNum sets={this.state.setssquats} name="Squats" seconds = {this.state.secondsForSquats} handleSelect = {this.SquatUpdate} timer = {true} reps = {300} ></SelectNum>
        </div>
        <br></br>
        <div className ="row" style={rowstyle}>
            <Play data = {this.state} onClick = {this.handleClick}></Play>
        </div>
        <br></br>
        </React.Fragment>
    )
  }
}

const wrapperstyle = {
    marginRight: "5%",
    background: "#eee",
    fontFamily: "'Khand', sans-serif",
    color: '#333',
    margin: "1%",
    padding: "1%",
    fontWeight: "bold"
}
  

const rowstyle = {
    margin: "0 10px"
  }
  
