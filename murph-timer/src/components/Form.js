import React, { Component } from 'react';
import SelectSplit from './selectSplit';
import SelectNum from './SelectNum'


export default class Body extends Component {

  state = {
    Split: '',
    Rounds: '',
    Pullups: '',
    Pushups: '',
    Squats: '',
    Time: ''
  }
  onSubmit = (e) => {
    e.preventDefault();
    console.log("hallo");
  }

 
  render() {
   
    return (
      <React.Fragment>
          <br></br>
          <SelectSplit></SelectSplit>
          <br></br>   
          <br></br>
          <div className = "row" style={rowstyle}>
          <SelectNum className="col-xl-3" name="Pullups" reps = {100} ></SelectNum>
          <SelectNum className="col-xl-3"  name="Push-Ups" reps = {200} ></SelectNum>
          <SelectNum className="col-xl-3" name="Squats" reps = {300} ></SelectNum>
          <SelectNum className="col-xl-3" name="Minutes to Finish" reps={60}></SelectNum>
          <Timer></Timer>
          </div>
      </React.Fragment>
    )
  }
}

const rowstyle = {
  margin: "0 10px"
}


