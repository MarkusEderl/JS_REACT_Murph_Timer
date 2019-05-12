import React, { Component } from 'react';
import MinutesToFinish from './MinutesToFinish'

export default class Body extends Component {

  state = {
    Time: ''
  }


  render() {
   
    return (
      <React.Fragment>
          <br></br>
          <MinutesToFinish name="Minutes to Finish" reps={60}></MinutesToFinish>
      </React.Fragment>
    )
  }
}

const rowstyle = {
  margin: "0 10px"
}


