import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [hamDisplay, setHamDisplay] = useState("none");
  const [bgPosition, setBgPosition] = useState("");

  return (
    <div style={{ position: bgPosition }}>
      <Header
        setBgPosition={setBgPosition}
        hamDisplay={hamDisplay}
        setHamDisplay={setHamDisplay}
      />
      <Outlet hamDisplay={hamDisplay} setHamDisplay={setHamDisplay} />
    </div>
  );
}

export default App;
