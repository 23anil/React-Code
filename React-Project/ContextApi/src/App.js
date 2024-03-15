import { useState } from "react";
import CompA from "./components/CompA";
import { UserProvider } from "./context/context";
import { LoginProvider } from "./context/Logincontext";
import CompD from "./components/CompD";

function App() {
  const [recivedata, setrecivedata] = useState("");
  let getdataFromD = (childData) => {
    setrecivedata(childData);
    console.log(childData);
  };

  const [logindata] = useState({
    AdminName: "taco",
    password: "12345",
  });

  const [data, setdata] = useState("Anil");
  return (
    <div className="App">
      {/* data go to compA */}
      <UserProvider value={logindata}>
        <CompA data={data} />
      </UserProvider>

      <h2>data from child :{recivedata}</h2>

      {/* data go to compD */}
      <LoginProvider value={{ getdataFromD }}>
        <CompD />
      </LoginProvider>

      <button
        onClick={() => {
          setdata("Vijay");
        }}
      >
        change data
      </button>
    </div>
  );
}

export default App;
