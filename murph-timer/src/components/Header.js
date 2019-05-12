import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="row" style={wrapperStyle}>
            {/* TODO: Find way to host relative Paths */}
            <img  style={imgstyle} alt="murphlogo" src="https://cdn.shopify.com/s/files/1/1805/1385/t/67/assets/logo.png?9100"></img>
        </div>
      </div>
    )
  }
}


const wrapperStyle = {
    background: '#eee',
    color: '#fff',
    maxHeight: "100px",
    display: 'inline-block',
    position: 'relative',
    width: "100%",
    height: "200px",
    textAlign: 'center',
    margin: "0"
}

const imgstyle = {
    height: "100%",
}