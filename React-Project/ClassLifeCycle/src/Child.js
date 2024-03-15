import React, { Component } from 'react'

export class Child extends Component {
    componentWillUnmount(){
        console.log("componentWillUnmount executed");
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}

export default Child