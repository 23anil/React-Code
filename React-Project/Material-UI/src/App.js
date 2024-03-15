import { Button } from "@mui/material";
import { useState } from "react";
import FirstMode from "./Components/FirstMode";
import SecondModel from "./Components/SecondModel";
import GridLayout from "./Components/GridLayout";
import CardEX from "./Components/CardEX";
import Navbar from "./Components/Navbar";
import ButtonsEX from "./Components/ButtonsEX";

function App() {
  // const [FMopen, setFMOpen] = useState(false);
  // const [SMopen, setSMopen] = useState(false);
  // const handleCloseFM = () => setFMOpen(false);
  // const handleCloseSM = () => setSMopen(false);
  return (
    <div className="App">
      {/* <Button
        variant="contained"
        onClick={() => {
          setFMOpen(true);
        }}
      >
        Model01
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          setSMopen(true);
        }}
      >
        Model02
      </Button>

      <FirstMode FMopen={FMopen} handleCloseFM={handleCloseFM} />
      <SecondModel SMopen={SMopen} handleCloseSM={handleCloseSM} /> */}
      {/* <GridLayout/> */}
      {/* <CardEX /> */}
      {/* <Navbar/> */}
      <ButtonsEX/>
    </div>
  );
}

export default App;
