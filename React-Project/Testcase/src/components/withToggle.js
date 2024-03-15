import React from 'react'

const withToggle = (PassedComponent) =>
  class WithToggle extends React.Component {
    state = {
      toggleStatus: false,
    }
    constructor() {
      super()
     this.toggle = this.toggle.bind(this);
    //   console.log("1st", this.toggle = this.toggle.bind(this));
    //   console.log("2nd",this.toggle);
    //   console.log("3rd", this.toggle.bind(this));
    //   // console.log("hiii");
    }
    toggle=()=> {
      console.log("hello");
      this.setState({
        toggleStatus: !this.state.toggleStatus
      })
    }
    render() {
      return (
        <PassedComponent
          {...this.props}
          toggle={this.toggle}
          toggleStatus={this.state.toggleStatus}
        />
      )
    }
  }
  
export default withToggle