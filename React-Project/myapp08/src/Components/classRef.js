import React, { Component, createRef } from 'react'

export class RefClass extends Component {
    myref=createRef();
    componentDidMount(){
        this.myref.current.focus();
    }
  render() {
    return (
      <div>
        <input ref={this.myref}/>
      </div>
    )
  }
}

export default RefClass