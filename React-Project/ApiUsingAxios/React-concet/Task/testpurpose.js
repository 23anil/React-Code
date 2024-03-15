function ConditionalRender() {
const [hotel, sethotel] = React.useState({
  admin:"yahoo",
  user:'lahoo',
  Id:"true"
})
  
let {admin,user,Id}=hotel
let renderdata=null;

if(Id){
  renderdata=(<div>
    <h1>{admin}</h1>
   <h2>Add Products</h2>
   <h3>Menu</h3>
  </div>)
}
else{
  renderdata=(<div>
    <h1>{user}</h1>
   <h2>Buy Products</h2>
   <h3>Menu</h3>
  </div>)
}
  let change=()=>{
    sethotel({
      ...hotel,
      Id: !hotel.Id
    })
  }

  return (
    <div>
      {renderdata}
      <button onClick={change}>change</button>
    </div>
  );
}

ReactDOM.render(<ConditionalRender/>,document.getElementById("Hotel01"))

