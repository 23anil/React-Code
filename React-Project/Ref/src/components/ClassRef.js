import React, { Component } from 'react'
import { createRef } from 'react';

export class ClassRef extends Component {
  myref= createRef();
    // constructor(props){
    //     super(props);
        
    // }
componentDidMount(){
    this.myref.current.focus();
}
  render() {
    return (
      <div>
            Class Comp
<input ref={this.myref}/>
      </div>
    )
  }
}

export default ClassRef