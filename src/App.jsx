import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [hamDisplay, setHamDisplay] = useState("none");
  return (
    <div>
      <Header hamDisplay={hamDisplay} setHamDisplay={setHamDisplay} />
      <Outlet hamDisplay={hamDisplay} setHamDisplay={setHamDisplay} />
    </div>
  );
}

export default App;
