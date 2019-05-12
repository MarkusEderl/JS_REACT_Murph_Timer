import React, { Component } from 'react'

export default class selectSplit extends Component {
  render() {
    return (
         <select name="Split">
            <option value="5/10/15">5/10/15</option>
            <option value="10/20/30">10/20/30</option>
            <option value="20/40/60">20/40/60</option>
            <option value="50/100/150">50/100/150</option>
            <option value="100/200/300">100/200/300</option>
        </select>
    )
  }
}
