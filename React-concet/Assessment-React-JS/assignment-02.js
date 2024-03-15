// 2 example for child to parent
console.log("1) 2 example for child to parent");
// Example01
// class App extends React.Component {
//   state = {
//     childgift: "",
//   };
//   getchange = (data) => {
//     console.log("data",data);
//     this.setState({
//       childgift: data,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h1>hello whatsapp !!!</h1>
//         <h2>features:{this.state.childgift}</h2>
//         <Update getchange={this.getchange} />
//       </div>
//     );
//   }
// }

// class Update extends React.Component {
//   render() {
//     let data = "faser responce";
//     return (
//       <div>
//         <h1>Update whatsapp !!!</h1>
//         <button
//           onClick={() => {
//             this.props.getchange(data);
//           }}
//         >
//           send gift
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// Example02

// class Mobile extends React.Component{
//     state={
//         update:"Not update"
//     }
//     updateMobile=(data)=>{
//         this.setState(
//             {
//                 update:data,
//             }
//         )
//     }
//     render(){
//         return(
//             <div>
//                 <h1>Hello Mobile !!!</h1>
//                 <h2>features:{this.state.update}</h2>
//                 <Upadte updateMobile={this.updateMobile} />
//             </div>
//         )
//     }
// }
// class Upadte extends React.Component{
//     render(){
//         let data="settings Upadted"
//         return(
//             <div>
//                 <h1>Hello Mobile !!!</h1>
//                 <button onClick={()=>{this.props.updateMobile(data)}}>changes</button>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Mobile />, document.getElementById("root"));

// Example 03
// class Parent extends React.Component {
//   state = {
//     data: "",
//   };

//   getparent = (sms) => {
//     this.setState({
//       data: sms,
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h1>Hii Child !!!</h1>
//         <h2>{this.state.data}</h2>
//         <Child getparent={this.getparent} />
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   render() {
//     let message ="hello parents !!!";
//     return (
//       <div>
//        <button onClick={()=>{this.props.getparent(message)}}>click change</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Parent />, document.getElementById("root"));

// example 04

class Ty extends React.Component{
  state = {
    data: "",
  };
  join = (data01) => {
    this.setState({
      data: data01,
    });
  };
  render() {
    return (
      <div>
        <h1>hello anil !!!</h1>
        <h2>{this.state.data}</h2> 
         <Emp join={this.join} />
      </div>
    );
  }
}

class Emp extends React.Component {
  render() {
    let sms = "Hello sir !!!";
    return (
      <div>
        <button
          onClick={() => {
            this.props.join(sms);
          }}
        >
          responce
        </button>
      </div>
    );
  }
}
ReactDOM.render(<Ty />, document.getElementById("root"));

// 2 example for parent to child
console.log("5 example for parent to child");

// example 01

// class Laptop extends React.Component{
//     render(){
//         let Updates=["faster responce","Quckly excution"]
//         return(
//             <div>
//                 <h1>I'M Laptop</h1>
//                 <UpdateLaptop  Updates={Updates} />
//             </div>
//         )
//     }
// }
// class UpdateLaptop extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>I'M UpdateLaptop</h1>
//                 {
//                     this.props.Updates.map((val)=>{
//                       return  <li>{val}</li>
//                     })
//                 }
//             </div>
//         )
//     }
// }

// ReactDOM.render(<Laptop />, document.getElementById("root"));

// example 02

// class Fan extends React.Component{
// render(){
//     let data="remote control and speach control"
//     return(
//         <div>
//             <h1>I'M Fan</h1>
//             <UpadteFan data={data}/>
//         </div>
//     )
// }
// }

// class UpadteFan extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>I'M Fan</h1>
//                 <li>{this.props.data}</li>
//             </div>
//         )
//     }
//     }

// ReactDOM.render(<Fan />, document.getElementById("root"));

// Example 03

// class Mobile extends React.Component {
//   render() {
//     let details = {
//       brand: "MI",
//       price: 15000,
//       mobile: "MI Note 7 pro",
//     };
//     // let data = "raju";
//     return (
//       <div>
//         <h1>Welcome to shop</h1>
//         {/* <Buyr data={data} /> */}
//         <Buyr details1={details} />
//       </div>
//     );
//   }
// }

// class Buyr extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>hello</h1>

//         {this.props.details1.}
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Mobile />, document.getElementById("root"));

// console.log("3 Example for conditional rendering");

// Example 01

// function Hotel() {
//   let [hotel, sethotel] = React.useState({
//     admin: "josef",
//     user: "mosef",
//     hoteltag: true,
//   });

//   let { admin, user, hoteltag } = hotel;

//   let getdata;
//   if (hoteltag) {
//     getdata = (
//       <div>
//         <h1>admin Login successfully</h1>
//         <h1>admin Name:{admin}</h1>
//         <h1>Home</h1>
//         <h1>Items</h1>
//         <h1>Add Items</h1>
//       </div>
//     );
//   } else {
//     getdata = (
//       <div>
//         <h1>User Login successfully</h1>
//         <h1>User Name:{user}</h1>
//         <h1>Home</h1>
//         <h1>Items</h1>
//         <h1>Buy Items</h1>
//       </div>
//     );
//   }

//   let change = () => {
//     sethotel({
//       ...hotel,
//       hoteltag: !hotel.hoteltag,
//     });
//   };
//   return (
//     <div>
//       <h1>Welcome to Hotel</h1>
//       {getdata}
//       <button onClick={change}>
//         {hoteltag ? "change to User" : "change to Admin"}
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(<Hotel />, document.getElementById("root"));

// Example 02

// function Bookhouse() {
//   let [books, setbooks] = React.useState({
//     buyer: "raju",
//     admin: "karthik",
//     Tag: true,
//   });
//   let { buyer, admin, Tag } = books;

//   let data;

//   if (Tag) {
//     data = (
//       <div>
//         <h1>User Login successfully</h1>
//         <h1>Buyer name:{buyer}</h1>
//         <h1>Home </h1>
//         <h1>Search Books Row</h1>
//         <h1>Buy Books</h1>
//       </div>
//     );
//   } else {
//     data = (
//       <div>
//         <h1>Admin Login successfully</h1>
//         <h1>admin name:{admin}</h1>
//         <h1>Home </h1>
//         <h1>Search Books Row</h1>
//         <h1>Add Books</h1>
//       </div>
//     );
//   }

//   let update = () => {
//     setbooks({
//       ...books,
//       Tag: !books.Tag,
//     });
//   };

//   return (
//     <div>
//       <h1>Wel Come To Bookhouse </h1>
//       {data}
//       <button onClick={update}>
//         {Tag ? "change to admin" : "change to buyer"}
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(<Bookhouse />, document.getElementById("root"));

// function Dmart() {
//   let [dmart, setdmart] = React.useState({
//     customer: "tom",
//     Owner: "gagan",
//     Id: true,
//   });

//   let { customer, Owner, Id } = dmart;
//   let data;
//   if (Id) {
//     data = (
//       <div>
//         <h1>User Login successfully</h1>
//         <h1>customer :{customer}</h1>
//         <h1>Check Products</h1>
//         <h1>buy Products</h1>
//       </div>
//     );
//   } else {
//     data = (
//       <div>
//         <h1>Admin Login successfully</h1>
//         <h1> Admin:{Owner}</h1>
//         <h1>Check Products</h1>
//         <h1>Add Products</h1>
//       </div>
//     );
//   }

//   let enter = () => {
//     setdmart({
//       ...dmart,
//       Id: !dmart.Id,
//     });
//   };

//   return (
//     <div>
//       <h1>Welcome to Dmart</h1>
//       {data}
//       <button onClick={enter}>{Id?"change to Adnim":"change to User"}</button>
//     </div>
//   );
// }

// ReactDOM.render(<Dmart />, document.getElementById("root"));
