import React, { PureComponent } from 'react'
/* 
when a class component is extending PureComponent
whenever state or props is changed in shouldComponentUpdate method
Shallow comparison of the state or props will be done and if at all if threre
are some changes in state or props the next lifecycle methods of updating pahse
will be executed i.e render(), getSnapshotBeforeUpdate(),componentDidUpadte()

else the next lifecycle methods of updating phase will not executed and render wiil be avoided

Note: it does shallow comparison not deep comparison
*/
export class RegComp extends PureComponent {
  render() {
    console.log("regComp Name :",this.props.uname);
    return (
      <div>
<h1>name in reg Comp{this.props.uname}</h1>
      </div>
    )
  }
}

export default RegComp