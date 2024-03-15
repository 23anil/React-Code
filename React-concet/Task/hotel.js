function Hotel() {
  let [hotel, sethotel] = React.useState({
    adminname: "raju",
    username: "josef",
    isAdmin: true,
  });

  let { adminname, username, isAdmin } = hotel;
  let renderdata ;

  if (isAdmin) {
    renderdata = (
      <div>
        <h1>Admin Name:{adminname}</h1>
        <h2>Home</h2>
        <h2>Products</h2>
        <h2>Add Products</h2>
      </div>
    );
  } else {
    renderdata = (
      <div>
        <h1>User Name:{username}</h1>
        <h2>Home</h2>
        <h2>Products</h2>
      </div>
    );
  }

  let change = () => {
    sethotel({
      ...hotel,
      isAdmin: !hotel.isAdmin,
    });
  };
  return (
    <div>
      <h1>Hotel</h1>
      {renderdata}
      <button onClick={change}>
        {isAdmin ? "change User view" : "change Admin view"}
      </button>
    </div>
  );
}

ReactDOM.render(<Hotel />, document.getElementById("Hotel01"));
