// let retrive = async () => {
//   try {
//     let resolved = await fetch("https://jsonplaceholder.typicode.com/posts");
//     let data = await resolved.json();
//     console.log(data);
//     let li = `<ul>`;
//     data.forEach((value) => {
//       li += `<li>${value.id}</li>
//                 <li>${value.title}</li>`;
//     });
//     li += `</ul>`;
//   } catch (error) {
//     console.log(error);
//   }
//   document.getElementById("root").innerHTML = li;
// };

// 1) fetch https://jsonplaceholder.typicode.com/posts api snd display title in browser
console.log(
  "fetch https://jsonplaceholder.typicode.com/posts api snd display title in browser"
);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((resolved) => resolved.json())
//   .then((data) => {
//     console.log(data);

//     let li = `<ul>`;
//     data.forEach((value) => {
//       li += `<li> ${value.title}</li>`;
//     });
//     li += `</ul>`;
//     document.getElementById("root").innerHTML = li;
//   });

// 2)  3 Example to pass data parent component to child component
console.log("3 Example to pass data parent component to child component");
// Example01

// class Facebook extends React.Component {
//   render() {
//     let data = "faster open";
//     let data01 = "secure data";
//     return (
//       <div>
//         <h1>facebook</h1>
//         <UpdatedFB updated01={data} updated02={data01} />
//       </div>
//     );
//   }
// }

// class UpdatedFB extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1> Updated facebook</h1>
//         <h2>features Updated facebook {this.props.updated01} </h2>
//         <h2>features Updated facebook {this.props.updated02} </h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <div>
//     <Facebook />
//   </div>,
//   document.getElementById("root01")
// );

// Example02

class Amezon extends React.Component {
  render() {
    let data = ["mobiles", "laptops", "Tab"];
    return (
      <div>
        <h1>Amezon</h1>
        <UpadteAmezon data={data} />
      </div>
    );
  }
}

class UpadteAmezon extends React.Component {
  render() {
    return (
      <div>
        <h1>UpadteAmezon</h1>
        {this.props.data.map((val, inx) => {
          return <li key={inx}>{val}</li>;
        })}
      </div>
    );
  }
}

ReactDOM.render(
  <div>
    <Amezon />
  </div>,
  document.getElementById("root01")
);
